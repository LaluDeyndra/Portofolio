// Initialize EmailJS
(function () {
  // GANTI DENGAN ID EmailJS ANDA
  const EMAILJS_USER_ID = 'ID27XBMUYROT2P-Sy';
  const EMAILJS_SERVICE_ID = 'service_t6gttvr';
  const TEMPLATE_TO_YOU = 'template_en6yj23';
  const TEMPLATE_AUTO_REPLY = 'template_2luf90z';

  // Inisialisasi EmailJS
  emailjs.init(EMAILJS_USER_ID);

  // Fungsi untuk menampilkan notifikasi
  function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    const notificationClose = document.getElementById('notification-close');

    // Reset warna dan ikon
    let iconClass = 'fas fa-info-circle text-blue-400';
    let borderColor = 'rgba(59, 130, 246, 0.5)';
    
    if (type === 'success') {
      iconClass = 'fas fa-check-circle text-green-400';
      borderColor = 'rgba(34, 197, 94, 0.5)';
    } else if (type === 'error') {
      iconClass = 'fas fa-exclamation-circle text-red-500';
      borderColor = 'rgba(239, 68, 68, 0.5)';
    }

    notificationMessage.innerHTML = `<i class="${iconClass} text-xl mr-2"></i> <span>${message}</span>`;
    notification.style.borderColor = borderColor;
    
    // Tampilkan elemen
    notification.classList.remove('hidden');

    // Trigger animasi masuk menggunakan requestAnimationFrame untuk kepastian
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        notification.classList.remove('translate-x-full');
        notification.classList.add('translate-x-0');
      });
    });

    // Sembunyikan otomatis setelah 5 detik
    setTimeout(() => {
      hideNotification();
    }, 5000);

    notificationClose.onclick = hideNotification;
  }

  function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('translate-x-0');
    notification.classList.add('translate-x-full');
    setTimeout(() => {
      notification.classList.add('hidden');
    }, 300); // Sesuai dengan durasi transition-all duration-300 Tailwind
  }

  // FUNGSI UTAMA - DISESUAIKAN DENGAN FORMAT TEMPLATE
  function sendEmail(event) {
    event.preventDefault();

    // Ambil data form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validasi sederhana
    if (!name || !email || !subject || !message) {
      showNotification('Harap isi semua field.', 'error');
      return;
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotification('Harap masukkan alamat email yang valid.', 'error');
      return;
    }

    // Tampilkan loading
    const submitText = document.getElementById('submit-text');
    const loadingIcon = document.getElementById('loading-icon');
    // Tampilkan loading tergantung bahasa aktif
    const activeLang = localStorage.getItem('lang') || 'ID';
    submitText.textContent = activeLang === 'EN' ? 'Sending...' : 'Mengirim...';
    loadingIcon.classList.remove('hidden');

    console.log('=== MENGIRIM EMAIL ===');

    // 1. EMAIL KE ANDA (template_en6yJ23)
    const emailToYou = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      to_email: 'laludeyndrafavian@gmail.com',
      date: new Date().toLocaleDateString('id-ID'),
      time: new Date().toLocaleTimeString('id-ID'),
    };

    // 2. AUTO-REPLY KE PENGIRIM (template_2luf90z)
    const autoReply = {
      to_email: email,
      date: new Date().toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      time: new Date().toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      from_name: 'Lalu Deyndra Favian',
      message_id: 'MSG' + Date.now().toString().slice(-6),
      to_name: name,
      name: name,
      year: new Date().getFullYear(),
    };

    console.log('📧 Email ke Anda:', emailToYou);
    console.log('📨 Auto-reply params:', autoReply);

    // Kirim email pertama (ke Anda)
    emailjs
      .send(EMAILJS_SERVICE_ID, TEMPLATE_TO_YOU, emailToYou)
      .then(function (response1) {
        console.log('✅ Email ke Anda TERKIRIM:', response1);
        return emailjs.send(EMAILJS_SERVICE_ID, TEMPLATE_AUTO_REPLY, autoReply);
      })
      .then(function (response2) {
        console.log('✅ Auto-reply TERKIRIM:', response2);
        showNotification(activeLang === 'EN' ? 'Message sent successfully! A confirmation email has been sent to ' + email : 'Pesan berhasil dikirim! Email konfirmasi telah dikirim ke ' + email, 'success');
        document.getElementById('contact-form').reset();
        submitText.textContent = activeLang === 'EN' ? 'Send Message' : 'Kirim Pesan';
        loadingIcon.classList.add('hidden');
      })
      .catch(function (error) {
        console.log('❌ Error detail:', error);
        if (error.text && error.text.includes('template ID not found')) {
          showNotification('Template tidak ditemukan. Periksa: template_en6yJ23 (huruf besar J)', 'error');
        } else if (error.text && error.text.includes('recipients address is empty')) {
          showNotification('Error: Field "To Email" di template auto-reply kosong.', 'error');
        } else if (error.status === 422) {
          showNotification('Format email salah atau field required kosong.', 'error');
        } else if (error.status === 400) {
          showNotification('Email tidak valid atau quota habis.', 'error');
        } else {
          showNotification('Gagal mengirim. Silakan coba lagi. Error: ' + error.text, 'error');
        }
        submitText.textContent = activeLang === 'EN' ? 'Send Message' : 'Kirim Pesan';
        loadingIcon.classList.add('hidden');
      });
  }

  // Event listener untuk form
  document.getElementById('contact-form').addEventListener('submit', sendEmail);

  // Fungsi preloader melacak loading status gambar
  function initPreloader() {
    const images = Array.from(document.images);
    let loadedCount = 0;
    const totalImages = images.length;
    const progressFill = document.getElementById('progress-fill');
    const loadingText = document.getElementById('loading-text');
    const preloader = document.getElementById('preloader');
    const activeLang = localStorage.getItem('lang') || 'ID';
    
    const dismissPreloader = () => {
      if (progressFill) progressFill.style.width = '100%';
      if (loadingText) loadingText.textContent = activeLang === 'EN' ? 'Complete!' : 'Selesai!';
      
      setTimeout(() => {
        preloader.style.transition = 'opacity 0.6s ease-out';
        preloader.style.opacity = '0';
        
        setTimeout(() => {
          preloader.classList.add('hidden');
          document.body.classList.remove('loading');
          
          // Animasi skill bars setelah selesai loading
          const skillBars = document.querySelectorAll('.skill-progress');
          skillBars.forEach((bar) => {
            const width = bar.style.width || '100%';
            bar.style.width = '0%';
            setTimeout(() => {
              bar.style.width = width;
            }, 300);
          });
        }, 600); // Tunggu masa transisi opacity selesai
      }, 400); // Tahan sesaat setelah 100% penuh
    };

    if (totalImages === 0) {
      dismissPreloader();
      return;
    }

    function imageLoaded() {
      loadedCount++;
      const percent = (loadedCount / totalImages) * 100;
      if (progressFill) progressFill.style.width = percent + '%';
      if (loadingText) loadingText.textContent = activeLang === 'EN' ? `Loading... ${loadedCount}/${totalImages}` : `Memuat... ${loadedCount}/${totalImages}`;

      if (loadedCount >= totalImages) {
        dismissPreloader();
      }
    }

    images.forEach(img => {
      if (img.complete) {
        imageLoaded();
      } else {
        img.addEventListener('load', imageLoaded);
        img.addEventListener('error', imageLoaded); // Hindari stuck jika gambar 404
      }
    });

    // Fallback ekstrim jika ada gambar yang freeze lebih dari 10 detik
    setTimeout(() => {
      if(loadedCount < totalImages) dismissPreloader();
    }, 10000); 
  }

  // Gunakan DOMContentLoaded untuk melacak render sedini mungkin
  document.addEventListener('DOMContentLoaded', initPreloader);

  // Observer untuk animasi scroll-triggered
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe sections
  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
  document.querySelectorAll('.project-card').forEach((el) => observer.observe(el));
  document.querySelectorAll('.social-icon').forEach((el) => observer.observe(el));

  // Mobile Menu Functionality
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const closeMobileMenuButton = document.getElementById('closeMobileMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuPanel = mobileMenu.querySelector('.transform');

  function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
      menuOverlay.classList.remove('opacity-0');
      menuPanel.classList.remove('translate-x-full');
    }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    menuOverlay.classList.add('opacity-0');
    menuPanel.classList.add('translate-x-full');
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  }

  if (mobileMenuButton) mobileMenuButton.addEventListener('click', openMobileMenu);
  if (closeMobileMenuButton) closeMobileMenuButton.addEventListener('click', closeMobileMenu);
  if (menuOverlay) menuOverlay.addEventListener('click', closeMobileMenu);

  const mobileMenuLinks = document.querySelectorAll('#mobileMenu a');
  if (mobileMenuLinks) {
    mobileMenuLinks.forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // Theme Toggle Functionality
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  const htmlEl = document.documentElement;
  const body = document.body;

  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';

  // Apply the saved theme
  if (currentTheme === 'light') {
    htmlEl.classList.remove('dark');
    body.classList.add('light');
    
    if (themeToggle) {
      themeToggle.querySelector('i').className = 'fas fa-sun';
      themeToggle.classList.remove('text-yellow-400');
      themeToggle.classList.add('text-orange-500');
    }
    if (themeToggleMobile) {
      themeToggleMobile.querySelector('i').className = 'fas fa-sun';
      themeToggleMobile.classList.remove('text-yellow-400');
      themeToggleMobile.classList.add('text-orange-500');
    }
  }

  // Toggle theme function
  function toggleTheme() {
    body.classList.toggle('light');
    htmlEl.classList.toggle('dark');

    const isLight = body.classList.contains('light');
    const newIconClass = isLight ? 'fas fa-sun' : 'fas fa-moon';
    
    [themeToggle, themeToggleMobile].forEach(btn => {
      if (btn) {
        btn.querySelector('i').className = newIconClass;
        if (isLight) {
          btn.classList.remove('text-yellow-400');
          btn.classList.add('text-orange-500');
        } else {
          btn.classList.remove('text-orange-500');
          btn.classList.add('text-yellow-400');
        }
      }
    });

    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

  // Tampilkan petunjuk setup EmailJS jika belum diatur
  if (EMAILJS_USER_ID === 'YOUR_USER_ID') {
    setTimeout(() => {
      showNotification('EmailJS belum dikonfigurasi. Silakan daftar di EmailJS.com dan ganti USER_ID, SERVICE_ID, dan TEMPLATE_ID di kode JavaScript.', 'info');
    }, 2000);
  }

  /* =========================================
     INTERNATIONALIZATION (i18n)
  ========================================= */
  const currentLang = localStorage.getItem('lang') || 'ID';
  const langToggles = document.querySelectorAll('.lang-toggle');

  const translations = {
    ID: {
      loading: "Memuat...",
      nav_home: "Beranda",
      nav_about: "Tentang",
      nav_about_full: "Tentang Saya",
      nav_projects: "Proyek",
      nav_contact: "Kontak",
      hero_title_1: "Membangun ",
      hero_title_2: "Solusi Digital",
      hero_title_3: " Masa Depan",
      hero_desc: "Halo, Saya Lalu Deyndra. Web Developer, Prompt Engineer, dan inovator teknologi yang menciptakan karya terintegrasi dari antarmuka hingga server.",
      hero_btn: "Lihat Proyek Saya",
      abt_explore: "Eksplorasi",
      abt_title: "Tentang Perjalanan Saya",
      abt_desc_1_pre: "Saya seorang ",
      abt_desc_1_post: " yang sangat menikmati proses mewujudkan ide menjadi kenyataan. Fokus saya mencakup pengembangan antarmuka (Front-End) yang interaktif, pembuatan API dan sistem server (Back-End) yang tangguh, serta merancang solusi ",
      abt_desc_1_iot: "IoT terintegrasi",
      abt_desc_2: "Kualitas kode adalah prioritas utama. Security, scalability, dan clean design adalah fondasi dari setiap aplikasi yang saya bangun.",
      abt_iot_desc: "Sistem terintegrasi dengan sensor realtime.",
      abt_ci_title: "Server Auto",
      abt_ci_desc: "Otomatisasi proses & CI/CD deployment.",
      tech_tools: "TOOLS & CLOUD",
      proj_title: "Showcase Eksekusi",
      proj_arvi_desc: "Platform inovatif \"Bento-style\" directory dan aplikasi IoT untuk memantau ekosistem Kutub Utara. Dilengkapi asisten AI responsif untuk menjelajahi ensiklopedia hewan dan pengolahan data sensor secara real-time.",
      proj_gacha_desc: "Bot interaktif bertema Gacha untuk meramaikan server Discord dengan berbagai variasi minigames seru.",
      proj_galeri_desc: "Platform statis elegan untuk menyorot dan mengapresiasi pencapaian prestasi dari individu tersembunyi.",
      proj_pkl_badge: "App / Team",
      proj_pkl_desc: "Aplikasi manajemen terintegrasi untuk siswa Praktik Kerja Lapangan. Bertujuan menyederhanakan birokrasi, pemantauan realtime, dan dokumentasi aktivitas siswa.",
      proj_pkl_btn: "Tinjau Portal",
      proj_github_btn: "Kunjungi Repositori GitHub Saya",
      cnt_title_1: "Mari Bangun ",
      cnt_title_2: "Sesuatu yang Hebat.",
      cnt_desc: "Saya selalu terbuka untuk diskusi mengenai potensi kolaborasi, pekerjaan baru, atau sekadar bertukar wawasan di bidang teknologi.",
      cnt_email: "Kirim Email",
      cnt_phone: "Telepon / WA",
      form_name: "NAMA LENGKAP",
      form_name_ph: "John Doe",
      form_email: "EMAIL",
      form_email_ph: "john@example.com",
      form_sub: "SUBJEK",
      form_sub_ph: "Hal yang ingin didiskusikan",
      form_msg: "PESAN",
      form_msg_ph: "Tuliskan pesan Anda...",
      form_send: "Kirim Pesan",
      footer_cpy: "&copy; 2025. All Rights Reserved.",
      footer_badge: "Code with Passion"
    },
    EN: {
      loading: "Loading...",
      nav_home: "Home",
      nav_about: "About",
      nav_about_full: "About Me",
      nav_projects: "Projects",
      nav_contact: "Contact",
      hero_title_1: "Building ",
      hero_title_2: "Digital Solutions",
      hero_title_3: " for the Future",
      hero_desc: "Hi, I am Lalu Deyndra. Web Developer, Prompt Engineer, and technology innovator creating integrated solutions from interface to server.",
      hero_btn: "View My Projects",
      abt_explore: "Exploration",
      abt_title: "About My Journey",
      abt_desc_1_pre: "I am a ",
      abt_desc_1_post: " who deeply enjoys the process of turning ideas into reality. My focus includes developing interactive user interfaces (Front-End), building robust APIs and server systems (Back-End), and designing ",
      abt_desc_1_iot: "integrated IoT",
      abt_desc_2: "Code quality is my top priority. Security, scalability, and clean design are the foundations of every application I build.",
      abt_iot_desc: "Integrated systems with real-time sensors.",
      abt_ci_title: "Auto CI/CD",
      abt_ci_desc: "Process automation & CI/CD deployment.",
      tech_tools: "TOOLS & CLOUD",
      proj_title: "Execution Showcase",
      proj_arvi_desc: "Innovative \"Bento-style\" directory platform and IoT app for monitoring the Arctic ecosystem. Equipped with a responsive AI assistant for exploring the animal encyclopedia and real-time sensor data processing.",
      proj_gacha_desc: "Interactive Gacha-themed bot to liven up Discord servers with a variety of fun minigames.",
      proj_galeri_desc: "Elegant static platform to highlight and appreciate the achievements of hidden individuals.",
      proj_pkl_badge: "App / Team",
      proj_pkl_desc: "Integrated management application for Field Work Practice students. Aims to streamline bureaucracy, real-time monitoring, and student activity documentation.",
      proj_pkl_btn: "Review Portal",
      proj_github_btn: "Visit My GitHub Repository",
      cnt_title_1: "Let's Build ",
      cnt_title_2: "Something Great.",
      cnt_desc: "I am always open to discussing potential collaborations, new opportunities, or simply exchanging insights in technology.",
      cnt_email: "Send Email",
      cnt_phone: "Phone / WA",
      form_name: "FULL NAME",
      form_name_ph: "John Doe",
      form_email: "EMAIL",
      form_email_ph: "john@example.com",
      form_sub: "SUBJECT",
      form_sub_ph: "What you want to discuss",
      form_msg: "MESSAGE",
      form_msg_ph: "Write your message here...",
      form_send: "Send Message",
      footer_cpy: "&copy; 2025. All Rights Reserved.",
      footer_badge: "Code with Passion"
    }
  };

  function applyLanguage(lang) {
    // Update button texts
    langToggles.forEach(btn => {
      btn.textContent = lang === 'ID' ? 'EN' : 'ID';
    });

    document.documentElement.lang = lang.toLowerCase();

    // Update translatable static texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key]; 
      }
    });

    // Update translatable attributes (like placeholders)
    document.querySelectorAll('[data-i18n-attr="placeholder"]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });
  }

  function toggleLanguage() {
    const newLang = localStorage.getItem('lang') === 'EN' ? 'ID' : 'EN';
    localStorage.setItem('lang', newLang);
    applyLanguage(newLang);
  }

  // Initial apply
  applyLanguage(currentLang);

  // Event listeners
  langToggles.forEach(btn => {
    btn.addEventListener('click', toggleLanguage);
  });
})();
