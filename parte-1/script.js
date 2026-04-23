    (function () {
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

      const header = document.querySelector('.navbar');
      const navToggle = document.querySelector('.nav-toggle');
      const navPanel = document.querySelector('.nav-panel');

      if (header && navToggle && navPanel) {
        const closeMenu = function () {
          header.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.setAttribute('aria-label', 'Open menu');
        };

        navToggle.addEventListener('click', function () {
          const isOpen = header.classList.toggle('is-open');
          navToggle.setAttribute('aria-expanded', String(isOpen));
          navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        });

        navPanel.querySelectorAll('a').forEach(function (link) {
          link.addEventListener('click', closeMenu);
        });

        document.addEventListener('click', function (event) {
          if (window.innerWidth > 768) { return; }
          if (!header.classList.contains('is-open')) { return; }
          if (header.contains(event.target)) { return; }
          closeMenu();
        });

        window.addEventListener('resize', function () {
          if (window.innerWidth > 768) {
            closeMenu();
          }
        });
      }
    })();
