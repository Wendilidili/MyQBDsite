
//JS for book product cards on the filtered browse page
document.addEventListener('DOMContentLoaded', () => {
  const gridMappings = {
    'books-grid': [
      {
        title: "Onyx Storm",
        author: "Rebecca Yarros",
        price: "$26.99",
        image: "Bookcovers/onyx-storm.webp",
        discount: "-23% OFF",
        format: "Hardcover"
      },
      {
        title: "Phantasma",
        author: "Kaylie Smith",
        price: "$17.99",
        image: "Bookcovers/phantasma.webp",
        discount: "-22% OFF"
      },
      {
        title: "Once Upon a Broken Heart",
        author: "Stephanie Garber",
        price: "$19.99",
        image: "Bookcovers/onceupon.webp"
      },
      {
        title: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        price: "$22.99",
        image: "Bookcovers/acotar.webp"
      },
      {
        title: "The Ashes and the Star Cursed King",
        author: "Carissa Broadbent",
        price: "$24.99",
        image: "Bookcovers/theashesandthe.webp"
      }
    ],
    'books-row1': [
        {
            title: "Onyx Storm",
            author: "Rebecca Yarros",
            price: "$26.99",
            image: "Bookcovers/onyx-storm.webp",
            discount: "-23% OFF",
            format: "Hardcover"
        },
        {
            title: "Iron Flame",
            author: "Rebecca Yarros",
            price: "$24.99",
            image: "Bookcovers/ironflame.webp",
            discount: "-24% OFF",
        },
        {
            title: "The Ragpicker King",
            author: "Cassandra Claree",
            price: "$24.99",
            image: "Bookcovers/theragpicker.webp",
            discount: "-29% OFF"
        },
        {
            title: "The Poppy War",
            author: "R. F. Kuang",
            price: "$17.99",
            image: "Bookcovers/thepoppywar.webp",
            discount: "-23% OFF"
        },
        {
            title: "Throne of Glass",
            author: "Sarah J. Maas",
            price: "$24.99",
            image: "Bookcovers/throneofglass.webp",
            discount: "-22% OFF",
        }
    ],
    'books-row2': [
        {
            title: "Slaying the Vampire Conqueror",
            author: "Carissa Broadbent",
            price: "$26.99",
            image: "Bookcovers/slayingthevampire.webp",
            discount: "-23% OFF"
        },
        {
            title: "The Dawn of the Cursed Queen",
            author: "Amber V. Nicole",
            price: "$19.99",
            image: "Bookcovers/thedawnofthe.webp",
            discount: "-20% OFF"
        },
        {
            title: "When the Moon Hatched",
            author: "Sarah A. Parker",
            price: "$26.99",
            discount: "-23% OFF",
            image: "Bookcovers/whenthemoonhatched.webp"
        },
        {
            title: "Heat of the Everflame",
            author: "Penn Cole",
            price: "$26.99",
            image: "Bookcovers/heatofthe.webp",
            discount: "-23% OFF"
        },
        {
            title: "Spark of the Everflame",
            author: "Penn Cole",
            price: "$24.99",
            image: "Bookcovers/sparkofthe.webp",
            discount: "-24% OFF"
        }
    ]
  };

  Object.entries(gridMappings).forEach(([gridId, books]) => {
    const container = document.getElementById(gridId);
    if (!container) return;

    books.forEach(book => {
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
        <a href="QBDCart.html" class="add-to-cart">Add to Cart</a>
      `;

      const anchor = document.createElement('a');
      anchor.href = `QBDProductpage.html?title=${encodeURIComponent(book.title)}`;
      anchor.style.textDecoration = 'none';
      anchor.appendChild(card);

      container.appendChild(anchor);
    });
  });
});




// JS for Filter menu:
const filterToggle = document.getElementById('filter-toggle');
const filterMenu = document.getElementById('filter-menu');
const closeFilter = document.getElementById('close-filter');
const filterDropdowns = filterMenu.querySelectorAll('.dropdown-toggle');

filterToggle.addEventListener('click', () => {
  filterMenu.classList.add('open');
});

closeFilter.addEventListener('click', () => {
  filterMenu.classList.remove('open');
});

filterDropdowns.forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    const targetId = toggle.getAttribute('data-target');
    const submenu = document.getElementById(targetId);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    toggle.classList.toggle('open');
  });
});

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