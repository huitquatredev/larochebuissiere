# La Roche Buissière — proposition de site

Maquette de direction artistique construite **à partir des étiquettes existantes** du
domaine, pas d'une identité inventée. Le relevé complet est dans
[`design/EXTRACTION.md`](design/EXTRACTION.md).

## Lancer

```bash
npm install
npm run dev      # le port est affiché au démarrage
npm run build
```

Astro 7, CSS maison, GSAP 3.15 (ScrollTrigger) pour l’empilement des cuvées.

## Structure

```
src/
  data/cuvees.ts              couleurs, noms, signatures
  styles/tokens.css           couleurs, typo, espacements, grille
  styles/global.css           base + sections de la page
  components/LabelPlate.astro étiquette 1:1 (container queries)
  components/CuveePanel.astro un écran = une cuvée
  layouts/Base.astro
  pages/index.astro           la proposition
design/EXTRACTION.md          mesures, palette, questions ouvertes
```

## Ajouter une cuvée

Une entrée dans `src/data/cuvees.ts` :

```ts
{
  index: '06',
  slug: 'aurore',
  name: 'Aurore',
  color: '#7a1f3d',
  ink: '#ffffff',
  signature: 'Antoine et Laurence Joly, vignerons. Faucon F-84110',
}
```

Le panneau, la planche d’accueil et la palette se mettent à jour seuls.

## Mouvement

Les cinq panneaux de `#cuvees` s’empilent au scroll : le panneau suivant recouvre le
précédent, qui descend à mi-vitesse et dont le nom glisse en parallaxe. Implémentation
GSAP / ScrollTrigger dans `src/pages/index.astro`, pilotée par les attributs
`data-stacking-cards-item` et `data-stacking-cards-title`. Chaque panneau reçoit un
`z-index` croissant (01 → 05) pour que le suivant recouvre toujours le précédent, même
lorsque celui-ci est transformé.

`prefers-reduced-motion: reduce` désactive l’effet : les panneaux défilent normalement.

## Choix à valider

- **Polices** : Archivo et Bodoni Moda sont des substituts libres. Les fontes d'origine
  restent à identifier et à licencier.
- **Contraste** : le site passe le nom en encre sur les cuvées claires (petit Jo,
  Prémices, Le Claux) pour tenir le contraste AA. Les étiquettes imprimées, elles, sont
  en blanc partout.
- **Contenu** : les textes du domaine viennent de `infos/infos.md`. Les appellations et
  millésimes par cuvée ne sont pas inventés et restent à fournir.
- **Statut** : proposition non sollicitée, `noindex`. Les étiquettes appartiennent au
  domaine — ne pas publier sans autorisation.
