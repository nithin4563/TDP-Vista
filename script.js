// Zoom functionality
const zoomButtons = document.querySelectorAll('.zoom-btn');
zoomButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const artwork = button.closest('.artwork');
    artwork.classList.toggle('zoomed');
  });
});

// Search functionality
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () => {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase();

  const artworks = document.querySelectorAll('.artwork');
  artworks.forEach((artwork) => {
    const artworkTitle = artwork.querySelector('h2').textContent.toLowerCase();
    const artworkArtist = artwork.querySelector('p').textContent.toLowerCase();

    if (
      artworkTitle.includes(searchTerm) ||
      artworkArtist.includes(searchTerm)
    ) {
      artwork.style.display = 'block';
    } else {
      artwork.style.display = 'none';
    }
  });
});

