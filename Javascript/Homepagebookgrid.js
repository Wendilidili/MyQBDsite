const books = [
    {
        title: "Onyx Storm",
        author: "Rebecca Yarros",
        price: "$26.99",
        image: "Bookcovers/onyx-storm.webp",
        discount: "-29% OFF",
        format: "Hardcover"
    },
    {
        title: "Before the Coffee Gets Cold",
        author: "Toshikazu Kawaguchi",
        price: "$15.99",
        image: "Bookcovers/beforethecoffee.webp"
    },
    {
        title: "Sunrise on the Reaping",
        author: "Suzanne Collins",
        price: "$22.99",
        image: "Bookcovers/sunriseofthe.webp"
    },
    {
        title: "The Mademoiselle Alliance",
        author: "Natasha Lester",
        price: "$24.99",
        image: "Bookcovers/themademoiselle.webp",
        discount: "-29% OFF",
        format: "Hardcover"
    },
    {
        title: "Orbital",
        author: "Samantha Harvey",
        price: "$16.99",
        image: "Bookcovers/Orbital.webp"
    }
];

const booksGrid = document.getElementById('books-grid');

books.forEach((book, index) => {
    const card = document.createElement('div');
    card.className = 'book-card';

    const discountBadge = book.discount
        ? `<div class="discount-badge">${book.discount}</div>`
        : '';

    const formatTag = book.format
        ? `<div class="book-format">${book.format}</div>`
        : `<div class="book-format">&nbsp;</div>`;  // placeholder for alignment

    card.innerHTML = `
        <div class="image-wrapper">
            <img src="${book.image}" alt="${book.title}">
            ${discountBadge}
        </div>
        <div class="book-details">
            <div class="book-title">${book.title}</div>
            <div class="book-author">${book.author}</div>
            ${formatTag}
            <div class="book-price">${book.price}</div>
        </div>
        <button class="add-to-cart">Add to Cart</button>
    `;

    if (index === 0) {
        const anchor = document.createElement('a');
        anchor.href = 'QBDProductpage.html'; 
        anchor.style.textDecoration = 'none';
        anchor.appendChild(card);
        booksGrid.appendChild(anchor);
    } else {
        booksGrid.appendChild(card);
    }
});


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


