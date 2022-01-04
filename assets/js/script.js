/*==================== Affichage/Masquage du menu ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== Affichage du menu =====*/
// si le bouton à bascule est visible 
if (navToggle) {
    // lorsqu'un clic sur le bouton est détecté 
    navToggle.addEventListener('click', () => {
        // ajout de la classe "show-menu" à la div contenant la classe "nav__menu" 
        navMenu.classList.add('show-menu');
    })
}

/*===== Masquage du menu =====*/
// si le bouton de fermeture du menu est visible
if (navClose) {
    // lorsqu'un clic sur le bouton est détecté
    navClose.addEventListener('click', () => {
        // on supprime de la liste "show-menu" (retour à l'affichage initial)
        navMenu.classList.remove('show-menu');
    })
}



/*==================== Supression du menu mobile ====================*/
// initialisation d'une variable qui retourne le premier élément correspondant à la classe ".nav__link"
const navLink = document.querySelectorAll('.nav__link');

// fonction qui récupère et masque le menu
function linkAction(){
    // récupération du menu
    const navMenu = document.getElementById('nav-menu');
    // Masquage du menu
    navMenu.classList.remove('show-menu');
}
// Masquage du menu à chaque clic sur un lien
navLink.forEach(n => n.addEventListener('click', linkAction));



/*==================== Ecriture du métier "Développeur d'applications web et mobile, ..." ====================*/
var typed = new Typed(".typing", {
    strings: ["Concepteur développeur d'applications", "Ingénieur en systèmes automatisés"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



/*==================== Accordéon montrant la liste des compétences ====================*/
// initialisation des constantes qui récupèrent le contenu d'une liste de compétence 
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

// fonction qui gère l'ouverture et la fermeture de chaque liste de compétences
function toggleSkills() {
    // initialisation d'une variable qui sélectionne le noeud parent du DOM
    let itemClass = this.parentNode.className;

    // pour chaque contenu des liste de compétences
    for (i = 0; i < skillsContent.length; i++) {
        // fermeture des listes ouvertes
        skillsContent[i].className = 'skills__content skills__close';
        // ouverture de la liste sélectionnée
        this.parentNode.className = 'skills__content skills__open';
    }

    // si le noeud parent (la liste sélectionnée) est déjà en position ouverte
    if (itemClass === 'skills__content skills__open') {
        // fermeture de ce dernier
        this.parentNode.className = 'skills__content skills__close';
    }
}

// A chaque clic sur un entête (élément correspondant à la classe "skills__header") de la liste
skillsHeader.forEach((el) => {
    // exécution de la fonction
    el.addEventListener('click', toggleSkills);
})



/*==================== Configuration de l'affichage des données suivant le parcours sélectionné ====================*/
// initialisation et récupération des boutons de sélection des parcours "data-target" et de leur donnée "data-content"
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

// à chaque clic sur un bouton de parcours
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // récupération du premier parcours sélectionné
        const target = document.querySelector(tab.dataset.target);

        // pour chaque item des sections de qualification
        tabContents.forEach(tabContent => {
            // suppression de la qualification active
            tabContent.classList.remove('qualification__active');
        })
        // ajout des qualifications du parcours sélectionné
        target.classList.add('qualification__active');

        // Pour chaque nouveau parcours sélectionné 
        // **nécessaire pour adapter la couleur des boutons suivant le parcours sélectionné**
        tabs.forEach(tab => {
            // suppression de l'ancienne sélection
            tab.classList.remove('qualification__active');
        })
        // affichage de la nouvelle sélection
        tab.classList.add('qualification__active');
    })
})



/*==================== Activation du modal de détails des expériences professionnelles ====================*/
// initialisation et récupération des modaux et boutons suivant leurs classes"
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

// fonction qui rend visible un modal suivant sa sélection
let modal = function(modalClick) {
    // ajout dans une liste du modal actif
    modalViews[modalClick].classList.add('active-modal');
}

// fonction qui gère l'ouverture de chaque modal suivant son clic (sa sélection)
modalBtns.forEach((modalBtn, i) => {
    // à chaque détection d'un clic sur le bouton d'ouverture d'un modal
    modalBtn.addEventListener('click', () => {
        // exécution de la fonction qui rend visible le modal sélectionné
        modal(i);
    })
})

// fonction qui gère la fermeture de chaque modal suivant son clic (sa sélection)
modalCloses.forEach((modalClose) => {
    // à chaque détection d'un clic sur le bouton de fermeture d'un modal
    modalClose.addEventListener('click', () => {
        // pour chaque modal
        modalViews.forEach((modalView) => {
            // suppresion du modal visible (retour à son état invisible)
            modalView.classList.remove('active-modal');
        })
    })
})



/*==================== Configuration du carousel d'images (SWIPER) pour le portfolio ====================*/
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    loop: true,
    keyboard: true,
});



/*==================== Apparition du bouton retour haut page ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // si la position de la barre de défilement est supérieure ou égale à 560px
    if(this.scrollY >= 160) {
        // ajout de la classe qui rend visible le bouton
        scrollUp.classList.add('show-scroll'); 
    } else {
        // retour au style initial (bouton invisible)
        scrollUp.classList.remove('show-scroll');
    } 
}

window.addEventListener('scroll', scrollUp);



/*==================== Mode sombre sur toute la page ====================*/
// récupération du bouton de contrôle du thème (mode) selon son id
const themeButton = document.getElementById('theme-button');

// initialisation et récupération des modes suivant leur classe
const darkTheme = 'dark-theme';  // thème sombre
const iconTheme = 'uil-sun';     // thème clair

// récupération du thème sélectionné par l'utilisateur
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// récupération du thème courant de l'interface
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// si un thème est sélectionné
if (selectedTheme) {
  // s'il est sombre, on l'affiche sinon on le retire (ainsi que son icône)
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// lorqu'un clic est détecté sur un des icônes des thèmes
themeButton.addEventListener('click', () => {
    // on ajoute ou on retire le thème sombre et son icône
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // on sauvegarde le thème qui a été donc choisi par l'utilisateur
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})



/*==================== Fonction qui gère l'affichage d'une page en fonction du lien cliqué (navigation par hachage) ====================*/
$(document).on('click', '.nav__menu a', function(e) {
    // si l'URL de la page correspond au chemin d'accès du répertoire du lien demandé
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        // déclaration des variables de hachage
        var hash = this.hash; // propriété qui renvoie la partie ancre de l'URL (renvoie "#home" par exemple)
        var target = $(hash); // récupération du hash de taille fixe en sortie
        // si la longueur du hash est correcte
        if (target.length) {
            // annulation de l'action par défaut (navigation) du clic
            e.preventDefault();

            // si la page correspond à un lien du menu de navigation (Gestion de l'activation des liens)
            if ($(this).parents('.nav__menu').length) {
                // on retire la classe (active-link) du lien parent (en l'occurence de "home")
                $('.active-link').removeClass('active-link');
                // on attribut au lien descendant correspondant à la page la classe "active-link"
                $(this).closest('li').addClass('active-link');
            }

            // gestion de l'affichage de la page d'accueil
            if (hash == '#header') {
                $('#header').removeClass('header-top');
                $("section").removeClass('section-show');
                $("footer").removeClass('footer-show');
    
                return;
            }

            // si on clique sur un lien du menu de navigation (Gestion de l'affichage des sections)
            if (!$('#header').hasClass('header-top')) {

                // on ajoute la classe "header-top" à l'ID "header" (affichage du contenu de "#header.header-top")
                $('#header').addClass('header-top');

                // affichage du pied de page
                $("footer").addClass('footer-show');

                // fonction timer pour gérer l'ancrage de la page
                setTimeout(function() {
                    // retrait de la classe "section-show" (rendre invisible)
                    $("section").removeClass('section-show');
                    // ajout de cette dernière dans le hachage (apparition de la page)
                    $(hash).addClass('section-show');
                }, 350);
            } else {
                // sinon on retire toutes les sections (masquage)
                $("section").removeClass('section-show');
                // on leur ajoute la classe "section-show" et on les stocke dans le hachage
                $(hash).addClass('section-show');
            }

            // fixation de la barre de navigation en haut de page à chaque nouvelle section
            $('html, body').animate({
                scrollTop: 0
            }, 350);

        return false;
        }
    }
});
