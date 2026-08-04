/* Domaine du site. Les URL Open Graph doivent être absolues : sans lui, Next les
   préfixe par localhost et l'aperçu de partage reste vide une fois en ligne.
   À renseigner via NEXT_PUBLIC_SITE_URL dans l'environnement de déploiement.

   Ce module est séparé de layout.tsx parce qu'un fichier de route Next n'accepte
   que des exports connus (`metadata`, `default`, …) : y ajouter une constante
   fait échouer la vérification de types. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
