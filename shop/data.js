// Product Data
const products = [
    { 
        id: 1, 
        name: 'Wireless Headphones', 
        price: 89.99, 
        rating: 4.5, 
        category: 'Electronics', 
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', 
        description: 'Premium wireless headphones with noise cancellation', 
        stock: 15 
    },
    { 
        id: 2, 
        name: 'Smart Watch', 
        price: 249.99, 
        rating: 4.8, 
        category: 'Electronics', 
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', 
        description: 'Advanced fitness tracking and notifications', 
        stock: 8 
    },
    { 
        id: 3, 
        name: 'Camera Lens', 
        price: 399.99, 
        rating: 4.6, 
        category: 'Electronics', 
        image: 'https://images.unsplash.com/photo-1593704212686-6d52058fb516?w=400&h=400&fit=crop', 
        description: 'Professional grade telephoto lens', 
        stock: 5 
    },
    { 
        id: 4, 
        name: 'Laptop Stand', 
        price: 49.99, 
        rating: 4.3, 
        category: 'Home', 
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop', 
        description: 'Ergonomic aluminum laptop stand', 
        stock: 20 
    },
    { 
        id: 5, 
        name: 'Running Shoes', 
        price: 129.99, 
        rating: 4.7, 
        category: 'Sports', 
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', 
        description: 'Lightweight running shoes with cushioning', 
        stock: 12 
    },
    { 
        id: 6, 
        name: 'Denim Jacket', 
        price: 79.99, 
        rating: 4.4, 
        category: 'Fashion', 
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop', 
        description: 'Classic blue denim jacket', 
        stock: 18 
    },
    { 
        id: 7, 
        name: 'Coffee Maker', 
        price: 159.99, 
        rating: 4.6, 
        category: 'Home', 
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop', 
        description: 'Programmable coffee maker with timer', 
        stock: 10 
    },
    { 
        id: 8, 
        name: 'Novel Book Set', 
        price: 34.99, 
        rating: 4.9, 
        category: 'Books', 
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop', 
        description: 'Bestselling fiction trilogy set', 
        stock: 25 
    },
];

// Categories
const categories = [
    { name: 'Electronics', icon: '📱' },
    { name: 'Fashion', icon: '👕' },
    { name: 'Home', icon: '🏠' },
    { name: 'Sports', icon: '⚽' },
    { name: 'Books', icon: '📚' },
];

// Initial Cart Items
const initialCartItems = [
    { id: 1, name: 'Wireless Headphones', price: 89.99, quantity: 1, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop' },
    { id: 2, name: 'Smart Watch', price: 249.99, quantity: 1, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop' },
    { id: 3, name: 'Camera Lens', price: 399.99, quantity: 1, image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop' },
];

// Initial Wishlist Items
const initialWishlistItems = [
    { id: 4, name: 'Laptop Stand', price: 49.99, rating: 4.3, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop' },
    { id: 5, name: 'Running Shoes', price: 129.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop' },
];