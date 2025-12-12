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
            "1Développement en python d'un programme permettant de modéliser un réseau social et d'analyser les relations entre ses membres.",
            tasks:
            "Ce projet vise à analyser un réseau social modélisé par des structures de données Python. Il s'agit d'un travail réalisé en binôme dans le cadre du BUT Informatique à l'IUT de Villetaneuse.",
            objectives:[
            "Modéliser les relations entre membres d'un réseau social",
            "Élaborer un dictionnaire d'amitiés à partir d'un tableau",
            "Lire et filtrer des données à partir de fichiers CSV",
            "Déterminer les personnes les plus populaires"
            ],
            skills:[
                "Python (structures conditionnelles, boucles, listes, dicionnaires, fichiers)",
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
                "Manipumer me terminal",
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
            "Création des ables SQL manuellement et via un AGL",
            "Comparaison des scripts manuels et générés automatiquement",
            "Peuplement de la base à partir d'un fichier CSV",
            "Utilisation de clés primaires/étrangères et choix de types adaptés"
            ],
            skills:[
                "Modéliser une base de données relationnelle",
                "Compréhension des différences entre PostgreSQL et MySQL Workbench",
                "tests unitaires"
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
            "Installer e configurer Apache2 (serveur web)",
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
            "Etudier l'impact des clics publicitaires sur les téléchargements"
            ],
            skills:[
                "Manipuler des données réelles",
                "Rédiger des requêtes SQL complexes",
                "Interpréter des résultats et les présenter de manière visuelle"
            ],
            level: "En cours d'acquisition"
        },
    };

    const projectButtons = document.querySelectorAll(".project-item");
    const projectDetail = document.getElementById("project-detail");

    function renderList(items){
        return items.map((item)=> `<li>${item}</li>`).join("");
    }

    function renderProject(key) {
        const project = projectsData[key];
        if (!project || !projectDetail) return;

        projectDetail.innerHTML = `
        <h3 class="project-detail-title">${project.title}</h3>
        <p class="project-detail-subtitle">${project.subtitle}</p>
        <h4 class="project-detail-section-title">Tâches</h4>
        <p class="project-detail-text">${project.tasks}</p>
        <h4 class="project-detail-section-title">Objectif</h4>
        <ul class="project-detail-list">
            ${renderList(project.objectives)}
        </ul>

        <h4 class="project-detail-ssection-title">Compétences</h4>
        <ul class="project-detail-list">
            ${renderList(project.skills)}
        </ul>

        <p class="project-detail-level">
            Niveau : <span>${project.level}</span>
        </p>
        `;
    }

    projectButtons.forEach((btn)=> {
        btn.addEventListener("click", () => {
            projectButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            const key = btn.dataset.project;
            renderProject(key);
        });
    });

    if (projectButtons.length > 0) {
        const firstKey =   projectButtons[0].dataset.project;
        renderProject(firstKey);
    }
});