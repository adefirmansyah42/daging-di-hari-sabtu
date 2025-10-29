// script.js
    // ambil element hamburger dan nav-links
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    //Ketika hamburger di-klik, toggle class 'active'
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // tutup menu ketika link di-klik
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // tutup menu ketika klik di luar navbar
    document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
