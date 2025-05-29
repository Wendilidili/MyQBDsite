
const books = [
    {
        title: "The Book of Azrael",
        author: "Amber V. Nicole",
        price: "$17.99",
        image: "Bookcovers/thebookofazrael.webp",
    },
    {
        title: "The Book of Azrael",
        author: "Amber V. Nicole",
        price: "$32.99",
        image: "Bookcovers/thebookofazrael.webp",
        format: "Hardcover"
    }
];

const booksGrid = document.getElementById('results-row');

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
        booksGrid.appendChild(card);
});