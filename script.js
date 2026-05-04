(function () {
  const EMAILJS_USER_ID = 'ID27XBMUYROT2P-Sy';
  const EMAILJS_SERVICE_ID = 'service_t6gttvr';
  const TEMPLATE_TO_YOU = 'template_en6yj23';
  const TEMPLATE_AUTO_REPLY = 'template_2luf90z';

  const translations = {
    ID: {
      loading: 'Memuat...',
      nav_home: 'Beranda',
      nav_about: 'Tentang',
      nav_stack: 'Stack',
      nav_projects: 'Proyek',
      nav_contact: 'Kontak',
      nav_cta: 'Diskusi',
      hero_badge: 'Available for modern web builds',
      hero_title_1: 'Ship fast.',
      hero_title_2: 'Scale clean.',
      hero_desc: 'Saya membangun web app, API, dan produk digital yang terasa cepat, rapi, dan siap dipakai dari mobile sampai desktop.',
      hero_btn_projects: 'Lihat proyek',
      about_kicker: 'Profile',
      about_title: 'Developer yang suka membuat produk terasa sederhana, walau mesinnya serius.',
      about_desc_1: 'Fokus saya ada di pengembangan web end-to-end: tampilan yang rapi, backend yang jelas, database yang tertata, dan fitur yang nyaman dipakai.',
      about_desc_2: 'Saya terbiasa memakai HTML, CSS, JavaScript, TypeScript, PHP, Laravel, Node.js, Tailwind CSS, dan MySQL untuk membuat website maupun aplikasi web.',
      stack_kicker: 'Languages',
      stack_title: 'Bahasa dan teknologi yang sering saya pakai.',
      stack_cta: 'Mulai diskusi',
      projects_kicker: 'Selected Work',
      projects_title: 'Project pilihan dengan karakter produk yang beda-beda.',
      projects_github: 'Repositori',
      filter_all: 'Semua',
      proj_comic_desc: 'Website baca manga dan comic dengan tampilan ringan, daftar judul yang mudah dicari, dan halaman baca yang nyaman untuk mobile maupun desktop.',
      proj_arvi_desc: 'Platform direktori ekosistem Kutub Utara dengan asisten AI dan integrasi data sensor realtime untuk pemantauan lingkungan.',
      proj_gacha_desc: 'Bot interaktif bertema gacha untuk server Discord dengan minigames, koleksi karakter, dan command yang seru.',
      proj_galeri_desc: 'Website statis untuk menyorot pencapaian dan profil berprestasi dengan layout visual yang bersih.',
      proj_pkl_desc: 'Aplikasi manajemen Praktik Kerja Lapangan untuk menyederhanakan administrasi, pemantauan realtime, dan dokumentasi aktivitas siswa.',
      contact_kicker: 'Contact',
      contact_title: 'Punya ide yang perlu dibangun rapi? Mari bikin versi pertamanya.',
      contact_desc: 'Saya terbuka untuk kolaborasi, freelance project, diskusi produk, atau ngobrol teknis soal website, backend, dan ide aplikasi.',
      form_name: 'Nama lengkap',
      form_name_ph: 'John Doe',
      form_email_ph: 'john@example.com',
      form_subject: 'Subjek',
      form_subject_ph: 'Project baru',
      form_message: 'Pesan',
      form_message_ph: 'Tuliskan kebutuhanmu...',
      form_send: 'Kirim pesan',
      footer_rights: 'All rights reserved.',
    },
    EN: {
      loading: 'Loading...',
      nav_home: 'Home',
      nav_about: 'About',
      nav_stack: 'Stack',
      nav_projects: 'Projects',
      nav_contact: 'Contact',
      nav_cta: 'Talk',
      hero_badge: 'Available for modern web builds',
      hero_title_1: 'Ship fast.',
      hero_title_2: 'Scale clean.',
      hero_desc: 'I build web apps, APIs, and digital products that feel fast, tidy, and production-ready from mobile to desktop.',
      hero_btn_projects: 'View projects',
      about_kicker: 'Profile',
      about_title: 'A developer who makes products feel simple, even when the engine is serious.',
      about_desc_1: 'My focus is end-to-end web development: clean interfaces, clear backend work, organized databases, and features that feel easy to use.',
      about_desc_2: 'I often use HTML, CSS, JavaScript, TypeScript, PHP, Laravel, Node.js, Tailwind CSS, and MySQL to build websites and web applications.',
      stack_kicker: 'Languages',
      stack_title: 'Languages and technologies I use often.',
      stack_cta: 'Start a discussion',
      projects_kicker: 'Selected Work',
      projects_title: 'Selected projects with different product personalities.',
      projects_github: 'Repositories',
      filter_all: 'All',
      proj_comic_desc: 'A manga and comic reading website with a light interface, searchable title lists, and comfortable reading pages for mobile and desktop.',
      proj_arvi_desc: 'An Arctic ecosystem directory platform with an AI assistant and realtime sensor data integration for environment monitoring.',
      proj_gacha_desc: 'An interactive gacha-themed Discord bot with minigames, character collection, and fun commands.',
      proj_galeri_desc: 'A static website for highlighting achievement stories and profiles with a clean visual layout.',
      proj_pkl_desc: 'A field work practice management app for simplifying administration, realtime monitoring, and student activity documentation.',
      contact_kicker: 'Contact',
      contact_title: 'Have an idea that needs a clean build? Let us make the first version.',
      contact_desc: 'I am open to collaboration, freelance projects, product discussions, or technical chats about websites, backend, and app ideas.',
      form_name: 'Full name',
      form_name_ph: 'John Doe',
      form_email_ph: 'john@example.com',
      form_subject: 'Subject',
      form_subject_ph: 'New project',
      form_message: 'Message',
      form_message_ph: 'Write your brief...',
      form_send: 'Send message',
      footer_rights: 'All rights reserved.',
    },
  };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  let activeLang = localStorage.getItem('lang') || 'ID';

  function showNotification(message, type = 'info') {
    const notification = $('#notification');
    const notificationMessage = $('#notification-message');
    const notificationClose = $('#notification-close');

    if (!notification || !notificationMessage) return;

    const icons = {
      info: 'fa-circle-info',
      success: 'fa-circle-check',
      error: 'fa-circle-exclamation',
    };

    notification.classList.remove('success', 'error', 'info', 'hidden');
    notification.classList.add(type);
    notificationMessage.innerHTML = `<i class="fa-solid ${icons[type] || icons.info} mr-2"></i>${message}`;

    requestAnimationFrame(() => notification.classList.add('show'));

    const timer = setTimeout(hideNotification, 4800);
    if (notificationClose) {
      notificationClose.onclick = () => {
        clearTimeout(timer);
        hideNotification();
      };
    }
  }

  function hideNotification() {
    const notification = $('#notification');
    if (!notification) return;
    notification.classList.remove('show');
    setTimeout(() => notification.classList.add('hidden'), 240);
  }

  function applyLanguage(lang) {
    activeLang = lang;
    document.documentElement.lang = lang.toLowerCase();

    $$('.lang-toggle').forEach((button) => {
      button.textContent = lang === 'ID' ? 'EN' : 'ID';
    });

    $$('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    $$('[data-i18n-attr="placeholder"]').forEach((element) => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        element.placeholder = translations[lang][key];
      }
    });
  }

  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isLight = savedTheme === 'light';

    document.documentElement.classList.toggle('dark', !isLight);
    document.body.classList.toggle('light', isLight);

    $$('.theme-toggle i').forEach((icon) => {
      icon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });
  }

  function toggleTheme() {
    const isLight = !document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    initTheme();
  }

  function initMobileMenu() {
    const mobileMenu = $('#mobileMenu');
    const openButton = $('#mobileMenuButton');
    const closeButton = $('#closeMobileMenu');
    const overlay = $('#menuOverlay');

    const open = () => {
      mobileMenu.classList.remove('hidden');
      requestAnimationFrame(() => mobileMenu.classList.add('menu-open'));
      document.body.style.overflow = 'hidden';
    };

    const close = () => {
      mobileMenu.classList.remove('menu-open');
      setTimeout(() => mobileMenu.classList.add('hidden'), 260);
      document.body.style.overflow = '';
    };

    if (openButton) openButton.addEventListener('click', open);
    if (closeButton) closeButton.addEventListener('click', close);
    if (overlay) overlay.addEventListener('click', close);
    $$('#mobileMenu a').forEach((link) => link.addEventListener('click', close));
  }

  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    $$('.reveal').forEach((element) => observer.observe(element));
  }

  function initProjectFilters() {
    const filterButtons = $$('[data-project-filter]');
    const projectCards = $$('.project-card[data-project-category]');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const activeFilter = button.dataset.projectFilter;

        filterButtons.forEach((item) => item.classList.toggle('active', item === button));
        projectCards.forEach((card) => {
          const categories = (card.dataset.projectCategory || '').split(/\s+/);
          const shouldShow = activeFilter === 'all' || categories.includes(activeFilter);
          card.classList.toggle('is-hidden', !shouldShow);
        });
      });
    });
  }

  function dismissPreloader() {
    const preloader = $('#preloader');
    const progressFill = $('#progress-fill');
    const loadingText = $('#loading-text');

    if (progressFill) progressFill.style.width = '100%';
    if (loadingText) loadingText.textContent = activeLang === 'EN' ? 'Ready' : 'Siap';

    setTimeout(() => {
      if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 420ms ease';
      }

      setTimeout(() => {
        if (preloader) preloader.classList.add('hidden');
        document.body.classList.remove('loading');
      }, 440);
    }, 260);
  }

  function initPreloader() {
    const images = Array.from(document.images);
    const progressFill = $('#progress-fill');
    const loadingText = $('#loading-text');
    let loaded = 0;

    if (!images.length) {
      dismissPreloader();
      return;
    }

    const markLoaded = () => {
      loaded += 1;
      const percent = Math.round((loaded / images.length) * 100);
      if (progressFill) progressFill.style.width = `${percent}%`;
      if (loadingText) loadingText.textContent = `${translations[activeLang].loading} ${loaded}/${images.length}`;
      if (loaded >= images.length) dismissPreloader();
    };

    images.forEach((image) => {
      if (image.complete) {
        markLoaded();
      } else {
        image.addEventListener('load', markLoaded, { once: true });
        image.addEventListener('error', markLoaded, { once: true });
      }
    });

    setTimeout(dismissPreloader, 4500);
  }

  function initEmail() {
    if (window.emailjs && EMAILJS_USER_ID) {
      window.emailjs.init(EMAILJS_USER_ID);
    }

    const form = $('#contact-form');
    if (!form) return;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = $('#name').value.trim();
      const email = $('#email').value.trim();
      const subject = $('#subject').value.trim();
      const message = $('#message').value.trim();
      const submitText = $('#submit-text');
      const submitIcon = $('#submit-icon');
      const loadingIcon = $('#loading-icon');

      if (!name || !email || !subject || !message) {
        showNotification(activeLang === 'EN' ? 'Please fill in every field.' : 'Harap isi semua field.', 'error');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showNotification(activeLang === 'EN' ? 'Please enter a valid email address.' : 'Masukkan alamat email yang valid.', 'error');
        return;
      }

      if (submitText) submitText.textContent = activeLang === 'EN' ? 'Sending...' : 'Mengirim...';
      if (submitIcon) submitIcon.classList.add('hidden');
      if (loadingIcon) loadingIcon.classList.remove('hidden');

      const emailToYou = {
        from_name: name,
        from_email: email,
        subject,
        message,
        to_email: 'laludeyndrafavian@gmail.com',
        date: new Date().toLocaleDateString('id-ID'),
        time: new Date().toLocaleTimeString('id-ID'),
      };

      const autoReply = {
        to_email: email,
        to_name: name,
        name,
        from_name: 'Lalu Deyndra Favian',
        message_id: `MSG${Date.now().toString().slice(-6)}`,
        year: new Date().getFullYear(),
      };

      try {
        if (!window.emailjs) throw new Error('EmailJS unavailable');
        await window.emailjs.send(EMAILJS_SERVICE_ID, TEMPLATE_TO_YOU, emailToYou);
        await window.emailjs.send(EMAILJS_SERVICE_ID, TEMPLATE_AUTO_REPLY, autoReply);
        showNotification(activeLang === 'EN' ? 'Message sent successfully.' : 'Pesan berhasil dikirim.', 'success');
        form.reset();
      } catch (error) {
        const mailto = `mailto:laludeyndrafavian@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)}`;
        showNotification(activeLang === 'EN' ? `Email service is unavailable. Opening email draft.` : `Layanan email belum tersedia. Membuka draft email.`, 'info');
        window.location.href = mailto;
      } finally {
        if (submitText) submitText.textContent = translations[activeLang].form_send;
        if (submitIcon) submitIcon.classList.remove('hidden');
        if (loadingIcon) loadingIcon.classList.add('hidden');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(activeLang);
    initTheme();
    initMobileMenu();
    initReveal();
    initProjectFilters();
    initEmail();
    initPreloader();

    $$('.lang-toggle').forEach((button) => {
      button.addEventListener('click', () => {
        const nextLang = activeLang === 'EN' ? 'ID' : 'EN';
        localStorage.setItem('lang', nextLang);
        applyLanguage(nextLang);
      });
    });

    $$('.theme-toggle').forEach((button) => button.addEventListener('click', toggleTheme));
  });
})();
