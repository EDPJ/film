/* =========================================================
   MAIN – baut Header, Inhalt und Footer aus config.js + content.js
   ========================================================= */
(function () {
  "use strict";

  var cfg = window.SITE_CONFIG;
  var all = window.SITE_CONTENT;
  var page = document.body.getAttribute("data-page") || "home";
  var app = document.getElementById("app");

  var FILES = {
    home: "index.html",
    films: "filme.html",
    about: "about.html",
    imprint: "impressum.html",
    privacy: "datenschutz.html"
  };

  var lang = loadLang();
  var filter = "all";

  /* ---------- Sprache ---------- */
  function loadLang() {
    try {
      var saved = localStorage.getItem("lang");
      if (saved === "de" || saved === "en") return saved;
    } catch (e) {}
    return (navigator.language || "de").toLowerCase().indexOf("de") === 0 ? "de" : "en";
  }
  function saveLang(l) {
    try { localStorage.setItem("lang", l); } catch (e) {}
  }

  /* ---------- Hilfsfunktionen ---------- */
  function navLink(t, key) {
    var active = key === page;
    return '<a href="' + FILES[key] + '"' +
      (active ? ' class="is-active" aria-current="page"' : "") + ">" +
      t.nav[key] + "</a>";
  }

  function paragraphs(arr) {
    return arr.map(function (p) { return "<p>" + p + "</p>"; }).join("");
  }

  /* ---------- Header & mobiles Menü ---------- */
  function headerHtml(t) {
    return '' +
      '<a class="skip-link" href="#main">' + t.nav.skip + '</a>' +
      '<header class="site-header"><div class="header__inner">' +
        '<button class="lang-switch" type="button" aria-label="' + t.nav.langLabel + '">' +
          '<span class="' + (lang === "de" ? "is-active" : "") + '">DE</span>' +
          '<span class="lang-switch__sep">|</span>' +
          '<span class="' + (lang === "en" ? "is-active" : "") + '">EN</span>' +
        '</button>' +
        '<a class="brand" href="index.html"><img src="' + cfg.logos.dark + '" alt="">' +
          '<span class="brand__name">' + cfg.brand.name + '</span></a>' +
        '<nav class="nav-desktop" aria-label="' + t.nav.mainNav + '">' +
          navLink(t, "home") + navLink(t, "films") + navLink(t, "about") +
        '</nav>' +
        '<button class="burger" type="button" aria-label="' + t.nav.menuOpen + '" aria-expanded="false" aria-controls="mobile-menu">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div></header>' +
      '<div class="mobile-menu" id="mobile-menu">' +
        '<nav class="mobile-menu__main" aria-label="' + t.nav.mainNav + '">' +
          navLink(t, "home") + navLink(t, "films") + navLink(t, "about") +
        '</nav>' +
        '<div class="mobile-menu__legal">' + navLink(t, "imprint") + navLink(t, "privacy") + '</div>' +
        '<img class="mobile-menu__logo" src="' + cfg.logos.light + '" alt="">' +
      '</div>';
  }

  /* ---------- Footer (nur Marke, Kontakt, Impressum + Datenschutz) ---------- */
  function footerHtml(t) {
    var f = t.footer;
    return '' +
      '<footer class="site-footer"><div class="container">' +
        '<div class="footer__grid">' +
          '<div class="footer__brand">' +
            '<img src="' + cfg.logos.light + '" alt="" width="56">' +
            '<div class="footer__name">' + cfg.brand.name + '</div>' +
            '<p>' + f.tagline + '</p>' +
          '</div>' +
          '<div>' +
            '<h3>' + f.contactTitle + '</h3>' +
            '<p>' + f.address + '</p>' +
            '<p><a href="mailto:' + cfg.brand.email + '">' + cfg.brand.email + '</a></p>' +
          '</div>' +
          '<div>' +
            '<h3>' + f.legalTitle + '</h3>' +
            '<ul class="footer__links">' +
              '<li><a href="' + FILES.imprint + '">' + t.nav.imprint + '</a></li>' +
              '<li><a href="' + FILES.privacy + '">' + t.nav.privacy + '</a></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="footer__bottom">© ' + new Date().getFullYear() + ' ' + cfg.brand.name + '. ' + f.rights + '</div>' +
      '</div></footer>';
  }

  /* ---------- Seiten ---------- */
  function homeHtml(t) {
    var h = t.home;
    return '' +
      '<section class="hero">' +
        '<div class="media hero__media"><img src="' + cfg.images.hero + '" alt=""></div>' +
        '<div class="container hero__content">' +
          '<p class="kicker">' + h.hero.kicker + '</p>' +
          '<h1>' + h.hero.title + '</h1>' +
          '<p class="hero__text">' + h.hero.text + '</p>' +
          '<a class="btn btn--light" href="' + FILES.films + '">' + h.hero.cta + '</a>' +
        '</div>' +
      '</section>' +

      '<section class="section"><div class="container grid-2">' +
        '<div class="reveal">' +
          '<h2>' + h.intro.title + '</h2>' +
          paragraphs(h.intro.paragraphs) +
          '<a class="btn" href="' + FILES.about + '">' + h.intro.cta + '</a>' +
        '</div>' +
        '<div class="media media--arch reveal"><img src="' + cfg.images.about + '" alt=""></div>' +
      '</div></section>' +

      '<section class="band band--terracotta"><div class="container band__inner reveal">' +
        '<img src="' + cfg.logos.light + '" alt="" width="56">' +
        '<blockquote>' + h.quote.text + '</blockquote>' +
        '<p>' + h.quote.cite + '</p>' +
      '</div></section>' +

      '<section class="band band--blue"><div class="container band__inner reveal">' +
        '<h2>' + h.contact.title + '</h2>' +
        '<p>' + h.contact.text + '</p>' +
        '<a class="btn btn--light" style="margin-top:1.5rem" href="mailto:' + cfg.brand.email + '">' + h.contact.cta + '</a>' +
      '</div></section>';
  }

  function filmCardsHtml(t) {
    var items = t.films.items
      .map(function (it, i) { return { it: it, i: i }; })
      .filter(function (o) { return filter === "all" || o.it.type === filter; });

    if (!items.length) return '<p>' + t.films.empty + '</p>';

    return items.map(function (o) {
      var it = o.it;
      return '' +
        '<article class="film-card reveal">' +
          '<div class="media media--poster"><img src="' + cfg.images.films[o.i] + '" alt="' + it.title + '" loading="lazy"></div>' +
          '<div class="film-card__body">' +
            '<p class="film-card__meta">' + t.films.types[it.type] + ' · ' + it.year + ' · ' + it.genre + '</p>' +
            '<h3>' + it.title + '</h3>' +
            '<p>' + it.logline + '</p>' +
          '</div>' +
        '</article>';
    }).join("");
  }

  function chipsHtml(t) {
    return ["all", "feature", "documentary", "short"].map(function (k) {
      return '<button class="chip' + (filter === k ? " is-active" : "") + '" type="button" data-filter="' + k + '">' + t.films.filters[k] + '</button>';
    }).join("");
  }

  function filmsHtml(t) {
    return '' +
      '<section class="page-head"><div class="container">' +
        '<h1>' + t.films.title + '</h1>' +
        '<p class="lead">' + t.films.intro + '</p>' +
        '<div class="chips" id="chips">' + chipsHtml(t) + '</div>' +
      '</div></section>' +
      '<section class="section section--tight"><div class="container">' +
        '<div class="grid-3" id="film-grid">' + filmCardsHtml(t) + '</div>' +
      '</div></section>';
  }

  function aboutHtml(t) {
    var a = t.about;
    var values = a.values.items.map(function (v) {
      return '<div class="value reveal"><h3>' + v.title + '</h3><p>' + v.text + '</p></div>';
    }).join("");
    var members = a.team.members.map(function (m, i) {
      return '' +
        '<div class="member reveal">' +
          '<div class="media media--poster"><img src="' + cfg.images.team[i] + '" alt="' + m.name + '" loading="lazy"></div>' +
          '<h3>' + m.name + '</h3>' +
          '<p class="member__role">' + m.role + '</p>' +
          '<p>' + m.text + '</p>' +
        '</div>';
    }).join("");

    return '' +
      '<section class="page-head"><div class="container">' +
        '<h1>' + a.title + '</h1>' +
        '<p class="lead">' + a.intro + '</p>' +
      '</div></section>' +

      '<section class="section section--tight"><div class="container grid-2">' +
        '<div class="reveal"><h2>' + a.story.title + '</h2>' + paragraphs(a.story.paragraphs) + '</div>' +
        '<div class="media media--arch reveal"><img src="' + cfg.images.about + '" alt=""></div>' +
      '</div></section>' +

      '<section class="section section--paper"><div class="container">' +
        '<h2>' + a.values.title + '</h2>' +
        '<div class="grid-3">' + values + '</div>' +
      '</div></section>' +

      '<section class="section"><div class="container">' +
        '<h2>' + a.team.title + '</h2>' +
        '<div class="grid-3">' + members + '</div>' +
      '</div></section>';
  }

  function legalHtml(data) {
    var blocks = data.sections.map(function (s) {
      return '<div class="legal__block"><h2>' + s.h + '</h2>' + paragraphs(s.p) + '</div>';
    }).join("");
    return '' +
      '<section class="page-head"><div class="container"><h1>' + data.title + '</h1></div></section>' +
      '<section class="section section--tight"><div class="container legal">' + blocks + '</div></section>';
  }

  function pageHtml(t) {
    switch (page) {
      case "films":   return filmsHtml(t);
      case "about":   return aboutHtml(t);
      case "imprint": return legalHtml(t.imprint);
      case "privacy": return legalHtml(t.privacy);
      default:        return homeHtml(t);
    }
  }

  /* ---------- Menü ---------- */
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    var burger = app.querySelector(".burger");
    if (burger) {
      var t = all[lang];
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? t.nav.menuClose : t.nav.menuOpen);
    }
  }

  /* ---------- Scroll-Animation ---------- */
  var observer = null;
  function reveal() {
    var els = app.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add("is-visible"); });
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0.12 });
    }
    Array.prototype.forEach.call(els, function (el) { observer.observe(el); });
  }

  /* ---------- Events ---------- */
  function bind() {
    var sw = app.querySelector(".lang-switch");
    if (sw) sw.addEventListener("click", function () {
      lang = lang === "de" ? "en" : "de";
      saveLang(lang);
      render();
    });

    var burger = app.querySelector(".burger");
    if (burger) burger.addEventListener("click", function () {
      setMenu(!document.body.classList.contains("menu-open"));
    });

    Array.prototype.forEach.call(app.querySelectorAll(".mobile-menu a"), function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });

    var chips = app.querySelector("#chips");
    if (chips) chips.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-filter]");
      if (!btn) return;
      filter = btn.getAttribute("data-filter");
      var t = all[lang];
      chips.innerHTML = chipsHtml(t);
      app.querySelector("#film-grid").innerHTML = filmCardsHtml(t);
      reveal();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  /* ---------- Rendern ---------- */
  function render() {
    var t = all[lang];
    document.documentElement.lang = lang;
    document.body.classList.remove("menu-open");

    var meta = t.pages[page] || t.pages.home;
    document.title = meta.title + " – " + cfg.brand.name;

    var desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", meta.description || "");

    app.innerHTML = headerHtml(t) + '<main id="main">' + pageHtml(t) + '</main>' + footerHtml(t);
    bind();
    reveal();
  }

  render();
})();
