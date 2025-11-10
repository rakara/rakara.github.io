// Application State Management
const AppState = {
    activeTab: 'home',
    selectedProduct: null,
    searchQuery: '',
    filterCategory: 'all',
    sortBy: 'featured',
    cartItems: [...initialCartItems],
    wishlistItems: [...initialWishlistItems],
    
    get cartCount() {
        return this.cartItems.length;
    },
    
    get wishlistCount() {
        return this.wishlistItems.length;
    },
    
    getCartTotal() {
        return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
    },
    
    getFilteredProducts() {
        let filtered = [...products];
        
        if (this.filterCategory !== 'all') {
            filtered = filtered.filter(p => p.category === this.filterCategory);
        }
        
        if (this.searchQuery) {
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                p.description.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
        
        switch(this.sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
        }
        
        return filtered;
    }
};