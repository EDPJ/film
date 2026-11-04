/* =========================================================
   SITE CONTENT – alle Texte (Platzhalter) in DE und EN
   Hinweis: Die Reihenfolge der Filme/Team-Mitglieder muss in
   beiden Sprachen gleich sein (Bilder werden per Index zugeordnet).
   ========================================================= */
window.SITE_CONTENT = {

  /* ======================= DEUTSCH ======================= */
  de: {
    pages: {
      home:    { title: "Startseite",  description: "Platzhalter: Unabhängige Filmproduktion für Spiel- und Dokumentarfilme." },
      films:   { title: "Filme",       description: "Platzhalter: Unsere Spielfilme, Dokumentarfilme und Kurzfilme." },
      about:   { title: "About Us",    description: "Platzhalter: Über unser Team und unsere Arbeitsweise." },
      imprint: { title: "Impressum",   description: "" },
      privacy: { title: "Datenschutz", description: "" }
    },
    nav: {
      home: "Startseite", films: "Filme", about: "About Us",
      imprint: "Impressum", privacy: "Datenschutz",
      menuOpen: "Menü öffnen", menuClose: "Menü schließen",
      langLabel: "Sprache wechseln zu Englisch", mainNav: "Hauptnavigation"
    },
    home: {
      hero: {
        kicker: "Filmproduktion · Platzhalterstadt",
        title: "Geschichten, die warm werden",
        text: "Platzhaltertext: Wir entwickeln und produzieren Filme mit Haltung, Humor und Herz – vom ersten Funken bis zur Premiere.",
        cta: "Unsere Filme"
      },
      intro: {
        title: "Wir machen Filme mit Wärme",
        paragraphs: [
          "Platzhaltertext: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Platzhaltertext: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ],
        cta: "Mehr über uns"
      },
      featured: { title: "Ausgewählte Filme", all: "Alle Filme ansehen" },
      quote: {
        text: "„Platzhalterzitat: Ein guter Film wärmt noch lange nach dem Abspann.“",
        cite: "– Platzhalter-Name, Festivaljury"
      },
      contact: {
        title: "Lass uns reden",
        text: "Platzhaltertext: Du hast eine Idee, ein Drehbuch oder eine Frage? Wir freuen uns auf deine Nachricht.",
        cta: "E-Mail schreiben"
      }
    },
    films: {
      title: "Filme",
      intro: "Platzhaltertext: Eine Auswahl unserer Produktionen – von kleinen Kurzfilmen bis zu langen Erzählungen.",
      filters: { all: "Alle", feature: "Spielfilm", documentary: "Dokumentarfilm", short: "Kurzfilm" },
      types:   { feature: "Spielfilm", documentary: "Dokumentarfilm", short: "Kurzfilm" },
      empty: "Keine Filme in dieser Kategorie.",
      items: [
        { title: "Filmtitel Eins",  year: "2025", type: "feature",     genre: "Drama",     logline: "Platzhalter: Eine Familie, ein Sommer und ein Geheimnis, das nicht länger schweigen will." },
        { title: "Filmtitel Zwei",  year: "2024", type: "documentary", genre: "Dokumentation", logline: "Platzhalter: Ein Porträt über Menschen, die ihren Alltag mit Humor meistern." },
        { title: "Filmtitel Drei",  year: "2024", type: "short",       genre: "Komödie",   logline: "Platzhalter: Ein Missverständnis wächst sich in fünfzehn Minuten zum Chaos aus." },
        { title: "Filmtitel Vier",  year: "2023", type: "feature",     genre: "Roadmovie", logline: "Platzhalter: Zwei Fremde, ein kaputter Bus und eine Reise ohne Ziel." },
        { title: "Filmtitel Fünf",  year: "2022", type: "documentary", genre: "Gesellschaft", logline: "Platzhalter: Ein Dorf zwischen Aufbruch und Abschied." },
        { title: "Filmtitel Sechs", year: "2021", type: "short",       genre: "Experimentell", logline: "Platzhalter: Bilder, Klänge und Erinnerungen in einer einzigen Einstellung." }
      ]
    },
    about: {
      title: "About Us",
      intro: "Platzhaltertext: Wir sind ein kleines, unabhängiges Team aus Produzent:innen, Autor:innen und Filmemacher:innen.",
      story: {
        title: "Unsere Geschichte",
        paragraphs: [
          "Platzhaltertext: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
          "Platzhaltertext: Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum."
        ]
      },
      values: {
        title: "Wofür wir stehen",
        items: [
          { title: "Haltung",  text: "Platzhaltertext: Wir erzählen Geschichten, die etwas wollen." },
          { title: "Nähe",     text: "Platzhaltertext: Wir arbeiten auf Augenhöhe mit Menschen vor und hinter der Kamera." },
          { title: "Handwerk", text: "Platzhaltertext: Wir nehmen uns Zeit für Details, Material und Klang." }
        ]
      },
      team: {
        title: "Das Team",
        members: [
          { name: "Vorname Nachname", role: "Produktion",     text: "Platzhaltertext: Kurzbiografie in ein bis zwei Sätzen." },
          { name: "Vorname Nachname", role: "Regie & Buch",   text: "Platzhaltertext: Kurzbiografie in ein bis zwei Sätzen." },
          { name: "Vorname Nachname", role: "Postproduktion", text: "Platzhaltertext: Kurzbiografie in ein bis zwei Sätzen." }
        ]
      }
    },
    imprint: {
      title: "Impressum",
      note: "Platzhalter – bitte durch die echten Angaben ersetzen und rechtlich prüfen lassen.",
      sections: [
        { h: "Angaben gemäß § 5 DDG", p: ["Morgenglut Filmproduktion GmbH (Platzhalter)<br>Musterstraße 1<br>12345 Musterstadt<br>Deutschland"] },
        { h: "Vertreten durch", p: ["Vorname Nachname, Geschäftsführung"] },
        { h: "Kontakt", p: ["Telefon: +49 (0) 123 456789<br>E-Mail: hallo@example.com"] },
        { h: "Registereintrag", p: ["Eintragung im Handelsregister.<br>Registergericht: Amtsgericht Musterstadt<br>Registernummer: HRB 00000"] },
        { h: "Umsatzsteuer-ID", p: ["Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE000000000"] },
        { h: "Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)", p: ["Vorname Nachname, Anschrift wie oben"] },
        { h: "Haftung für Inhalte", p: ["Platzhaltertext: Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich."] },
        { h: "Haftung für Links", p: ["Platzhaltertext: Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben."] },
        { h: "Urheberrecht", p: ["Platzhaltertext: Die durch die Seitenbetreiber erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht."] }
      ]
    },
    privacy: {
      title: "Datenschutzerklärung",
      note: "Platzhalter – bitte an die tatsächliche Nutzung anpassen und rechtlich prüfen lassen.",
      sections: [
        { h: "1. Verantwortlicher", p: ["Morgenglut Filmproduktion GmbH (Platzhalter), Musterstraße 1, 12345 Musterstadt, E-Mail: hallo@example.com"] },
        { h: "2. Hosting und Server-Logfiles", p: ["Platzhaltertext: Beim Aufruf dieser Website werden automatisch Informationen (z. B. IP-Adresse, Datum, Uhrzeit, aufgerufene Seite) in Server-Logfiles gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO."] },
        { h: "3. Schriftarten", p: ["Platzhaltertext: Diese Website verwendet Schriftarten. Werden sie von externen Servern geladen, wird dabei die IP-Adresse übertragen. Empfohlen: Schriftarten lokal einbinden."] },
        { h: "4. Platzhalterbilder", p: ["Platzhaltertext: Während der Entwicklung werden Platzhalterbilder von einem externen Dienst geladen. Diese sollten vor dem Livegang durch eigene Bilder ersetzt werden."] },
        { h: "5. Spracheinstellung", p: ["Deine gewählte Sprache wird lokal in deinem Browser (localStorage) gespeichert. Es werden keine Daten an uns übertragen."] },
        { h: "6. Kontaktaufnahme", p: ["Platzhaltertext: Wenn du uns per E-Mail kontaktierst, speichern wir deine Angaben zur Bearbeitung deiner Anfrage."] },
        { h: "7. Deine Rechte", p: ["Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren."] }
      ]
    },
    footer: {
      tagline: "Unabhängige Filmproduktion",
      contactTitle: "Kontakt",
      address: "Musterstraße 1<br>12345 Musterstadt",
      rights: "Alle Rechte vorbehalten."
    }
  },

  /* ======================= ENGLISH ======================= */
  en: {
    pages: {
      home:    { title: "Home",           description: "Placeholder: Independent production company for feature and documentary films." },
      films:   { title: "Films",          description: "Placeholder: Our feature films, documentaries and shorts." },
      about:   { title: "About Us",       description: "Placeholder: About our team and the way we work." },
      imprint: { title: "Legal Notice",   description: "" },
      privacy: { title: "Privacy Policy", description: "" }
    },
    nav: {
      home: "Home", films: "Films", about: "About Us",
      imprint: "Legal Notice", privacy: "Privacy Policy",
      menuOpen: "Open menu", menuClose: "Close menu",
      langLabel: "Switch language to German", mainNav: "Main navigation"
    },
    home: {
      hero: {
        kicker: "Film production · Placeholder City",
        title: "Stories that warm you up",
        text: "Placeholder text: We develop and produce films with attitude, humour and heart – from the first spark to the premiere.",
        cta: "Our films"
      },
      intro: {
        title: "We make films with warmth",
        paragraphs: [
          "Placeholder text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Placeholder text: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ],
        cta: "More about us"
      },
      featured: { title: "Selected films", all: "View all films" },
      quote: {
        text: "“Placeholder quote: A good film keeps you warm long after the credits roll.”",
        cite: "– Placeholder Name, festival jury"
      },
      contact: {
        title: "Let's talk",
        text: "Placeholder text: Do you have an idea, a script or a question? We'd love to hear from you.",
        cta: "Send an email"
      }
    },
    films: {
      title: "Films",
      intro: "Placeholder text: A selection of our productions – from small shorts to long-form storytelling.",
      filters: { all: "All", feature: "Feature", documentary: "Documentary", short: "Short" },
      types:   { feature: "Feature", documentary: "Documentary", short: "Short" },
      empty: "No films in this category.",
      items: [
        { title: "Film Title One",   year: "2025", type: "feature",     genre: "Drama",       logline: "Placeholder: A family, a summer and a secret that refuses to stay silent." },
        { title: "Film Title Two",   year: "2024", type: "documentary", genre: "Documentary", logline: "Placeholder: A portrait of people who meet everyday life with humour." },
        { title: "Film Title Three", year: "2024", type: "short",       genre: "Comedy",      logline: "Placeholder: A misunderstanding grows into chaos within fifteen minutes." },
        { title: "Film Title Four",  year: "2023", type: "feature",     genre: "Road movie",  logline: "Placeholder: Two strangers, a broken-down bus and a journey without a destination." },
        { title: "Film Title Five",  year: "2022", type: "documentary", genre: "Society",     logline: "Placeholder: A village between new beginnings and farewells." },
        { title: "Film Title Six",   year: "2021", type: "short",       genre: "Experimental", logline: "Placeholder: Images, sounds and memories in a single shot." }
      ]
    },
    about: {
      title: "About Us",
      intro: "Placeholder text: We are a small, independent team of producers, writers and filmmakers.",
      story: {
        title: "Our story",
        paragraphs: [
          "Placeholder text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
          "Placeholder text: Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum."
        ]
      },
      values: {
        title: "What we stand for",
        items: [
          { title: "Attitude",    text: "Placeholder text: We tell stories that want something." },
          { title: "Closeness",   text: "Placeholder text: We work as equals with people in front of and behind the camera." },
          { title: "Craftsmanship", text: "Placeholder text: We take time for details, texture and sound." }
        ]
      },
      team: {
        title: "The team",
        members: [
          { name: "First Last", role: "Production",      text: "Placeholder text: Short bio in one or two sentences." },
          { name: "First Last", role: "Direction & Writing", text: "Placeholder text: Short bio in one or two sentences." },
          { name: "First Last", role: "Post-production", text: "Placeholder text: Short bio in one or two sentences." }
        ]
      }
    },
    imprint: {
      title: "Legal Notice",
      note: "Placeholder – please replace with your real details and have them legally reviewed.",
      sections: [
        { h: "Information pursuant to § 5 DDG", p: ["Morgenglut Filmproduktion GmbH (placeholder)<br>Musterstrasse 1<br>12345 Musterstadt<br>Germany"] },
        { h: "Represented by", p: ["First Last, Managing Director"] },
        { h: "Contact", p: ["Phone: +49 (0) 123 456789<br>Email: hallo@example.com"] },
        { h: "Commercial register", p: ["Entry in the commercial register.<br>Court: Local Court Musterstadt<br>Register number: HRB 00000"] },
        { h: "VAT ID", p: ["VAT identification number pursuant to § 27a UStG: DE000000000"] },
        { h: "Responsible for content (§ 18 (2) MStV)", p: ["First Last, address as above"] },
        { h: "Liability for content", p: ["Placeholder text: As a service provider we are responsible for our own content on these pages in accordance with general laws."] },
        { h: "Liability for links", p: ["Placeholder text: Our site may contain links to external third-party websites over whose content we have no influence."] },
        { h: "Copyright", p: ["Placeholder text: The content and works created by the site operators are subject to German copyright law."] }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      note: "Placeholder – please adapt to your actual usage and have it legally reviewed.",
      sections: [
        { h: "1. Controller", p: ["Morgenglut Filmproduktion GmbH (placeholder), Musterstrasse 1, 12345 Musterstadt, email: hallo@example.com"] },
        { h: "2. Hosting and server log files", p: ["Placeholder text: When you visit this website, information (e.g. IP address, date, time, requested page) is automatically stored in server log files. The legal basis is Art. 6 (1) (f) GDPR."] },
        { h: "3. Fonts", p: ["Placeholder text: This website uses web fonts. If they are loaded from external servers, your IP address is transmitted. Recommendation: host fonts locally."] },
        { h: "4. Placeholder images", p: ["Placeholder text: During development, placeholder images are loaded from an external service. Replace them with your own images before going live."] },
        { h: "5. Language setting", p: ["Your selected language is stored locally in your browser (localStorage). No data is transmitted to us."] },
        { h: "6. Contact", p: ["Placeholder text: If you contact us by email, we store your details to process your enquiry."] },
        { h: "7. Your rights", p: ["You have the right to access, rectification, erasure, restriction of processing, data portability and objection. You may also lodge a complaint with a data protection supervisory authority."] }
      ]
    },
    footer: {
      tagline: "Independent film production",
      contactTitle: "Contact",
      address: "Musterstrasse 1<br>12345 Musterstadt",
      rights: "All rights reserved."
    }
  }
};
