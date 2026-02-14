// ===== MOBILE NAVIGATION =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== PRODUCTS DATA =====
const products = [
    {
        name: "Spaghetti Bronze-Die",
        producer: "Di Martino",
        weight: "500g",
        price: 12,
        badge: "Best Seller"
    },
    {
        name: "Paccheri Gragnano IGP",
        producer: "Faella",
        weight: "500g",
        price: 14
    },
    {
        name: "Rigatoni Slow-Dried",
        producer: "Faella",
        weight: "500g",
        price: 13
    },
    {
        name: "Fusilli Lunghi Heritage",
        producer: "Gentile",
        weight: "500g",
        price: 15
    },
    {
        name: "Penne Rigate Organic",
        producer: "Rustichella",
        weight: "500g",
        price: 11
    },
    {
        name: "Linguine Artisan",
        producer: "Di Martino",
        weight: "500g",
        price: 12
    },
    {
        name: "Spaghetti Martelli",
        producer: "Martelli",
        weight: "500g",
        price: 18,
        badge: "Premium"
    },
    {
        name: "Orecchiette Pugliese",
        producer: "Rustichella",
        weight: "500g",
        price: 13
    },
    {
        name: "Bucatini Gragnano",
        producer: "Setaro",
        weight: "500g",
        price: 14
    },
    {
        name: "Vermicelli Bronze-Die",
        producer: "Setaro",
        weight: "500g",
        price: 13,
        badge: "New"
    },
    {
        name: "Casarecce Heritage Wheat",
        producer: "Gentile",
        weight: "500g",
        price: 15
    },
    {
        name: "Mezze Maniche Organic",
        producer: "Rustichella",
        weight: "500g",
        price: 12
    },
    {
        name: "Spaghettoni Thick-Cut",
        producer: "Di Martino",
        weight: "500g",
        price: 14
    },
    {
        name: "Rigatoni Giganti",
        producer: "Faella",
        weight: "500g",
        price: 16
    },
    {
        name: "Pappardelle Egg Pasta",
        producer: "Martelli",
        weight: "250g",
        price: 22,
        badge: "Premium"
    },
    {
        name: "Calamarata Heritage",
        producer: "Gentile",
        weight: "500g",
        price: 17
    }
];

// ===== RENDER PRODUCTS =====
const productsGrid = document.querySelector('.products-grid');

if (productsGrid) {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card reveal';
        
        productCard.innerHTML = `
            <div class="product-image">
                <div class="image-placeholder">🍝</div>
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-details">
                <p class="product-producer">${product.producer}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-weight">${product.weight}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price}</span>
                    <a href="#" class="btn-add-cart">Add to Cart</a>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Re-run reveal animation for dynamically added products
    revealOnScroll();
}

// ===== ADD TO CART (PLACEHOLDER) =====
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-add-cart')) {
        e.preventDefault();
        
        // Simple feedback animation
        const btn = e.target;
        const originalText = btn.textContent;
        btn.textContent = 'Added!';
        btn.style.background = 'var(--gold)';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 1500);
        
        // Update cart count
        const cartBtn = document.querySelector('.btn-cart');
        if (cartBtn) {
            const currentCount = parseInt(cartBtn.textContent.match(/\d+/)[0]);
            cartBtn.textContent = `Cart (${currentCount + 1})`;
        }
    }
});

// ===== NEWSLETTER FORM =====
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const input = newsletterForm.querySelector('input[type="email"]');
        const button = newsletterForm.querySelector('button');
        const email = input.value;
        
        // Simple validation
        if (email && email.includes('@')) {
            button.textContent = 'Subscribed!';
            button.style.background = 'var(--gold)';
            input.value = '';
            
            setTimeout(() => {
                button.textContent = 'Subscribe';
                button.style.background = '';
            }, 3000);
            
            // In production, send to email service
            console.log('Newsletter signup:', email);
        }
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== NAV BACKGROUND ON SCROLL =====
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
