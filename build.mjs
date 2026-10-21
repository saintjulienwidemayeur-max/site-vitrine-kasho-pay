// Builds the Kasho Pay showcase site (static HTML, no dependencies).
//   node build.mjs
// Writes index.html (Français), sitemap.xml and robots.txt.
// Settings come from environment variables so the same files can be rebuilt for another domain:
//   SITE_URL       public address of this site          (default https://www.kashopay.ht  <- CHANGE to the real domain)
//   APP_URL        address of the Kasho Pay web app      (default https://kasho-pay-1.onrender.com)
//   CONTACT_EMAIL  shown in the footer when set
//   WHATSAPP       international number without + (e.g. 50937001234), shown in the footer when set
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const SITE_URL = (process.env.SITE_URL ?? "https://www.kashopay.ht").replace(/\/+$/, "");
const APP_URL = (process.env.APP_URL ?? "https://kasho-pay-1.onrender.com").replace(/\/+$/, "");
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "";
const WHATSAPP = (process.env.WHATSAPP ?? "").replace(/\D/g, "");
const TODAY = new Date().toISOString().slice(0, 10);

// ------------------------------------------------------------------ texts
const T = {
  fr: {
    lang: "fr", locale: "fr_HT", path: "/",
    title: "Kasho Pay | Portefeuille et cartes Visa Mastercard pour Haïti",
    description: "Rechargez avec MonCash et NatCash, envoyez de l'argent et créez une carte virtuelle Visa ou Mastercard en dollars. Simple, rapide, sécurisé.",
    keywords: "Kasho Pay, portefeuille numérique Haïti, carte Visa Haïti, carte Mastercard Haïti, carte virtuelle, MonCash, NatCash, envoyer de l'argent Haïti, paiement en ligne Haïti, carte en dollars",
    nav: { features: "Services", cards: "Cartes", app: "L'app", partners: "Partenaires", faq: "Questions", start: "Commencer", menu: "Menu", skip: "Aller au contenu" },
    hero: {
      eyebrow: "Le portefeuille numérique pour Haïti",
      lead: "Des solutions financières intelligentes pour simplifier vos paiements numériques et gérer votre argent sans souci.",
      cta: "Commencer", secure: "Système sécurisé", f1: "MonCash · NatCash", f1s: "pour déposer et retirer", f2: "Visa · Mastercard", f2s: "cartes virtuelles en USD",
    },
    wallet: {
      kicker: "Portefeuille intelligent",
      h2: "Une solution moderne pour des transactions simples et sécurisées",
      p: "Rechargez votre portefeuille Kasho Pay, envoyez de l'argent à toute personne qui a Kasho Pay et retirez-le sur MonCash ou NatCash quand vous voulez.",
      items: [
        ["Rechargez avec MonCash et NatCash", "Choisissez le montant et le moyen de paiement. Vous arrivez directement sur la page de paiement sécurisée."],
        ["Envoyez de l'argent clairement", "Trouvez quelqu'un par son nom, son @utilisateur ou un code QR, et voyez les frais avant de confirmer."],
        ["Retirez quand vous voulez", "Retrait sur MonCash ou NatCash, avec confirmation du mot de passe pour vous protéger."],
      ],
      cta: "Ouvrir l'app",
    },
    cards: {
      kicker: "Cartes virtuelles",
      h2: "Votre carte Visa ou Mastercard, en une minute",
      p: "Payez en ligne en dollars américains (USD). Choisissez le réseau, la couleur, et chargez la carte dès 2 $ depuis votre portefeuille.",
      perks: ["Visa ou Mastercard", "7 couleurs au choix", "Gelez, retirez ou fermez la carte dans l'app", "Détails de la carte protégés par un code à 4 chiffres"],
      from: "Création de la carte : 10 $", fromLabel: "pour créer votre carte",
      names: { mint: "Mint", sunset: "Sunset", ocean: "Ocean", gold: "Gold", midnight: "Midnight", forest: "Forest", chrome: "Chrome" },
      note: "Les cartes fonctionnent sur les sites et apps qui acceptent les cartes USD, surtout des commerçants américains. Certaines catégories (jeux d'argent, crypto, transferts d'argent...) sont refusées.",
      holder: "TITULAIRE", expires: "EXPIRE", name: "MARIE JEAN",
    },
    app: {
      kicker: "L'application",
      h2: "Tout ce qu'il vous faut, dans votre poche",
      p: "Kasho Pay fonctionne dans le navigateur de votre téléphone et peut être ajoutée à l'écran d'accueil. Rien à télécharger.",
      shots: [["home", "Accueil", "Votre solde, recharges et retraits en un coup d'œil."], ["deposit", "Recharge", "MonCash ou NatCash, avec des frais clairs."], ["transfer", "Transfert", "Envoyez et recevez de l'argent entre membres Kasho."], ["card", "Carte", "Gérez vos cartes Visa et Mastercard."], ["transactions", "Historique", "Tous vos mouvements, classés par date."]],
      alt: "Écran de l'application Kasho Pay :",
    },
    security: {
      kicker: "Sécurité",
      h2: "La sécurité avant tout",
      items: [
        ["Vérification d'identité", "Une vérification officielle (pièce d'identité et selfie) pour protéger votre compte."],
        ["Double authentification", "Ajoutez un code de votre app d'authentification pour confirmer les actions sensibles."],
        ["Code à 4 chiffres pour la carte", "Personne ne voit le numéro de votre carte sans votre code."],
        ["Données chiffrées", "Vos numéros de pièce d'identité sont chiffrés en base de données."],
        ["Limites quotidiennes", "Des plafonds sur les transferts et les retraits pour vous protéger de la fraude."],
        ["Confirmation du mot de passe", "Nous demandons votre mot de passe avant chaque retrait."],
      ],
    },
    faq: {
      kicker: "Questions",
      h2: "Questions fréquentes",
      items: [
        ["Qu'est-ce que Kasho Pay ?", "Kasho Pay est un portefeuille numérique avec cartes virtuelles Visa et Mastercard, conçu pour Haïti. Vous le rechargez avec MonCash ou NatCash, envoyez de l'argent à d'autres membres et payez en ligne avec la carte."],
        ["Comment mettre de l'argent dans mon portefeuille ?", "Dans l'app, choisissez Ajouter de l'argent, saisissez le montant (de 5 $ à 100 $) et choisissez MonCash ou NatCash. Vous arrivez sur la page de paiement sécurisée et votre portefeuille est crédité automatiquement une fois le paiement confirmé."],
        ["Où la carte fonctionne-t-elle ?", "Les cartes sont des cartes virtuelles en dollars américains (USD). Elles sont acceptées chez les commerçants qui acceptent les cartes USD, surtout américains. Certaines catégories et certains pays sont refusés."],
        ["Combien ça coûte ?", "La création de la carte coûte 10 $. Les autres frais dépendent de l'opération et du montant, et l'app les affiche toujours avant que vous confirmiez."],
        ["Dois-je vérifier mon identité ?", "Oui. Pour créer une carte, vous devez vérifier votre identité (pièce d'identité et selfie) et avoir au moins 18 ans."],
        ["Dois-je télécharger une application ?", "Non. Kasho Pay s'ouvre dans le navigateur de votre téléphone et vous pouvez l'ajouter à l'écran d'accueil."],
      ],
    },
    fintech: { h2: "Kasho Pay n'est pas une banque", p: "Nous sommes une fintech : un service de paiement numérique, simple et moderne. Les cartes virtuelles sont émises via notre partenaire Freda Pay Issuing." },
    partners: {
      kicker: "Partenaires", h2: "Nos partenaires",
      main: ["Freda Pay Issuing", "Émission des cartes virtuelles Visa et Mastercard et traitement des paiements MonCash et NatCash.", "Découvrir Freda Pay Issuing"],
      methodsH: "Moyens de paiement pris en charge",
    },
    cta: { h2: "Commencez avec Kasho Pay aujourd'hui", p: "Créez votre compte gratuitement en quelques minutes.", btn: "Créer mon compte" },
    footer: { rights: "Tous droits réservés.", links: "Liens", contact: "Nous contacter", note: "Kasho Pay est un service de KASHOPAY LLC." },
    og: "Portefeuille numérique et cartes Visa et Mastercard pour Haïti",
  },
};

// ------------------------------------------------------------------ pieces
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const visa = (c = "#fff") => `<svg class="brand" viewBox="0 0 64 22" role="img" aria-label="Visa"><text x="32" y="18" text-anchor="middle" font-size="22" font-weight="900" font-style="italic" letter-spacing="-0.5" font-family="Arial Black, Arial, Helvetica, sans-serif" fill="${c}">VISA</text></svg>`;
const mc = () => `<svg class="brand" viewBox="0 0 40 24" role="img" aria-label="Mastercard"><circle cx="15" cy="12" r="10" fill="#EB001B"/><circle cx="25" cy="12" r="10" fill="#F79E1B"/><path d="M20 4.3a10 10 0 0 1 0 15.4 10 10 0 0 1 0-15.4z" fill="#FF5F00"/></svg>`;
// Same gradients as the app card colours (src/lib/card-colors.ts).
const GRAD = {
  mint: "linear-gradient(135deg,#6ee7a8 0%,#10b981 55%,#0d9488 100%)", sunset: "linear-gradient(135deg,#ff8fa3 0%,#e879f9 50%,#8b5cf6 100%)",
  ocean: "linear-gradient(135deg,#7dd3fc 0%,#38bdf8 35%,#4f7cff 100%)", gold: "linear-gradient(135deg,#fde68a 0%,#fbbf24 40%,#f97316 100%)",
  midnight: "linear-gradient(135deg,#7c8cff 0%,#475569 45%,#1e293b 100%)", forest: "linear-gradient(135deg,#86efac 0%,#22c55e 45%,#0f9d6b 100%)",
  chrome: "linear-gradient(135deg,#f1f5f9 0%,#b6c2d3 45%,#7b8aa3 100%)",
};
const kcard = (t, color, brand, last4, extra = "") => `<div class="kcard ${extra}" style="--g:${GRAD[color]}" aria-hidden="true">
  <div class="kc-top"><span class="kc-logo"><img src="/img/kasho-logo.webp" alt="" width="30" height="30"></span><span class="kc-label">Kasho Pay</span></div>
  <div class="kc-num">•••• •••• •••• ${last4}</div>
  <div class="kc-bot"><div><small>${esc(t.cards.holder)}</small><b>${esc(t.cards.name)}</b></div><div><small>${esc(t.cards.expires)}</small><b>08/29</b></div>${brand === "visa" ? visa() : mc()}</div>
</div>`;

// Line icons (24x24, 1.6 stroke), one per feature so the lists do not rely on generic check marks.
const ico = (d) => `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const ICONS = {
  card: ico('<rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="M2.5 10h19M6.5 15h4"/>'),
  swatch: ico('<path d="M12 3.5c3.2 3.6 5.5 6.3 5.5 9.2a5.5 5.5 0 0 1-11 0c0-2.9 2.3-5.6 5.5-9.2z"/><path d="M9.2 13.6a3 3 0 0 0 2.2 2.4"/>'),
  freeze: ico('<path d="M12 2.5v19M4.2 7l15.6 10M19.8 7 4.2 17"/><path d="M9.5 4.2 12 6.5l2.5-2.3M9.5 19.8 12 17.5l2.5 2.3"/>'),
  keypad: ico('<rect x="4" y="3" width="16" height="18" rx="3.5"/><path d="M9 8h.01M12 8h.01M15 8h.01M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" stroke-width="2.4"/>'),
  identity: ico('<rect x="2.5" y="5" width="19" height="14" rx="3"/><circle cx="9" cy="11" r="2.2"/><path d="M5.8 16c.6-1.6 1.8-2.4 3.2-2.4s2.6.8 3.2 2.4M15 10h3.5M15 13.5h3.5"/>'),
  phone: ico('<rect x="6.5" y="2.5" width="11" height="19" rx="3"/><path d="M10.5 18.5h3M9.5 8.5l1.8 1.8 3.2-3.4"/>'),
  data: ico('<ellipse cx="12" cy="5.5" rx="7.5" ry="3"/><path d="M4.5 5.5v6.5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5.5M4.5 12v6.5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V12"/>'),
  gauge: ico('<path d="M4 17a8.5 8.5 0 1 1 16 0"/><path d="M12 17l4-5.5"/><circle cx="12" cy="17" r="1"/>'),
  key: ico('<circle cx="8" cy="12" r="4"/><path d="M12 12h9M17.5 12v3.2M20.5 12v2"/>'),
};
const arrow = `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const check = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const abs = (p) => `${SITE_URL}${p}`;

function jsonLd(t) {
  const org = {
    "@type": "Organization", "@id": `${SITE_URL}/#org`, name: "Kasho Pay", legalName: "KASHOPAY LLC", url: abs("/"),
    logo: abs("/img/icon-192.png"), areaServed: { "@type": "Country", name: "Haiti" },
  };
  const site = { "@type": "WebSite", "@id": `${SITE_URL}/#site`, url: abs("/"), name: "Kasho Pay", inLanguage: "fr", publisher: { "@id": `${SITE_URL}/#org` } };
  const appl = {
    "@type": "WebApplication", "@id": `${SITE_URL}/#app`, name: "Kasho Pay", url: APP_URL, applicationCategory: "FinanceApplication",
    operatingSystem: "Any (web browser)", inLanguage: t.lang, description: t.description, publisher: { "@id": `${SITE_URL}/#org` },
    image: abs("/img/og.jpg"),
  };
  const faq = {
    "@type": "FAQPage", inLanguage: t.lang,
    mainEntity: t.faq.items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  return JSON.stringify({ "@context": "https://schema.org", "@graph": [org, site, appl, faq] });
}

function page(t) {
  const url = abs(t.path);
  const base = t.lang === "ht" ? "" : "";
  const contact = [
    CONTACT_EMAIL && `<a href="mailto:${esc(CONTACT_EMAIL)}">${esc(CONTACT_EMAIL)}</a>`,
    WHATSAPP && `<a href="https://wa.me/${WHATSAPP}" rel="noopener">WhatsApp</a>`,
  ].filter(Boolean).join(" · ");
  return `<!doctype html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t.title)}</title>
<meta name="description" content="${esc(t.description)}">
<meta name="keywords" content="${esc(t.keywords)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#020604">
<meta name="geo.region" content="HT"><meta name="geo.placename" content="Haïti">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="fr" href="${abs("/")}">
<link rel="alternate" hreflang="x-default" href="${abs("/")}">
<link rel="icon" href="/img/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:type" content="website"><meta property="og:site_name" content="Kasho Pay">
<meta property="og:title" content="${esc(t.title)}"><meta property="og:description" content="${esc(t.description)}">
<meta property="og:url" content="${url}"><meta property="og:locale" content="${t.locale}">
<meta property="og:image" content="${abs("/img/og.jpg")}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(t.og)}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(t.title)}">
<meta name="twitter:description" content="${esc(t.description)}"><meta name="twitter:image" content="${abs("/img/og.jpg")}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap">
<link rel="stylesheet" href="/style.css">
<script type="application/ld+json">${jsonLd(t)}</script>
<script>document.documentElement.classList.add("js")</script>
</head>
<body>
<a class="skip" href="#main">${esc(t.nav.skip)}</a>
<header class="top">
  <a class="logo" href="${t.path}" aria-label="Kasho Pay"><img src="/img/kasho-mark.webp" alt="" width="40" height="40"><span>Kasho Pay</span></a>
  <nav id="nav" aria-label="${esc(t.nav.menu)}">
    <a href="#sevis">${esc(t.nav.features)}</a><a href="#kat">${esc(t.nav.cards)}</a><a href="#app">${esc(t.nav.app)}</a><a href="#partenaires">${esc(t.nav.partners)}</a><a href="#faq">${esc(t.nav.faq)}</a>
  </nav>
  <a class="pill small" href="${APP_URL}/signup">${esc(t.nav.start)}</a>
  <button class="burger" aria-label="${esc(t.nav.menu)}" aria-expanded="false" aria-controls="nav"><span></span><span></span></button>
</header>

<main id="main">
<section class="hero">
  <div class="grid-lines" aria-hidden="true"></div>
  <p class="giant" aria-hidden="true">Kasho Pay</p>
  <div class="hero-cards" aria-hidden="true">
    ${kcard(t, "ocean", "visa", "4821", "c1")}${kcard(t, "midnight", "mc", "7710", "c2")}${kcard(t, "mint", "visa", "0392", "c3")}
  </div>
  <div class="hero-copy">
    <p class="eyebrow">${esc(t.hero.eyebrow)}</p>
    <h1>Kasho Pay</h1>
    <p class="lead">${esc(t.hero.lead)}</p>
    <a class="pill" href="${APP_URL}/signup">${esc(t.hero.cta)}<span class="dot">${arrow}</span></a>
  </div>
  <ul class="facts">
    <li class="glass fact"><span class="logos"><img src="/img/moncash.webp" width="30" height="30" alt="MonCash"><img src="/img/natcash.webp" width="30" height="30" alt="NatCash"></span><b>${esc(t.hero.f1)}</b><span>${esc(t.hero.f1s)}</span></li>
    <li class="glass fact"><span class="logos"><span class="mark">${visa("#fff")}</span><span class="mark">${mc()}</span></span><b>${esc(t.hero.f2)}</b><span>${esc(t.hero.f2s)}</span></li>
  </ul>
</section>

<section class="sec wallet" id="sevis">
  <div class="wrap two">
    <div class="reveal">
      <p class="kicker">${esc(t.wallet.kicker)}</p>
      <h2>${esc(t.wallet.h2)}</h2>
      <p class="sub">${esc(t.wallet.p)}</p>
      <ul class="steps">${t.wallet.items.map(([a, b], i) => `<li><span class="num">${i + 1}</span><div><h3>${esc(a)}</h3><p>${esc(b)}</p></div></li>`).join("")}</ul>
      <a class="pill" href="${APP_URL}">${esc(t.wallet.cta)}<span class="dot">${arrow}</span></a>
    </div>
    <div class="phone-wrap reveal">
      <div class="phone"><img src="/img/app-home.webp" width="390" height="844" alt="${esc(t.app.alt)} ${esc(t.app.shots[0][1])}" loading="lazy"></div>
      <div class="glass float-badge"><b>MonCash</b><span>NatCash</span></div>
    </div>
  </div>
</section>

<section class="sec cards" id="kat">
  <div class="wrap">
    <div class="center reveal">
      <p class="kicker">${esc(t.cards.kicker)}</p>
      <h2>${esc(t.cards.h2)}</h2>
      <p class="sub">${esc(t.cards.p)}</p>
    </div>
    <div class="marquee" role="group" aria-label="${esc(t.cards.h2)}">
      <div class="track">
        ${[0, 1].map((dup) => [["ocean", "visa", "4821"], ["mint", "mc", "7710"], ["sunset", "visa", "1156"], ["gold", "mc", "8034"], ["midnight", "visa", "2290"], ["forest", "mc", "6617"], ["chrome", "visa", "5503"]]
          .map(([c, b, l]) => `<figure${dup ? ' aria-hidden="true"' : ""}>${kcard(t, c, b, l)}<figcaption>${esc(t.cards.names[c])}</figcaption></figure>`).join("")).join("")}
      </div>
    </div>
    <div class="perks glass reveal">
      <ul>${t.cards.perks.map((p, i) => `<li><span class="pi">${ICONS[["card", "swatch", "freeze", "keypad"][i]]}</span><span>${esc(p)}</span></li>`).join("")}</ul>
      <p class="cost"><b>10 $</b><span>${esc(t.cards.fromLabel)}</span></p>
    </div>
    <p class="fine center">${esc(t.cards.note)}</p>
  </div>
</section>

<section class="sec shots" id="app">
  <div class="wrap">
    <div class="center reveal"><p class="kicker">${esc(t.app.kicker)}</p><h2>${esc(t.app.h2)}</h2><p class="sub">${esc(t.app.p)}</p></div>
    <div class="shot-row">
      ${t.app.shots.map(([f, name, cap]) => `<figure class="shot reveal"><div class="phone sm"><img src="/img/app-${f}.webp" width="390" height="844" alt="${esc(t.app.alt)} ${esc(name)}" loading="lazy"></div><figcaption><b>${esc(name)}</b><span>${esc(cap)}</span></figcaption></figure>`).join("")}
    </div>
  </div>
</section>


<section class="sec security" id="sekirite">
  <div class="wrap">
    <div class="center reveal"><p class="kicker">${esc(t.security.kicker)}</p><h2>${esc(t.security.h2)}</h2></div>
    <ul class="sec-grid">${t.security.items.map(([a, b], i) => `<li class="glass reveal"><span class="ic">${ICONS[["identity", "phone", "keypad", "data", "gauge", "key"][i]]}</span><h3>${esc(a)}</h3><p>${esc(b)}</p></li>`).join("")}</ul>
  </div>
</section>

<section class="sec partners" id="partenaires">
  <div class="wrap narrow">
    <div class="center reveal"><p class="kicker">${esc(t.partners.kicker)}</p><h2>${esc(t.partners.h2)}</h2></div>
    <a class="glass partner reveal" href="https://issuing.fredapay.com" target="_blank" rel="noopener" aria-label="${esc(t.partners.main[2])}">
      <img src="/img/freda-pay-issuing.webp" width="96" height="96" alt="Freda Pay Issuing">
      <div><h3>${esc(t.partners.main[0])}</h3><p>${esc(t.partners.main[1])}</p></div>
    </a>
    <p class="methods-h center reveal">${esc(t.partners.methodsH)}</p>
    <ul class="methods reveal">
      <li class="glass"><img src="/img/moncash.webp" width="64" height="64" alt="MonCash"><span>MonCash</span></li>
      <li class="glass"><img src="/img/natcash.webp" width="64" height="64" alt="NatCash"><span>NatCash</span></li>
      <li class="glass"><span class="mark">${visa("#fff")}</span><span>Visa</span></li>
      <li class="glass"><span class="mark">${mc()}</span><span>Mastercard</span></li>
    </ul>
  </div>
</section>

<section class="sec faq" id="faq">
  <div class="wrap narrow">
    <div class="center reveal"><p class="kicker">${esc(t.faq.kicker)}</p><h2>${esc(t.faq.h2)}</h2></div>
    ${t.faq.items.map(([q, a]) => `<details class="glass reveal"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}
  </div>
</section>

<section class="sec final">
  <div class="wrap center reveal">
    <h2>${esc(t.cta.h2)}</h2><p class="sub">${esc(t.cta.p)}</p>
    <a class="pill big" href="${APP_URL}/signup">${esc(t.cta.btn)}<span class="dot">${arrow}</span></a>
  </div>
</section>
</main>

<footer class="foot">
  <div class="wrap notice"><p><strong>${esc(t.fintech.h2)}.</strong> ${esc(t.fintech.p)}</p></div>
  <div class="wrap foot-in">
    <a class="logo" href="${t.path}"><img src="/img/kasho-mark.webp" alt="" width="36" height="36" loading="lazy"><span>Kasho Pay</span></a>
    <p>${esc(t.footer.note)}<br>© ${new Date().getFullYear()} KASHOPAY LLC. ${esc(t.footer.rights)}</p>
    ${contact ? `<p class="fl">${esc(t.footer.contact)}: ${contact}</p>` : ""}
  </div>
</footer>
<script src="/site.js" defer></script>
</body>
</html>
`;
}

// ------------------------------------------------------------------ write
const write = (rel, data) => { const f = join(ROOT, rel); mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, data); };
write("index.html", page(T.fr));
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${["/"].map((p) => `  <url><loc>${abs(p)}</loc><lastmod>${TODAY}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>`).join("\n")}
</urlset>
`);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${abs("/sitemap.xml")}\n`);
write("site.webmanifest", JSON.stringify({
  name: "Kasho Pay", short_name: "Kasho Pay", start_url: "/", display: "browser", background_color: "#020604", theme_color: "#020604", lang: "fr",
  icons: [{ src: "/img/icon-192.png", sizes: "192x192", type: "image/png" }, { src: "/img/kasho-mark.png", sizes: "512x512", type: "image/png" }],
}, null, 2) + "\n");
console.log(`Built for ${SITE_URL} (app: ${APP_URL})`);
