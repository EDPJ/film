/* =========================================================
   SITE CONFIG – Farben, Logos, Schrift, Bilder
   Alles Wichtige für das Erscheinungsbild steht hier.
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

  /* ---------- Schriftarten ---------- */
  fonts: {
    heading: "'Patrick Hand SC', 'Comic Sans MS', cursive",       // handgezeichnet, Kapitälchen
    body:    "'Karla', system-ui, -apple-system, 'Segoe UI', sans-serif",
    // Alternativen für den Handschrift-Look: "Gaegu", "Short Stack", "Kalam"
    // DSGVO-Hinweis: Schriften besser selbst hosten (z. B. über google-webfonts-helper)
    // und diese URL durch lokale @font-face-Regeln ersetzen.
    googleUrl: "https://fonts.googleapis.com/css2?family=Karla:wght@400;600&family=Patrick+Hand+SC&display=swap"
  },

  /* ---------- Logo-Links ---------- */
  logos: {
    dark:    "assets/logo-terracotta.svg", // für helle Hintergründe (Header)
    light:   "assets/logo-cream.svg",      // für dunkle/farbige Hintergründe (Footer, Bänder)
    favicon: "assets/logo-terracotta.svg"
  },

  /* ---------- Platzhalterbilder (später durch eigene ersetzen) ---------- */
  images: {
    hero:  "https://picsum.photos/seed/glut-hero/1920/1080",
    about: "https://picsum.photos/seed/glut-about/900/1100",
    films: [
      "https://picsum.photos/seed/glut-film1/800/1000",
      "https://picsum.photos/seed/glut-film2/800/1000",
      "https://picsum.photos/seed/glut-film3/800/1000",
      "https://picsum.photos/seed/glut-film4/800/1000",
      "https://picsum.photos/seed/glut-film5/800/1000",
      "https://picsum.photos/seed/glut-film6/800/1000"
    ],
    team: [
      "https://picsum.photos/seed/glut-team1/600/800",
      "https://picsum.photos/seed/glut-team2/600/800",
      "https://picsum.photos/seed/glut-team3/600/800"
    ]
  }
};

/* ---------- Theme sofort anwenden (läuft im <head>, kein Flackern) ---------- */
(function applyTheme() {
  const c = window.SITE_CONFIG.colors;
  const f = window.SITE_CONFIG.fonts;
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

  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "css/style.css";
  document.head.appendChild(css);

  if (f.googleUrl) {
    const font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = f.googleUrl;
    document.head.appendChild(font);
  }

  const icon = document.createElement("link");
  icon.rel = "icon";
  icon.type = "image/svg+xml";
  icon.href = window.SITE_CONFIG.logos.favicon;
  document.head.appendChild(icon);
})();
