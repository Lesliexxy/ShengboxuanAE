(function () {
  var body = document.body;
  var langButtons = document.querySelectorAll('#langSwitch button');
  var stored = localStorage.getItem('sbx-lang');

  function setLang(lang) {
    body.classList.remove('lang-zh', 'lang-en');
    body.classList.add('lang-' + lang);
    langButtons.forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    localStorage.setItem('sbx-lang', lang);
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.dataset.lang);
    });
  });

  if (stored === 'en' || stored === 'zh') {
    setLang(stored);
  }

  // Header scroll state
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  var navBackdrop = document.getElementById('navBackdrop');

  function setNavOpen(isOpen) {
    mainNav.classList.toggle('open', isOpen);
    navToggle.classList.toggle('open', isOpen);
    navBackdrop.classList.toggle('open', isOpen);
    header.classList.toggle('nav-open', isOpen);
  }

  navToggle.addEventListener('click', function () {
    setNavOpen(!mainNav.classList.contains('open'));
  });
  navBackdrop.addEventListener('click', function () {
    setNavOpen(false);
  });
  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setNavOpen(false);
    });
  });

  // Lightbox
  var lightbox = document.getElementById('lightbox');
  var lightboxInner = document.getElementById('lightboxInner');
  var lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(type, src) {
    lightboxInner.innerHTML = '';
    var el;
    if (type === 'video') {
      el = document.createElement('video');
      el.src = src;
      el.controls = true;
      el.autoplay = true;
    } else {
      el = document.createElement('img');
      el.src = src;
    }
    lightboxInner.appendChild(el);
    lightbox.classList.add('open');
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightboxInner.innerHTML = '';
  }

  document.querySelectorAll('.media-item').forEach(function (item) {
    item.addEventListener('click', function () {
      openLightbox(item.dataset.type, item.dataset.src);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();
