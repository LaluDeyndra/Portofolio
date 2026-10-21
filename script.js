(function () {
  'use strict';

  // --- CONFIGURATION & CREDENTIALS ---
  const EMAILJS_USER_ID = 'ID27XBMUYROT2P-Sy';
  const EMAILJS_SERVICE_ID = 'service_t6gttvr';
  const TEMPLATE_TO_YOU = 'template_en6yj23';
  const TEMPLATE_AUTO_REPLY = 'template_2luf90z';

  // --- TRANSLATIONS (ID & EN) ---
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
      hero_typewriter_prefix: 'Membangun ',
      hero_desc: 'Saya membangun web app, API, dan produk digital yang terasa cepat, rapi, dan siap dipakai dari mobile sampai desktop.',
      hero_btn_projects: 'Lihat proyek',
      cmd_palette: 'Menu Cepat',
      cmd_search_ph: 'Ketik navigasi atau perintah (misal: projects, theme, matrix)...',
      about_kicker: 'Profile',
      about_title: 'Developer yang suka membuat produk terasa sederhana, walau mesinnya serius.',
      about_desc_1: 'Fokus saya ada di pengembangan web end-to-end: tampilan yang rapi, backend yang jelas, database yang tertata, dan fitur yang nyaman dipakai.',
      about_desc_2: 'Saya terbiasa memakai HTML, CSS, JavaScript, TypeScript, PHP, Laravel, Node.js, Tailwind CSS, dan MySQL untuk membuat website maupun aplikasi web.',
      stack_kicker: 'Languages',
      stack_title: 'Bahasa dan teknologi yang sering saya pakai.',
      stack_cta: 'Mulai diskusi',
      skills_highlight_hint: 'Klik teknologi apa saja untuk menyorot project terkait di bawah.',
      projects_kicker: 'Selected Work',
      board_label: 'STATUS PROJECT',
      projects_title: 'Project pilihan dengan karakter produk yang beda-beda.',
      projects_github: 'Repositori',
      filter_all: 'Semua',
      status_down: 'DOWN · SERVER OFF',
      status_unknown: 'BELUM DICEK',
      status_up: 'ONLINE',
      status_checking: 'MEMERIKSA...',
      status_checked: 'PERUBAHAN TERAKHIR',
      project_inspect_btn: 'Lihat Detail',
      project_visit_btn: 'Kunjungi Web',
      modal_close: 'Tutup',
      modal_tech_used: 'Teknologi yang Digunakan',
      modal_key_features: 'Fitur Utama',
      easter_egg_matrix: 'MATRIX MODE ACTIVE · Tekan ESC untuk keluar',
      contact_kicker: 'Contact',
      contact_title: 'Punya ide yang perlu dibangun rapi? Mari bikin versi pertamanya.',
      contact_desc: 'Saya terbuka untuk kolaborasi, freelance project, diskusi produk, atau ngobrol teknis soal website, backend, dan ide aplikasi.',
      contact_quick_topics: 'Pilih Topik Cepat:',
      form_name: 'Nama lengkap',
      form_name_ph: 'John Doe',
      form_email_ph: 'john@example.com',
      form_subject: 'Subjek',
      form_subject_ph: 'Project baru',
      form_message: 'Pesan',
      form_message_ph: 'Tuliskan kebutuhanmu...',
      form_send: 'Kirim pesan',
      footer_rights: 'All rights reserved.',
      proj_comic_desc: 'Website baca manga dan comic dengan tampilan ringan, daftar judul yang mudah dicari, dan halaman baca yang nyaman untuk mobile maupun desktop.',
      proj_arvi_desc: 'Platform direktori ekosistem Kutub Utara dengan asisten cerdas dan integrasi data sensor realtime untuk pemantauan lingkungan.',
      proj_gacha_desc: 'Bot interaktif bertema gacha untuk server Discord dengan minigames, koleksi karakter, dan command yang seru.',
      proj_galeri_desc: 'Website statis untuk menyorot pencapaian dan profil berprestasi dengan layout visual yang bersih.',
      proj_pkl_desc: 'Aplikasi manajemen Praktik Kerja Lapangan untuk menyederhanakan administrasi, pemantauan realtime, dan dokumentasi aktivitas siswa.',
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
      hero_typewriter_prefix: 'Crafting ',
      hero_desc: 'I build web apps, APIs, and digital products that feel fast, tidy, and production-ready from mobile to desktop.',
      hero_btn_projects: 'View projects',
      cmd_palette: 'Quick Menu',
      cmd_search_ph: 'Type a command or search (e.g. projects, theme, matrix)...',
      about_kicker: 'Profile',
      about_title: 'A developer who makes products feel simple, even when the engine is serious.',
      about_desc_1: 'My focus is end-to-end web development: clean interfaces, clear backend work, organized databases, and features that feel easy to use.',
      about_desc_2: 'I often use HTML, CSS, JavaScript, TypeScript, PHP, Laravel, Node.js, Tailwind CSS, and MySQL to build websites and web applications.',
      stack_kicker: 'Languages',
      stack_title: 'Languages and technologies I use often.',
      stack_cta: 'Start a discussion',
      skills_highlight_hint: 'Click any technology to highlight related projects below.',
      projects_kicker: 'Selected Work',
      board_label: 'PROJECT STATUS',
      projects_title: 'Selected projects with different product personalities.',
      projects_github: 'Repositories',
      filter_all: 'All',
      status_down: 'DOWN · SERVER OFF',
      status_unknown: 'NOT CHECKED',
      status_up: 'ONLINE',
      status_checking: 'CHECKING...',
      status_checked: 'LAST CHANGE',
      project_inspect_btn: 'Quick View',
      project_visit_btn: 'Visit Live Site',
      modal_close: 'Close',
      modal_tech_used: 'Technologies Used',
      modal_key_features: 'Key Highlights',
      easter_egg_matrix: 'MATRIX MODE ACTIVE · Press ESC to exit',
      contact_kicker: 'Contact',
      contact_title: 'Have an idea that needs a clean build? Let us make the first version.',
      contact_desc: 'I am open to collaboration, freelance projects, product discussions, or technical chats about websites, backend, and app ideas.',
      contact_quick_topics: 'Quick Topics:',
      form_name: 'Full name',
      form_name_ph: 'John Doe',
      form_email_ph: 'john@example.com',
      form_subject: 'Subject',
      form_subject_ph: 'New project',
      form_message: 'Message',
      form_message_ph: 'Write your brief...',
      form_send: 'Send message',
      footer_rights: 'All rights reserved.',
      proj_comic_desc: 'A manga and comic reading website with a light interface, searchable title lists, and comfortable reading pages for mobile and desktop.',
      proj_arvi_desc: 'An Arctic ecosystem directory platform with an AI assistant and realtime sensor data integration for environment monitoring.',
      proj_gacha_desc: 'An interactive gacha-themed Discord bot with minigames, character collection, and fun commands.',
      proj_galeri_desc: 'A static website for highlighting achievement stories and profiles with a clean visual layout.',
      proj_pkl_desc: 'A field work practice management app for simplifying administration, realtime monitoring, and student activity documentation.',
    },
  };

  // --- PROJECT DATA FOR QUICK VIEW MODAL ---
  const projectsData = {
    readnime: {
      title: 'ReadNime',
      category: 'Manga & Comic Reader Platform',
      url: 'https://comic.readnime.site',
      images: [
        './assets/img/readnime.png',
        './assets/img/readnime-detail.png',
        './assets/img/readnime-mobile.jpeg',
        './assets/img/readnime-reader-mobile.jpeg',
      ],
      desc_id:
        'Platform baca komik dan manga modern dengan pembaca chapter responsif, navigasi cepat, bookmarking, dan sistem caching hemat kuota.',
      desc_en:
        'A modern comic and manga reading platform with responsive dual-mode reader, quick navigation, bookmarking, and performance-optimized caching.',
      features_id: [
        'Dual reading mode (Webtoon scroll & Per-page flip)',
        'Pencarian instan berdasarkan judul dan genre',
        'Optimasi gambar responsif untuk mobile dan desktop',
        'Arsitektur backend cepat dan terintegrasi Cloudflare',
      ],
      features_en: [
        'Dual reading mode (Webtoon scroll & Per-page flip)',
        'Instant search by title and genre',
        'Responsive image optimization for mobile & desktop',
        'Fast backend architecture with Cloudflare integration',
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Cloudflare'],
    },
    'arctic-vision': {
      title: 'Arctic Vision',
      category: 'IoT & Environmental Platform',
      url: 'https://www.arvi.life',
      images: ['./assets/img/arctic-vision.png'],
      desc_id:
        'Platform direktori dan pemantauan ekosistem Kutub Utara dengan integrasi data sensor realtime dan asisten eksplorasi iklim.',
      desc_en:
        'Arctic ecosystem directory and monitoring platform equipped with climate assistant integration and realtime sensor telemetry visualizer.',
      features_id: [
        'Integrasi asisten untuk eksplorasi spesies dan data iklim',
        'Visualisasi data telemetri sensor lingkungan realtime',
        'Desain visual modern dengan estetika dark cyber arctic',
        'Backend Laravel dengan RESTful API terstruktur',
      ],
      features_en: [
        'Assistant integration for species and climate exploration',
        'Realtime environmental sensor telemetry visualization',
        'Modern visual design with clean cyber arctic aesthetic',
        'Structured Laravel backend with RESTful API',
      ],
      tech: ['Laravel', 'Tailwind CSS', 'IoT Telemetry', 'MySQL'],
    },
    'gacha-bot': {
      title: 'Discord Gacha Bot',
      category: 'Interactive Discord Gaming Bot',
      url: 'https://laludeyndra.github.io/PageInviteGachaBot/',
      images: ['./assets/img/waifuGacha.png'],
      desc_id:
        'Bot server Discord bertema gacha anime interaktif dengan sistem inventory, dynamic rates, roll gacha kartu, dan minigames komunitas.',
      desc_en:
        'An interactive anime gacha Discord bot featuring dynamic inventory systems, probability calculations, card rolls, and community minigames.',
      features_id: [
        'Sistem simulasi roll gacha dengan rate rarity dinamis',
        'Penyimpanan inventori dan profil koleksi pengguna',
        'Integrasi Discord Slash Commands v14',
        'Minigames interaktif dan reward harian',
      ],
      features_en: [
        'Gacha roll simulation with dynamic rarity rates',
        'User inventory storage and collection profiles',
        'Discord v14 Slash Commands integration',
        'Interactive community minigames and daily rewards',
      ],
      tech: ['Node.js', 'Discord.js', 'JavaScript', 'JSON Database'],
    },
    'galeri-prestasi': {
      title: 'Galeri Prestasi',
      category: 'Static Showcase Web Application',
      url: 'https://galeri-prestasi.vercel.app/',
      images: ['./assets/img/GaleriPrestasi.png'],
      desc_id:
        'Website showcase untuk dokumentasi pencapaian, sertifikat, dan rekam jejak berprestasi dengan animasi interaktif dan performa tinggi.',
      desc_en:
        'A high-performance showcase website highlighting student achievements, certificates, and milestones with interactive micro-animations.',
      features_id: [
        'Layout showcase responsif dengan micro-interactions',
        'Waktu muat ultra cepat dengan deployment global Vercel',
        'Navigasi kategori prestasi yang bersih dan terstruktur',
      ],
      features_en: [
        'Responsive showcase layout with micro-interactions',
        'Ultra-fast load time deployed on Vercel CDN',
        'Clean and structured achievement categories',
      ],
      tech: ['HTML5', 'Modern CSS', 'Vanilla JavaScript', 'Vercel'],
    },
    'sistem-pkl': {
      title: 'Sistem Informasi PKL',
      category: 'Enterprise School Management App',
      url: 'https://pkl.senvada.id/',
      images: ['./assets/img/senvada.png'],
      desc_id:
        'Sistem web terpadu untuk pengelolaan Praktik Kerja Lapangan (PKL) siswa: absensi digital realtime, jurnal kegiatan harian, dan evaluasi guru.',
      desc_en:
        'Integrated management application for vocational internships: realtime digital attendance, daily activity logbooks, and supervisor grading.',
      features_id: [
        'Autentikasi Multi-role (Administrator, Pembimbing, Siswa)',
        'Absensi kehadiran realtime dan pelaporan aktivitas harian',
        'Ekspor rekapitulasi nilai dan laporan kegiatan PDF',
        'Manajemen database relasional MySQL yang aman',
      ],
      features_en: [
        'Multi-role authentication (Admin, Teachers, Students)',
        'Realtime attendance tracking and daily log reporting',
        'Automated PDF activity report and grade export',
        'Secure relational MySQL database architecture',
      ],
      tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'JWT Auth', 'REST API'],
    },
  };

  // --- UTILITY SELECTORS ---
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  let activeLang = localStorage.getItem('lang') || 'ID';
  let soundEnabled = localStorage.getItem('sound_fx') === 'true';

  // --- WEB AUDIO API SYNTHESIZER ---
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSound(type = 'click') {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'blip') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'chime') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(660, now);
        osc.frequency.setValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.22);
      } else if (type === 'success') {
        const chord = [523.25, 659.25, 783.99, 1046.5];
        chord.forEach((freq, idx) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = 'sine';
          o.frequency.setValueAtTime(freq, now + idx * 0.06);
          g.gain.setValueAtTime(0.06, now + idx * 0.06);
          g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.25);
          o.connect(g);
          g.connect(ctx.destination);
          o.start(now + idx * 0.06);
          o.stop(now + idx * 0.06 + 0.25);
        });
      }
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('sound_fx', soundEnabled ? 'true' : 'false');
    updateSoundUI();
    if (soundEnabled) {
      playSound('chime');
      showNotification(activeLang === 'EN' ? 'Sound effects enabled' : 'Efek suara aktif', 'info');
    } else {
      showNotification(activeLang === 'EN' ? 'Sound effects muted' : 'Efek suara dimatikan', 'info');
    }
  }

  function updateSoundUI() {
    $$('.sound-toggle').forEach((btn) => {
      btn.classList.toggle('active', soundEnabled);
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = soundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
      }
    });
  }

  // --- NOTIFICATION TOAST ---
  function showNotification(message, type = 'info') {
    const notification = $('#notification');
    const notificationMessage = $('#notification-message');
    const notificationClose = $('#notification-close');

    if (!notification || !notificationMessage) return;

    notification.classList.remove('success', 'error', 'info', 'hidden');
    notification.classList.add(type);
    notificationMessage.textContent = message;

    requestAnimationFrame(() => notification.classList.add('show'));

    const timer = setTimeout(hideNotification, 4500);
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

  // --- LANGUAGE SWITCHING ---
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

    // Update project cards status translation
    $$('.project-card[data-project-id]').forEach((card) => {
      const status = card.dataset.projectStatus || 'unknown';
      const labelKey = status === 'up' ? 'status_up' : status === 'down' ? 'status_down' : 'status_unknown';
      const statusText = card.querySelector('.project-status span');
      if (statusText) statusText.textContent = translations[lang][labelKey];
    });

    const checkedAt = $('#status-checked-at');
    if (checkedAt?.dataset.checkedAt) {
      const date = new Date(checkedAt.dataset.checkedAt);
      checkedAt.textContent = `${translations[lang].status_checked} ${date.toLocaleString(lang === 'EN' ? 'en-GB' : 'id-ID', { dateStyle: 'short', timeStyle: 'short' })}`;
    }
  }

  // --- THEME SWITCHING ---
  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isLight = savedTheme === 'light';

    document.documentElement.classList.toggle('light', isLight);
    document.documentElement.classList.toggle('dark', !isLight);
    document.body.classList.toggle('light', isLight);

    $$('.theme-toggle i').forEach((icon) => {
      icon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });
  }

  function toggleTheme() {
    playSound('chime');
    const isLight = !document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    initTheme();
  }

  // --- MOBILE NAVIGATION ---
  function initMobileMenu() {
    const mobileMenu = $('#mobileMenu');
    const openButton = $('#mobileMenuButton');
    const closeButton = $('#closeMobileMenu');
    const overlay = $('#menuOverlay');

    const open = () => {
      playSound('click');
      mobileMenu.classList.remove('hidden');
      requestAnimationFrame(() => mobileMenu.classList.add('menu-open'));
      document.body.style.overflow = 'hidden';
    };

    const close = () => {
      playSound('click');
      mobileMenu.classList.remove('menu-open');
      setTimeout(() => mobileMenu.classList.add('hidden'), 260);
      document.body.style.overflow = '';
    };

    if (openButton) openButton.addEventListener('click', open);
    if (closeButton) closeButton.addEventListener('click', close);
    if (overlay) overlay.addEventListener('click', close);
    $$('#mobileMenu a').forEach((link) => link.addEventListener('click', close));
  }

  // --- SCROLL REVEAL ---
  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const counters = entry.target.querySelectorAll('.stat-num');
            counters.forEach(animateCounter);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    $$('.reveal').forEach((element) => observer.observe(element));
  }

  function animateCounter(counter) {
    if (counter.dataset.animated) return;
    counter.dataset.animated = 'true';
    const target = parseInt(counter.dataset.val, 10);
    const hasPercent = counter.textContent.includes('%');
    const hasPlus = counter.textContent.includes('+');
    let current = 0;
    const duration = 1200;
    const stepTime = 25;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = `${Math.floor(current)}${hasPercent ? '%' : ''}${hasPlus ? '+' : ''}`;
    }, stepTime);
  }

  // --- PROJECT FILTERING ---
  function initProjectFilters() {
    const filterButtons = $$('[data-project-filter]');
    const projectCards = $$('.project-card[data-project-category]');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        playSound('blip');
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

  // --- PROJECT STATUS FEED ---
  async function initProjectStatus() {
    const checkedAt = $('#status-checked-at');

    try {
      const response = await fetch(`./status.json?t=${Date.now()}`, { cache: 'no-store' });
      if (!response.ok) throw new Error('Status feed unavailable');
      const statusFeed = await response.json();

      $$('.project-card[data-project-id]').forEach((card) => {
        const status = statusFeed.projects?.[card.dataset.projectId]?.status;
        const badge = card.querySelector('.project-status');
        if (!badge || !['up', 'down'].includes(status)) return;

        card.dataset.projectStatus = status;
        badge.classList.toggle('status-down', status === 'down');
        badge.classList.toggle('status-up', status === 'up');
        badge.classList.remove('status-unknown');
        badge.innerHTML = `<i class="fa-solid ${status === 'up' ? 'fa-circle-check' : 'fa-circle'}"></i><span>${translations[activeLang][status === 'up' ? 'status_up' : 'status_down']}</span>`;
      });

      if (checkedAt && statusFeed.checked_at) {
        const date = new Date(statusFeed.checked_at);
        checkedAt.textContent = `${translations[activeLang].status_checked} ${date.toLocaleString(activeLang === 'EN' ? 'en-GB' : 'id-ID', { dateStyle: 'short', timeStyle: 'short' })}`;
        checkedAt.dataset.checkedAt = statusFeed.checked_at;
      }
    } catch (error) {
      if (checkedAt) checkedAt.textContent = activeLang === 'EN' ? 'STATUS FEED OFFLINE' : 'FEED STATUS OFFLINE';
    }
  }

  // --- PRELOADER ---
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

    setTimeout(dismissPreloader, 4000);
  }

  // --- EMAILJS CONTACT FORM ---
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
        playSound('click');
        showNotification(activeLang === 'EN' ? 'Please fill in every field.' : 'Harap isi semua field.', 'error');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        playSound('click');
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

        playSound('success');
        triggerConfetti();
        showNotification(activeLang === 'EN' ? 'Message sent successfully.' : 'Pesan berhasil dikirim.', 'success');
        form.reset();
      } catch (error) {
        const mailto = `mailto:laludeyndrafavian@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)}`;
        showNotification(activeLang === 'EN' ? 'Email service offline. Opening mail client.' : 'Layanan email offline. Membuka aplikasi email.', 'info');
        window.location.href = mailto;
      } finally {
        if (submitText) submitText.textContent = translations[activeLang].form_send;
        if (submitIcon) submitIcon.classList.remove('hidden');
        if (loadingIcon) loadingIcon.classList.add('hidden');
      }
    });

    // Topic quick pills in contact form (no emojis)
    $$('#topicPills .topic-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        playSound('click');
        $$('#topicPills .topic-pill').forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        const subjectInput = $('#subject');
        if (subjectInput) {
          subjectInput.value = pill.dataset.topic;
          subjectInput.focus();
        }
      });
    });
  }

  // --- LIVE CLOCK (Malang, Jawa Timur / WIB, UTC+7) ---
  function initLiveClock() {
    const clockEl = $('#hero-clock');
    if (!clockEl) return;

    const updateClock = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('id-ID', {
          timeZone: 'Asia/Jakarta',
          hour12: false,
        });
        clockEl.textContent = `${timeStr} WIB`;
      } catch (e) {
        clockEl.textContent = 'Malang (WIB)';
      }
    };

    updateClock();
    setInterval(updateClock, 1000);
  }

  // --- TYPEWRITER EFFECT IN HERO ---
  function initTypewriter() {
    const typewriterEl = $('#typewriter-text');
    if (!typewriterEl) return;

    const phrasesID = [
      'Web app dan dashboard responsif.',
      'REST API dan arsitektur backend.',
      'Sistem database terstruktur.',
      'Antarmuka bersih dan cepat.',
    ];
    const phrasesEN = [
      'High-performance web applications.',
      'Clean REST APIs and backend architectures.',
      'Structured relational databases.',
      'Responsive, polished user interfaces.',
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 75;

    const type = () => {
      const phrases = activeLang === 'EN' ? phrasesEN : phrasesID;
      const currentPhrase = phrases[phraseIndex % phrases.length];

      if (isDeleting) {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 35;
      } else {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 75;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex++;
        typingSpeed = 350;
      }

      setTimeout(type, typingSpeed);
    };

    type();
  }

  // --- INTERACTIVE TERMINAL CLI & TABS ---
  function initInteractiveTerminal() {
    const termCard = $('#interactiveTerminal');
    const termTabs = $$('.term-tab');
    const panelCli = $('#termPanelCli');
    const panelCode = $('#termPanelCode');
    const termInput = $('#terminalInput');
    const termForm = $('#terminalForm');
    const termOutput = $('#terminalOutput');
    const clearBtn = $('#termClearBtn');
    const copyCodeBtn = $('#copyCodeBtn');

    if (!termCard) return;

    // Tab switching
    termTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        playSound('click');
        const target = tab.dataset.termTab;
        termTabs.forEach((t) => t.classList.toggle('active', t === tab));

        if (target === 'cli') {
          panelCli?.classList.remove('hidden');
          panelCode?.classList.add('hidden');
          termInput?.focus();
        } else {
          panelCli?.classList.add('hidden');
          panelCode?.classList.remove('hidden');
        }
      });
    });

    // Copy config code
    if (copyCodeBtn) {
      copyCodeBtn.addEventListener('click', () => {
        playSound('success');
        const code = $('#termPanelCode code')?.textContent || '';
        navigator.clipboard.writeText(code);
        const textSpan = $('#copyCodeText');
        if (textSpan) textSpan.textContent = 'Copied!';
        setTimeout(() => {
          if (textSpan) textSpan.textContent = 'Copy';
        }, 2000);
      });
    }

    // Clear terminal
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        playSound('click');
        if (termOutput) termOutput.innerHTML = '';
      });
    }

    // Quick action chips (clean text, no emojis)
    $$('.term-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const cmd = chip.dataset.cmd;
        if (cmd) executeCommand(cmd);
      });
    });

    // Terminal form submit
    if (termForm && termInput) {
      termForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cmd = termInput.value.trim();
        if (cmd) {
          executeCommand(cmd);
          termInput.value = '';
        }
      });
    }

    function printOutput(html, type = 'info') {
      if (!termOutput) return;
      const div = document.createElement('div');
      div.className = `term-output-${type} text-xs`;
      div.innerHTML = html;
      termOutput.appendChild(div);
      requestAnimationFrame(() => {
        termOutput.scrollTop = termOutput.scrollHeight;
      });
    }

    function executeCommand(rawCmd) {
      playSound('blip');
      const cmd = rawCmd.trim().toLowerCase();

      printOutput(`<span class="text-zinc-500">deyndra:~$</span> <span class="term-output-cmd">${escapeHtml(cmd)}</span>`, 'cmd');

      switch (cmd) {
        case 'help':
          printOutput(`
            <div class="space-y-1">
              <p class="text-lime-300 font-bold">Perintah Tersedia:</p>
              <p><span class="text-lime-400">skills</span> — Bahasa & teknologi</p>
              <p><span class="text-lime-400">projects</span> — Daftar proyek pilihan</p>
              <p><span class="text-lime-400">whoami</span> — Profil developer</p>
              <p><span class="text-lime-400">contact</span> — Informasi kontak</p>
              <p><span class="text-lime-400">hire</span> — Buka formulir diskusi</p>
              <p><span class="text-lime-400">matrix</span> — Digital rain mode</p>
              <p><span class="text-lime-400">theme</span> — Ganti tema dark / light</p>
              <p><span class="text-lime-400">lang</span> — Ganti bahasa ID / EN</p>
              <p><span class="text-lime-400">clear</span> — Bersihkan layar terminal</p>
            </div>
          `, 'info');
          break;

        case 'skills':
        case 'stack':
          printOutput(`
            <div class="space-y-1">
              <p class="text-lime-300 font-bold">Teknologi Utama:</p>
              <p>• Front-End: HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS</p>
              <p>• Back-End: PHP, Laravel, Node.js, RESTful API</p>
              <p>• Database: MySQL, Relational Design</p>
              <p>• Tools: Git, GitHub, VS Code, Cloudflare, Linux / Bash</p>
            </div>
          `, 'success');
          smoothScrollTo('#stack');
          break;

        case 'projects':
          printOutput(`
            <div class="space-y-1">
              <p class="text-lime-300 font-bold">Featured Projects:</p>
              <p>1. ReadNime — Manga/Comic Web Reader (comic.readnime.site)</p>
              <p>2. Arctic Vision — IoT Platform (arvi.life)</p>
              <p>3. Discord Gacha Bot — Interactive bot</p>
              <p>4. Galeri Prestasi — High-performance static showcase</p>
              <p>5. Sistem Informasi PKL — Internship management system (pkl.senvada.id)</p>
            </div>
          `, 'success');
          smoothScrollTo('#projects');
          break;

        case 'whoami':
        case 'about':
          printOutput(`
            <p><b>Lalu Deyndra Favian</b> — Web Developer berbasis di Malang, Indonesia.</p>
            <p class="text-zinc-400">Fokus membangun web app end-to-end dengan performa kencang, kode terstruktur, dan pengalaman pengguna yang memuaskan.</p>
          `, 'info');
          smoothScrollTo('#about');
          break;

        case 'contact':
        case 'email':
          printOutput(`
            <p>Email: <a href="mailto:laludeyndrafavian@gmail.com" class="text-lime-300 underline">laludeyndrafavian@gmail.com</a></p>
            <p>WhatsApp: <a href="https://wa.me/6281359108149" class="text-emerald-300 underline">+62 813-5910-8149</a></p>
          `, 'info');
          smoothScrollTo('#contact');
          break;

        case 'hire':
        case 'sudo hire':
          playSound('success');
          triggerConfetti();
          printOutput(`
            <p class="text-lime-300 font-bold">Terima kasih. Deyndra siap berkolaborasi untuk proyek baru.</p>
            <p>Membuka section kontak sekarang...</p>
          `, 'success');
          setTimeout(() => smoothScrollTo('#contact'), 600);
          break;

        case 'matrix':
          toggleMatrixRain();
          printOutput(`<p class="text-lime-400">Matrix digital rain diaktifkan. Tekan ESC untuk keluar.</p>`, 'success');
          break;

        case 'clear':
        case 'cls':
          if (termOutput) termOutput.innerHTML = '';
          break;

        case 'theme':
          toggleTheme();
          printOutput(`<p class="text-cyan-300">Tema berhasil diganti.</p>`, 'info');
          break;

        case 'lang':
          const nextLang = activeLang === 'EN' ? 'ID' : 'EN';
          localStorage.setItem('lang', nextLang);
          applyLanguage(nextLang);
          printOutput(`<p class="text-cyan-300">Language switched to ${nextLang}.</p>`, 'info');
          break;

        case 'status':
          printOutput(`
            <p class="text-zinc-300">ReadNime: <span class="text-rose-400">DOWN</span></p>
            <p class="text-zinc-300">Arctic Vision: <span class="text-rose-400">DOWN</span></p>
            <p class="text-zinc-300">Discord Bot: <span class="text-amber-400">UNKNOWN</span></p>
            <p class="text-zinc-300">Sistem PKL: <span class="text-amber-400">UNKNOWN</span></p>
          `, 'info');
          break;

        case 'sudo':
          printOutput(`<p class="text-amber-300">Access granted: guest session already has visitor privileges.</p>`, 'info');
          break;

        default:
          printOutput(`Perintah tidak dikenal: <b>${escapeHtml(cmd)}</b>. Ketik <span class="text-lime-300 font-bold">'help'</span> untuk daftar perintah.`, 'error');
      }
    }
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
  }

  function smoothScrollTo(selector) {
    const el = $(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // --- 3D PERSPECTIVE TILT & MOUSE GLOW ---
  function initCardTiltAndGlow() {
    const glowEl = $('#mouseGlow');
    const tiltCards = $$('.card-3d-tilt');

    window.addEventListener('mousemove', (e) => {
      if (glowEl) {
        glowEl.style.opacity = '1';
        glowEl.style.left = `${e.clientX}px`;
        glowEl.style.top = `${e.clientY}px`;
      }
    });

    document.addEventListener('mouseleave', () => {
      if (glowEl) glowEl.style.opacity = '0';
    });

    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  // --- SKILL-TO-PROJECT CONNECTOR ---
  function initSkillProjectConnector() {
    const techChips = $$('.tech-chip[data-tech-key]');
    const projectCards = $$('.project-card[data-tech]');

    techChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        playSound('click');
        const techKey = chip.dataset.techKey;
        const isAlreadyActive = chip.classList.contains('active');

        techChips.forEach((c) => c.classList.remove('active'));
        projectCards.forEach((p) => p.classList.remove('highlight-pulse', 'highlight-dimmed'));

        if (!isAlreadyActive) {
          chip.classList.add('active');
          let matchedCount = 0;

          projectCards.forEach((card) => {
            const projectTechs = (card.dataset.tech || '').toLowerCase();
            if (projectTechs.includes(techKey)) {
              card.classList.add('highlight-pulse');
              matchedCount++;
            } else {
              card.classList.add('highlight-dimmed');
            }
          });

          if (matchedCount > 0) {
            showNotification(
              activeLang === 'EN'
                ? `Highlighted ${matchedCount} project(s) built with ${chip.textContent.trim()}`
                : `Menyorot ${matchedCount} project yang memakai ${chip.textContent.trim()}`,
              'info'
            );
          }
        }
      });
    });
  }

  // --- PROJECT QUICK VIEW MODAL ---
  function initProjectModal() {
    const modal = $('#projectModal');
    const overlay = $('#projectModalOverlay');
    const closeBtn = $('#modalCloseBtn');
    const closeBottomBtn = $('#modalCloseBottomBtn');
    const modalCategory = $('#modalCategory');
    const modalStatusBadge = $('#modalStatusBadge');
    const modalTitle = $('#modalTitle');
    const modalDesc = $('#modalDesc');
    const modalMainImage = $('#modalMainImage');
    const modalThumbnails = $('#modalThumbnails');
    const modalFeatures = $('#modalFeatures');
    const modalTechChips = $('#modalTechChips');
    const modalVisitLink = $('#modalVisitLink');

    if (!modal) return;

    const openModal = (projectId) => {
      const data = projectsData[projectId];
      if (!data) return;

      playSound('blip');

      if (modalTitle) modalTitle.textContent = data.title;
      if (modalCategory) modalCategory.textContent = data.category;
      if (modalDesc) modalDesc.textContent = activeLang === 'EN' ? data.desc_en : data.desc_id;
      if (modalVisitLink) modalVisitLink.href = data.url;

      const originalCard = $(`.project-card[data-project-id="${projectId}"]`);
      const statusBadge = originalCard?.querySelector('.project-status');
      if (modalStatusBadge && statusBadge) {
        modalStatusBadge.innerHTML = statusBadge.outerHTML;
      }

      if (modalMainImage && data.images.length) {
        modalMainImage.src = data.images[0];
      }

      if (modalThumbnails) {
        modalThumbnails.innerHTML = '';
        if (data.images.length > 1) {
          data.images.forEach((imgSrc, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc;
            thumb.alt = `${data.title} thumbnail ${index + 1}`;
            thumb.className = `h-14 w-20 object-cover rounded border ${index === 0 ? 'border-lime-400' : 'border-white/10'} cursor-pointer hover:border-lime-400/80 transition-all`;
            thumb.addEventListener('click', () => {
              playSound('click');
              if (modalMainImage) modalMainImage.src = imgSrc;
              modalThumbnails.querySelectorAll('img').forEach((i) => i.classList.replace('border-lime-400', 'border-white/10'));
              thumb.classList.replace('border-white/10', 'border-lime-400');
            });
            modalThumbnails.appendChild(thumb);
          });
        }
      }

      if (modalFeatures) {
        modalFeatures.innerHTML = '';
        const features = activeLang === 'EN' ? data.features_en : data.features_id;
        features.forEach((feat) => {
          const li = document.createElement('li');
          li.textContent = feat;
          modalFeatures.appendChild(li);
        });
      }

      if (modalTechChips) {
        modalTechChips.innerHTML = '';
        data.tech.forEach((t) => {
          const span = document.createElement('span');
          span.className = 'text-xs px-2 py-1 rounded bg-white/5 border border-white/10 font-mono text-zinc-300';
          span.textContent = t;
          modalTechChips.appendChild(span);
        });
      }

      modal.classList.remove('hidden');
      modal.classList.add('flex');
      requestAnimationFrame(() => modal.classList.add('show'));
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      playSound('click');
      modal.classList.remove('show');
      setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
      }, 200);
    };

    $$('[data-inspect-project]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openModal(btn.dataset.inspectProject);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (closeBottomBtn) closeBottomBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  // --- COMMAND PALETTE (HUD ⌘K) ---
  function initCommandPalette() {
    const palette = $('#commandPalette');
    const overlay = $('#cmdPaletteOverlay');
    const searchInput = $('#cmdSearchInput');
    const resultsList = $('#cmdResultsList');
    const triggerBtns = [$('#cmdPaletteBtn'), $('#cmdPaletteBtnMobile'), $('#heroQuickActionBtn')];

    if (!palette) return;

    const commands = [
      { id: 'hero', icon: 'fa-house', label: 'Ke Beranda (Home)', enLabel: 'Go to Home', action: () => smoothScrollTo('#hero') },
      { id: 'about', icon: 'fa-user', label: 'Tentang Saya & Filosofi', enLabel: 'About Me & Philosophy', action: () => smoothScrollTo('#about') },
      { id: 'stack', icon: 'fa-layer-group', label: 'Tech Stack & Bahasa', enLabel: 'Tech Stack & Languages', action: () => smoothScrollTo('#stack') },
      { id: 'projects', icon: 'fa-code', label: 'Daftar Proyek Pilihan', enLabel: 'Selected Projects', action: () => smoothScrollTo('#projects') },
      { id: 'contact', icon: 'fa-envelope', label: 'Hubungi & Mulai Diskusi', enLabel: 'Contact & Hire Form', action: () => smoothScrollTo('#contact') },
      { id: 'theme', icon: 'fa-circle-half-stroke', label: 'Ganti Tema (Dark / Light)', enLabel: 'Toggle Dark / Light Theme', action: toggleTheme },
      {
        id: 'lang',
        icon: 'fa-language',
        label: 'Ganti Bahasa (ID / EN)',
        enLabel: 'Switch Language (ID / EN)',
        action: () => {
          const next = activeLang === 'EN' ? 'ID' : 'EN';
          localStorage.setItem('lang', next);
          applyLanguage(next);
        },
      },
      { id: 'sound', icon: 'fa-volume-high', label: 'Efek Suara (SFX)', enLabel: 'Toggle Audio SFX', action: toggleSound },
      { id: 'matrix', icon: 'fa-terminal', label: 'Matrix Rain Mode', enLabel: 'Activate Matrix Rain Mode', action: toggleMatrixRain },
      {
        id: 'confetti',
        icon: 'fa-wand-magic-sparkles',
        label: 'Ledakkan Confetti',
        enLabel: 'Trigger Confetti Blast',
        action: () => {
          playSound('success');
          triggerConfetti();
        },
      },
      {
        id: 'github',
        icon: 'fa-github',
        isBrand: true,
        label: 'Buka Profil GitHub',
        enLabel: 'Open GitHub Profile',
        action: () => window.open('https://github.com/LaluDeyndra', '_blank'),
      },
      {
        id: 'wa',
        icon: 'fa-whatsapp',
        isBrand: true,
        label: 'Kirim WhatsApp (+62 813-5910-8149)',
        enLabel: 'Send WhatsApp (+62 813-5910-8149)',
        action: () => window.open('https://wa.me/6281359108149', '_blank'),
      },
    ];

    let activeIndex = 0;
    let filteredCommands = [...commands];

    const renderResults = () => {
      if (!resultsList) return;
      resultsList.innerHTML = '';

      if (!filteredCommands.length) {
        resultsList.innerHTML = `<div class="p-4 text-center text-xs text-zinc-500 font-mono">Tidak ada perintah yang cocok.</div>`;
        return;
      }

      filteredCommands.forEach((cmd, idx) => {
        const item = document.createElement('div');
        item.className = `cmd-item ${idx === activeIndex ? 'active' : ''}`;
        item.innerHTML = `
          <div class="flex items-center gap-3">
            <span class="text-xs sm:text-sm font-medium">${activeLang === 'EN' ? cmd.enLabel : cmd.label}</span>
          </div>
          <span class="text-[10px] font-mono text-zinc-500 uppercase">Pilih</span>
        `;

        item.addEventListener('click', () => {
          cmd.action();
          closePalette();
        });

        resultsList.appendChild(item);
      });
    };

    const openPalette = () => {
      playSound('blip');
      palette.classList.remove('hidden');
      palette.classList.add('flex');
      requestAnimationFrame(() => palette.classList.add('show'));
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      filteredCommands = [...commands];
      activeIndex = 0;
      renderResults();
      document.body.style.overflow = 'hidden';
    };

    const closePalette = () => {
      playSound('click');
      palette.classList.remove('show');
      setTimeout(() => {
        palette.classList.add('hidden');
        palette.classList.remove('flex');
        document.body.style.overflow = '';
      }, 180);
    };

    triggerBtns.forEach((btn) => {
      if (btn) btn.addEventListener('click', openPalette);
    });

    if (overlay) overlay.addEventListener('click', closePalette);

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        filteredCommands = commands.filter((c) =>
          c.label.toLowerCase().includes(query) || c.enLabel.toLowerCase().includes(query) || c.id.toLowerCase().includes(query)
        );
        activeIndex = 0;
        renderResults();
      });

      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          playSound('click');
          activeIndex = (activeIndex + 1) % filteredCommands.length;
          renderResults();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          playSound('click');
          activeIndex = (activeIndex - 1 + filteredCommands.length) % filteredCommands.length;
          renderResults();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (filteredCommands[activeIndex]) {
            filteredCommands[activeIndex].action();
            closePalette();
          }
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (palette.classList.contains('hidden')) {
          openPalette();
        } else {
          closePalette();
        }
      } else if (e.key === 'Escape' && !palette.classList.contains('hidden')) {
        closePalette();
      }
    });
  }

  // --- MATRIX RAIN EASTER EGG ---
  let matrixInterval = null;
  function toggleMatrixRain() {
    const canvas = $('#matrixCanvas');
    const hint = $('#matrixHint');
    if (!canvas) return;

    if (canvas.classList.contains('hidden')) {
      canvas.classList.remove('hidden');
      if (hint) {
        hint.classList.remove('hidden');
        hint.classList.add('flex');
      }

      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const chars = '0123456789ABCDEF';
      const fontSize = 16;
      const columns = Math.floor(canvas.width / fontSize);
      const drops = Array(columns).fill(1);

      const draw = () => {
        ctx.fillStyle = 'rgba(9, 9, 11, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#a3e635';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };

      matrixInterval = setInterval(draw, 33);

      const exitHandler = (e) => {
        if (e.key === 'Escape' || e.type === 'click') {
          clearInterval(matrixInterval);
          canvas.classList.add('hidden');
          if (hint) {
            hint.classList.add('hidden');
            hint.classList.remove('flex');
          }
          document.removeEventListener('keydown', exitHandler);
          canvas.removeEventListener('click', exitHandler);
        }
      };

      document.addEventListener('keydown', exitHandler);
      canvas.addEventListener('click', exitHandler);
    } else {
      clearInterval(matrixInterval);
      canvas.classList.add('hidden');
      if (hint) {
        hint.classList.add('hidden');
        hint.classList.remove('flex');
      }
    }
  }

  // --- CELEBRATION CONFETTI ENGINE ---
  function triggerConfetti() {
    let canvas = document.getElementById('confettiCanvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'confettiCanvas';
      canvas.className = 'fixed inset-0 pointer-events-none z-[120]';
      document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#a3e635', '#22d3ee', '#10b981', '#f59e0b', '#ffffff'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 16 - 4,
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10,
        alpha: 1,
      });
    }

    let animationFrame;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25;
        p.rotation += p.vr;
        p.alpha -= 0.012;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (alive) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationFrame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    animate();
  }

  // --- BACK TO TOP & SCROLL PROGRESS ---
  function initBackToTop() {
    const btn = $('#backToTopBtn');
    const circle = $('#progressRingPath');
    if (!btn || !circle) return;

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      circle.style.strokeDashoffset = 100 - progress;

      if (scrollTop > 350) {
        btn.classList.remove('hidden');
        btn.classList.add('flex');
      } else {
        btn.classList.add('hidden');
        btn.classList.remove('flex');
      }
    });

    btn.addEventListener('click', () => {
      playSound('click');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- KONAMI CODE EASTER EGG ---
  function initKonamiCode() {
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let index = 0;

    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === konami[index].toLowerCase()) {
        index++;
        if (index === konami.length) {
          playSound('success');
          triggerConfetti();
          toggleMatrixRain();
          showNotification('Konami code activated.', 'success');
          index = 0;
        }
      } else {
        index = 0;
      }
    });
  }

  // --- INITIALIZATION ON DOM READY ---
  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(activeLang);
    initTheme();
    updateSoundUI();
    initMobileMenu();
    initReveal();
    initProjectFilters();
    initProjectStatus();
    initEmail();
    initPreloader();
    initLiveClock();
    initTypewriter();
    initInteractiveTerminal();
    initCardTiltAndGlow();
    initSkillProjectConnector();
    initProjectModal();
    initCommandPalette();
    initBackToTop();
    initKonamiCode();

    // Sound toggle buttons
    $$('.sound-toggle').forEach((button) => {
      button.addEventListener('click', toggleSound);
    });

    // Language toggle buttons
    $$('.lang-toggle').forEach((button) => {
      button.addEventListener('click', () => {
        playSound('click');
        const nextLang = activeLang === 'EN' ? 'ID' : 'EN';
        localStorage.setItem('lang', nextLang);
        applyLanguage(nextLang);
      });
    });

    // Theme toggle buttons
    $$('.theme-toggle').forEach((button) => button.addEventListener('click', toggleTheme));

    // Confetti button in contact section
    const confettiBtn = $('#confettiTriggerBtn');
    if (confettiBtn) {
      confettiBtn.addEventListener('click', () => {
        playSound('success');
        triggerConfetti();
        showNotification(activeLang === 'EN' ? 'Ready to collaborate.' : 'Siap berkolaborasi.', 'success');
      });
    }
  });
})();
