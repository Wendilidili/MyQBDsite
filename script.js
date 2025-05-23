const books = [
    {
        title: "Onyx Storm",
        author: "Rebecca Yarros",
        price: "$26.99",
        image: "Bookcovers/onyx-storm.webp",
        discount: "-29% OFF"
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
        discount: "-29% OFF"
    },
    {
        title: "Orbital",
        author: "Samantha Harvey",
        price: "$16.99",
        image: "Bookcovers/Orbital.webp"
    }
];

const booksGrid = document.getElementById('books-grid');

books.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';

    // Check if a discount exists
    const discountBadge = book.discount
        ? `<div class="discount-badge">${book.discount}</div>`
        : '';

    card.innerHTML = `
        ${discountBadge}
        <img src="${book.image}" alt="${book.title}">
        <div class="book-details">
            <div class="book-title">${book.title}</div>
            <div class="book-author">${book.author}</div>
            <div class="book-price">${book.price}</div>
        </div>
        <button class="add-to-cart">Add to Cart</button>
    `;

    booksGrid.appendChild(card);
});