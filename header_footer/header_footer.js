// Function to load HTML content
function loadHTML(elementId, filePath, callback) {
  fetch(filePath)
      .then(response => response.text())
      .then(data => {
          document.getElementById(elementId).innerHTML = data;
          if (callback) callback(); 
      })
      .catch(error => console.error('Error loading HTML:', error));
}

// Load header first, then initialize mobile menu
loadHTML('header', 'header_footer/header.html', function () {
  initializeMobileMenu(); 
  initializeNavbarScroll();
});

loadHTML('footer', 'header_footer/footer.html');

function initializeMobileMenu() {
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar__menu');

  if (menu && menuLinks) {
      menu.addEventListener('click', function () {
          menu.classList.toggle('is-active');
          menuLinks.classList.toggle('active');
      });
  }
}

// Scroll + hiding navbar
function initializeNavbarScroll() {
  let lastScroll = 0;
  const navbar = document.querySelector(".navbar");

  if (!navbar) return; 

  window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    // show navbar at top
    if (currentScroll <= 0) {
      navbar.classList.remove("hidden");
      return;
    }

    // navbar hidden when scrolling down
    if (currentScroll > lastScroll) {
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }

    lastScroll = currentScroll;
  });
}