// App Actions and Main Logic

const Actions = {
    setActiveTab(tab) {
        AppState.activeTab = tab;
        this.render();
    },

    viewProduct(id) {
        AppState.selectedProduct = products.find(p => p.id === id);
        if (AppState.selectedProduct) {
            AppState.activeTab = 'product-detail';
            this.render();
        }
    },

    addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = AppState.cartItems.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            AppState.cartItems.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product.image
            });
        }
        
        this.render();
    },

    removeFromCart(id) {
        const index = AppState.cartItems.findIndex(item => item.id === id);
        if (index > -1) {
            AppState.cartItems.splice(index, 1);
            this.render();
        }
    },

    updateQuantity(id, change) {
        const item = AppState.cartItems.find(item => item.id === id);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                this.removeFromCart(id);
            } else {
                this.render();
            }
        }
    },

    toggleWishlist(id) {
        const index = AppState.wishlistItems.findIndex(item => item.id === id);
        
        if (index > -1) {
            AppState.wishlistItems.splice(index, 1);
        } else {
            const product = products.find(p => p.id === id);
            if (product) {
                AppState.wishlistItems.push(product);
            }
        }
        
        this.render();
    },

    removeFromWishlist(id) {
        const index = AppState.wishlistItems.findIndex(item => item.id === id);
        if (index > -1) {
            AppState.wishlistItems.splice(index, 1);
            this.render();
        }
    },

    updateSearch(value) {
        AppState.searchQuery = value;
    },

    performSearch() {
        if (AppState.activeTab !== 'search') {
            AppState.activeTab = 'search';
        }
        this.render();
    },

    filterByCategory(category) {
        AppState.filterCategory = category;
        this.render();
    },

    changeSortOrder(order) {
        AppState.sortBy = order;
        this.render();
    },

    clearFilters() {
        AppState.filterCategory = 'all';
        AppState.searchQuery = '';
        AppState.sortBy = 'featured';
        this.render();
    },

    render() {
        const app = document.getElementById('app');
        let content = '';

        switch(AppState.activeTab) {
            case 'home':
                content = Pages.home();
                break;
            case 'search':
                content = Pages.search();
                break;
            case 'cart':
                content = Pages.cart();
                break;
            case 'favorites':
                content = Pages.favorites();
                break;
            case 'profile':
                content = Pages.profile();
                break;
            case 'product-detail':
                content = Pages.productDetail();
                break;
            case 'orders':
                content = Pages.orders();
                break;
            case 'addresses':
                content = Pages.addresses();
                break;
            case 'payments':
                content = Pages.payments();
                break;
            case 'notifications':
                content = Pages.notifications();
                break;
            case 'settings':
                content = Pages.settings();
                break;
            case 'help':
                content = Pages.help();
                break;
            case 'about':
                content = Pages.about();
                break;
            default:
                content = Pages.home();
        }

        const showBottomNav = !['product-detail', 'orders', 'addresses', 'payments', 'notifications', 'settings', 'help', 'about'].includes(AppState.activeTab);
        
        app.innerHTML = `
            <div class="max-w-md mx-auto bg-gray-50 min-h-screen ${showBottomNav ? 'pb-20' : ''}">
                ${content}
                ${showBottomNav ? Components.bottomNav(AppState.activeTab) : ''}
            </div>
        `;

        // Initialize Lucide icons after render
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    Actions.render();
});