/* =========================================================
   SITE CONFIG – Farben, Logos, Schrift, Bilder
   Keine externen Einbindungen, keine Schriftdateien:
   es werden immer Systemschriften verwendet.
   Das Stylesheet wird direkt im <head> der HTML-Seiten geladen.
   ========================================================= */
window.SITE_CONFIG = {

  brand: {
    name: "Morgenglut Filmproduktion",   // PLATZHALTER – Name bitte ersetzen
    email: "hallo@example.com"
  },

  /* ---------- Farbpalette (aus dem Moodboard abgeleitet) ---------- */
  colors: {
    background:     "#E8E4DC",  // helles Warmgrau (Hintergrund)
    paper:          "#D6CEB9",  // Kraftpapier-Beige
    terracotta:     "#BE4B2C",  // Hauptfarbe (Logo, Überschriften, Buttons)
    terracottaDark: "#8F3419",  // Hover / dunkle Akzente
    blue:           "#8FA9BD",  // Taubenblau (Akzentflächen)
    blueDark:       "#5F7C92",
    ink:            "#33261F",  // Fließtext
    cream:          "#FBF9F5"   // Text auf dunklen Flächen
  },

  /* ---------- Schriftarten: nur Systemschriften ----------
     heading: Handschrift-Look für Überschriften und Navigation.
              Es wird die erste auf dem Gerät vorhandene Schrift genutzt.
     body:    neutrale Systemschrift für Fließtext.            */
  fonts: {
    heading: "'Segoe Print', 'Bradley Hand', 'Marker Felt', 'Chalkboard SE', 'Comic Sans MS', 'Comic Neue', cursive",
    body:    "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  },

  /* ---------- Logo-Links ---------- */
  logos: {
    dark:    "assets/logo-terracotta.svg", // für helle Hintergründe (Header)
    light:   "assets/logo-cream.svg",      // für dunkle/farbige Hintergründe (Footer, Bänder)
    favicon: "assets/logo-terracotta.svg"
  },

  /* ---------- Bilder ----------
     Aktuell: lokal erzeugte Platzhalter (placeholder(...)).
     Später einfach durch eigene Dateien ersetzen, z. B. "assets/film1.jpg". */
  images: {}   // wird unten befüllt
};

/* ---------- Lokaler Platzhalterbild-Generator (SVG als Data-URI) ---------- */
function placeholder(w, h, bg, fg, label) {
  const s = Math.min(w, h) / 100;                 // Skalierung des Logo-Motivs
  const ox = (w - 100 * s) / 2, oy = (h - 100 * s) / 2;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">` +
      `<rect width="100%" height="100%" fill="${bg}"/>` +
      `<g transform="translate(${ox} ${oy}) scale(${s})" opacity=".35">` +
        `<g fill="none" stroke="${fg}" stroke-width="10">` +
          `<path d="M8 52V38L24 26V6"/><path d="M42 52V38L58 26V6"/><path d="M76 52V38L92 26V6"/>` +
        `</g>` +
        `<g fill="${fg}" fill-rule="evenodd">` +
          `<path d="M6 96A19 19 0 0 1 44 96Z M20 88a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z"/>` +
          `<path d="M46 96A19 19 0 0 1 84 96Z M60 88a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z"/>` +
        `</g>` +
      `</g>` +
      `<text x="50%" y="${h - 24}" text-anchor="middle" font-family="sans-serif" font-size="${Math.round(h / 28)}" fill="${fg}" opacity=".6">${label}</text>` +
    `</svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

(function buildImages() {
  const c = window.SITE_CONFIG.colors;
  const P = placeholder;
  window.SITE_CONFIG.images = {
    hero:  P(1920, 1080, c.terracottaDark, c.cream, "Platzhalter Hero"),
    about: P(900, 1100,  c.paper,          c.terracotta, "Platzhalter About"),
    films: [
      P(800, 1000, c.blue,       c.cream,          "Platzhalter Film 1"),
      P(800, 1000, c.paper,      c.terracotta,     "Platzhalter Film 2"),
      P(800, 1000, c.terracotta, c.cream,          "Platzhalter Film 3"),
      P(800, 1000, c.blueDark,   c.cream,          "Platzhalter Film 4"),
      P(800, 1000, c.background, c.terracotta,     "Platzhalter Film 5"),
      P(800, 1000, c.blue,       c.terracottaDark, "Platzhalter Film 6")
    ],
    team: [
      P(600, 800, c.paper,    c.terracotta, "Platzhalter Person 1"),
      P(600, 800, c.blue,     c.cream,      "Platzhalter Person 2"),
      P(600, 800, c.blueDark, c.cream,      "Platzhalter Person 3")
    ]
  };
})();

/* ---------- Theme anwenden (läuft im <head>) ---------- */
(function applyTheme() {
  const cfg = window.SITE_CONFIG;
  const c = cfg.colors;
  const f = cfg.fonts;
  const root = document.documentElement.style;

  root.setProperty("--background",      c.background);
  root.setProperty("--paper",           c.paper);
  root.setProperty("--terracotta",      c.terracotta);
  root.setProperty("--terracotta-dark", c.terracottaDark);
  root.setProperty("--blue",            c.blue);
  root.setProperty("--blue-dark",       c.blueDark);
  root.setProperty("--ink",             c.ink);
  root.setProperty("--cream",           c.cream);
  root.setProperty("--font-heading",    f.heading);
  root.setProperty("--font-body",       f.body);

  const icon = document.createElement("link");
  icon.rel = "icon";
  icon.type = "image/svg+xml";
  icon.href = cfg.logos.favicon;
  document.head.appendChild(icon);
})();
