// Reusable UI Components

const Components = {
    // Bottom Navigation Bar
    bottomNav(activeTab) {
        return `
            <div class="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-200">
                <div class="max-w-md mx-auto flex justify-around items-center py-2">
                    <button 
                        onclick="Actions.setActiveTab('home')"
                        class="flex flex-col items-center gap-1 py-2 px-4 transition-colors ${activeTab === 'home' ? 'text-purple-600' : 'text-gray-400'}"
                    >
                        <i data-lucide="home" class="w-6 h-6"></i>
                        <span class="text-xs font-medium">Home</span>
                    </button>
                    
                    <button 
                        onclick="Actions.setActiveTab('search')"
                        class="flex flex-col items-center gap-1 py-2 px-4 transition-colors ${activeTab === 'search' ? 'text-purple-600' : 'text-gray-400'}"
                    >
                        <i data-lucide="search" class="w-6 h-6"></i>
                        <span class="text-xs font-medium">Search</span>
                    </button>
                    
                    <button 
                        onclick="Actions.setActiveTab('cart')"
                        class="flex flex-col items-center gap-1 py-2 px-4 transition-colors relative ${activeTab === 'cart' ? 'text-purple-600' : 'text-gray-400'}"
                    >
                        <i data-lucide="shopping-cart" class="w-6 h-6"></i>
                        ${AppState.cartCount > 0 ? `
                            <span class="absolute top-0 right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                ${AppState.cartCount}
                            </span>
                        ` : ''}
                        <span class="text-xs font-medium">Cart</span>
                    </button>
                    
                    <button 
                        onclick="Actions.setActiveTab('favorites')"
                        class="flex flex-col items-center gap-1 py-2 px-4 transition-colors ${activeTab === 'favorites' ? 'text-purple-600' : 'text-gray-400'}"
                    >
                        <i data-lucide="heart" class="w-6 h-6"></i>
                        <span class="text-xs font-medium">Wishlist</span>
                    </button>
                    
                    <button 
                        onclick="Actions.setActiveTab('profile')"
                        class="flex flex-col items-center gap-1 py-2 px-4 transition-colors ${activeTab === 'profile' ? 'text-purple-600' : 'text-gray-400'}"
                    >
                        <i data-lucide="user" class="w-6 h-6"></i>
                        <span class="text-xs font-medium">Profile</span>
                    </button>
                </div>
            </div>
        `;
    },

    // Product Card
    productCard(product) {
        const isInWishlist = AppState.wishlistItems.find(w => w.id === product.id);
        return `
            <div class="bg-white rounded-xl shadow-md overflow-hidden" onclick="Actions.viewProduct(${product.id})">
                <div class="relative">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover" />
                    <button onclick="event.stopPropagation(); Actions.toggleWishlist(${product.id})" class="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                        <i data-lucide="heart" class="w-4 h-4 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}"></i>
                    </button>
                </div>
                <div class="p-3">
                    <h3 class="font-semibold text-sm text-gray-800 mb-1 line-clamp-2">${product.name}</h3>
                    <div class="flex items-center gap-1 mb-2">
                        <i data-lucide="star" class="w-3 h-3 fill-yellow-400 text-yellow-400"></i>
                        <span class="text-xs text-gray-600">${product.rating}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-purple-600 font-bold">$${product.price}</span>
                        <button 
                            onclick="event.stopPropagation(); Actions.addToCart(${product.id})"
                            class="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700"
                        >
                            <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    // Header with Search
    header(title, showSearch = true, showCart = true) {
        return `
            <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 sticky top-0 z-10 shadow-lg">
                <div class="flex items-center justify-between mb-4">
                    <h1 class="text-2xl font-bold">${title}</h1>
                    ${showCart ? `
                        <div class="flex gap-3">
                            <button onclick="Actions.setActiveTab('favorites')" class="relative">
                                <i data-lucide="heart" class="w-6 h-6"></i>
                                ${AppState.wishlistCount > 0 ? `
                                    <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">${AppState.wishlistCount}</span>
                                ` : ''}
                            </button>
                            <button onclick="Actions.setActiveTab('cart')" class="relative">
                                <i data-lucide="shopping-cart" class="w-6 h-6"></i>
                                ${AppState.cartCount > 0 ? `
                                    <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">${AppState.cartCount}</span>
                                ` : ''}
                            </button>
                        </div>
                    ` : ''}
                </div>
                
                ${showSearch ? `
                    <div class="relative">
                        <i data-lucide="search" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"></i>
                        <input 
                            type="text" 
                            placeholder="Search products..." 
                            value="${AppState.searchQuery}"
                            oninput="Actions.updateSearch(this.value)"
                            onkeyup="if(event.key === 'Enter') Actions.performSearch()"
                            class="w-full pl-10 pr-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                        />
                    </div>
                ` : ''}
            </div>
        `;
    },

    // Category Pills
    categoryFilters() {
        return `
            <div class="flex gap-2 mb-4 overflow-x-auto pb-2">
                <button onclick="Actions.filterByCategory('all')" class="px-4 py-2 rounded-full ${AppState.filterCategory === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'} whitespace-nowrap">
                    All
                </button>
                ${categories.map(cat => `
                    <button onclick="Actions.filterByCategory('${cat.name}')" class="px-4 py-2 rounded-full ${AppState.filterCategory === cat.name ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'} whitespace-nowrap">
                        ${cat.icon} ${cat.name}
                    </button>
                `).join('')}
            </div>
        `;
    },

    // Empty State
    emptyState(icon, title, message, buttonText, buttonAction) {
        return `
            <div class="text-center py-12">
                <i data-lucide="${icon}" class="w-24 h-24 mx-auto text-gray-300 mb-4"></i>
                <h3 class="text-xl font-bold text-gray-700 mb-2">${title}</h3>
                <p class="text-gray-500 mb-6">${message}</p>
                <button onclick="${buttonAction}" class="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold">
                    ${buttonText}
                </button>
            </div>
        `;
    }
};