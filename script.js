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

    notificationMessage.textContent = message;
    notification.className = `notification ${type} hidden`;

    setTimeout(() => {
      notification.classList.remove('hidden');
      setTimeout(() => {
        notification.classList.add('show');
      }, 10);
    }, 100);

    setTimeout(() => {
      hideNotification();
    }, 5000);

    notificationClose.onclick = hideNotification;
  }

  function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('show');
    setTimeout(() => {
      notification.classList.add('hidden');
    }, 300);
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
    submitText.textContent = 'Mengirim...';
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
        showNotification('Pesan berhasil dikirim! Email konfirmasi telah dikirim ke ' + email, 'success');
        document.getElementById('contact-form').reset();
        submitText.textContent = 'Kirim Pesan';
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
        submitText.textContent = 'Kirim Pesan';
        loadingIcon.classList.add('hidden');
      });
  }

  // Event listener untuk form
  document.getElementById('contact-form').addEventListener('submit', sendEmail);

  // Fungsi preload gambar
  function preloadImages(sources, callback) {
    let loaded = 0;
    const total = sources.length;
    const progressFill = document.getElementById('progress-fill');
    const loadingText = document.getElementById('loading-text');

    if (total === 0) {
      callback();
      return;
    }

    sources.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loaded++;
        const percent = (loaded / total) * 100;
        progressFill.style.width = percent + '%';
        loadingText.textContent = `Memuat... ${loaded}/${total}`;
        if (loaded === total) {
          setTimeout(callback, 500);
        }
      };
      img.onerror = () => {
        loaded++;
        const percent = (loaded / total) * 100;
        progressFill.style.width = percent + '%';
        loadingText.textContent = `Memuat... ${loaded}/${total}`;
        if (loaded === total) {
          setTimeout(callback, 500);
        }
      };
      img.src = src;
    });
  }

  // Jalankan preloader
  preloadImages([], () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('hidden');
    document.body.classList.remove('loading');

    // Animate skill bars after page loads
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = width;
      }, 500);
    });
  });

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

  mobileMenuButton.addEventListener('click', openMobileMenu);
  closeMobileMenuButton.addEventListener('click', closeMobileMenu);
  menuOverlay.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('#mobileMenu a').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Theme Toggle Functionality
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  const themeToggleMobileMenu = document.getElementById('themeToggleMobileMenu');
  const body = document.body;

  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';

  // Apply the saved theme
  if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.classList.add('light');
    themeToggleMobile.classList.add('light');
    themeToggleMobileMenu.classList.add('light');
    themeToggle.querySelector('.theme-toggle-handle i').className = 'fas fa-sun text-yellow-500';
    themeToggleMobile.querySelector('.theme-toggle-handle i').className = 'fas fa-sun text-yellow-500';
    themeToggleMobileMenu.querySelector('.theme-toggle-handle i').className = 'fas fa-sun text-yellow-500';
  }

  // Toggle theme function
  function toggleTheme() {
    body.classList.toggle('light-mode');
    themeToggle.classList.toggle('light');
    themeToggleMobile.classList.toggle('light');
    themeToggleMobileMenu.classList.toggle('light');

    const icon = themeToggle.querySelector('.theme-toggle-handle i');
    const iconMobile = themeToggleMobile.querySelector('.theme-toggle-handle i');
    const iconMobileMenu = themeToggleMobileMenu.querySelector('.theme-toggle-handle i');

    if (body.classList.contains('light-mode')) {
      icon.className = 'fas fa-sun text-yellow-500';
      iconMobile.className = 'fas fa-sun text-yellow-500';
      iconMobileMenu.className = 'fas fa-sun text-yellow-500';
      localStorage.setItem('theme', 'light');
    } else {
      icon.className = 'fas fa-moon text-gray-700';
      iconMobile.className = 'fas fa-moon text-gray-700';
      iconMobileMenu.className = 'fas fa-moon text-gray-700';
      localStorage.setItem('theme', 'dark');
    }
  }

  themeToggle.addEventListener('click', toggleTheme);
  themeToggleMobile.addEventListener('click', toggleTheme);
  themeToggleMobileMenu.addEventListener('click', toggleTheme);

  // Tampilkan petunjuk setup EmailJS jika belum diatur
  if (EMAILJS_USER_ID === 'YOUR_USER_ID') {
    setTimeout(() => {
      showNotification('EmailJS belum dikonfigurasi. Silakan daftar di EmailJS.com dan ganti USER_ID, SERVICE_ID, dan TEMPLATE_ID di kode JavaScript.', 'info');
    }, 2000);
  }
})();
