function createSvgImage(label, accent, accent2) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${accent}"/>
          <stop offset="100%" stop-color="${accent2}"/>
        </linearGradient>
      </defs>
      <rect width="800" height="520" fill="url(#bg)" rx="32"/>
      <circle cx="118" cy="94" r="60" fill="rgba(255,255,255,0.18)"/>
      <circle cx="700" cy="420" r="90" fill="rgba(255,255,255,0.12)"/>
      <rect x="170" y="115" width="460" height="290" rx="28" fill="rgba(255,255,255,0.13)" stroke="rgba(255,255,255,0.45)"/>
      <rect x="214" y="160" width="370" height="160" rx="18" fill="rgba(15,20,30,0.22)"/>
      <rect x="240" y="190" width="250" height="20" rx="10" fill="rgba(255,255,255,0.75)"/>
      <rect x="240" y="228" width="188" height="18" rx="9" fill="rgba(255,255,255,0.55)"/>
      <rect x="240" y="260" width="270" height="18" rx="9" fill="rgba(255,255,255,0.35)"/>
      <rect x="320" y="338" width="160" height="30" rx="15" fill="rgba(255,255,255,0.8)"/>
      <text x="400" y="445" text-anchor="middle" font-family="Arial, sans-serif" font-size="36" font-weight="700" fill="white">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const products = [
  {
    id: 1,
    name: 'Dell Latitude 7440',
    brand: 'Dell',
    category: 'Computers',
    subcategory: 'Laptops',
    description: 'Business ultrabook for office work, travel, and daily productivity.',
    productNumber: 'DL-7440-14I7-16',
    image: createSvgImage('Laptop', '#3A81FF', '#1B2D5B'),
    manufacturerUrl: 'https://www.dell.com/en-us/work',
  },
  {
    id: 2,
    name: 'HP ProDesk 400 G9',
    brand: 'HP',
    category: 'Computers',
    subcategory: 'Desktops',
    description: 'Small office desktop built for reliability and shared workstations.',
    productNumber: 'HP-PD400-G9-23',
    image: createSvgImage('Desktop', '#1EA97C', '#0A3E38'),
    manufacturerUrl: 'https://www.hp.com/us-en/workstations/desktop-pcs.html',
  },
  {
    id: 3,
    name: 'LG 27UP850N',
    brand: 'LG',
    category: 'Displays',
    subcategory: 'Monitors',
    description: '27-inch display for multitasking, design work, and clear presentations.',
    productNumber: 'LG-27UP850N',
    image: createSvgImage('Monitor', '#5D5FEF', '#2E2F78'),
    manufacturerUrl: 'https://www.lg.com/us/monitors',
  },
  {
    id: 4,
    name: 'Canon MF445dw',
    brand: 'Canon',
    category: 'Office',
    subcategory: 'Printers',
    description: 'Multi-function printer for shared office printing, copying, and scanning.',
    productNumber: 'CN-MF445DW',
    image: createSvgImage('Printer', '#FF9B42', '#A84B00'),
    manufacturerUrl: 'https://www.usa.canon.com/shop/printers',
  },
  {
    id: 5,
    name: 'Cisco Catalyst 9200',
    brand: 'Cisco',
    category: 'Networking',
    subcategory: 'Switches',
    description: 'Secure network switch for reliable office connectivity and performance.',
    productNumber: 'CISCO-C9200-48P',
    image: createSvgImage('Switch', '#FF4D6D', '#8F1D36'),
    manufacturerUrl: 'https://www.cisco.com/c/en/us/products/switches/catalyst-9200-series-switches/index.html',
  },
  {
    id: 6,
    name: 'TP-Link Archer AX5400',
    brand: 'TP-Link',
    category: 'Networking',
    subcategory: 'Routers',
    description: 'High-speed router designed to cover both office and meeting areas.',
    productNumber: 'TP-AX5400-AC',
    image: createSvgImage('Router', '#00B8D9', '#005A74'),
    manufacturerUrl: 'https://www.tp-link.com/us/business-networking/wifi-router/archer-ax5400/',
  },
  {
    id: 7,
    name: 'Logitech Brio 4K',
    brand: 'Logitech',
    category: 'Accessories',
    subcategory: 'Cameras',
    description: '4K web camera for remote meetings, video calls, and demos.',
    productNumber: 'LG-BRIO-4K',
    image: createSvgImage('Camera', '#8C6BFF', '#40338F'),
    manufacturerUrl: 'https://www.logitech.com/en-us/products/webcams/brio-4k-hdr-webcam.960-001105.html',
  },
  {
    id: 8,
    name: 'Samsung Galaxy Tab S9',
    brand: 'Samsung',
    category: 'Mobile',
    subcategory: 'Tablets',
    description: 'Portable tablet for field work, checklists, and mobile documentation.',
    productNumber: 'SM-TABS9-11',
    image: createSvgImage('Tablet', '#B66DFF', '#5E2A99'),
    manufacturerUrl: 'https://www.samsung.com/us/tablets/galaxy-tab-s/',
  },
  {
    id: 9,
    name: 'Jabra Evolve2 65',
    brand: 'Jabra',
    category: 'Audio',
    subcategory: 'Headsets',
    description: 'Noise-canceling headset for focused work and call-heavy environments.',
    productNumber: 'JB-EVO2-65',
    image: createSvgImage('Headset', '#00C49A', '#1E5F5A'),
    manufacturerUrl: 'https://www.jabra.com/business/headsets',
  },
  {
    id: 10,
    name: 'Microsoft Surface Dock',
    brand: 'Microsoft',
    category: 'Accessories',
    subcategory: 'Docking',
    description: 'Connect laptop, monitor, and accessories through a single office dock.',
    productNumber: 'MS-SURFACE-DOCK',
    image: createSvgImage('Dock', '#5CC8FF', '#226B92'),
    manufacturerUrl: 'https://www.microsoft.com/en-us/surface/accessories/surface-dock',
  },
];

const categories = ['All', ...new Set(products.map((product) => product.category))];
const subcategoriesByCategory = {
  All: ['All'],
};

products.forEach((product) => {
  if (!subcategoriesByCategory[product.category]) {
    subcategoriesByCategory[product.category] = [];
  }

  if (!subcategoriesByCategory[product.category].includes(product.subcategory)) {
    subcategoriesByCategory[product.category].push(product.subcategory);
  }
});

const state = {
  category: 'All',
  subcategory: 'All',
  search: '',
};

const categoryList = document.getElementById('categoryList');
const subcategoryList = document.getElementById('subcategoryList');
const productGrid = document.getElementById('productGrid');
const sectionLabel = document.getElementById('sectionLabel');
const sectionTitle = document.getElementById('sectionTitle');
const searchInput = document.getElementById('searchInput');
const template = document.getElementById('productCardTemplate');

function renderCategoryButtons() {
  categoryList.innerHTML = '';

  categories.forEach((category) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'filter-button';
    if (category === state.category) button.classList.add('active');
    button.textContent = category;
    button.addEventListener('click', () => {
      state.category = category;
      state.subcategory = 'All';
      render();
    });
    categoryList.appendChild(button);
  });
}

function renderSubcategoryButtons() {
  subcategoryList.innerHTML = '';
  const available = subcategoriesByCategory[state.category] || ['All'];

  available.forEach((subcategory) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'filter-button';
    if (subcategory === state.subcategory) button.classList.add('active');
    button.textContent = subcategory;
    button.addEventListener('click', () => {
      state.subcategory = subcategory;
      render();
    });
    subcategoryList.appendChild(button);
  });
}

function getFilteredProducts() {
  return products.filter((product) => {
    const matchesCategory = state.category === 'All' || product.category === state.category;
    const matchesSubcategory = state.subcategory === 'All' || product.subcategory === state.subcategory;
    const matchesSearch =
      state.search.trim() === '' ||
      `${product.name} ${product.productNumber} ${product.brand}`
        .toLowerCase()
        .includes(state.search.trim().toLowerCase());

    return matchesCategory && matchesSubcategory && matchesSearch;
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  productGrid.innerHTML = '';

  if (!filtered.length) {
    productGrid.innerHTML = '<div class="empty-state">No items match your current filters.</div>';
    return;
  }

  filtered.forEach((product) => {
    const fragment = template.content.cloneNode(true);

    fragment.querySelector('.image-wrap img').src = product.image;
    fragment.querySelector('.image-wrap img').alt = product.name;
    fragment.querySelector('.brand-badge').textContent = product.brand;
    fragment.querySelector('.category-tag').textContent = product.subcategory;
    fragment.querySelector('.product-name').textContent = product.name;
    fragment.querySelector('.product-description').textContent = product.description;
    fragment.querySelector('.product-number').textContent = product.productNumber;
    fragment.querySelector('.vendor-link').href = product.manufacturerUrl;

    fragment.querySelector('.copy-button').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(product.productNumber);
        const button = fragment.querySelector('.copy-button');
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 1200);
      } catch (error) {
        console.error('Clipboard copy failed:', error);
      }
    });

    productGrid.appendChild(fragment);
  });
}

function renderHeader() {
  const categoryText = state.category === 'All' ? 'All products' : state.category;
  sectionLabel.textContent = categoryText;
  sectionTitle.textContent = state.subcategory === 'All' ? categoryText : `${state.category} / ${state.subcategory}`;
}

function render() {
  renderCategoryButtons();
  renderSubcategoryButtons();
  renderHeader();
  renderProducts();
}

searchInput.addEventListener('input', (event) => {
  state.search = event.target.value;
  render();
});

render();
