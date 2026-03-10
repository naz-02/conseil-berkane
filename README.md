# Conseil Provincial de Berkane - Portail Institutionnel

Bienvenue sur le dépôt officiel du portail web du Conseil Provincial de Berkane. Ce projet vise à offrir une plateforme numérique moderne pour informer les citoyens sur les actualités, les projets de développement et les sessions du conseil.

*The official web portal for the **Conseil Provincial de Berkane**, designed to facilitate communication between the council and citizens, showcase development projects, and provide transparent access to administrative structures.*

🔗 **Site en Ligne (Live Site):** [www.cpberkane.com](https://www.cpberkane.com)

## 🌟 Fonctionnalités Clés / Key Features

- **Actualités & Annonces (News)** : Un fil d'actualité dynamique pour les dernières informations de la province.
- **Suivi des Sessions (Sessions Tracker)** : Archivage et détails des sessions ordinaires et extraordinaires du conseil depuis 2021, incluant les récentes sessions de 2026.
- **Transparence des Projets (Project Portfolio)** : Présentation détaillée des projets de développement provincial (Awrach, Infitah, Infrastructures, Social, Culturel).
- **Organigramme Dynamique (Dynamic Organigram)** : Visualisation interactive de la structure administrative et politique du Conseil.
- **Bilingue (Bilingual Support)** : Support complet du Français et de l'Arabe (RTL). Tous les contenus, rapports de sessions et annonces sont localisés.
- **Optimisation SEO & Responsive** : Optimisé pour tous les appareils, avec une gestion dynamique des métadonnées `SeoService` pour une visibilité maximale.

## 🏗️ Architecture du Projet / Architecture

Le projet suit une architecture de transition :
- **Couche Application Core (Frontend)** : Une application moderne **Angular 17+** située dans le dossier `/angular-app`. C'est le cœur actif du portail.
- **Design System** : Angular Material & [PrimeNG](https://primeng.org/) pour les composants UI avancés (styles CSS3 modernes, Flexbox/Grid).
- **Couche Legacy/Static** : Des fichiers HTML/CSS/JS statiques à la racine, servant de référence historique de design.
- **Routing** : Gestion des routes via Angular Router pour une navigation fluide (SPA) et `.htaccess` serveur.

## 🚀 Développement Local / Local Development

Ce projet utilise [Angular CLI](https://github.com/angular/angular-cli).

### Prérequis (Prerequisites)
- [Node.js](https://nodejs.org/) (v20+ / LTS recommended)
- npm (v10+)
- Angular CLI

### Installation & Lancement / Running Locally
1. Clonez le dépôt (Clone repo) :
   ```bash
   git clone https://github.com/naz-02/conseil-berkane.git
   ```
2. Accédez au dossier de l'application (Navigate to app directory) :
   ```bash
   cd conseil-berkane/angular-app
   ```
3. Installez les dépendances (Install dependencies) :
   ```bash
   npm install
   ```
4. Lancez le serveur de développement (Run the dev server) :
   ```bash
   npm start
   # or
   ng serve
   ```
   Rendez-vous sur (Navigate to) `http://localhost:4200/`.

## 📦 Déploiement / Deployment

Le déploiement est automatisé via des scripts npm qui construisent l'application et la déploient sur le serveur via FTP :
```bash
npm run deploy
```
*Note: This script uses a python script to handle file transfer and delta comparisons automatically.*

## 📄 Licence
Droit d'auteur © 2026 Conseil Provincial de Berkane. Tous droits réservés. (All Rights Reserved).
