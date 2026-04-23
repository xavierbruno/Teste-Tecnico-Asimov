const TRANSLATIONS = {
    pt: {
        htmlLang: "pt-BR",
        langLabel: "EN",
        langTitle: "Translate to English",
        nav: {
            home: "Curso",
            about: "Comunidade",
            skills: "Projetos",
            experience: "Certificado",
            projects: "FAQ",
            contact: "Suporte"
        },
        heroPill: "CURSO PYTHON + IA",
        heroTitle:
            'Aprenda Python do zero e construa projetos reais com <span class="hero-highlight">IA</span>',
        heroDescription:
            "O curso mais pr\u00E1tico do Brasil para quem quer entrar em tecnologia sem enrola\u00E7\u00E3o.",
        heroBullets: [
            "+40 horas de conte\u00FAdo direto ao ponto",
            "Projetos com Python + IA desde o m\u00F3dulo 1",
            "Suporte da comunidade com +20.000 alunos",
            "Certificado reconhecido pelo mercado"
        ],
        primaryCta: "Quero come\u00E7ar agora",
        secondaryCta: "Ver o que vou aprender",
        heroProof: "<strong>+20.000 alunos</strong> aprendendo com a comunidade Asimov.",
        badges: {
            pythonTitle: "Python + IA",
            pythonText: "Projetos pr\u00E1ticos desde a primeira trilha",
            communityTitle: "Comunidade ativa",
            communityText: "+20.000 alunos para evoluir com voc\u00EA",
            certificateTitle: "Certificado",
            certificateText: "Reconhecido pelo mercado e focado em aplica\u00E7\u00E3o real"
        },
        footerBuilt: "Feito com paix\u00E3o e c\u00F3digo por",
    },
    en: {
        htmlLang: "en",
        langLabel: "PT",
        langTitle: "Translate to Portuguese",
        nav: {
            home: "Course",
            about: "Community",
            skills: "Projects",
            experience: "Certificate",
            projects: "FAQ",
            contact: "Support"
        },
        heroPill: "PYTHON + AI COURSE",
        heroTitle:
            'Learn Python from scratch and build real projects with <span class="hero-highlight">AI</span>',
        heroDescription:
            "Brazil's most practical course for anyone who wants to break into tech without the fluff.",
        heroBullets: [
            "40+ hours of straight-to-the-point content",
            "Projects with Python + AI from module 1",
            "Community support with 20,000+ students",
            "Market-recognized certificate"
        ],
        primaryCta: "I want to start now",
        secondaryCta: "See what I'll learn",
        heroProof: "<strong>20,000+ students</strong> learning with the Asimov community.",
        badges: {
            pythonTitle: "Python + AI",
            pythonText: "Hands-on projects from the very first track",
            communityTitle: "Active community",
            communityText: "20,000+ students to grow with you",
            certificateTitle: "Certificate",
            certificateText: "Recognized by the market and focused on real-world application"
        },
        footerBuilt: "Built with passion and code by",
    }
};

const AppState = {
    currentLang: normalizeLanguage(localStorage.getItem("portfolio-lang")),
    currentTheme: localStorage.getItem("portfolio-theme") || "dark",
    isMenuOpen: false
};

document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(AppState.currentLang);
    applyTheme(AppState.currentTheme);
    bindEvents();
    generateParticles();
    updateHeaderOnScroll();
    updateActiveNavLink();
    startLoader();
});

function bindEvents() {
    const langToggle = document.getElementById("langToggle");
    const themeToggle = document.getElementById("themeToggle");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    if (langToggle) {
        langToggle.addEventListener("click", () => {
            const nextLang = AppState.currentLang === "en" ? "pt" : "en";
            applyLanguage(nextLang);
            localStorage.setItem("portfolio-lang", nextLang);
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const nextTheme = AppState.currentTheme === "dark" ? "light" : "dark";
            applyTheme(nextTheme);
            localStorage.setItem("portfolio-theme", nextTheme);
        });
    }

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            setMobileMenuState(!AppState.isMenuOpen);
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (!targetSection) {
                return;
            }

            event.preventDefault();
            const headerHeight = document.getElementById("header")?.offsetHeight || 0;
            const targetTop = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetTop,
                behavior: "smooth"
            });

            setMobileMenuState(false);
        });
    });

    document.addEventListener("click", (event) => {
        const navMenu = document.getElementById("navMenu");
        const menuToggleButton = document.getElementById("menuToggle");

        if (!AppState.isMenuOpen || !navMenu || !menuToggleButton) {
            return;
        }

        if (!navMenu.contains(event.target) && !menuToggleButton.contains(event.target)) {
            setMobileMenuState(false);
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1100) {
            setMobileMenuState(false);
        }
    });

    window.addEventListener("scroll", () => {
        updateHeaderOnScroll();
        updateActiveNavLink();
        updateParallax();
    });
}

function normalizeLanguage(lang) {
    if (lang === "en" || lang === "ar") {
        return "en";
    }

    return "pt";
}

function setText(selector, text) {
    const element = document.querySelector(selector);

    if (element) {
        element.textContent = text;
    }
}

function setHTML(selector, html) {
    const element = document.querySelector(selector);

    if (element) {
        element.innerHTML = html;
    }
}

function applyLanguage(lang) {
    const safeLang = normalizeLanguage(lang);
    const html = document.documentElement;
    const body = document.body;
    const copy = TRANSLATIONS[safeLang];

    AppState.currentLang = safeLang;
    html.lang = copy.htmlLang;
    html.dir = "ltr";
    body.dataset.lang = safeLang;

    setText('.nav-link[href="#home"] .nav-text', copy.nav.home);
    setText('.nav-link[href="#about"] .nav-text', copy.nav.about);
    setText('.nav-link[href="#skills"] .nav-text', copy.nav.skills);
    setText('.nav-link[href="#experience"] .nav-text', copy.nav.experience);
    setText('.nav-link[href="#projects"] .nav-text', copy.nav.projects);
    setText('.nav-link[href="#contact"] .nav-text', copy.nav.contact);

    setText(".hero-pill", copy.heroPill);
    setHTML(".hero-name", copy.heroTitle);
    setText(".hero-description", copy.heroDescription);

    document.querySelectorAll(".hero-bullet span:last-child").forEach((element, index) => {
        element.textContent = copy.heroBullets[index] || "";
    });

    setText(".hero-buttons .btn-primary span", copy.primaryCta);
    setText(".hero-buttons .btn-secondary span", copy.secondaryCta);
    setHTML(".hero-proof p", copy.heroProof);

    setText(".badge-1 .badge-title", copy.badges.pythonTitle);
    setText(".badge-1 .badge-libs", copy.badges.pythonText);
    setText(".badge-2 .badge-title", copy.badges.communityTitle);
    setText(".badge-2 .badge-libs", copy.badges.communityText);
    setText(".badge-3 .badge-title", copy.badges.certificateTitle);
    setText(".badge-3 .badge-libs", copy.badges.certificateText);

    setText(".footer-built", copy.footerBuilt);
    setText(".footer-by-text", copy.footerBy);

    const langToggle = document.getElementById("langToggle");
    if (langToggle) {
        langToggle.title = copy.langTitle;
        langToggle.setAttribute("aria-label", copy.langTitle);
    }

    const langLabel = document.querySelector("#langToggle .lang-text");
    if (langLabel) {
        langLabel.textContent = copy.langLabel;
    }
}

function applyTheme(theme) {
    const safeTheme = theme === "light" ? "light" : "dark";
    const body = document.body;
    const themeIcon = document.querySelector("#themeToggle i");

    AppState.currentTheme = safeTheme;
    body.dataset.theme = safeTheme;

    if (themeIcon) {
        themeIcon.className = safeTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }
}

function setMobileMenuState(isOpen) {
    const navMenu = document.getElementById("navMenu");
    const menuToggle = document.getElementById("menuToggle");

    AppState.isMenuOpen = Boolean(isOpen);

    if (navMenu) {
        navMenu.classList.toggle("active", AppState.isMenuOpen);
    }

    if (menuToggle) {
        menuToggle.classList.toggle("active", AppState.isMenuOpen);
        menuToggle.setAttribute("aria-expanded", String(AppState.isMenuOpen));
    }
}

function updateHeaderOnScroll() {
    const header = document.getElementById("header");
    if (!header) {
        return;
    }

    header.classList.toggle("scrolled", window.scrollY > 20);
}

function updateActiveNavLink() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = [...document.querySelectorAll("section[id]")];

    if (!sections.length) {
        return;
    }

    const headerHeight = document.getElementById("header")?.offsetHeight || 0;
    const scrollMarker = window.scrollY + headerHeight + 40;

    let currentId = sections[0].id;

    sections.forEach((section) => {
        if (scrollMarker >= section.offsetTop) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });
}

function generateParticles() {
    const container = document.getElementById("particles");
    const symbols = ["{", "}", "[", "]", "<", ">", "/", "*", "=", "+", ";", "#", "@", "$"];

    if (!container || container.children.length) {
        return;
    }

    const count = window.innerWidth < 720 ? 12 : 20;

    for (let index = 0; index < count; index += 1) {
        const particle = document.createElement("span");
        particle.className = "particle";
        particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${12 + Math.random() * 10}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.fontSize = `${0.85 + Math.random() * 0.7}rem`;
        container.appendChild(particle);
    }
}

function startLoader() {
    const loader = document.getElementById("loader");
    const loaderBar = document.getElementById("loaderBar");
    const loaderPercent = document.getElementById("loaderPercent");
    const minimumLoaderDuration = 1500;
    const completionPause = 160;

    if (!loader || !loaderBar || !loaderPercent) {
        return;
    }

    const loaderStartedAt = performance.now();
    let percent = 0;
    const interval = window.setInterval(() => {
        percent = Math.min(100, percent + 4);
        loaderBar.style.width = `${percent}%`;
        loaderPercent.textContent = `${percent}%`;

        if (percent < 100) {
            return;
        }

        window.clearInterval(interval);
        const elapsed = performance.now() - loaderStartedAt;
        const remainingDelay = Math.max(completionPause, minimumLoaderDuration - elapsed);

        window.setTimeout(() => {
            loader.classList.add("hidden");
        }, remainingDelay);
    }, 35);

    loader.addEventListener("transitionend", () => {
        loader.remove();
    }, { once: true });
}

function updateParallax() {
    const profileImage = document.getElementById("profileImage");
    const offset = Math.min(window.scrollY * 0.18, 50);

    if (profileImage) {
        profileImage.style.transform = `translateY(${offset}px)`;
    }
}
