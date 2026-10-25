// Search landing pages (French, with the Kreyòl search words used in Haiti): each one answers one question people type
// in Google. Content follows what Kasho Pay really does: USD virtual cards via Freda Pay Issuing, MonCash / NatCash
// top-ups, identity check, 18+, minimum first load 2 $, creation fee 10 $, no physical card, not a bank.

export function seoPages() {
  return [
    {
      slug: "kasho-pay",
      title: "Kasho Pay (KashoPay) : portefeuille et cartes en Haïti",
      h1: "Kasho Pay, c'est quoi ?",
      ht: "Kasho Pay · KashoPay · pòtfèy dijital ak kat an Ayiti",
      desc: "Kasho Pay (KashoPay) : portefeuille numérique pour Haïti. Rechargez avec MonCash et NatCash, envoyez de l'argent, créez une carte Visa ou Mastercard.",
      intro: "Kasho Pay, que l'on écrit aussi <strong>KashoPay</strong> ou <strong>Kasho-Pay</strong>, est un service de paiement numérique pensé pour Haïti. Il réunit dans une même application un portefeuille, des transferts entre membres et des cartes virtuelles Visa et Mastercard en dollars américains.",
      sections: [
        ["Ce que vous pouvez faire avec Kasho Pay", `<ul>
<li><strong>Recharger</strong> votre portefeuille avec MonCash ou NatCash.</li>
<li><strong>Envoyer de l'argent</strong> à d'autres membres Kasho Pay avec leur nom d'utilisateur ou un code QR.</li>
<li><strong>Créer une carte virtuelle Visa ou Mastercard</strong> en USD pour payer en ligne.</li>
<li><strong>Retirer</strong> votre argent vers MonCash ou NatCash.</li>
<li>Geler ou fermer votre carte à tout moment depuis l'app.</li>
</ul>`],
        ["Kasho Pay est une fintech, pas une banque", "<p>Kasho Pay n'est pas une banque. Nous sommes une fintech : un service de paiement numérique. Les cartes virtuelles sont émises via notre partenaire Freda Pay Issuing. Le service est édité par KASHOPAY LLC.</p>"],
        ["Comment commencer", `<ol>
<li>Créez votre compte sur <a href="{APP}/signup">app.kashopay.com</a> et confirmez votre adresse e-mail.</li>
<li>Rechargez votre portefeuille avec MonCash ou NatCash.</li>
<li>Pour une carte, vérifiez votre identité (pièce d'identité et selfie), choisissez Visa ou Mastercard et sa couleur, puis chargez-la à partir de 2 $.</li>
</ol>
<p>Kasho Pay s'utilise dans le navigateur de votre téléphone ou de votre ordinateur : <strong>aucune application à télécharger</strong>. Vous pouvez l'ajouter à l'écran d'accueil.</p>`],
      ],
      faq: [
        ["KashoPay et Kasho Pay, est-ce la même chose ?", "Oui. Kasho Pay, KashoPay et Kasho-Pay désignent le même service, accessible sur app.kashopay.com."],
        ["Qui peut utiliser Kasho Pay ?", "Toute personne de 18 ans ou plus qui crée un compte avec des informations exactes. Pour créer une carte, une vérification d'identité est demandée."],
        ["Kasho Pay est-il gratuit ?", "Créer un compte est gratuit. Certaines opérations ont des frais (par exemple la création d'une carte, 10 $). L'app affiche toujours les frais avant que vous confirmiez."],
      ],
      related: ["carte-virtuelle-haiti", "recharger-moncash-natcash"],
    },

    {
      slug: "carte-visa-haiti",
      title: "Carte Visa en Haïti : créez votre carte virtuelle Visa en USD",
      h1: "Carte Visa en Haïti",
      ht: "Kat Visa an Ayiti",
      desc: "Créez une carte virtuelle Visa en dollars en quelques minutes, depuis Haïti. Rechargez avec MonCash ou NatCash, payez en ligne. Dès 2 $ de premier chargement.",
      intro: "Vous cherchez une <strong>carte Visa en Haïti</strong> pour payer en ligne ? Avec Kasho Pay, vous créez une carte virtuelle Visa en dollars américains (USD) depuis votre téléphone, la chargez avec l'argent de votre portefeuille et l'utilisez chez les commerçants qui acceptent les cartes USD.",
      sections: [
        ["Une carte Visa virtuelle, en quelques minutes", `<p>La carte est <strong>virtuelle et prépayée</strong> : vous ne dépensez que ce que vous y avez chargé. Il n'existe pas de carte en plastique. Vous affichez le numéro, la date d'expiration et le code de sécurité dans l'app, après avoir saisi votre code à 4 chiffres, puis vous les utilisez comme n'importe quelle carte Visa en ligne.</p>`],
        ["Comment obtenir votre carte Visa", `<ol>
<li>Créez un compte et rechargez votre portefeuille avec MonCash ou NatCash.</li>
<li>Vérifiez votre identité (pièce d'identité officielle et selfie).</li>
<li>Choisissez <strong>Visa</strong>, une couleur parmi 7, et le montant du premier chargement : <strong>2 $ minimum</strong>.</li>
<li>Des frais de création de 10 $ s'appliquent ; l'app les affiche avant votre confirmation.</li>
</ol>`],
        ["Où utiliser votre carte Visa", "<p>La carte fonctionne chez les commerçants qui acceptent les cartes en USD, surtout des commerçants américains. L'acceptation dépend de chaque commerçant. Certaines catégories (jeux d'argent, cryptomonnaies, transferts d'argent, rencontres…) et certains pays soumis à sanctions sont refusés. Voir les <a href=\"/conditions-cartes-virtuelles/\">conditions des cartes virtuelles</a>.</p>"],
        ["Sécurité", "<p>Les détails de la carte ne s'affichent qu'avec votre code à 4 chiffres (et votre code d'authentification à deux étapes si vous l'avez activée). Vous pouvez geler la carte en un geste, ou la fermer : le solde revient dans votre portefeuille.</p>"],
      ],
      faq: [
        ["Peut-on avoir une carte Visa en Haïti sans compte bancaire ?", "Avec Kasho Pay, vous n'avez pas besoin d'ouvrir un compte bancaire pour la carte virtuelle : vous la créez depuis votre portefeuille, alimenté par MonCash ou NatCash. Une vérification d'identité est demandée."],
        ["La carte Visa est-elle en gourdes ou en dollars ?", "En dollars américains (USD). Le portefeuille et la carte fonctionnent en USD."],
        ["Combien coûte une carte Visa Kasho Pay ?", "La création coûte 10 $, avec un premier chargement minimum de 2 $. Les recharges et retraits de la carte ont leurs propres frais, affichés avant confirmation."],
        ["Puis-je payer Facebook, Google ou PayPal avec la carte ?", "Ces services acceptent les cartes virtuelles en USD, mais l'acceptation dépend du commerçant et peut changer. Nous ne pouvons pas la garantir."],
      ],
      related: ["carte-mastercard-haiti", "carte-virtuelle-haiti"],
    },

    {
      slug: "carte-mastercard-haiti",
      title: "Carte Mastercard en Haïti : carte virtuelle Mastercard en USD",
      h1: "Carte Mastercard en Haïti",
      ht: "Kat Mastercard an Ayiti",
      desc: "Carte virtuelle Mastercard en dollars depuis Haïti avec Kasho Pay. Rechargez avec MonCash ou NatCash. Création 10 $, premier chargement dès 2 $.",
      intro: "Besoin d'une <strong>carte Mastercard en Haïti</strong> pour vos achats en ligne ? Kasho Pay vous permet de créer une carte virtuelle Mastercard en USD, directement depuis votre portefeuille, sans passer par une agence.",
      sections: [
        ["Mastercard ou Visa : vous choisissez", "<p>À la création, vous choisissez le réseau : <strong>Mastercard</strong> ou Visa, ainsi que la couleur de la carte (7 couleurs). Les deux fonctionnent de la même manière : carte virtuelle prépayée en dollars américains.</p>"],
        ["Créer votre carte Mastercard", `<ol>
<li>Ouvrez <a href="{APP}/signup">app.kashopay.com</a> et créez votre compte.</li>
<li>Rechargez le portefeuille avec MonCash ou NatCash.</li>
<li>Vérifiez votre identité, puis choisissez <strong>Mastercard</strong> et chargez la carte (2 $ minimum).</li>
</ol>
<p>Les frais de création (10 $) sont affichés avant la confirmation.</p>`],
        ["À savoir avant de payer", "<ul><li>La carte est en <strong>USD</strong>, uniquement virtuelle.</li><li>Elle fonctionne chez les commerçants qui acceptent les cartes USD ; l'acceptation n'est jamais garantie.</li><li>Certaines catégories de commerçants et certains pays sont refusés.</li><li>Vous pouvez la geler, la recharger, retirer son solde vers votre portefeuille ou la fermer.</li></ul>"],
      ],
      faq: [
        ["Comment avoir une carte Mastercard en Haïti ?", "Créez un compte Kasho Pay, vérifiez votre identité, choisissez Mastercard et chargez la carte depuis votre portefeuille (dès 2 $)."],
        ["La carte Mastercard est-elle physique ?", "Non, elle est uniquement virtuelle : le numéro, la date d'expiration et le code de sécurité s'affichent dans l'app."],
        ["Quel âge faut-il pour avoir la carte ?", "18 ans minimum."],
      ],
      related: ["carte-visa-haiti", "carte-virtuelle-haiti"],
    },

    {
      slug: "carte-virtuelle-haiti",
      title: "Carte virtuelle en Haïti : payer en ligne en USD | Kasho Pay",
      h1: "Carte virtuelle en Haïti",
      ht: "Kat vityèl an Ayiti · kat pou peye sou entènèt",
      desc: "Une carte virtuelle pour payer en ligne depuis Haïti : Visa ou Mastercard en USD, rechargée avec MonCash ou NatCash. Gelez ou fermez la carte quand vous voulez.",
      intro: "Une <strong>carte virtuelle en Haïti</strong> vous permet de payer sur internet sans carte bancaire classique. Kasho Pay propose des cartes virtuelles Visa et Mastercard en dollars américains, chargées depuis votre portefeuille.",
      sections: [
        ["Qu'est-ce qu'une carte virtuelle ?", "<p>C'est une carte de paiement qui n'existe qu'en ligne. Elle a un numéro, une date d'expiration et un code de sécurité comme une carte physique, mais elle s'affiche dans l'app. Elle est <strong>prépayée</strong> : vous ne pouvez dépenser que le solde chargé.</p>"],
        ["Pourquoi l'utiliser", `<ul>
<li>Payer des services et achats en ligne en USD.</li>
<li>Garder le contrôle : chargez le montant voulu, gelez la carte en un geste, fermez-la si besoin.</li>
<li>Protéger votre argent : les détails de la carte sont cachés derrière un code à 4 chiffres.</li>
<li>Alimenter la carte avec MonCash ou NatCash via votre portefeuille.</li>
</ul>`],
        ["Combien ça coûte", "<p>La création de la carte coûte 10 $ et le premier chargement minimum est de 2 $. Recharger ou retirer de l'argent de la carte a des frais qui dépendent de l'opération ; l'app les affiche toujours avant que vous ne confirmiez. Kasho Pay n'est pas une banque : nous sommes une fintech.</p>"],
        ["Limites à connaître", "<p>La carte fonctionne chez les commerçants qui acceptent les cartes USD (surtout américains) et n'est pas acceptée partout. Elle ne peut pas servir aux jeux d'argent, aux cryptomonnaies ni aux transferts d'argent, et ne fonctionne pas dans certains pays soumis à sanctions.</p>"],
      ],
      faq: [
        ["Une carte virtuelle, est-ce sûr ?", "Les détails ne s'affichent qu'avec votre code à 4 chiffres, vous pouvez geler la carte à tout moment, et vous ne dépensez que le solde chargé."],
        ["Comment recharger la carte virtuelle ?", "Dans l'app, ajoutez de l'argent à la carte depuis votre portefeuille. Le portefeuille lui-même se recharge avec MonCash ou NatCash."],
        ["Puis-je retirer l'argent de la carte ?", "Oui : vous pouvez ramener le solde de la carte vers votre portefeuille, ou fermer la carte, ce qui y remet le solde."],
      ],
      related: ["carte-visa-haiti", "carte-mastercard-haiti", "recharger-moncash-natcash"],
    },

    {
      slug: "recharger-moncash-natcash",
      title: "Recharger son portefeuille avec MonCash et NatCash | Kasho Pay",
      h1: "Recharger avec MonCash et NatCash",
      ht: "Mete lajan ak MonCash ak NatCash",
      desc: "Rechargez votre portefeuille Kasho Pay avec MonCash ou NatCash en quelques étapes, de 5 $ à 100 $. Les frais sont affichés avant de confirmer.",
      intro: "Avec Kasho Pay, vous <strong>rechargez votre portefeuille avec MonCash ou NatCash</strong> depuis votre téléphone. L'argent sert ensuite à envoyer à d'autres membres ou à alimenter une carte virtuelle Visa ou Mastercard.",
      sections: [
        ["Comment recharger", `<ol>
<li>Dans l'app, choisissez <strong>Ajouter de l'argent</strong>.</li>
<li>Sélectionnez <strong>MonCash</strong> ou <strong>NatCash</strong> et saisissez le montant (de 5 $ à 100 $ pour le moment).</li>
<li>Vérifiez les frais et le montant que recevra votre portefeuille.</li>
<li>Vous arrivez sur la page de paiement sécurisée MonCash ou NatCash, où vous confirmez le paiement.</li>
</ol>
<p>Votre portefeuille est crédité automatiquement dès que le paiement est confirmé.</p>`],
        ["Frais et taux", "<p>Des frais s'appliquent selon le montant ; l'app affiche les frais et le montant crédité avant que vous ne validiez. Le paiement se fait en gourdes au taux affiché dans l'app, et le portefeuille est en dollars américains.</p>"],
        ["Retirer vers MonCash ou NatCash", "<p>Vous pouvez aussi retirer de l'argent de votre portefeuille vers un numéro MonCash ou NatCash. Une confirmation par mot de passe est demandée avant chaque retrait. Vérifiez bien le numéro avant de confirmer.</p>"],
        ["Si le paiement reste en attente", "<p>Une recharge peut rester « en attente » quelques minutes, le temps que MonCash ou NatCash confirme. Si le montant est débité mais que votre portefeuille n'est pas crédité, contactez-nous avec la référence de la transaction.</p>"],
      ],
      faq: [
        ["Quel montant minimum pour recharger ?", "5 $ pour le moment (jusqu'à 100 $ par opération). Les limites sont affichées dans l'app."],
        ["Faut-il un numéro MonCash pour recharger ?", "Non : vous arrivez sur la page de paiement sécurisée du moyen choisi et vous confirmez le paiement là-bas."],
        ["Combien de temps pour être crédité ?", "En général quelques instants après la confirmation du paiement ; parfois quelques minutes."],
      ],
      related: ["carte-virtuelle-haiti", "kasho-pay"],
    },
  ];
}
