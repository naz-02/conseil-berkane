document.addEventListener('DOMContentLoaded', () => {
    loadHeaderFooter();
    loadNews();
    showSlides(slideIndex);
});

function loadHeaderFooter() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.text();
        })
        .then(data => {
            const mainDocHeaderPlaceholder = document.querySelector('body > #header-placeholder');
            if (mainDocHeaderPlaceholder) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;
                mainDocHeaderPlaceholder.replaceWith(...tempDiv.children);
                
                initializeHeaderScripts();
                const savedLang = localStorage.getItem('language') || 'fr';
                setLanguage(savedLang);
            }
        });

    fetch('footer.html')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.text();
        })
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;
                footerPlaceholder.replaceWith(...tempDiv.children);

                const anneeElement = document.getElementById('annee');
                if (anneeElement) {
                    anneeElement.textContent = new Date().getFullYear();
                }
            }
        });
}

function initializeHeaderScripts() {
    // ... (rest of the header initialization code remains the same)
    const menuButton = document.getElementById('toggleMenu');
    const mainNav = document.getElementById('main-nav');

    if (menuButton && mainNav) {
        menuButton.addEventListener('click', () => {
            mainNav.classList.toggle('mobile-menu-open');
            const isExpanded = mainNav.classList.contains('mobile-menu-open');
            menuButton.setAttribute('aria-expanded', isExpanded);
        });
    }

    const dropdownTriggers = document.querySelectorAll('#main-nav .dropdown > a');
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            if (window.getComputedStyle(menuButton).display === 'block') {
                if (trigger.getAttribute('href') === '#') {
                    event.preventDefault();
                    trigger.parentElement.classList.toggle('submenu-open');
                }
            }
        });
    });

    const allLangButtons = document.querySelectorAll('.lang-btn');
    allLangButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetLang = e.target.id.includes('fr') ? 'fr' : 'ar';
            setLanguage(targetLang);
        });
    });

    initializeSearch('header-search-input');
    setActiveNavLink();
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('#main-nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active-page');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active-page');
            link.removeAttribute('aria-current');
        }
    });
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    const elements = document.querySelectorAll('[data-fr], [data-fr-alt], [data-fr-aria-label]');
    elements.forEach(el => {
        const translation = el.getAttribute(`data-${lang}`);
        if (translation) {
            el.innerHTML = translation;
        }

        const placeholderTranslation = el.getAttribute(`data-${lang}-placeholder`);
        if (placeholderTranslation) {
            el.placeholder = placeholderTranslation;
        }

        const altTranslation = el.getAttribute(`data-${lang}-alt`);
        if (altTranslation) {
            el.alt = altTranslation;
        }

        const ariaLabelTranslation = el.getAttribute(`data-${lang}-aria-label`);
        if (ariaLabelTranslation) {
            el.setAttribute('aria-label', ariaLabelTranslation);
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.id.includes('fr') ? 'fr' : 'ar';
        btn.classList.toggle('active', btnLang === lang);
    });
}

function initializeSearch(inputId) {
    const handleSearch = (event) => {
        if (event.key === 'Enter' && event.target.value) {
            window.location.href = `search.html?q=${encodeURIComponent(event.target.value)}`;
        }
    };
    const searchInput = document.getElementById(inputId);
    if (searchInput) {
        searchInput.addEventListener('keyup', handleSearch);
    }
}

function loadNews() {
    fetch('news.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.querySelector('.grille-actualites');
            if (newsContainer) {
                let newsHtml = '';
                data.forEach(article => {
                    newsHtml += `
                        <article class="card-actu">
                            <div class="card-actu-content">
                                <span class="tag-actu ${article.tag_class}" data-fr="${article.tag}" data-ar="${article.tag_ar}">${article.tag}</span>
                                <h3 data-fr="${article.title}" data-ar="${article.title_ar}">${article.title}</h3>
                                <p data-fr="${article.content}" data-ar="${article.content_ar}">${article.content}</p>
                                <a href="${article.link}" class="read-more" data-fr="${article.link_text}" data-ar="${article.link_text_ar}">${article.link_text}</a>
                            </div>
                        </article>
                    `;
                });
                newsContainer.innerHTML = newsHtml;
                const savedLang = localStorage.getItem('language') || 'fr';
                setLanguage(savedLang);
            }
        });
}

// --- SLIDESHOW SCRIPT ---
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].className = slides[i].className.replace(" active-slide", "");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].className += " active-slide";
  dots[slideIndex-1].className += " active";
}

