// Legal pages of the Kasho Pay site (French). Texts follow what the app really does:
// profile and identity data, Didit identity checks, Freda Pay Issuing cards and MonCash / NatCash payments, fees shown
// in the app, 2FA, 4-digit card code, daily limits, disputes. Anything the company still has to decide is written as a
// [bracketed placeholder] in `L`: pages that still contain one are set to "noindex" and left out of the sitemap by build.mjs.
// These are drafts: have a lawyer review them before relying on them.

export const UPDATED = "22 octobre 2026";

export function legalPages(L) {
  const co = L.company;
  const mail = L.email;
  const contact = mail.startsWith("[") ? mail : `<a href="mailto:${mail}">${mail}</a>`;

  return [
    {
      slug: "conditions-utilisation",
      title: "Conditions d'utilisation",
      desc: "Les conditions d'utilisation du service Kasho Pay : compte, portefeuille, cartes virtuelles, frais, responsabilités.",
      html: `
<p class="lead">Les présentes conditions d'utilisation (les « Conditions ») encadrent l'utilisation de Kasho Pay, le service de paiement numérique de ${co}. En créant un compte ou en utilisant le service, vous les acceptez.</p>

<h2>1. Qui sommes-nous</h2>
<p>Kasho Pay est édité par ${co} (« Kasho Pay », « nous »), ${L.legalForm}, dont le siège est situé à ${L.address}. <strong>Kasho Pay n'est pas une banque.</strong> Nous sommes une fintech : nous proposons un portefeuille numérique et des cartes virtuelles, sans activité de banque ni de crédit.</p>

<h2>2. Le service</h2>
<ul>
  <li>Un <strong>portefeuille numérique</strong> en dollars américains (USD), que vous pouvez recharger avec MonCash ou NatCash et retirer vers MonCash ou NatCash.</li>
  <li>Des <strong>transferts</strong> entre membres Kasho Pay, par nom d'utilisateur ou code QR.</li>
  <li>Des <strong>cartes virtuelles Visa ou Mastercard</strong> en USD, émises via notre partenaire Freda Pay Issuing (voir les <a href="/conditions-cartes-virtuelles/">Conditions des cartes virtuelles</a>).</li>
</ul>
<p>Kasho Pay fonctionne dans le navigateur de votre téléphone ou de votre ordinateur. Le service peut évoluer ; nous pouvons ajouter, modifier ou retirer des fonctions.</p>

<h2>3. Conditions pour ouvrir un compte</h2>
<ul>
  <li>Vous devez avoir <strong>au moins 18 ans</strong> et la capacité juridique de conclure un contrat.</li>
  <li>Vous devez fournir des informations exactes, complètes et à jour (nom, date de naissance, pays, adresse électronique, numéro de téléphone, adresse) et confirmer votre adresse électronique.</li>
  <li>Une seule personne par compte. Vous ne devez pas prêter, vendre ou céder votre compte.</li>
  <li>Pour créer une carte virtuelle, vous devez <strong>vérifier votre identité</strong> (pièce d'identité officielle et selfie) auprès de notre prestataire de vérification.</li>
</ul>

<h2>4. Sécurité de votre compte</h2>
<p>Vous êtes responsable de la confidentialité de votre mot de passe, de votre code à 4 chiffres pour afficher les détails de votre carte et de votre code d'authentification à deux étapes. Nous vous recommandons d'activer l'authentification à deux étapes. Ne communiquez jamais ces informations : <strong>l'équipe Kasho Pay ne vous les demandera jamais</strong>. Si vous pensez que votre compte est compromis, changez votre mot de passe et contactez-nous immédiatement à ${contact}.</p>
<p>Nous pouvons vous demander de confirmer votre mot de passe ou un code avant certaines opérations sensibles, comme un retrait.</p>

<h2>5. Recharges, retraits et transferts</h2>
<ul>
  <li><strong>Recharges.</strong> Vous payez avec MonCash ou NatCash sur la page de paiement sécurisée. Votre portefeuille est crédité une fois le paiement confirmé par le prestataire de paiement. Le montant en gourdes est calculé au taux affiché dans l'app.</li>
  <li><strong>Retraits.</strong> Vous pouvez retirer vers un numéro MonCash ou NatCash que vous indiquez. <strong>Vérifiez le numéro avant de confirmer :</strong> un retrait envoyé à un mauvais numéro ne peut pas toujours être annulé.</li>
  <li><strong>Transferts.</strong> Un transfert vers un autre membre est immédiat et en principe irréversible. Vérifiez le destinataire avant de confirmer.</li>
  <li><strong>Plafonds.</strong> Des montants minimum et maximum par opération et des plafonds sur 24 heures s'appliquent. Ils sont affichés dans l'app et peuvent changer.</li>
  <li>Une opération peut rester « en attente » le temps que le prestataire la confirme. Elle est ensuite finalisée ou annulée, et le montant réservé vous est alors rendu.</li>
</ul>

<h2>6. Frais</h2>
<p>Certaines opérations donnent lieu à des frais (par exemple la création d'une carte, les recharges et retraits, les transferts). <strong>L'app affiche les frais et le total avant que vous ne confirmiez chaque opération.</strong> Les frais peuvent être modifiés ; le changement s'applique aux opérations futures. Les prestataires de paiement (MonCash, NatCash, opérateurs de cartes) peuvent appliquer leurs propres conditions.</p>

<h2>7. Utilisations interdites</h2>
<p>Il est interdit d'utiliser Kasho Pay pour :</p>
<ul>
  <li>toute activité illégale, la fraude, le blanchiment d'argent, le financement d'activités illicites ou la violation de sanctions ;</li>
  <li>les jeux d'argent et paris, les loteries, les services de rencontres et d'escorte, les cryptomonnaies et les transferts d'argent via une carte, ainsi que les autres catégories refusées par les réseaux de cartes ;</li>
  <li>usurper l'identité d'une autre personne, fournir de faux documents ou ouvrir plusieurs comptes pour contourner nos règles ;</li>
  <li>perturber le service, tenter d'accéder sans autorisation à des comptes ou à nos systèmes, ou contourner nos mesures de sécurité ;</li>
  <li>recevoir ou envoyer de l'argent dont vous savez qu'il provient d'une infraction.</li>
</ul>

<h2>8. Vérifications, suspension et fermeture</h2>
<p>Nous pouvons demander des informations ou des documents supplémentaires, limiter une opération, geler temporairement un compte ou une carte, ou fermer un compte, notamment en cas de soupçon de fraude, de non-respect des Conditions, d'information inexacte, de demande d'une autorité compétente ou d'obligation légale. Quand c'est possible et légal, nous vous en informons et nous vous rendons le solde disponible, sous réserve des vérifications nécessaires et des frais dus.</p>
<p>Vous pouvez fermer votre compte à tout moment en nous écrivant à ${contact}, après avoir retiré votre solde.</p>

<h2>9. Cartes virtuelles</h2>
<p>Les cartes virtuelles sont régies par les <a href="/conditions-cartes-virtuelles/">Conditions des cartes virtuelles</a>, qui font partie des présentes Conditions.</p>

<h2>10. Contestations et réclamations</h2>
<p>Si vous constatez une opération que vous ne reconnaissez pas ou une erreur, vous pouvez déposer une contestation depuis l'app (détail de la transaction) ou nous écrire. La procédure est décrite dans la page <a href="/frais-et-reclamations/">Frais et réclamations</a>. Signalez le problème dès que possible.</p>

<h2>11. Responsabilité</h2>
<ul>
  <li>Nous mettons en œuvre des moyens raisonnables pour assurer la disponibilité et la sécurité du service, sans garantir une disponibilité ininterrompue. Le service dépend de prestataires tiers (paiement mobile, émission de cartes, vérification d'identité, hébergement) dont des pannes peuvent nous échapper.</li>
  <li>Nous ne sommes pas responsables des pertes causées par une faute de votre part (communication de vos identifiants, mauvais destinataire ou numéro erroné, opération confirmée par erreur) ni par l'utilisation de votre appareil ou de votre connexion.</li>
  <li>Nous ne sommes pas responsables des achats effectués avec votre carte auprès de commerçants, ni de leur refus d'accepter la carte.</li>
  <li>Dans la limite permise par la loi, notre responsabilité est limitée aux dommages directs et prévisibles, et ne couvre pas les pertes indirectes (manque à gagner, perte d'opportunité…). Rien dans les présentes Conditions n'exclut une responsabilité qui ne peut pas être exclue légalement.</li>
</ul>

<h2>12. Protection des données</h2>
<p>Le traitement de vos données personnelles est décrit dans notre <a href="/politique-confidentialite/">Politique de confidentialité</a>.</p>

<h2>13. Propriété intellectuelle</h2>
<p>Le nom Kasho Pay, le logo, l'app et le contenu du site appartiennent à ${co} ou à leurs titulaires. Les marques MonCash, NatCash, Visa, Mastercard et Freda Pay Issuing appartiennent à leurs propriétaires respectifs et sont citées pour décrire les moyens de paiement pris en charge. Vous recevez un droit personnel, non exclusif et non transférable d'utiliser le service conformément aux Conditions.</p>

<h2>14. Modification des Conditions</h2>
<p>Nous pouvons modifier les Conditions, par exemple pour suivre l'évolution du service ou de la loi. Nous vous informerons des changements importants dans l'app ou par adresse électronique, avec un préavis raisonnable. Si vous continuez à utiliser le service après l'entrée en vigueur du changement, vous l'acceptez ; sinon vous pouvez fermer votre compte.</p>

<h2>15. Droit applicable et litiges</h2>
<p>Les Conditions sont régies par ${L.law}. Avant toute action, nous vous invitons à nous contacter pour chercher une solution amiable. À défaut, les tribunaux compétents sont ${L.court}, sous réserve des règles impératives qui vous protègent.</p>

<h2>16. Contact</h2>
<p>${co}, ${L.address}. Adresse électronique : ${contact}.</p>`,
    },

    {
      slug: "politique-confidentialite",
      title: "Politique de confidentialité",
      desc: "Quelles données Kasho Pay collecte, pourquoi, avec qui elles sont partagées, combien de temps nous les gardons et vos droits.",
      html: `
<p class="lead">Cette politique explique quelles données personnelles ${co} collecte quand vous utilisez Kasho Pay, pourquoi, avec qui nous les partageons et quels sont vos droits.</p>

<h2>1. Responsable du traitement</h2>
<p>${co}, ${L.address}. Contact pour toute question sur vos données : ${contact}.</p>

<h2>2. Données que nous collectons</h2>
<ul>
  <li><strong>Compte et profil :</strong> nom, prénom, nom d'utilisateur, adresse électronique, numéro de téléphone, date de naissance, pays, adresse postale, avatar, préférences de notification.</li>
  <li><strong>Vérification d'identité :</strong> données de votre pièce d'identité (type, numéro, image du document) et résultat de la vérification (pièce d'identité, selfie et contrôle de vivacité réalisés par notre prestataire). Le <strong>numéro de pièce d'identité est stocké chiffré</strong>.</li>
  <li><strong>Transactions :</strong> recharges, retraits, transferts, opérations sur les cartes, montants, frais, dates, références, destinataires, numéros MonCash / NatCash utilisés.</li>
  <li><strong>Cartes virtuelles :</strong> libellé, couleur, réseau, derniers chiffres, date d'expiration, solde et mouvements. Le numéro complet et le code de sécurité sont fournis par l'émetteur uniquement quand vous les affichez, et ne sont pas enregistrés par Kasho Pay. Votre code à 4 chiffres est conservé sous forme de condensat (hash), jamais en clair.</li>
  <li><strong>Sécurité :</strong> journal d'activité (connexions, changements sensibles), adresse IP, type de navigateur, tentatives échouées, paramètres d'authentification à deux étapes.</li>
  <li><strong>Support et contestations :</strong> vos messages et les informations que vous y joignez.</li>
</ul>

<h2>3. Pourquoi nous les utilisons</h2>
<ul>
  <li><strong>Fournir le service</strong> : créer votre compte, traiter vos opérations, émettre et gérer vos cartes (exécution du contrat).</li>
  <li><strong>Sécurité et lutte contre la fraude</strong> : protéger votre compte, détecter les abus, appliquer les plafonds (intérêt légitime et obligations légales).</li>
  <li><strong>Vérification d'identité et conformité</strong> : respecter les obligations de connaissance du client et de lutte contre le blanchiment et le financement d'activités illicites (obligation légale).</li>
  <li><strong>Support</strong> : répondre à vos demandes et traiter vos contestations.</li>
  <li><strong>Notifications du service</strong> : confirmations d'opérations, alertes de sécurité (vous pouvez régler les autres notifications dans l'app).</li>
  <li><strong>Amélioration du service</strong> : statistiques agrégées et correction d'erreurs.</li>
</ul>
<p>Nous ne vendons pas vos données personnelles.</p>

<h2>4. Avec qui nous les partageons</h2>
<p>Nous partageons des données uniquement lorsque c'est nécessaire au service, avec des prestataires qui agissent pour notre compte ou comme prestataires de paiement :</p>
<ul>
  <li><strong>Freda Pay Issuing</strong> : émission des cartes virtuelles et traitement des paiements et retraits MonCash / NatCash. Pour émettre une carte, nous lui transmettons les informations d'identité exigées (nom, date de naissance, adresse, numéro de téléphone, adresse électronique, pièce d'identité).</li>
  <li><strong>MonCash et NatCash</strong> : exécution des paiements et des retraits sur votre portefeuille mobile.</li>
  <li><strong>Didit</strong> : vérification d'identité (pièce d'identité, selfie, contrôle de vivacité).</li>
  <li><strong>Supabase</strong> : base de données, authentification et stockage sécurisé de nos fichiers.</li>
  <li><strong>Render</strong> : hébergement de l'application et du site.</li>
  <li><strong>Autorités</strong> : lorsque la loi l'exige ou pour répondre à une demande légale valide, ou pour protéger nos droits et la sécurité des utilisateurs.</li>
</ul>
<p>Ces prestataires peuvent être situés en dehors d'Haïti, notamment aux États-Unis ou dans l'Union européenne. Nous veillons à ne leur transmettre que les données nécessaires.</p>

<h2>5. Durée de conservation</h2>
<p>Nous conservons vos données tant que votre compte est actif, puis pendant la durée nécessaire pour respecter nos obligations légales et comptables, traiter les litiges et prévenir la fraude (${L.retention}). Les données sont ensuite supprimées ou anonymisées.</p>

<h2>6. Sécurité</h2>
<p>Nous protégeons vos données par des mesures techniques et organisationnelles : connexion chiffrée (HTTPS), accès restreint, chiffrement du numéro de pièce d'identité, mots de passe gérés par un service d'authentification, authentification à deux étapes, limites de tentatives, journal d'activité et vérification de mot de passe avant les opérations sensibles. Aucun système n'est totalement infaillible : protégez vos identifiants et prévenez-nous en cas de doute.</p>

<h2>7. Vos droits</h2>
<p>Dans les limites de la loi applicable, vous pouvez demander l'accès à vos données, leur rectification, leur suppression, la limitation ou l'opposition à certains traitements, et une copie de vos données. Vous pouvez corriger certaines informations directement dans votre profil. Certaines données ne peuvent pas être supprimées immédiatement lorsque la loi nous impose de les conserver (par exemple les données de vérification d'identité et de transactions). Pour exercer vos droits, écrivez à ${contact} ; nous pouvons vous demander de justifier votre identité.</p>

<h2>8. Mineurs</h2>
<p>Kasho Pay est réservé aux personnes de 18 ans et plus. Nous ne collectons pas sciemment de données de mineurs ; si vous pensez qu'un mineur a créé un compte, contactez-nous.</p>

<h2>9. Cookies et stockage local</h2>
<p>Voir notre <a href="/politique-cookies/">Politique de cookies</a>.</p>

<h2>10. Modifications</h2>
<p>Nous pouvons mettre à jour cette politique. La date de dernière mise à jour figure en haut de la page ; nous vous informerons des changements importants.</p>`,
    },

    {
      slug: "mentions-legales",
      title: "Mentions légales",
      desc: "Mentions légales du site Kasho Pay : éditeur, hébergeur, contact, propriété intellectuelle.",
      html: `
<h2>Éditeur du site</h2>
<p>${co}, ${L.legalForm}.<br>
Siège : ${L.address}.<br>
Numéro d'immatriculation : ${L.regNumber}.<br>
Directeur de la publication : ${L.publisher}.<br>
Contact : ${contact}.</p>

<h2>Nature de l'activité</h2>
<p>Kasho Pay est un service de paiement numérique (portefeuille et cartes virtuelles). <strong>Kasho Pay n'est pas une banque.</strong> Les cartes virtuelles sont émises via notre partenaire Freda Pay Issuing.</p>

<h2>Hébergement</h2>
<p>Le site et l'application sont hébergés par Render Services, Inc., 525 Brannan Street, Suite 300, San Francisco, CA 94107, États-Unis (<a href="https://render.com" rel="noopener">render.com</a>).</p>

<h2>Propriété intellectuelle</h2>
<p>La marque Kasho Pay, le logo, les textes, les images et la mise en page de ce site sont la propriété de ${co}, sauf mention contraire. Toute reproduction non autorisée est interdite. Les marques et logos MonCash, NatCash, Visa, Mastercard et Freda Pay Issuing appartiennent à leurs propriétaires respectifs et sont utilisés pour décrire les moyens de paiement et le partenaire de Kasho Pay ; leur présence n'implique aucune approbation de leur part au-delà des accords éventuels.</p>

<h2>Responsabilité</h2>
<p>Nous nous efforçons de fournir des informations exactes et à jour sur ce site, sans garantie d'exhaustivité. Les frais, plafonds et fonctions applicables sont ceux affichés dans l'app au moment de l'opération. Le site peut contenir des liens vers des sites tiers dont nous ne contrôlons pas le contenu.</p>

<h2>Données personnelles</h2>
<p>Voir la <a href="/politique-confidentialite/">Politique de confidentialité</a> et la <a href="/politique-cookies/">Politique de cookies</a>.</p>`,
    },

    {
      slug: "politique-cookies",
      title: "Politique de cookies",
      desc: "Ce site vitrine n'utilise ni cookie publicitaire ni outil d'analyse. Détails sur le stockage local de l'application.",
      html: `
<p class="lead">Ce site vitrine est conçu pour respecter votre vie privée : il ne dépose <strong>aucun cookie</strong> et n'utilise <strong>aucun outil d'analyse ou de publicité</strong>.</p>

<h2>Le site vitrine</h2>
<ul>
  <li>Aucun cookie n'est déposé par le site.</li>
  <li>Le site charge la police de caractères <em>Manrope</em> depuis Google Fonts. Votre navigateur envoie alors votre adresse IP et des informations techniques à Google pour télécharger la police. Vous pouvez bloquer ce chargement ; le site reste lisible avec une police de remplacement.</li>
  <li>Les liens vers l'application ou vers des sites partenaires (par exemple Freda Pay Issuing) vous mènent vers des sites tiers soumis à leurs propres politiques.</li>
</ul>

<h2>L'application Kasho Pay</h2>
<p>Pour fonctionner, l'application utilise le <strong>stockage local de votre navigateur</strong> (et non des cookies publicitaires) :</p>
<ul>
  <li>le jeton de session qui vous garde connecté et vous permet de vous déconnecter ;</li>
  <li>vos préférences (langue, réglages d'affichage et de notifications) ;</li>
  <li>des informations techniques strictement nécessaires au service (par exemple le suivi d'une opération en cours).</li>
</ul>
<p>Ces éléments sont nécessaires au fonctionnement du service et ne servent pas à vous suivre à des fins publicitaires. Vous pouvez les effacer depuis les réglages de votre navigateur ; vous serez alors déconnecté.</p>

<h2>Changements</h2>
<p>Si nous ajoutions un jour un outil de mesure d'audience ou un cookie non essentiel, nous mettrions cette page à jour et demanderions votre accord avant tout dépôt.</p>

<p>Questions : ${contact}.</p>`,
    },

    {
      slug: "conditions-cartes-virtuelles",
      title: "Conditions des cartes virtuelles",
      desc: "Règles d'utilisation des cartes virtuelles Visa et Mastercard Kasho Pay : USD, catégories et pays refusés, frais, gel et fermeture.",
      html: `
<p class="lead">Ces conditions complètent les <a href="/conditions-utilisation/">Conditions d'utilisation</a> et s'appliquent aux cartes virtuelles Visa et Mastercard disponibles dans Kasho Pay.</p>

<h2>1. Nature de la carte</h2>
<ul>
  <li>La carte est une <strong>carte virtuelle prépayée en dollars américains (USD)</strong>. Elle n'est pas un compte bancaire ni une carte de crédit : vous ne pouvez dépenser que le solde chargé sur la carte.</li>
  <li>Les cartes sont émises via notre partenaire <strong>Freda Pay Issuing</strong>. Kasho Pay n'est pas une banque.</li>
  <li>Il n'existe pas de carte physique.</li>
</ul>

<h2>2. Qui peut créer une carte</h2>
<p>Une personne de <strong>18 ans ou plus</strong>, dont l'identité a été vérifiée, qui fournit les informations demandées (nom, date de naissance, pays, adresse, téléphone, adresse électronique, pièce d'identité). Vous êtes le titulaire de la carte et vous ne devez pas la prêter ni la céder.</p>

<h2>3. Création, chargement et retrait</h2>
<ul>
  <li><strong>Création :</strong> des frais de création s'appliquent et un <strong>premier chargement minimum de 2 $</strong> est requis. Le montant est prélevé sur votre portefeuille. La création peut demander quelques instants ; si elle échoue, le montant vous est rendu.</li>
  <li><strong>Recharge :</strong> vous pouvez ajouter de l'argent depuis votre portefeuille (frais affichés avant confirmation).</li>
  <li><strong>Retrait :</strong> vous pouvez ramener de l'argent de la carte vers votre portefeuille (frais affichés avant confirmation).</li>
  <li>Les frais en vigueur sont toujours <strong>affichés dans l'app avant chaque confirmation</strong>.</li>
</ul>

<h2>4. Où la carte fonctionne</h2>
<p>La carte est acceptée chez les commerçants qui acceptent les cartes en USD, surtout des commerçants américains (par exemple des plateformes publicitaires, de paiement ou de design en ligne). Un commerçant peut refuser la carte ; nous ne pouvons pas garantir son acceptation. Les achats en devise autre que l'USD ou hors des États-Unis peuvent entraîner des frais ou des refus de la part des réseaux de paiement.</p>

<h2>5. Catégories de commerçants refusées</h2>
<p>La carte est refusée pour les catégories suivantes (liste communiquée par notre partenaire, susceptible d'évoluer) :</p>
<ul>
  <li>Transferts d'argent (MCC 4829)</li>
  <li>Services d'organisation de voyages (5962)</li>
  <li>Télémarketing sortant (5966)</li>
  <li>Institutions non financières et cryptomonnaies (6051)</li>
  <li>Courtiers et négociants en valeurs mobilières (6211)</li>
  <li>Services de rencontres et d'escorte (7273)</li>
  <li>Salons de massage (7297)</li>
  <li>Loteries d'État (7800), casinos en ligne agréés (7801), courses de chevaux et de chiens agréées (7802)</li>
  <li>Paris et jeux d'argent en ligne (7995)</li>
</ul>

<h2>6. Pays où la carte ne peut pas être utilisée</h2>
<p>Pour des raisons de sanctions, la carte ne peut pas être utilisée dans les pays et territoires suivants : Afghanistan, Algérie, Biélorussie, Burundi, République centrafricaine, Comores, Congo (République démocratique du), Congo (République du), Corée du Nord, Cuba, Gambie, Iran, Irak, Kirghizistan, Liban, Libéria, Libye, Maldives, Myanmar, Nicaragua, Palestine, Russie, Serbie, Somalie, Soudan, Soudan du Sud, Suriname, Svalbard et Jan Mayen, Syrie, Tadjikistan, Togo, Tokelau, Turkménistan, Ukraine, Ouzbékistan, Venezuela, Wallis-et-Futuna, Yémen, Zimbabwe. Cette liste peut évoluer.</p>

<h2>7. Sécurité de la carte</h2>
<ul>
  <li>Les détails de la carte (numéro, date d'expiration, code de sécurité) ne s'affichent qu'après saisie de votre <strong>code à 4 chiffres</strong> (et de votre code d'authentification à deux étapes si elle est activée). Ne partagez jamais ces informations.</li>
  <li>Plusieurs saisies erronées du code bloquent temporairement l'affichage des détails.</li>
  <li>Vous pouvez <strong>geler</strong> la carte à tout moment dans l'app : aucun achat ni mouvement de fonds n'est alors possible jusqu'au dégel.</li>
  <li>Si vous soupçonnez une utilisation non autorisée, gelez la carte et contactez-nous immédiatement à ${contact}.</li>
</ul>

<h2>8. Fermeture de la carte</h2>
<p>Vous pouvez fermer définitivement une carte depuis l'app. <strong>La fermeture est irréversible.</strong> Le solde restant est reversé sur votre portefeuille. Une carte peut aussi être gelée ou fermée par nous ou par l'émetteur en cas de fraude suspectée, de non-respect des conditions, d'usage interdit, de demande d'une autorité ou d'obligation légale.</p>

<h2>9. Contestations et remboursements</h2>
<p>Pour une opération par carte que vous contestez, commencez par contacter le commerçant. Si le problème persiste, déposez une contestation depuis l'app ou écrivez-nous (voir <a href="/frais-et-reclamations/">Frais et réclamations</a>). Les possibilités de remboursement dépendent des règles des réseaux de cartes et du commerçant et ne sont pas garanties.</p>

<h2>10. Utilisation interdite</h2>
<p>Vous vous engagez à utiliser la carte légalement, uniquement pour vos propres achats, et à respecter les conditions des commerçants et des réseaux Visa et Mastercard.</p>`,
    },

    {
      slug: "frais-et-reclamations",
      title: "Frais et réclamations",
      desc: "Comment les frais Kasho Pay sont affichés, comment contester une opération et comment nous contacter pour une réclamation.",
      html: `
<h2>Frais : ce que vous voyez avant de confirmer</h2>
<p>Kasho Pay n'applique <strong>aucun frais caché</strong>. Pour chaque opération (recharge, retrait, transfert, création ou rechargement de carte), l'app affiche <strong>les frais et le total</strong> avant que vous ne confirmiez. Si vous ne confirmez pas, rien n'est débité. Les frais peuvent évoluer ; les frais applicables sont ceux affichés au moment où vous confirmez.</p>
<p>Selon l'opération, les frais sont ajoutés au montant (vous payez montant + frais) ou retenus sur le montant (vous recevez le montant moins les frais). L'app précise toujours ce que vous recevez et ce que vous payez.</p>

<h2>Opération en attente ou échouée</h2>
<ul>
  <li>Une opération « en attente » est en cours de confirmation chez le prestataire. Patientez quelques minutes et rechargez l'app.</li>
  <li>Si une opération échoue, le montant réservé (y compris les frais) est rendu à votre portefeuille.</li>
  <li>Si un paiement MonCash ou NatCash a été débité mais que votre portefeuille n'est pas crédité, contactez-nous avec la référence de la transaction : nous vérifions auprès du prestataire.</li>
</ul>

<h2>Contester une opération</h2>
<ol>
  <li>Ouvrez la transaction dans l'historique de l'app.</li>
  <li>Choisissez « Contester » (ou l'équivalent), sélectionnez le motif et ajoutez une note : débit d'un mauvais montant, débit en double, article ou service non reçu, opération non reconnue…</li>
  <li>Vous recevez une <strong>référence de contestation</strong> par notification. Une seule contestation peut être déposée par transaction.</li>
</ol>
<p>Nous examinons votre demande, pouvons vous demander des informations complémentaires et vous répondons dans un délai de ${L.disputeDelay}. Pour un transfert vers un autre membre exécuté correctement, nous ne pouvons pas annuler l'opération sans l'accord du destinataire ; nous pouvons cependant l'aider à vous contacter dans le respect de la loi.</p>

<h2>Réclamation générale</h2>
<p>Pour toute autre réclamation ou question, écrivez-nous à ${contact} en indiquant votre nom d'utilisateur, la référence de l'opération concernée et une description du problème. N'envoyez jamais votre mot de passe, vos codes ou le numéro complet de votre carte.</p>`,
    },

    {
      slug: "lutte-contre-la-fraude",
      title: "Lutte contre la fraude et le blanchiment",
      desc: "Les mesures de Kasho Pay pour prévenir la fraude, le blanchiment d'argent et le financement d'activités illicites.",
      html: `
<p class="lead">Kasho Pay s'engage à empêcher l'utilisation de son service pour la fraude, le blanchiment d'argent, le financement d'activités illicites et le contournement des sanctions.</p>

<h2>Ce que nous faisons</h2>
<ul>
  <li><strong>Connaissance du client :</strong> nous vérifions l'identité des utilisateurs qui créent des cartes (pièce d'identité officielle, selfie et contrôle de vivacité), et nous vérifions l'adresse électronique de chaque compte.</li>
  <li><strong>Plafonds :</strong> des montants minimum et maximum par opération et des plafonds sur 24 heures limitent les risques.</li>
  <li><strong>Authentification renforcée :</strong> authentification à deux étapes, confirmation du mot de passe avant les retraits, code à 4 chiffres pour afficher les détails d'une carte, limites de tentatives.</li>
  <li><strong>Surveillance :</strong> nous surveillons les opérations inhabituelles et pouvons suspendre une opération ou un compte pour vérification.</li>
  <li><strong>Catégories et pays refusés :</strong> les cartes ne fonctionnent pas dans certaines catégories de commerçants ni dans certains pays soumis à sanctions (voir les <a href="/conditions-cartes-virtuelles/">Conditions des cartes virtuelles</a>).</li>
  <li><strong>Conservation des preuves :</strong> nous conservons les données nécessaires pour la période exigée par la loi.</li>
  <li><strong>Coopération :</strong> nous répondons aux demandes valides des autorités compétentes et de nos partenaires de paiement et d'émission.</li>
</ul>

<h2>Ce que nous attendons de vous</h2>
<ul>
  <li>Fournir des informations vraies et à jour, et répondre à nos demandes de vérification.</li>
  <li>N'utiliser le service que pour vos propres fonds, de source légale.</li>
  <li>Ne pas fractionner des opérations pour contourner les plafonds, ni utiliser plusieurs comptes pour le faire.</li>
</ul>

<h2>Se protéger contre la fraude</h2>
<ul>
  <li>Kasho Pay ne vous demandera <strong>jamais</strong> votre mot de passe, vos codes d'authentification ou le numéro complet de votre carte par message, appel ou réseau social.</li>
  <li>Méfiez-vous des messages qui promettent des gains, vous pressent d'agir ou vous demandent d'envoyer de l'argent pour « débloquer » un gain.</li>
  <li>Vérifiez toujours le nom du destinataire et le numéro MonCash / NatCash avant de confirmer.</li>
  <li>Activez l'authentification à deux étapes et utilisez un mot de passe unique.</li>
</ul>

<h2>Signaler un problème</h2>
<p>Pour signaler une fraude, une tentative d'hameçonnage ou une activité suspecte, écrivez à ${contact}. Si vous pensez que votre carte est compromise, gelez-la tout de suite dans l'app.</p>`,
    },
  ];
}
