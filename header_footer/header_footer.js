// Function to load HTML content
function loadHTML(elementId, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => document.getElementById(elementId).innerHTML = data)
      .catch(error => console.error('Error loading HTML:', error));
  }

  // Load header and footer
  loadHTML('header', 'header_footer/header.html');
  loadHTML('footer', 'header_footer/footer.html');