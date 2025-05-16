
    // Gestion du z-index pour placer la fenêtre active devant les autres
    let currentZIndex = 1;

    // Définitions des fenêtres (titre, contenu et position initiale)
    const windowDefinitions = {
      window1: {
        title: "📄 Expériences et Formations",
        content: `
        <h1 class="code-line" data-line-start="0" data-line-end="1">
<span lang="fr" dir="ltr">Expériences</span></h1>
<p><span lang="fr" dir="ltr">✣ Août 2023 ➝ Août 2025 (Alternance + CDI)</span>
</p>
<h5><span lang="fr" dir="ltr">Designer graphique 360 - Ministère de l’Intérieur - Paris</span>
</h5>
<ul><li><span lang="fr" dir="ltr">Motion design ( Storyboard, Animation, Montage )</span>
</li>
<li><span lang="fr" dir="ltr">Graphisme ( Illustration, Infographie, Prototypage )</span>
</li>
<li><span lang="fr" dir="ltr">Maquettage ( Mise en page, Modèles types, Print )</span>
</li>
</ul>
<p>
&nbsp;
</p>
<p><span lang="fr" dir="ltr">✣ Août 2022 ➝ Août 2023 (Alternance)</span>
</p>
<h5><span lang="fr" dir="ltr">Designer Multimédia - Stooly - Paris</span>
</h5>
<ul>
<li><span lang="fr" dir="ltr">Photo ( Prise de vue, Retouche photo, Création Product shot )</span>
</li>
<li><span lang="fr" dir="ltr">Mise à jo</span><span dir="ltr">u</span><span lang="fr" dir="ltr">r des produits sur le site web ( Wordpress )&nbsp;</span>
</li>
</ul>
<p>
&nbsp;
</p>
<p><span lang="fr" dir="ltr">✣ Mai 2021 ➝ Août 2022 (Stage + Alternance)</span>
</p>
<h5><span lang="fr" dir="ltr">Designer Multimédia - Search Artisan - Noisy-le-Grand</span>
</h5>
<ul>
<li><span lang="fr" dir="ltr">Graphisme ( Illustration, Infographie, Retouche photo )</span>
</li>
<li><span lang="fr" dir="ltr">Initiation CMS et outils SEO ( Wordpress, Semrush, Formations )&nbsp;</span>
</li>
<li><span lang="fr" dir="ltr">Motion design pour réseaux sociaux &nbsp;</span>
</li>
</ul>`
        ,
        left: "50px",
        top: "50px",
        width: "auto",
        height: "auto",
        padding: "25px",
        overflow: "scroll"
      },
      window2: {
        title: "📂 Travaux",
        content: "Contenu de la fenêtre 2.",
        left: "200px",
        top: "150px",
        width: "auto",
        height: "auto",
        padding: "25px",
        overflow: "scroll"
      },
      window3: {
        title: "📎 Extras",
        content: `
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/3VKfPGNKGu5VfJmM09AEO9?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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
        title: "✉️ Contact",
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
        title: "💿 Ball.exe",
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
        title: "🖥️ Terminal",
        content: `
        Nom: Pierre-Henri Sauvoux <br>
        Profession: Designer Graphique <br>
        Diplôme: Mastère Directeur Artistique <br>


        `,
        left: "350px",
        top: "250px",
        width: "auto",
        height: "auto",
        padding: "0px",
        overflow: "scroll",
        FontFamily: "Space Mono",
        backgroundColor: "#202A3E"
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
            <button class="maximize">⦿</button>
            <button class="close">◉</button>
          </div>
        </div>
        <div class="content" style="padding: 10px; font-size: 10px; text-align: center;">
          ${def.content}
        </div>
      `
    } 
      if (windowId === "window6") { 
        win.innerHTML = `
        <div class="titlebar">
          <span>${def.title}</span>
          <div class="window-controls">
            <button class="maximize">⦿</button>
            <button class="close">◉</button>
          </div>
        </div>
        <div class="content" style="padding: 25px; font-family: 'Space Mono'; color: #AFE6E4;">
        </div>
        `
        const contentDiv = win.querySelector('.content');
  typeWriter(contentDiv, `Profil >>>>         <br>
    Nom: Pierre-Henri Sauvoux <br>
    Profession: Designer Graphique <br>
    Diplôme: Mastère Directeur Artistique Numérique<br>
    _________<br>
    <br>
    >_
    `);
    } else { 
        win.innerHTML = `
        <div class="titlebar">
          <span>${def.title}</span>
          <div class="window-controls">
            <button class="maximize">⦿</button>
            <button class="close">◉</button>
          </div>
        </div>
        <div class="content" style="padding: 25px;">
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