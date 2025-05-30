/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.remove('show');
    }
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);
        if (sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

/*===== MODAL FOR WORK IMAGES =====*/
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const workImages = document.querySelectorAll('.work__img img');
let currentImageIndex = 0;
workImages.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        e.preventDefault();
        currentImageIndex = index;
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});
if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + workImages.length) % workImages.length;
        modalImg.src = workImages[currentImageIndex].src;
    });
}
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % workImages.length;
        modalImg.src = workImages[currentImageIndex].src;
    });
}
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

/*===== GALLERY SCROLLING =====*/
const workContainer = document.getElementById('workContainer');
const galleryPrevBtn = document.getElementById('galleryPrevBtn');
const galleryNextBtn = document.getElementById('galleryNextBtn');
if (workContainer && galleryPrevBtn && galleryNextBtn) {
    const scrollAmount = 320; // Adjust based on image width + gap
    galleryPrevBtn.addEventListener('click', () => {
        workContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    galleryNextBtn.addEventListener('click', () => {
        workContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}