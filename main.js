const navbar = document.getElementById('navbar');

    // Function to add/remove class based on scroll position
    function changeNavbarBackgroundOnScroll() {
      if (window.scrollY > 50) { // Adjust the scroll position where the change occurs
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Listen for scroll events
    window.addEventListener('scroll', changeNavbarBackgroundOnScroll);