(function () {
  'use strict';

  const CFG = window.SITE_CONFIG;
  const ALL = window.SITE_CONTENT;
  const page = document.body.dataset.page;

  const PAGES = [
    { key: 'home',    href: 'index.html' },
    { key: 'films',   href: 'filme.html' },
    { key: 'about',   href: 'about.html' },
    { key: 'imprint', href: 'impressum.html',  legal: true },
    { key: 'privacy', href: 'datenschutz.html', legal: true }
  ];

  /* ---------- Sprache ---------- */
  function getInitialLang() {
    try {
      const saved = localStorage.getItem('site-lang');
      if (saved === 'de' || saved === 'en') return saved;
    } catch (e) {}
    return (navigator.language || 'de').toLowerCase().startsWith('de') ? 'de' : 'en';
  }
  let lang = getInitialLang();
  let filter = 'all';

  /* ---------- Helfer ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const img = (src, alt = '', eager = false) =>
    src ? `<img src="${src}" alt="${alt}" ${eager ? '' : 'loading="lazy"'} onerror="this.remove()">` : '';
  const media = (src, alt, cls = '', eager = false) =>
    `<div class="media ${cls}">${img(src, alt, eager)}</div>`;
  const paragraphs = (arr) => arr.map(p => `<p>${p}</p>`).join('');

  /* ---------- Header ---------- */
  function headerHTML(t) {
    const open = document.body.classList.contains('menu-open');
    const link = (p) =>
      `<a href="${p.href}" class="${p.key === page ? 'is-active' : ''}" ${p.key === page ? 'aria-current="page"' : ''}>${t.nav[p.key]}</a>`;

    return `
      <div class="header__inner">
        <button class="lang-switch" data-action="toggle-lang" aria-label="${t.nav.langLabel}">
          <span class="${lang === 'de' ? 'is-active' : ''}">DE</span>
          <span class="lang-switch__sep">/</span>
          <span class="${lang === 'en' ? 'is-active' : ''}">EN</span>
        </button>

        <a class="brand" href="index.html">
          <img src="${CFG.logos.dark}" alt="" width="40" height="40">
          <span class="brand__name">${CFG.brand.name}</span>
        </a>

        <nav class="nav-desktop" aria-label="${t.nav.mainNav}">
          ${PAGES.filter(p => !p.legal).map(link).join('')}
        </nav>

        <button class="burger" data-action="toggle-menu"
                aria-expanded="${open}" aria-controls="mobile-menu"
                aria-label="${open ? t.nav.menuClose : t.nav.menuOpen}">
          <span></span><span></span><span></span>
        </button>
      </div>

      <nav id="mobile-menu" class="mobile-menu" aria-label="${t.nav.mainNav}">
        <div class="mobile-menu__main">
          ${PAGES.filter(p => !p.legal).map(link).join('')}
        </div>
        <div class="mobile-menu__legal">
          ${PAGES.filter(p => p.legal).map(link).join('')}
        </div>
        <img class="mobile-menu__logo" src="${CFG.logos.light}" alt="">
      </nav>`;
  }

  /* ---------- Footer ---------- */
  function footerHTML(t) {
    const year = new Date().getFullYear();
    return `
      <div class="container footer__grid">
        <div class="footer__brand">
          <img src="${CFG.logos.light}" alt="" width="64" height="64">
          <p class="footer__name">${CFG.brand.name}</p>
          <p>${t.footer.tagline}</p>
        </div>
        <div>
          <h3>${t.footer.contactTitle}</h3>
          <p>${t.footer.address}</p>
          <p><a href="mailto:${CFG.brand.email}">${CFG.brand.email}</a></p>
        </div>
        <div>
          <h3>Menü</h3>
          <ul class="footer__links">
            ${PAGES.map(p => `<li><a href="${p.href}">${t.nav[p.key]}</a></li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="container footer__bottom">
        <small>© ${year} ${CFG.brand.name}. ${t.footer.rights}</small>
      </div>`;
  }

  /* ---------- Bausteine ---------- */
  function filmCard(f, i, t) {
    const src = CFG.images.films[i % CFG.images.films.length];
    return `
      <article class="film-card reveal">
        ${media(src, f.title, 'media--poster')}
        <div class="film-card__body">
          <p class="film-card__meta">${f.year} · ${t.films.types[f.type]} · ${f.genre}</p>
          <h3>${f.title}</h3>
          <p>${f.logline}</p>
        </div>
      </article>`;
  }

  /* ---------- Seiten ---------- */
  const views = {
    home(t) {
      const h = t.home;
      return `
      <section class="hero">
        <div class="hero__media media">${img(CFG.images.hero, '', true)}</div>
        <div class="container hero__content">
          <p class="kicker">${h.hero.kicker}</p>
          <h1>${h.hero.title}</h1>
          <p class="hero__text">${h.hero.text}</p>
          <a class="btn btn--light" href="filme.html">${h.hero.cta}</a>
        </div>
      </section>

      <section class="section">
        <div class="container grid-2">
          <div class="reveal">
            <h2>${h.intro.title}</h2>
            ${paragraphs(h.intro.paragraphs)}
            <a class="btn" href="about.html">${h.intro.cta}</a>
          </div>
          <div class="reveal">${media(CFG.images.about, '', 'media--arch')}</div>
        </div>
      </section>

      <section class="section section--paper">
        <div class="container">
          <div class="section__head reveal">
            <h2>${h.featured.title}</h2>
            <a class="text-link" href="filme.html">${h.featured.all} →</a>
          </div>
          <div class="grid-3">
            ${t.films.items.slice(0, 3).map((f, i) => filmCard(f, i, t)).join('')}
          </div>
        </div>
      </section>

      <section class="band band--terracotta">
        <div class="container band__inner reveal">
          <img src="${CFG.logos.light}" alt="" width="72" height="72">
          <blockquote>${h.quote.text}</blockquote>
          <p>${h.quote.cite}</p>
        </div>
      </section>

      <section class="band band--blue">
        <div class="container band__inner reveal">
          <h2>${h.contact.title}</h2>
          <p>${h.contact.text}</p>
          <a class="btn" href="mailto:${CFG.brand.email}">${h.contact.cta}</a>
        </div>
      </section>`;
    },

    films(t) {
      const f = t.films;
      const types = ['all', 'feature', 'documentary', 'short'];
      const list = f.items
        .map((item, i) => ({ item, i }))
        .filter(({ item }) => filter === 'all' || item.type === filter);
      return `
      <section class="page-head">
        <div class="container">
          <h1>${f.title}</h1>
          <p class="lead">${f.intro}</p>
          <div class="chips" role="group">
            ${types.map(k => `
              <button class="chip ${filter === k ? 'is-active' : ''}" data-action="filter" data-value="${k}" aria-pressed="${filter === k}">
                ${f.filters[k]}
              </button>`).join('')}
          </div>
        </div>
      </section>
      <section class="section section--tight">
        <div class="container grid-3">
          ${list.length
            ? list.map(({ item, i }) => filmCard(item, i, t)).join('')
            : `<p>${f.empty}</p>`}
        </div>
      </section>`;
    },

    about(t) {
      const a = t.about;
      return `
      <section class="page-head">
        <div class="container">
          <h1>${a.title}</h1>
          <p class="lead">${a.intro}</p>
        </div>
      </section>

      <section class="section section--tight">
        <div class="container grid-2">
          <div class="reveal">${media(CFG.images.about, '', 'media--arch')}</div>
          <div class="reveal">
            <h2>${a.story.title}</h2>
            ${paragraphs(a.story.paragraphs)}
          </div>
        </div>
      </section>

      <section class="section section--paper">
        <div class="container">
          <h2 class="reveal">${a.values.title}</h2>
          <div class="grid-3">
            ${a.values.items.map(v => `
              <div class="value reveal">
                <h3>${v.title}</h3>
                <p>${v.text}</p>
              </div>`).join('')}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="reveal">${a.team.title}</h2>
          <div class="grid-3">
            ${a.team.members.map((m, i) => `
              <div class="member reveal">
                ${media(CFG.images.team[i % CFG.images.team.length], m.name, 'media--arch')}
                <h3>${m.name}</h3>
                <p class="member__role">${m.role}</p>
                <p>${m.text}</p>
              </div>`).join('')}
          </div>
        </div>
      </section>`;
    },

    imprint(t) { return legalView(t.imprint); },
    privacy(t) { return legalView(t.privacy); }
  };

  function legalView(d) {
    return `
      <section class="page-head">
        <div class="container">
          <h1>${d.title}</h1>
          <p class="note">${d.note}</p>
        </div>
      </section>
      <section class="section section--tight">
        <div class="container legal">
          ${d.sections.map(s => `<div class="legal__block"><h2>${s.h}</h2>${paragraphs(s.p)}</div>`).join('')}
        </div>
      </section>`;
  }

  /* ---------- Rendern ---------- */
  function render(instant) {
    const t = ALL[lang];
    document.documentElement.lang = lang;
    document.title = `${t.pages[page].title} – ${CFG.brand.name}`;

    const metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.pages[page].description || '');

    $('#site-header').innerHTML = headerHTML(t);
    $('#main').innerHTML = views[page](t);
    $('#site-footer').innerHTML = footerHTML(t);
    observeReveal(instant);
  }

  /* ---------- Scroll-Animation ---------- */
  function observeReveal(instant) {
    const els = document.querySelectorAll('.reveal');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (instant || reduce || !('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  }

  /* ---------- Menü ---------- */
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    const btn = $('.burger');
    if (btn) {
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? ALL[lang].nav.menuClose : ALL[lang].nav.menuOpen);
    }
  }

  /* ---------- Events (Delegation) ---------- */
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-action]');
    if (el) {
      const action = el.dataset.action;
      if (action === 'toggle-lang') {
        lang = lang === 'de' ? 'en' : 'de';
        try { localStorage.setItem('site-lang', lang); } catch (err) {}
        render(true);
      } else if (action === 'toggle-menu') {
        setMenu(!document.body.classList.contains('menu-open'));
      } else if (action === 'filter') {
        filter = el.dataset.value;
        render(true);
      }
      return;
    }
    if (e.target.closest('.mobile-menu a')) setMenu(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
      setMenu(false);
      const btn = $('.burger'); if (btn) btn.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && document.body.classList.contains('menu-open')) setMenu(false);
  });

  render();
})();
