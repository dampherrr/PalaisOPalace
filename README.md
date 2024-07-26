![PaleoPalace](./client/src/assets/media/pictures/LogoWithoutBack.png)

# 🪨 Palais Ô Palace 🐗

## 🏠 C'est pas moderne, c'est préhisto-chic ! ✨

## 📥 Installation

1. Clonez le dépôt :

   ```sh
   git clone git@github.com:dampherrr/PalaisOPalace.git
   ```

2. Installez les dépendances :

   ```sh
   npm install
   ```

3. Démarrez le client et le serveur :

   ```sh
   npm run dev
   ```

## 🛠️ Utilisation

Ouvrez votre navigateur et accédez à `http://localhost:3000`.

## 🗃️ Data


- [Fichier CSV <br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvSGiY-TKfNJFeOiubslXK0COYfEvmW0EeA&s" alt="CSV" width="100">](./client/src/divers/Grotte%20-%20Feuille%201.csv)




## 🖼️ Design

- [Fichier Figma <br><img src="https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png" alt="Figma" width="100" height="100">
](./client/src/divers/PalaisOPalace.fig)

- [Brainstorm <br><img src="./client/src/divers/Screen1.png" alt="Screen1" height="100">](./client/src/divers/Screen1.png)

- [Logo <br><img src="./client/src/divers/Screen2.png" alt="Screen2" height="100">](./client/src/divers/Screen2.png)

## 📂 Structure du projet

```java
PalaisOPalace/
├── client/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── data/
│   │   │   │   └── datajs/
│   │   │   ├── Images/
│   │   │   │   └── Logo.svg
│   │   │   ├── media/
│   │   │   │   ├── icons/
│   │   │   │   │   ├── Logo.svg
│   │   │   │   │   └── moon.svg
│   │   │   │   ├── pictures/
│   │   │   │   │   ├── Background.jpg
│   │   │   │   │   ├── chasseur.png
│   │   │   │   │   ├── cloud1.png
│   │   │   │   │   ├── cloud2.png
│   │   │   │   │   ├── cloud3.png
│   │   │   │   │   ├── fire-torch-png.webp
│   │   │   │   │   ├── forest.png
│   │   │   │   │   ├── grotte.webp
│   │   │   │   │   ├── Logo.png
│   │   │   │   │   ├── LogoWithoutBack.png
│   │   │   │   │   └── marcassin.png
│   │   ├── components/
│   │   │   ├── AdvancedOptions.jsx
│   │   │   ├── Carrousel.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Night.jsx
│   │   ├── context/
│   │   ├── divers/
│   │   │   ├── Grotte - Feuille 1.csv
│   │   │   ├── PalaisOPalace.fig
│   │   │   ├── Screen1.png
│   │   │   └── Screen2.png
│   │   ├── pages/
│   │   │   ├── Connexion.jsx
│   │   │   ├── Description.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Inscription.jsx
│   │   │   └── Search.jsx
│   │   ├── services/
│   │   │   └── request.js
│   │   ├── styles/
│   │   │   ├── advancedOptions.css
│   │   │   ├── home.css
│   │   │   ├── inscription.css
│   │   │   ├── navbar.css
│   │   │   ├── night.css
│   │   │   └── products.css
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.html
│   │   └── main.jsx
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── public/
│   │   ├── assets/
│   │   │   ├── data/
│   │   │   │   └── datajs/
│   │   │   ├── icons/
│   │   │   └── pictures/
│   ├── .env
│   ├── .env.sample
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
├── .eslintrc.cjs
├── .gitignore
├── db.json
├── package-lock.json
├── package.json
└── README.md

```

## 📦 Paquets npm

### `/client`

- **react-router-dom** : Bibliothèque de routage pour React qui permet de gérer la navigation entre les différentes pages de l'application.
- **axios** : Client HTTP basé sur les promesses pour effectuer des requêtes vers des API externes ou internes.
- **@tanstack/react-query** : Bibliothèque pour la gestion des états serveur, simplifiant le processus de fetch et de synchronisation des données.
- **styled-components** : Bibliothèque pour écrire des CSS dans vos composants JavaScript, offrant un style dynamique et modulaire.
- **prop-types** : Utilitaire pour vérifier les types des props passées aux composants, améliorant ainsi la robustesse et la maintenance du code.
- **sass** : Moteur de prétraitement CSS qui vous permet d'utiliser des fonctionnalités comme des variables, des imbrications et des mixins.
- **Keen Slider**: Un puissant et flexible slider/carousel JavaScript sans dépendances, offrant des performances élevées et une personnalisation aisée pour une expérience utilisateur fluide sur toutes les plateformes.

### `/server`

- **express** : Framework web minimaliste et flexible pour Node.js, utilisé pour créer des applications web et des API robustes.
- **json-server** : Serveur RESTful mock pour rapidement simuler une API avec un fichier JSON.
- **cors** : Middleware pour Express permettant de gérer les problèmes de sécurité liés aux politiques de partage de ressources entre origines multiples (CORS).
- **dotenv** : Module qui charge les variables d'environnement à partir d'un fichier `.env` pour les garder hors du code source.
- **mongoose** : Bibliothèque de modélisation d'objets pour MongoDB, facilitant l'interaction avec la base de données.
- **body-parser** : Middleware pour Express permettant d'analyser les corps des requêtes HTTP entrantes, supportant différents formats comme JSON.
- **nodemon** : Outil qui aide à développer des applications basées sur Node.js en redémarrant automatiquement le serveur lorsqu'un fichier change.
- **concurrently** : Utilitaire pour exécuter plusieurs commandes npm en parallèle.
- **npm-run-all** : Utilitaire pour exécuter plusieurs scripts npm en séquence ou en parallèle.

## ✍ Créateurs

- [antoinefouga <br><img src="https://avatars.githubusercontent.com/antoinefouga" alt="antoinefouga" width="100" height="100">
](https://github.com/antoinefouga)  
- [Dampherrr <br><img src="https://avatars.githubusercontent.com/dampherrr" alt="Dampherrr" width="100" height="100">
](https://github.com/dampherrr)  
- [geoffpech <br><img src="https://avatars.githubusercontent.com/geoffpech" alt="geoffpech" width="100" height="100">
](https://github.com/geoffpech)  
- [MathieuREY4 <br><img src="https://avatars.githubusercontent.com/MathieuREY4" alt="MathieuREY4" width="100" height="100">
](https://github.com/MathieuREY4)  
- [PixelKata <br><img src="https://avatars.githubusercontent.com/PixelKata" alt="PixelKata" width="100" height="100">
](https://github.com/PixelKata)  
  
---
