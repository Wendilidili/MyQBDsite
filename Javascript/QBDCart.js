//search results linking to other pages: 
  const searchBox = document.getElementById('search-input');

  searchBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Optional: prevent form submission
      const query = searchBox.value.trim();

      // Redirect to a page with the search query in URL
      if (query) {
        window.location.href = `QBDSearch.html?=${encodeURIComponent(query)}`;
      }
    }
  });