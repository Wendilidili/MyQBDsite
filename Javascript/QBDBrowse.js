document.addEventListener('DOMContentLoaded', () => {
  const booksGrid = document.getElementById('books-grid');

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

  books.forEach((book) => {
    const card = document.createElement('div');
    card.className = 'book-card';

    const discountBadge = book.discount
      ? `<div class="discount-badge">${book.discount}</div>`
      : '';

    const formatTag = book.format
      ? `<div class="book-format">${book.format}</div>`
      : `<div class="book-format">&nbsp;</div>`;

    card.innerHTML = `
      <div class="image-wrapper">
        <img src="${book.image}" alt="${book.title}">
        ${discountBadge}
      </div>
      <div class="book-details">
        ${formatTag}
        <div class="book-title">${book.title}</div>
        <div class="book-author">${book.author}</div>
        <div class="book-price">${book.price}</div>
      </div>
      <button class="add-to-cart">Add to Cart</button>
    `;

    booksGrid.appendChild(card);
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const booksGrid = document.getElementById('books-row1');

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

  books.forEach((book) => {
    const card = document.createElement('div');
    card.className = 'book-card';

    const discountBadge = book.discount
      ? `<div class="discount-badge">${book.discount}</div>`
      : '';

    const formatTag = book.format
      ? `<div class="book-format">${book.format}</div>`
      : `<div class="book-format">&nbsp;</div>`;

    card.innerHTML = `
      <div class="image-wrapper">
        <img src="${book.image}" alt="${book.title}">
        ${discountBadge}
      </div>
      <div class="book-details">
        ${formatTag}
        <div class="book-title">${book.title}</div>
        <div class="book-author">${book.author}</div>
        <div class="book-price">${book.price}</div>
      </div>
      <button class="add-to-cart">Add to Cart</button>
    `;

    booksGrid.appendChild(card);
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const booksGrid = document.getElementById('books-row2');

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

  books.forEach((book) => {
    const card = document.createElement('div');
    card.className = 'book-card';

    const discountBadge = book.discount
      ? `<div class="discount-badge">${book.discount}</div>`
      : '';

    const formatTag = book.format
      ? `<div class="book-format">${book.format}</div>`
      : `<div class="book-format">&nbsp;</div>`;

    card.innerHTML = `
      <div class="image-wrapper">
        <img src="${book.image}" alt="${book.title}">
        ${discountBadge}
      </div>
      <div class="book-details">
        ${formatTag}
        <div class="book-title">${book.title}</div>
        <div class="book-author">${book.author}</div>
        <div class="book-price">${book.price}</div>
      </div>
      <button class="add-to-cart">Add to Cart</button>
    `;

    booksGrid.appendChild(card);
  });
});
