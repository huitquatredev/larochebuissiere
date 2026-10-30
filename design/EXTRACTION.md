# Relevé — La Roche Buissière

Ce document consigne ce qui a été **mesuré** sur les six étiquettes fournies, puis la
manière dont ce relevé devient un système utilisable sur le web. Rien n'est inventé :
la direction artistique du site est une extrapolation des étiquettes existantes.

---

## 1. Corpus

| Fichier | Cuvée | Format | Particularité |
|---|---|---|---|
| `2068--2088` | Le Claux | 730 × 727 | Photo, champ gris perçu `#919797` (ombre) |
| `2069--2089` | non identifiée | 730 × 727 | Champ blanc, **aucun nom de cuvée visible** |
| `flonflons-…-899941` | Flonflons | 730 × 730 | Rendu net, rouge `#DA022B` |
| `gaia-…-899949` | Gaïa | 730 × 730 | Rendu net, bleu `#003B63` |
| `petit-jo-…-899933` | petit Jo | 730 × 730 | Rendu net, vert `#09A274` |
| `premices-…-899927` | Prémices | 730 × 730 | Rendu net, cyan `#01A1DE` |

Deux points à trancher avec le domaine : l'identité de `2069` (vin blanc ? contre-étiquette ?)
et la couleur réelle du Claux, que la photo assombrit.

Le scan du Claux (`2068`) est d'une génération antérieure : filets blancs entre les bandes,
bande de marque plus fine, proportions légèrement différentes. C'est pourquoi la planche
d'accueil affiche une étiquette **reconstruite** pour cette cuvée. Les scans sources restent
dans `winelabels/`, non montrés sur la page.

---

## 2. Géométrie

L'étiquette est un **carré 1:1**. Sur les rendus, elle occupe 638 px dans un scan de 730 px
(marges de 46 px, soit 6,3 %).

Six bandes horizontales, mesurées au pixel sur Flonflons :

| # | Bande | Hauteur | Part |
|---|---|---|---|
| 01 | Couleur de cuvée | 58 px | 9,1 % |
| 02 | Fanion gris / encre | 56 px | 8,8 % |
| 03 | Bande de marque (fond blanc) | 57 px | 8,9 % |
| 04 | Fanion gris / encre | 57 px | 8,9 % |
| 05 | Champ de la cuvée | 204 px | 32,0 % |
| 06 | Pied noir — signature | 205 px | 32,1 % |

La grille retenue pour le code est **9 / 9 / 9 / 9 / 32 / 32**, sans gouttière.

Le fanion est coupé à **50 / 50** exactement : la bascule tombe à x = 364 sur une étiquette
de 638 px, soit 49,8 %. Il est identique sur toutes les cuvées — c'est le seul élément
coloré qui ne varie jamais.

Mesures typographiques (sur 638 px de large) :

| Élément | Largeur | Hauteur de capitale | Interlettrage |
|---|---|---|---|
| `LA ROCHE BUISSIÈRE` | 530 px (83 %) | ≈ 30 px (4,7 %) | ≈ 0,27 em |
| Nom de cuvée | 220 px pour « Flonflons » | 42 px (6,6 %) | centré, interligne serré |
| Signature | 585 px (92 %) | 11 px (1,7 %) | ≈ 0,055 em |

---

## 3. Couleurs

Valeurs échantillonnées sur les aplats, converties en OKLCH.

| Nom | Hex | OKLCH | Rôle |
|---|---|---|---|
| Papier | `#FFFFFF` | `1 0 0` | Fond, bande de marque |
| Encre | `#19171A` | `0.208 0.005 326` | Pied, moitié droite du fanion |
| Gris fanion | `#B8B9BB` | `0.786 0.003 265` | Moitié gauche du fanion |
| Flonflons | `#DA022B` | `0.561 0.226 23.5` | Couleur de cuvée |
| Gaïa | `#003B63` | `0.342 0.088 246` | Couleur de cuvée |
| petit Jo | `#09A274` | `0.631 0.133 164` | Couleur de cuvée |
| Prémices | `#01A1DE` | `0.669 0.141 234.5` | Couleur de cuvée |
| Le Claux | `#B8B9BB` | `0.786 0.003 265` | Couleur de cuvée (à confirmer) |

### Décision d'écran

Les étiquettes posent du blanc sur toutes les cuvées. À l'écran, deux d'entre elles ne
tiennent pas le contraste :

| Cuvée | Blanc sur champ | Encre sur champ | Retenu |
|---|---|---|---|
| Flonflons | 5,2:1 | 3,4:1 | blanc |
| Gaïa | 11,6:1 | 1,5:1 | blanc |
| petit Jo | 3,3:1 | 5,5:1 | **encre** |
| Prémices | 2,9:1 | 6,1:1 | **encre** |
| Le Claux | 2,0:1 | 9,1:1 | **encre** |

Le site applique ce choix par cuvée (champ `ink` dans `src/data/cuvees.ts`). C'est une
amélioration, pas une trahison — le blanc reste la règle sur les cuvées sombres.

---

## 4. Typographie

- **La marque et la signature** : un néo-grotesque proche d'Helvetica / Akzidenz-Grotesk,
  en capitales très approchées.
- **Le nom de cuvée** : un didone à fort contraste, probablement un Walbaum ou un Bodoni.
  Les substituts libres retenus sont **Archivo** (variable) et **Bodoni Moda** (variable,
  avec axe optique). Ils conservent le squelette, le contraste et les proportions, mais
  ne sont pas identiques — le `R`, le `G` et le `a` diffèrent.
- **À faire** : identifier les fontes exactes et vérifier les licences avant mise en
  production. C'est la seule ligne de devis qui manque au système.
- **Détail optique** : la ligature « fl » de Bodoni Moda est trop dense aux tailles
  d'affichage (le f et le l se confondent). Elle est désactivée
  (`font-variant-ligatures: no-common-ligatures`) sur tous les noms de cuvée.

---

## 5. Ce qui est système, ce qui varie

C'est la distinction qui transforme un nuancier en système.

| Constant | Variable |
|---|---|
| Format 1:1 | La couleur de la cuvée |
| Fanion 50/50 gris + encre | Le nom |
| Bande de marque blanche | — |
| Pied noir, signature en bas à gauche | — |
| Proportions 9/9/9/9/32/32 | — |

**La règle : une couleur, un nom.** Tout le reste est dérivé. Ajouter une cuvée, c'est
ajouter une entrée dans `src/data/cuvees.ts` — le composant `LabelPlate` s'occupe du reste.

### Deux signatures coexistent

- « Antoine et **Pierre** Joly » sur Le Claux et petit Jo.
- « Antoine et **Laurence** Joly » sur Flonflons, Gaïa et Prémices.

Deux générations, ou deux époques de la gamme. À harmoniser avant toute refonte : le site
utilise la signature actuelle, mais la décision appartient au domaine.

---

## 6. Traduction en interface

Trois règles, appliquées dans la maquette :

1. **Le viewport devient l'étiquette.** Chaque cuvée occupe un écran plein : champ de
   couleur, nom centré en didone, pied noir avec la signature. On ne « met pas en page »
   l'étiquette, on l'agrandit.
2. **Le fanion est le séparateur.** Il revient en 6 px dans l'en-tête, en 10 px avant le
   pied de page, et à 9 % dans l'étiquette composée. C'est la signature géométrique.
3. **La typographie fait tout le travail.** Aucune photo, aucun texte courant dans les
   champs de couleur. La contrainte des étiquettes est reprise telle quelle.

La planche d'accueil applique ces trois règles aux cinq cuvées : c'est la démonstration
la plus directe, sans ajouter d'écran de démonstration.

---

## 7. Questions à trancher

- Identité de l'étiquette `2069` (champ blanc, sans nom).
- Signature : Pierre ou Laurence ?
- Couleur réelle du Claux (photo `#919797` vs gris fanion `#B8B9BB`).
- Appellations et millésimes par cuvée (absents des étiquettes).
- Licences des deux fontes d'origine.
- Photographie : les étiquettes n'en contiennent aucune. Le site assume ce vide —
  est-ce un choix à conserver, ou faut-il ouvrir une direction photo ?
- Autorisation d'usage des étiquettes sur un site public (la maquette est en `noindex`).

---

## 8. Étendre

```
src/data/cuvees.ts        une entrée = une couleur + un nom
src/components/LabelPlate.astro   l'étiquette, en 1:1, à n'importe quelle taille
src/styles/tokens.css     couleurs, échelle typo, espacements, grille
src/pages/index.astro     la page de proposition
```

Pour une sixième cuvée : ajouter l'entrée, choisir une couleur, vérifier le contraste.
Aucun autre fichier à toucher.
