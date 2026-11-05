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
  function navLink(t, key, extraClass) {
    var active = key === page;
    return '<a href="' + FILES[key] + '"' +
      (extraClass || active ? ' class="' + [extraClass, active ? "is-active" : ""].join(" ").trim() + '"' : "") +
      (active ? ' aria-current="page"' : "") + ">" + t.nav[key] + "</a>";
  }

  function paragraphs(arr) {
    return arr.map(function (p) { return "<p>" + p + "</p>"; }).join("");
  }

  /* ---------- Header & Mobiles Menü ---------- */
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

  /* ---------- Footer (nur Impressum + Datenschutz) ---------- */
  function footerHtml(t) {
    var f = t.footer;
    return '' +
      '<footer class="site-footer"><div class="container">' +
        '<div class="footer__grid">' +
          '<div class="footer__brand">' +
            '<img src="' + cfg.logos.
