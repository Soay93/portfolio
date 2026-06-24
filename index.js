document.addEventListener("DOMContentLoaded", ()=> {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });

        navLinks.querySelectorAll("a").forEach((links) => {
            links.addEventListener("click", ()  => {
                navLinks.classList.remove("open");
            });
            
        });
    }

    const projectsData = {
        projet1: {
            title: "SAÉ 1 - Implémentation",
            subtitle:
            "Développement en Python d'un programme permettant de modéliser un réseau social et d'analyser les relations entre ses membres.",
            tasks:
            "Ce projet vise à analyser un réseau social modélisé par des structures de données Python. Il s'agit d'un travail réalisé en binôme dans le cadre du BUT Informatique à l'IUT de Villetaneuse.",
            objectives:[
            "Modéliser les relations entre membres d'un réseau social",
            "Élaborer un dictionnaire d'amitiés à partir d'un tableau",
            "Lire et filtrer des données à partir de fichiers CSV",
            "Déterminer les personnes les plus populaires"
            ],
            skills:[
                "Python (structures conditionnelles, boucles, listes, dictionnaires, fichiers)",
                "Logique algorithmique et tests unitaires",
            ],
            level: "Acquis partiellement"
        },

        projet2: {
            title: "SAÉ 2 - Installation d'un poste",
            subtitle:
            "Installation complète d'un système Linux léger (Xubuntu) et mise en place d'un environnement de développement web et logiciel.",
            tasks:
            "Dans le cadre de cette SAÉ, nous avons reçu un ordinateur à réinitialiser totalement. Le but était d'installer un système Linux léger, de configurer le réseau et de préparer un poste complet de développement.",
            objectives:[
            "Installation de Xubuntu en mode UEFI",
            "Configuration réseau (Wi-Fi / Eduroam)",
            "Installation d'un serveur web (Apache), PHP et PostgreSQL",
            "Configuration des pages perso utilisateurs et tests PHP",
            "Installation de Java, Python, VSCode et création de scripts"
            ],
            skills:[
                "Gérer des systèmes Linux",
                "Manipuler le terminal",
                "Installer et configurer des services essentiels pour le développement"
            ],
            level: "Acquis partiellement"
        },


        projet3: {
            title: "SAÉ 3 - Création d'une base de données",
            subtitle:
            "Création d'une base de données à partir de données CSV sur les catastrophes climatiques mondiales",
            tasks:
            "Cette SAÉ avait pour objectif de concevoir une base de données complète à partir de fichiers CSV, puis d'exploiter cette base pour produire des statistiques et des indicateurs.",
            objectives:[
            "Modélisation conceptuelle (entités-associations)",
            "Création des tables SQL manuellement et via un AGL",
            "Comparaison des scripts manuels et générés automatiquement",
            "Peuplement de la base à partir d'un fichier CSV",
            "Utilisation de clés primaires/étrangères et choix de types adaptés"
            ],
            skills:[
                "Modéliser une base de données relationnelle",
                "Compréhension des différences entre PostgreSQL et MySQL Workbench",
                "Tests unitaires"
            ],
            level: "En cours d'acquisition"
        },

        projet4: {
            title: "SAÉ 4 - Installation de services réseau",
            subtitle:
            "Transformation d'un poste Linux en véritable serveur de développement web avec services réseau complets.",
            tasks:
            "Installation et configuration de services réseau sur un poste Linux : serveur web Apache, base de données MariaDB, PHP, serveur FTP, accès SSH sécurisé et environnement complet de développement.",
            objectives:[
            "Installer et configurer Apache2 (serveur web)",
            "Mettre en place une base MariaDB (équivalent libre de MySQL)",
            "Relier PHP à la base via PDO",
            "Créer un utilisateur système avec base de données dédiée",
            "Configurer un serveur FTP (utilisateur local et anonyme)",
            "Configurer SSH (port personnalisé, restrictions de sécurité)",
            "Tester les connexions via navigateur et ligne de commande"
            ],
            skills:[
                "Configurer un système Linux pour le web",
                "Gérer des services réseau",
                "Comprendre la structure client/serveur pour le web"
            ],
            level: "Acquis partiellement"
        },

        projet5: {
            title: "SAÉ 5 - Exploitation d'une base de données",
            subtitle:
            "Exploitation d'une base de données contenant des données issues d'un réseau social afin de répondre à plusieurs problématiques d'engagement.",
            tasks:
            "Analyse statistique de données d'un réseau social à partir d'une base SQL, réalisation de requêtes complexes et interprétation des résultats sous forme de graphiques.",
            objectives:[
            "Comparer les commentaires selon le genre et la région",
            "Mesurer la corrélation entre nombre de commentaires et niveau d'engagement",
            "Étudier l'impact des clics publicitaires sur les téléchargements"
            ],
            skills:[
                "Manipuler des données réelles",
                "Rédiger des requêtes SQL complexes",
                "Interpréter des résultats et les présenter de manière visuelle"
            ],
            level: "En cours d'acquisition"
        },

        projet6: {
            title: "SAÉ 6 - RYTHMO",
            subtitle:
            "Application web de gestion et de diffusion sonore automatisée pour des espaces commerciaux ou publics.",
            tasks:
            "RYTHMO est un projet complet permettant à plusieurs organisations de gérer leurs lecteurs audio, leurs playlists, leurs publicités et leurs alertes depuis une interface web centralisée. Le système doit assurer une diffusion continue et rester fiable même en cas de problème réseau.",
            objectives:[
            "Créer une interface de gestion pour les organisations et les administrateurs",
            "Contrôler à distance des lecteurs audio, notamment sur Raspberry Pi",
            "Planifier des playlists selon les jours, horaires et événements",
            "Gérer les publicités, messages audio et alertes prioritaires",
            "Mettre en place une authentification avec rôles, sessions et sécurité",
            "Suivre les actions du système grâce aux logs et à la traçabilité"
            ],
            skills:[
                "Développement d'une application web complète avec Python et Flask",
                "Gestion des utilisateurs, rôles et accès sécurisés",
                "Conception d'interfaces responsives et de tableaux de bord",
                "Organisation d'un projet complexe en équipe",
                "Réflexion sur la continuité de service et la fiabilité d'un système"
            ],
            level: "Acquis"
        },
    };

    const personalProjectsData = {
        epave: {
            title: "Site vitrine - Récupération d'épaves",
            subtitle:
            "Prototype de site vitrine pour un service de récupération d'épaves gratuit.",
            tasks:
            "Ce projet avait pour objectif de présenter clairement un service, ses zones d'intervention, ses modalités et les documents nécessaires pour la prise en charge d'un véhicule. Le site a été pensé pour être simple, responsive et orienté prise de contact.",
            objectives:[
            "Présenter un service de récupération d'épaves de manière claire",
            "Mettre en avant les zones d'intervention et les informations pratiques",
            "Créer une navigation simple avec une page dédiée aux modalités",
            "Faciliter le contact grâce à des boutons d'appel et d'e-mail",
            "Travailler un design responsive adapté aux téléphones et ordinateurs"
            ],
            skills:[
                "Structuration d'un site vitrine en HTML",
                "Mise en page responsive avec CSS",
                "Ajout d'interactions simples en JavaScript",
                "Réflexion sur l'expérience utilisateur et la clarté des informations"
            ],
            level: "Projet personnel",
            link: "https://github.com/Soay93/epave"
        },

        dofus: {
            title: "Bot de récolte Dofus",
            subtitle:
            "Programme expérimental en Python utilisant la vision par ordinateur pour détecter des ressources à l'écran.",
            tasks:
            "Ce projet permet de détecter des ressources dans une fenêtre de jeu grâce à un modèle YOLO, puis d'organiser les déplacements et les interactions à partir des coordonnées récupérées. Une interface graphique permet de configurer le programme et de suivre son exécution.",
            objectives:[
            "Détecter des ressources à l'écran avec un modèle YOLO",
            "Créer une interface graphique de configuration avec PySide6",
            "Gérer les captures d'écran, les coordonnées et les interactions utilisateur",
            "Organiser la navigation entre plusieurs cartes",
            "Structurer un projet Python plus complexe avec plusieurs responsabilités"
            ],
            skills:[
                "Python et programmation orientée objet",
                "Vision par ordinateur avec YOLO et OpenCV",
                "Création d'interface graphique",
                "Gestion de fichiers de configuration",
                "Multithreading et organisation d'un projet complexe"
            ],
            level: "Projet personnel",
            link: "https://github.com/djerwane0/dofus-recolte-bot"
        },
    };

    const internshipProjectsData = {
        chrome: {
            title: "Extension Chrome - Prix fournisseurs",
            subtitle:
            "Extension Chrome développée pendant mon stage pour afficher automatiquement des prix fournisseurs.",
            tasks:
            "L'extension lit un fichier Excel contenant des références et des tarifs, puis ajoute une colonne de prix directement dans une plateforme web. Le projet mobilise les scripts d'extension Chrome, la lecture de fichiers XLS et la modification dynamique du contenu d'une page.",
            objectives:[
            "Charger et exploiter un fichier Excel depuis une extension Chrome",
            "Identifier les références produits affichées sur une page web",
            "Ajouter automatiquement une colonne de prix dans un tableau existant",
            "Faire communiquer le script de contenu avec le service worker",
            "Rendre l'outil utile dans un contexte professionnel réel"
            ],
            skills:[
                "JavaScript et manipulation du DOM",
                "Développement d'extension Chrome Manifest V3",
                "Lecture de données Excel",
                "Communication entre scripts d'extension",
                "Adaptation à une plateforme web existante"
            ],
            level: "Projet de stage",
            link: "https://github.com/Soay93/stage-extension-chrome"
        },

        whatsapp: {
            title: "Bot WhatsApp professionnel",
            subtitle:
            "Contribution backend à un bot WhatsApp existant dans un contexte professionnel.",
            tasks:
            "J'ai travaillé sur la partie backend du bot : sécurisation des webhooks, création de routes, ajout de tâches planifiées et amélioration de la fiabilité des échanges avec l'API WhatsApp. Le projet étant privé, il est présenté sans lien public.",
            objectives:[
            "Sécuriser les webhooks utilisés par le bot",
            "Créer et organiser des routes backend",
            "Mettre en place des tâches planifiées avec des cron jobs",
            "Comprendre l'intégration d'une API externe dans un projet existant",
            "Renforcer la fiabilité d'un outil utilisé en contexte professionnel"
            ],
            skills:[
                "Développement backend",
                "Sécurisation de webhooks",
                "Utilisation d'une API externe",
                "Mise en place de cron jobs",
                "Lecture et adaptation d'un projet déjà existant"
            ],
            level: "Projet de stage - dépôt privé"
        },
    };

    const projectGroups = {
        academic: {
            data: projectsData,
            detail: document.getElementById("project-detail")
        },
        personal: {
            data: personalProjectsData,
            detail: document.getElementById("personal-project-detail")
        },
        internship: {
            data: internshipProjectsData,
            detail: document.getElementById("internship-project-detail")
        },
    };

    function renderList(items){
        return items.map((item)=> `<li>${item}</li>`).join("");
    }

    function renderProject(groupName, key) {
        const group = projectGroups[groupName];
        const project = group?.data[key];
        const projectDetail = group?.detail;
        if (!project || !projectDetail) return;

        const link = project.link
            ? `<a href="${project.link}" target="_blank" class="project-detail-link">Voir le dépôt GitHub</a>`
            : "";

        projectDetail.innerHTML = `
        <h3 class="project-detail-title">${project.title}</h3>
        <p class="project-detail-subtitle">${project.subtitle}</p>
        <h4 class="project-detail-section-title">Tâches</h4>
        <p class="project-detail-text">${project.tasks}</p>
        <h4 class="project-detail-section-title">Objectifs</h4>
        <ul class="project-detail-list">
            ${renderList(project.objectives)}
        </ul>

        <h4 class="project-detail-section-title">Compétences</h4>
        <ul class="project-detail-list">
            ${renderList(project.skills)}
        </ul>

        <p class="project-detail-level">
            Niveau : <span>${project.level}</span>
        </p>
        ${link}
        `;
    }

    document.querySelectorAll(".project-item").forEach((btn)=> {
        btn.addEventListener("click", () => {
            const groupName = btn.dataset.group || "academic";
            document.querySelectorAll(`.project-item[data-group="${groupName}"], .project-item:not([data-group])`)
                .forEach((b) => {
                    if ((b.dataset.group || "academic") === groupName) {
                        b.classList.remove("active");
                    }
                });
            btn.classList.add("active");
            const key = btn.dataset.project;
            renderProject(groupName, key);
        });
    });

    Object.keys(projectGroups).forEach((groupName) => {
        const firstButton = document.querySelector(`.project-item${groupName === "academic" ? ":not([data-group])" : `[data-group="${groupName}"]`}`);
        if (firstButton) {
            renderProject(groupName, firstButton.dataset.project);
        }
    });

});

