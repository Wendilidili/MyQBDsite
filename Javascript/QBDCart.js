//search results linking to other pages: 
  const searchBox = document.getElementById('search-input');

  searchBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      const query = searchBox.value.trim();

      if (query) {
        window.location.href = `QBDSearch.html?=${encodeURIComponent(query)}`;
      }
    }
  });