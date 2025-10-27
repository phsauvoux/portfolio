
    // Gestion du z-index pour placer la fenêtre active devant les autres
    let currentZIndex = 1;

    // Définitions des fenêtres (titre, contenu et position initiale)
    const windowDefinitions = {
      window1: {
        title: "CV.doc",
        content: `
        <div style="display: flex; margin-bottom: 20px; height: 70px; padding-top: 10px;" class="tabs">

        <div style="width: 50%; text-align: center;" class="tab-button active" onclick="openTab(event, 'experiences')"> 
        <h1 data-line-start="0" data-line-end="1" style="margin-top: 7px;"><span dir="ltr" lang="fr">Exp&eacute;riences</span></h1> </div>

        <div style="width: 50%; text-align: center;" class="tab-button" onclick="openTab(event, 'formations')"> 
        <h1 data-line-start="0" data-line-end="1" style="margin-top: 7px;"><span dir="ltr" lang="fr">Formations</span></h1> </div>

        </div>
        
        <div id="experiences" class="tab-content" style="display: block;">
        <p><span dir="ltr" lang="fr">► Octobre 2024 ➝ Septembre 2025 (CDD)</span></p>
        <h5><span dir="ltr" lang="fr">Assistant Directeur Artistique - Minist&egrave;re de l&rsquo;Int&eacute;rieur - Paris</span></h5>
        <ul>
        <li>
        <span style="font-family: Montserrat, sans-serif;"><span style="font-size: small;"><span lang="fr-FR">Gestion de projets visuels : print, digital, animation</span></span></span>
        </li>
        <li>
        <span style="font-family: Montserrat, sans-serif;"><span style="font-size: small;"><span lang="fr-FR">Cr&eacute;ation de supports graphiques et infographiques</span></span></span>
        </li>
        <li>
        <span style="font-family: Montserrat, sans-serif;"><span style="font-size: small;"><span lang="fr-FR">D&eacute;finition de mod&egrave;les types pour coh&eacute;rence visuelle</span></span></span>
        </li>
        </ul>
        <p>&nbsp;</p>
        <p><span dir="ltr" lang="fr">► Ao&ucirc;t 2023 ➝ Septembre 2024 (Alternance)</span></p>
        <h5><span dir="ltr" lang="fr">Designer graphique 360 - Minist&egrave;re de l&rsquo;Int&eacute;rieur - Paris</span></h5>
        <ul>
        <li>
        <span style="font-family: Montserrat, sans-serif;"><span style="font-size: small;"><span lang="fr-FR">Gestion de visuels pour r&eacute;seaux sociaux (motion design)</span></span></span>
        </li>
        <li>
        <span style="font-family: Montserrat, sans-serif;"><span style="font-size: small;"><span lang="fr-FR">R&eacute;alisation de supports graphiques</span></span></span>
        </li>
        <li>
        <span style="font-family: Montserrat, sans-serif;"><span style="font-size: small;"><span lang="fr-FR"></span>Prise de vue, montage vid&eacute;o</span></span></span>
        </li>
        </ul>
        <p>&nbsp;</p>
        <p><span dir="ltr" lang="fr">► D&eacute;cembre 2022 ➝ Ao&ucirc;t 2023 (Alternance)</span></p>
        <h5><span dir="ltr" lang="fr">Designer Multim&eacute;dia - Palais du Meuble - Montreuil</span></h5>
        <ul>
        <li><span style="font-family: Montserrat, sans-serif;"><span style="font-size: small;"><span lang="fr-FR">R&eacute;alisation de supports audiovisuel ( r&eacute;seaux sociaux, print, web )<br /></span></span></span></li>
        <li><span style="font-family: Montserrat, sans-serif;"><span style="font-size: small;"><span lang="fr-FR">Gestion et optimisation de contenus num&eacute;riques ( Wordpress, Divi )</span></span></span></li>
        </ul>
        <p>&nbsp;</p>
        <p><span dir="ltr" lang="fr">► Ao&ucirc;t 2022 ➝ Novembre 2022 (Stage)</span></p>
        <h5><span dir="ltr" lang="fr">Designer Multim&eacute;dia - Stooly - Paris</span></h5>
        <ul>
        <li><span dir="ltr" lang="fr" style="font-family: Montserrat, sans-serif; font-size: small;">Photo ( Prise de vue, Retouche photo, Cr&eacute;ation Product shot )</span></li>
        <li><span dir="ltr" lang="fr" style="font-family: Montserrat, sans-serif; font-size: small;">Mise &agrave; jour des produits sur le site web ( Wordpress )&nbsp;</span></li>
        </ul>
        <p>&nbsp;</p>
        <p><span dir="ltr" lang="fr">► Mai 2021 ➝ Ao&ucirc;t 2022 (Stage + Alternance)</span></p>
        <h5><span dir="ltr" lang="fr">Designer Graphique - Search Artisan - Noisy-le-Grand</span></h5>
        <ul>
        <li><span dir="ltr" lang="fr" style="font-family: Montserrat, sans-serif; font-size: small;">Graphisme ( Illustration, Infographie, Retouche photo )</span></li>
        <li><span dir="ltr" lang="fr" style="font-family: Montserrat, sans-serif; font-size: small;">Initiation CMS et outils SEO ( Wordpress, Semrush, Formations )&nbsp;</span></li>
        <li><span dir="ltr" lang="fr" style="font-family: Montserrat, sans-serif; font-size: small;">Motion design pour r&eacute;seaux sociaux &nbsp;</span></li>
        </ul>
        </div>
        
        <div id="formations" class="tab-content" style="display: none;">
        <p>► 2023 - 2024</p>
        <h5 id="mast-re-2-direction-artistique-num-rique-l-cole-multim-dia">Mastère 2 – Direction Artistique Numérique - L’École Multimédia</h5>
        <ul>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">Gestion de projets</span>
        </li>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">Scénarisation</span>
        </li>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">Budgetisation</span>
        </li>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">Design Numérique</span>
        </li>
        </ul>
        <p>&nbsp;</p>
        <p>► 2022 - 2023</p>
        <h5 id="mast-re-1-direction-artistique-motion-design-l-cole-multim-dia">Mastère 1 - Direction Artistique &amp; Motion Design - L’École Multimédia</h5>
        <ul>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">Animation</span>
        </li>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">Pré-Production</span>
        </li>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">Scébarisation</span>
        </li>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">Motion Design</span>
        </li>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">VFX</span>
        </li>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">Typographie</span>
        </li>
        </ul>
        <p>&nbsp;</p>
        <p>► 2019 - 2022</p>
        <h5 id="bachelor-graphiste-multim-dia-l-cole-multim-dia">Bachelor – Graphiste Multimédia | L’École Multimédia</h5>
        <ul>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">PAO</span>
        </li>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">Web design</span>
        </li>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">Motion design</span>
        </li>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">Datavis</span>
        </li>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">HTML/CSS</span>
        </li>
        <li><span style="font-family: Montserrat, sans-serif; font-size: small;">Design Numérique</span>
        </li>
        </ul>
        </div>`,
        left: "50px",
        top: "50px",
        width: "550px",
        height: "700px",
        padding: "5px 25px 25px 25px",
        overflow: "auto",
      },
      window2: {
        title: "Travaux",
        content: `
        <div style="display: flex; height: 100%;" class="explorateur_cont">
          <div class="sidebar_explorateur" style="width: 200px; border-right: 1px solid #ccc; padding: 10px; overflow-y: auto;">
            <div class="dossier" data-content="projet0">
              <span class="icone_dossier">📂</span> Travaux
            </div>
            <div class="dossier_item" data-content="projet1">
              <span class="icone_dossier">├ 📄</span> Projet 1
            </div>
            <div class="dossier_item" data-content="projet2">
              <span class="icone_dossier">├ 📄</span> Projet 2
            </div>
            <div class="dossier_item" data-content="projet3">
              <span class="icone_dossier">├ 📄</span> Projet 3
            </div>
            <div class="dossier_item" data-content="projet4">
              <span class="icone_dossier">└ 📄</span> Projet 4
            </div>
          </div>
          <div class="zone_affichage_contenu" style="flex: 1; padding: 20px; overflow-y: auto;">
            <p> </p>
          </div>
        </div>
        `,
        left: "200px",
        top: "150px",
        width: "700px",
        height: "700px",
        padding: "0px",
        overflow: "scroll"
      },
      window3: {
        title: "📎 Extras",
        content: `
        <iframe style="border-radius:12px; " src="https://open.spotify.com/embed/artist/3VKfPGNKGu5VfJmM09AEO9?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        `,
        left: "350px",
        top: "250px",
        width: "auto",
        height: "auto",
        padding: "0px",
        overflow: "scroll",
        backgroundColor: "#1F1F1F"
    },
      window4: {
        title: "Contact",
        content: `
        <h2 style="text-align:center;">
        Contactez moi ! 🤝
        </h2>
        <div style="text-align:center; display: flex;">
        <div style="
        background-color: #fff; 
        color: var(--gris); 
        margin-right: 20px; 
        margin-left: auto;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 4px;
        "><a style="color: var(--gris); text-decoration: none;" href="mailto:ph.sauvoux@gmail.com">Mail </a></div>
        <div style="
        background-color: var(--lkd); 
        color: var(--gris); 
        margin-left: 20px; 
        margin-right: auto;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 4px;
        "><a style="color: #fff; text-decoration: none;" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/phsvx/">LinkedIn</a></div>
        </div>
        `,
        left: "500px",
        top: "350px",
        width: "auto",
        height: "auto",
        padding: "25px",
        overflow: "scroll"
      },
       window5: {
        title: "Ball.exe",
        content: `
        <a style="font-size: 6.8em;">
        🏐
        </a>
        `,
        left: "350px",
        top: "250px",
        width: "auto",
        height: "auto",
        padding: "0px",
        overflow: "scroll",
    },
    window6: {
        title: "Terminal",
        content: `
        Nom: Pierre-Henri Sauvoux <br>
        Profession: Designer Graphique <br>
        Diplôme: Mastère Directeur Artistique <br>
        `,
        left: "350px",
        top: "250px",
        width: "420px",
        height: "auto",
        padding: "0px",
        overflow: "scroll",
        FontFamily: "Space Mono",
        backgroundColor: "rgba(16, 16, 16, 0.83)"
    },
    window7: {
        title: "All Apps",
        content: `
        <div class="grid_apps">

        <div class="apps">
        <img src="img/apps/ae.svg"><p>After effects</p></div>
        <div class="apps">
        <img src="img/apps/ai.svg"><p>Illustrator</p></div>
        <div class="apps">
        <img src="img/apps/id.svg"><p>InDesign</p></div>
        <div class="apps">
        <img src="img/apps/ps.svg"><p>Photoshop</p></div>
        <div class="apps">
        <img src="img/apps/pr.svg"><p>Premiere Pro</p></div>
        <div class="apps">
        <img src="img/apps/figma.svg"><p>Figma</p></div>
        <div class="apps">
        <img src="img/apps/blender.svg"><p>Blender</p></div>
        <div class="apps">
        <img src="img/apps/aff.svg"><p>Affinity Designer</p></div>
        <div class="apps">
        <img src="img/apps/wp.svg"><p>Wordpress</p></div>

        </div>
        `,
        left: "350px",
        top: "250px",
        width: "500px",
        height: "auto",
        padding: "20px",
        overflow: "hidden",
        justifyContent: "center",
        FontFamily: "Space Mono",
        backgroundColor: "rgb(31, 31, 31)"
    },
    };

    /**
     * Crée ou affiche une fenêtre en fonction de son identifiant.
     */
function createWindow(windowId) {
      // Si la fenêtre existe déjà, on la remet au premier plan.
      let win = document.getElementById(windowId);
      if (win) {
        win.style.zIndex = ++currentZIndex;
        return;
      }
      const def = windowDefinitions[windowId];
      if (!def) return;

      // Création de la fenêtre
      win = document.createElement("div");
      if (windowId === "windows5") {
        win.className = "windowGravity";
      } else { win.className = "window"; }
      win.id = windowId;
      win.style.left = def.left;
      win.style.top = def.top;
      win.style.width = def.width;
      win.style.height = def.height;
      win.style.zIndex = ++currentZIndex;
      if (windowId === "window1") {
        win.style.overflow = def.overflow;
      }
      if (def.backgroundColor) {
      win.style.backgroundColor = def.backgroundColor;
        }
    if (window.innerWidth < 600) {
  // Code pour petit écran
      document.querySelectorAll('.window, .windowGravity').forEach(winEl => winEl.remove());
    }
      // Contenu HTML de la fenêtre
      if (windowId === "window5") 
        {win.innerHTML = `
        <div class="titlebar">
          <span>${def.title}</span>
          <div class="window-controls">
            <button class="maximize" style="color: green;">⦿</button>
            <button class="close" style="color: red;">⦿</button>
          </div>
        </div>
        <div class="content" style="padding: 10px; font-size: 10px; text-align: center;">
          ${def.content}
        </div>
      `
    } 
      else if (windowId === "window6") { 
        win.innerHTML = `
        <div class="titlebar" style="background-color: #000000;">
          <span>${def.title}</span>
          <div class="window-controls">
            <button class="maximize" style="color: green;">⦿</button>
            <button class="close" style="color: red;">⦿</button>
          </div>
        </div>
        <div class="content" style="padding: 25px; font-family: 'Space Mono'; color: #b3b3b3ff;">
        </div>
        `
        const contentDiv = win.querySelector('.content');
        typeWriter(contentDiv, `Profil >>>>         <br>
        Nom: Pierre-Henri Sauvoux <br>
        Profession: Designer Graphique <br>
        Diplôme: Mastère Directeur Artistique Numérique<br>
        _________<br>
        <br>
        >_`);
        }
      else if (windowId === "window1") {
        win.innerHTML = `
        <div class="titlebar" >
          <span>${def.title}</span>
          <div class="window-controls">
            <button class="maximize" style="color: green;">⦿</button>
            <button class="close" style="color: red;">⦿</button>
          </div>
        </div>
        <div class="content" style="padding: 5px 25px 25px 25px; overflow: auto;">
          ${def.content} 
          </div>
          `
      } else { 
        win.innerHTML = `
        <div class="titlebar" >
          <span>${def.title}</span>
          <div class="window-controls">
            <button class="maximize" style="color: green;">⦿</button>
            <button class="close" style="color: red;">⦿</button>
          </div>
        </div>
        <div class="content" style="padding: 25px; overflow: auto;">
          ${def.content} 
          </div>
          `
          }
      ;
      document.body.appendChild(win);
      // Rendre la fenêtre draggable et ajouter les événements sur les boutons
      makeDraggable(win);
      if (windowId === "window5") {
      gravityEffect(win);
      }
      // si c'est la fenetre travaux on active les clics sur les dossiers
      if (windowId === "window2") {
        gerer_clic_dossier();
      }
      
    }

    /**
     * Rends une fenêtre draggable et ajoute les fonctionnalités
     * pour la mettre au premier plan, la fermer et l'agrandir.
     */
    function makeDraggable(element) {
      let isDragging = false;
      let offset = { x: 0, y: 0 };
      const titlebar = element.querySelector('.titlebar');

      // Démarrage du déplacement
      titlebar.addEventListener('mousedown', (e) => {
        isDragging = true;
        offset.x = e.clientX - element.offsetLeft;
        offset.y = e.clientY - element.offsetTop;
        element.style.zIndex = ++currentZIndex;
      });

      // Mettre la fenêtre au premier plan lors d'un clic n'importe où dessus
      element.addEventListener('mousedown', () => {
        element.style.zIndex = ++currentZIndex;
      });

      // Déplacement de la fenêtre
      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        if (element.classList.contains('maximized')) return;
        element.style.left = (e.clientX - offset.x) + 'px';
        element.style.top = (e.clientY - offset.y) + 'px';
      });

      // Fin du déplacement
document.addEventListener('mouseup', () => {
  isDragging = false;
  // Relance la gravité si c'est window5
  if (element.id === "window5") {
    gravityEffect(element);
  }
});

      // Bouton de fermeture
      const closeButton = element.querySelector('.close');
      closeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        element.remove();
      });

      // Bouton d'agrandissement (maximiser/restaurer)
      const maximizeButton = element.querySelector('.maximize');
      maximizeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        if (element.classList.contains('maximized')) {
          // Restaurer la taille et la position d'origine
          element.style.left = element.dataset.originalLeft;
          element.style.top = element.dataset.originalTop;
          element.style.width = element.dataset.originalWidth;
          element.style.height = element.dataset.originalHeight;
          element.classList.remove('maximized');
        } else {
          // Sauvegarder la position et la taille actuelles
          element.dataset.originalLeft = element.style.left;
          element.dataset.originalTop = element.style.top;
          element.dataset.originalWidth = element.style.width;
          element.dataset.originalHeight = element.style.height;
          // Maximiser la fenêtre
          element.style.left = 0;
          element.style.top = 0;
          element.style.width = "100%";
          element.style.height = "100%";
          element.classList.add('maximized');
        }
      });
    }

    // Événement sur les icônes du bureau pour ouvrir la fenêtre correspondante
    document.querySelectorAll('.desktop-icon').forEach(icon => {
      icon.addEventListener('click', () => {
        const windowId = icon.getAttribute('data-window');
        createWindow(windowId);
      });
    });

function gravityEffect(element) {
  let y = parseInt(element.style.top) || 0;
  let x = parseInt(element.style.left) || 0;
  let velocityY = 0;
  let velocityX = (Math.random() - 0.5) * 20; // vitesse horizontale aléatoire
  const gravity = 0.5;
  const friction = 0.98; // Ajoute de la friction (0.98 = 2% de perte à chaque frame)
  const ground = window.innerHeight - element.offsetHeight;
  const leftWall = 0;
  const rightWall = window.innerWidth - element.offsetWidth;

  function fall() {
    velocityY += gravity;
    y += velocityY;
    x += velocityX;

    // Friction horizontale
    velocityX *= friction;

    // Collision avec le sol
    if (y > ground) {
      y = ground;
      velocityY *= -0.5; // rebond vertical
      velocityX *= friction; // friction supplémentaire au sol
      if (Math.abs(velocityY) < 2) velocityY = 0;
    }

    // Collision avec les murs
    if (x < leftWall) {
      x = leftWall;
      velocityX *= -0.7; // rebond gauche
    }
    if (x > rightWall) {
      x = rightWall;
      velocityX *= -0.7; // rebond droite
    }

    element.style.top = y + 'px';
    element.style.left = x + 'px';

    if (y < ground || Math.abs(velocityY) > 0 || Math.abs(velocityX) > 0.5) {
      requestAnimationFrame(fall);
    }
  }
  fall();
}
function typeWriter(element, text, speed = 30) {
  element.innerHTML = "";
  let i = 0;
  function typing() {
    if (text.substr(i, 4) === "<br>") {
      element.innerHTML += "<br>";
      i += 4;
    } else {
      element.innerHTML += text.charAt(i);
      i++;
    }
    if (i < text.length) {
      setTimeout(typing, speed);
    }
  }
  typing();
}


// contenu des dossiers
const contenu_des_dossiers = {
  projet1: `
    <h2 id="-1-refonte-de-la-charte-graphique-et-des-outils-de-communication-"><strong>Refonte de la Charte Graphique et des Outils de Communication</strong></h2>
    <ul>
    <li><p><strong>Objectif :</strong> Moderniser l&#39;image du <strong>CIPDR</strong> et harmoniser l&#39;ensemble des communications internes et externes.</p>
    </li>
    <li><p><strong>Réalisations :</strong></p>
    <ul>
    <li><p>Création d&#39;une nouvelle <strong>Charte Graphique complète</strong> (couleurs, typographies, iconographie).</p>
    </li>
    <li><p>Conception et développement de <strong>modèles types de documents</strong> (Word, PowerPoint) pour standardiser la production.</p>
    </li>
    <li><p><strong>Coordination</strong> des travaux avec l&#39;ensemble des équipes du comité (réunions, validation).</p>
    </li>
    </ul>
    </li>
    </ul>
  `,
  projet2: `
    <h2 id="-2-cr-ation-de-vid-os-motion-design-ducatives-"><strong>Création de Vidéos Motion Design Éducatives</strong></h2>
    <ul>
    <li><p><strong>Objectif :</strong> Soutenir un projet de diffusion lors du <strong>Service National Universel (SNU)</strong> en expliquant des concepts clés.</p>
    </li>
    <li><p><strong>Réalisations :</strong></p>
    <ul>
    <li><p>Conception et production de <strong>vidéos Motion Design</strong> expliquant les valeurs de la République Française, la laïcité et la prévention de la radicalisation.</p>
    </li>
    <li><p>Gestion complète du processus de création : rédaction de <strong>scripts</strong>, élaboration du <strong>storyboard</strong> et production de l&#39;<strong>animatique</strong>.</p>
    </li>
    <li><p>Collaboration étroite avec le service concerné pour assurer l&#39;exactitude des messages.</p>
    </li>
    </ul>
    </li>
    </ul>

  `,
  projet3: `
    <h2 id="-gestion-de-site-web-et-production-de-contenu-ex-magasin-de-meubles-"><strong>Gestion de Site Web et Production de Contenu (Ex. : Magasin de Meubles)</strong></h2>
    <ul>
    <li><p><strong>Mise à Jour du Site Web et Optimisation (WordPress)</strong></p>
    <ul>
    <li><p><strong>Refonte technique et graphique</strong> du site sous <strong>WordPress</strong> en utilisant les constructeurs <strong>Elementor</strong> et <strong>Divi</strong>.</p>
    </li>
    <li><p>Prise de <strong>photographies de meubles</strong> et <strong>retouche professionnelle</strong> pour l&#39;intégration sur le site.</p>
    </li>
    </ul>
    </li>
    <li><p><strong>Production Vidéo pour les Réseaux Sociaux</strong></p>
    <ul>
    <li>Création de <strong>vidéos promotionnelles</strong> pour les plateformes sociales afin de dynamiser l&#39;activité et l&#39;engagement client.</li>
    </ul>
    </li>
    </ul>

  `
  ,
  projet4: `
    <h2 id="-agence-seo-gestion-de-client-le-et-production-graphique-ex-agence-seo-"><strong>Agence SEO - Gestion de Clientèle et Production Graphique (Ex. : Agence SEO)</strong></h2>
    <p>Une expérience B2B centrée sur la relation client et la réalisation de supports graphiques pour entrepreneurs.</p>
    <ul>
    <li><p><strong>Gestion de la Relation Client et Traitement des Demandes</strong></p>
    <ul>
    <li>Interface directe avec les <strong>clients (auto-entrepreneurs)</strong> pour comprendre et traduire leurs besoins graphiques.</li>
    </ul>
    </li>
    <li><p><strong>Création de Supports Graphiques B2B</strong></p>
    <ul>
    <li>Conception de diverses maquettes (sites web, cartes de visite, logos, bannières publicitaires) et traitement de toute autre <strong>demande graphique spécifique</strong>.</li>
    </ul>
    </li>
    </ul>
  `,
  projet5:``,
};

// fonction pour gerer les clics sur les dossiers
function gerer_clic_dossier() {
  const tous_les_dossiers = document.querySelectorAll('.dossier_item');
  
  tous_les_dossiers.forEach(dossier => {
    dossier.addEventListener('click', function() {
      const nom_du_contenu = this.getAttribute('data-content');
      const zone_de_contenu = document.querySelector('.zone_affichage_contenu');
      
      if (zone_de_contenu && contenu_des_dossiers[nom_du_contenu]) {
        zone_de_contenu.innerHTML = contenu_des_dossiers[nom_du_contenu];
      }
      
      // enlever la classe active de tous les dossiers
      tous_les_dossiers.forEach(d => d.classList.remove('dossier_actif'));
      // ajouter la classe active au dossier cliqué
      this.classList.add('dossier_actif');
    });
  });
}

function openTab(evt, tabName) {
      var i, tabcontent, tabbuttons;
      tabcontent = document.getElementsByClassName("tab-content");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tabbuttons = document.getElementsByClassName("tab-button");
      for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
      }
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.className += " active";
    }

// desktop area effect
    
const desktop = document.getElementById('desktop-area');
let rectangle = null; 
let isDrawing = false; 
let startX, startY; 
const icons = document.querySelectorAll('.ico');

desktop.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;

    desktop.classList.add('selection-active');

    isDrawing = true;
    startX = e.clientX;
    startY = e.clientY;

    if (!rectangle) {
        rectangle = document.createElement('div');
        rectangle.id = 'selection-rectangle';
        desktop.appendChild(rectangle);
    }

    icons.forEach(icon => icon.style.pointerEvents = 'none');

    rectangle.style.display = 'block';
    rectangle.style.left = startX + 'px';
    rectangle.style.top = startY + 'px';
    rectangle.style.width = '0px';
    rectangle.style.height = '0px';
});

document.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;

    const currentX = e.clientX;
    const currentY = e.clientY;

    const width = Math.abs(currentX - startX);
    const height = Math.abs(currentY - startY);
    const left = Math.min(startX, currentX);
    const top = Math.min(startY, currentY);

    rectangle.style.width = width + 'px';
    rectangle.style.height = height + 'px';
    rectangle.style.left = left + 'px';
    rectangle.style.top = top + 'px';

});

document.addEventListener('mouseup', () => {
    if (!isDrawing) return;

    isDrawing = false;
    
    desktop.classList.remove('selection-active');
    
    if (rectangle) {
        rectangle.style.display = 'none';
    }

    icons.forEach(icon => icon.style.pointerEvents = 'auto');
});