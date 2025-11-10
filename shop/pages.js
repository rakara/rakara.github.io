// Complete Page Renderers with All Sub-Pages

const Pages = {
    home() {
        return `
            <div class="fade-in">
                ${Components.header('ShopHub', true, true)}

                <!-- Categories -->
                <div class="bg-white p-4 mb-2 shadow-sm">
                    <div class="flex gap-4 overflow-x-auto pb-2">
                        ${categories.map(cat => `
                            <div class="flex flex-col items-center min-w-fit" onclick="Actions.filterByCategory('${cat.name}'); Actions.setActiveTab('search')">
                                <div class="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-2xl mb-1 cursor-pointer">
                                    ${cat.icon}
                                </div>
                                <span class="text-xs text-gray-600">${cat.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Banner -->
                <div class="mx-4 mb-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl p-6 text-white shadow-lg">
                    <h2 class="text-xl font-bold mb-1">Special Offer!</h2>
                    <p class="text-sm mb-3">Up to 50% off on selected items</p>
                    <button class="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                        Shop Now
                    </button>
                </div>

                <!-- Products -->
                <div class="px-4">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg font-bold text-gray-800">Featured Products</h2>
                        <button onclick="Actions.setActiveTab('search')" class="text-purple-600 text-sm font-semibold flex items-center">
                            View All <i data-lucide="chevron-right" class="w-4 h-4"></i>
                        </button>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                        ${products.slice(0, 4).map(product => Components.productCard(product)).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    search() {
        const filteredProducts = AppState.getFilteredProducts();
        
        return `
            <div class="fade-in">
                ${Components.header('Search', true, false)}

                <div class="p-4">
                    ${Components.categoryFilters()}

                    <!-- Sort Options -->
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-gray-600 text-sm">${filteredProducts.length} products</span>
                        <select onchange="Actions.changeSortOrder(this.value)" class="px-3 py-2 rounded-lg bg-white border text-sm">
                            <option value="featured" ${AppState.sortBy === 'featured' ? 'selected' : ''}>Featured</option>
                            <option value="price-low" ${AppState.sortBy === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                            <option value="price-high" ${AppState.sortBy === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
                            <option value="rating" ${AppState.sortBy === 'rating' ? 'selected' : ''}>Top Rated</option>
                        </select>
                    </div>

                    ${filteredProducts.length === 0 ? 
                        Components.emptyState('search-x', 'No products found', 'Try adjusting your search or filters', 'Clear Filters', "Actions.clearFilters()") :
                        `<div class="grid grid-cols-2 gap-4">
                            ${filteredProducts.map(product => Components.productCard(product)).join('')}
                        </div>`
                    }
                </div>
            </div>
        `;
    },

    cart() {
        return `
            <div class="fade-in">
                <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 sticky top-0 z-10 shadow-lg">
                    <h1 class="text-2xl font-bold">Shopping Cart</h1>
                    <p class="text-sm opacity-90">${AppState.cartCount} items</p>
                </div>

                <div class="p-4 pb-32">
                    ${AppState.cartItems.length === 0 ? 
                        Components.emptyState('shopping-cart', 'Your cart is empty', 'Add some products to get started!', 'Start Shopping', "Actions.setActiveTab('home')") :
                        `
                        <div class="space-y-4 mb-4">
                            ${AppState.cartItems.map(item => `
                                <div class="bg-white rounded-xl shadow-md p-4 flex gap-4">
                                    <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-cover rounded-lg" />
                                    <div class="flex-1">
                                        <h3 class="font-semibold text-gray-800 mb-1">${item.name}</h3>
                                        <p class="text-purple-600 font-bold mb-2">$${item.price}</p>
                                        <div class="flex items-center gap-3">
                                            <div class="flex items-center gap-2 bg-gray-100 rounded-lg">
                                                <button onclick="Actions.updateQuantity(${item.id}, -1)" class="p-2 hover:bg-gray-200 rounded-lg">
                                                    <i data-lucide="minus" class="w-4 h-4"></i>
                                                </button>
                                                <span class="px-3 font-semibold">${item.quantity}</span>
                                                <button onclick="Actions.updateQuantity(${item.id}, 1)" class="p-2 hover:bg-gray-200 rounded-lg">
                                                    <i data-lucide="plus" class="w-4 h-4"></i>
                                                </button>
                                            </div>
                                            <button onclick="Actions.removeFromCart(${item.id})" class="ml-auto text-red-500">
                                                <i data-lucide="trash-2" class="w-5 h-5"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>

                        <!-- Checkout Summary -->
                        <div class="fixed bottom-16 left-0 right-0 bg-white border-t shadow-2xl p-4">
                            <div class="max-w-md mx-auto">
                                <div class="flex justify-between mb-2">
                                    <span class="text-gray-600">Subtotal:</span>
                                    <span class="font-semibold">$${AppState.getCartTotal()}</span>
                                </div>
                                <div class="flex justify-between mb-2">
                                    <span class="text-gray-600">Shipping:</span>
                                    <span class="font-semibold">$9.99</span>
                                </div>
                                <div class="border-t pt-2 flex justify-between mb-4">
                                    <span class="text-lg font-bold">Total:</span>
                                    <span class="text-lg font-bold text-purple-600">$${(parseFloat(AppState.getCartTotal()) + 9.99).toFixed(2)}</span>
                                </div>
                                <button class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-full font-bold shadow-lg">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                        `
                    }
                </div>
            </div>
        `;
    },

    favorites() {
        return `
            <div class="fade-in">
                <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 sticky top-0 z-10 shadow-lg">
                    <h1 class="text-2xl font-bold">Wishlist</h1>
                    <p class="text-sm opacity-90">${AppState.wishlistCount} items</p>
                </div>

                <div class="p-4">
                    ${AppState.wishlistItems.length === 0 ? 
                        Components.emptyState('heart', 'No favorites yet', 'Start adding products you love!', 'Browse Products', "Actions.setActiveTab('home')") :
                        `<div class="space-y-4">
                            ${AppState.wishlistItems.map(item => `
                                <div class="bg-white rounded-xl shadow-md overflow-hidden flex" onclick="Actions.viewProduct(${item.id})">
                                    <img src="${item.image}" alt="${item.name}" class="w-32 h-32 object-cover" />
                                    <div class="flex-1 p-4">
                                        <h3 class="font-semibold text-gray-800 mb-1">${item.name}</h3>
                                        <div class="flex items-center gap-1 mb-2">
                                            <i data-lucide="star" class="w-3 h-3 fill-yellow-400 text-yellow-400"></i>
                                            <span class="text-sm text-gray-600">${item.rating}</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-purple-600 font-bold text-lg">$${item.price}</span>
                                            <div class="flex gap-2">
                                                <button onclick="event.stopPropagation(); Actions.removeFromWishlist(${item.id})" class="text-red-500 p-2">
                                                    <i data-lucide="x" class="w-5 h-5"></i>
                                                </button>
                                                <button onclick="event.stopPropagation(); Actions.addToCart(${item.id})" class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center gap-2">
                                                    <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>`
                    }
                </div>
            </div>
        `;
    },

    profile() {
        return `
            <div class="fade-in">
                <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 sticky top-0 z-10 shadow-lg">
                    <h1 class="text-2xl font-bold">Profile</h1>
                </div>

                <div class="p-4">
                    <!-- User Info -->
                    <div class="bg-white rounded-xl shadow-md p-6 mb-4 text-center">
                        <div class="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl text-white font-bold">
                            JD
                        </div>
                        <h2 class="text-xl font-bold text-gray-800 mb-1">John Doe</h2>
                        <p class="text-gray-500 text-sm">john.doe@example.com</p>
                    </div>

                    <!-- Menu Items -->
                    <div class="space-y-2">
                        ${[
                            { icon: 'package', title: 'My Orders', subtitle: 'View order history', page: 'orders' },
                            { icon: 'map-pin', title: 'Addresses', subtitle: 'Manage shipping addresses', page: 'addresses' },
                            { icon: 'credit-card', title: 'Payment Methods', subtitle: 'Manage payment options', page: 'payments' },
                            { icon: 'bell', title: 'Notifications', subtitle: 'Manage notifications', page: 'notifications' },
                            { icon: 'settings', title: 'Settings', subtitle: 'App preferences', page: 'settings' },
                            { icon: 'help-circle', title: 'Help & Support', subtitle: 'Get help', page: 'help' },
                            { icon: 'info', title: 'About', subtitle: 'App information', page: 'about' },
                        ].map(item => `
                            <div onclick="Actions.setActiveTab('${item.page}')" class="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50">
                                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <i data-lucide="${item.icon}" class="w-6 h-6 text-purple-600"></i>
                                </div>
                                <div class="flex-1">
                                    <h3 class="font-semibold text-gray-800">${item.title}</h3>
                                    <p class="text-sm text-gray-500">${item.subtitle}</p>
                                </div>
                                <i data-lucide="chevron-right" class="w-5 h-5 text-gray-400"></i>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Logout Button -->
                    <button class="w-full mt-6 bg-red-50 text-red-600 py-4 rounded-xl font-semibold flex items-center justify-center gap-2">
                        <i data-lucide="log-out" class="w-5 h-5"></i>
                        Logout
                    </button>
                </div>
            </div>
        `;
    },

    orders() {
        const orders = [
            { id: '#ORD-12345', date: '2024-03-15', status: 'Delivered', total: 339.97, items: 3 },
            { id: '#ORD-12344', date: '2024-03-10', status: 'Shipped', total: 129.99, items: 1 },
            { id: '#ORD-12343', date: '2024-03-05', status: 'Processing', total: 549.98, items: 2 },
        ];

        return `
            <div class="fade-in">
                <div class="bg-white sticky top-0 z-10 shadow-sm">
                    <div class="flex items-center gap-4 p-4">
                        <button onclick="Actions.setActiveTab('profile')" class="p-2 hover:bg-gray-100 rounded-full">
                            <i data-lucide="arrow-left" class="w-6 h-6"></i>
                        </button>
                        <h1 class="text-xl font-bold">My Orders</h1>
                    </div>
                </div>

                <div class="p-4 space-y-4">
                    ${orders.map(order => `
                        <div class="bg-white rounded-xl shadow-md p-4">
                            <div class="flex justify-between items-start mb-3">
                                <div>
                                    <p class="font-bold text-gray-800">${order.id}</p>
                                    <p class="text-sm text-gray-500">${order.date}</p>
                                </div>
                                <span class="px-3 py-1 rounded-full text-xs font-semibold ${
                                    order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                                    'bg-yellow-100 text-yellow-700'
                                }">
                                    ${order.status}
                                </span>
                            </div>
                            <div class="flex justify-between items-center pt-3 border-t">
                                <div>
                                    <p class="text-sm text-gray-600">${order.items} items</p>
                                    <p class="font-bold text-purple-600">$${order.total}</p>
                                </div>
                                <button class="text-purple-600 font-semibold text-sm">View Details</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    addresses() {
        const addresses = [
            { id: 1, label: 'Home', name: 'John Doe', address: '123 Main St, Apt 4B', city: 'New York, NY 10001', phone: '(555) 123-4567', isDefault: true },
            { id: 2, label: 'Work', name: 'John Doe', address: '456 Business Ave', city: 'New York, NY 10002', phone: '(555) 987-6543', isDefault: false },
        ];

        return `
            <div class="fade-in">
                <div class="bg-white sticky top-0 z-10 shadow-sm">
                    <div class="flex items-center justify-between p-4">
                        <div class="flex items-center gap-4">
                            <button onclick="Actions.setActiveTab('profile')" class="p-2 hover:bg-gray-100 rounded-full">
                                <i data-lucide="arrow-left" class="w-6 h-6"></i>
                            </button>
                            <h1 class="text-xl font-bold">Addresses</h1>
                        </div>
                        <button class="bg-purple-600 text-white p-2 rounded-full">
                            <i data-lucide="plus" class="w-5 h-5"></i>
                        </button>
                    </div>
                </div>

                <div class="p-4 space-y-4">
                    ${addresses.map(addr => `
                        <div class="bg-white rounded-xl shadow-md p-4">
                            <div class="flex justify-between items-start mb-3">
                                <div class="flex items-center gap-2">
                                    <h3 class="font-bold text-gray-800">${addr.label}</h3>
                                    ${addr.isDefault ? '<span class="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full font-semibold">Default</span>' : ''}
                                </div>
                                <button class="text-gray-400 hover:text-gray-600">
                                    <i data-lucide="more-vertical" class="w-5 h-5"></i>
                                </button>
                            </div>
                            <p class="font-semibold text-gray-700 mb-1">${addr.name}</p>
                            <p class="text-gray-600 text-sm mb-1">${addr.address}</p>
                            <p class="text-gray-600 text-sm mb-1">${addr.city}</p>
                            <p class="text-gray-600 text-sm">${addr.phone}</p>
                            <div class="flex gap-2 mt-4">
                                <button class="flex-1 bg-purple-50 text-purple-600 py-2 rounded-lg font-semibold text-sm">Edit</button>
                                <button class="flex-1 bg-gray-50 text-gray-600 py-2 rounded-lg font-semibold text-sm">Remove</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    payments() {
        const cards = [
            { id: 1, type: 'Visa', last4: '4242', expiry: '12/25', isDefault: true },
            { id: 2, type: 'Mastercard', last4: '8888', expiry: '08/26', isDefault: false },
        ];

        return `
            <div class="fade-in">
                <div class="bg-white sticky top-0 z-10 shadow-sm">
                    <div class="flex items-center justify-between p-4">
                        <div class="flex items-center gap-4">
                            <button onclick="Actions.setActiveTab('profile')" class="p-2 hover:bg-gray-100 rounded-full">
                                <i data-lucide="arrow-left" class="w-6 h-6"></i>
                            </button>
                            <h1 class="text-xl font-bold">Payment Methods</h1>
                        </div>
                        <button class="bg-purple-600 text-white p-2 rounded-full">
                            <i data-lucide="plus" class="w-5 h-5"></i>
                        </button>
                    </div>
                </div>

                <div class="p-4 space-y-4">
                    ${cards.map(card => `
                        <div class="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg p-6 text-white">
                            <div class="flex justify-between items-start mb-8">
                                <div class="text-sm font-semibold">${card.type}</div>
                                ${card.isDefault ? '<span class="px-2 py-1 bg-white/20 rounded-full text-xs">Default</span>' : ''}
                            </div>
                            <div class="mb-6">
                                <div class="text-2xl font-bold tracking-wider">•••• •••• •••• ${card.last4}</div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div>
                                    <div class="text-xs opacity-75">Expires</div>
                                    <div class="font-semibold">${card.expiry}</div>
                                </div>
                                <button class="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold">
                                    Manage
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    notifications() {
        return `
            <div class="fade-in">
                <div class="bg-white sticky top-0 z-10 shadow-sm">
                    <div class="flex items-center gap-4 p-4">
                        <button onclick="Actions.setActiveTab('profile')" class="p-2 hover:bg-gray-100 rounded-full">
                            <i data-lucide="arrow-left" class="w-6 h-6"></i>
                        </button>
                        <h1 class="text-xl font-bold">Notifications</h1>
                    </div>
                </div>

                <div class="p-4 space-y-4">
                    ${[
                        { title: 'Order Updates', description: 'Get notified about your order status', enabled: true },
                        { title: 'Promotions', description: 'Receive exclusive deals and offers', enabled: true },
                        { title: 'New Arrivals', description: 'Be first to know about new products', enabled: false },
                        { title: 'Price Drops', description: 'Get alerts on wishlist item discounts', enabled: true },
                        { title: 'Newsletter', description: 'Weekly updates and tips', enabled: false },
                    ].map(notif => `
                        <div class="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between">
                            <div class="flex-1">
                                <h3 class="font-semibold text-gray-800 mb-1">${notif.title}</h3>
                                <p class="text-sm text-gray-500">${notif.description}</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer ml-4">
                                <input type="checkbox" ${notif.enabled ? 'checked' : ''} class="sr-only peer">
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                            </label>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    settings() {
        return `
            <div class="fade-in">
                <div class="bg-white sticky top-0 z-10 shadow-sm">
                    <div class="flex items-center gap-4 p-4">
                        <button onclick="Actions.setActiveTab('profile')" class="p-2 hover:bg-gray-100 rounded-full">
                            <i data-lucide="arrow-left" class="w-6 h-6"></i>
                        </button>
                        <h1 class="text-xl font-bold">Settings</h1>
                    </div>
                </div>

                <div class="p-4">
                    <!-- Account Settings -->
                    <div class="mb-6">
                        <h2 class="text-sm font-bold text-gray-500 uppercase mb-3 px-2">Account</h2>
                        <div class="bg-white rounded-xl shadow-sm divide-y">
                            ${[
                                { icon: 'user', title: 'Edit Profile', subtitle: 'Change your name and photo' },
                                { icon: 'lock', title: 'Change Password', subtitle: 'Update your password' },
                                { icon: 'mail', title: 'Email Preferences', subtitle: 'Manage email settings' },
                            ].map(item => `
                                <div class="p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50">
                                    <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                        <i data-lucide="${item.icon}" class="w-5 h-5 text-purple-600"></i>
                                    </div>
                                    <div class="flex-1">
                                        <h3 class="font-semibold text-gray-800">${item.title}</h3>
                                        <p class="text-sm text-gray-500">${item.subtitle}</p>
                                    </div>
                                    <i data-lucide="chevron-right" class="w-5 h-5 text-gray-400"></i>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- App Settings -->
                    <div class="mb-6">
                        <h2 class="text-sm font-bold text-gray-500 uppercase mb-3 px-2">App Preferences</h2>
                        <div class="bg-white rounded-xl shadow-sm divide-y">
                            <div class="p-4 flex items-center justify-between">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                        <i data-lucide="moon" class="w-5 h-5 text-purple-600"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-gray-800">Dark Mode</h3>
                                        <p class="text-sm text-gray-500">Switch to dark theme</p>
                                    </div>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                                </label>
                            </div>
                            <div class="p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50">
                                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <i data-lucide="globe" class="w-5 h-5 text-purple-600"></i>
                                </div>
                                <div class="flex-1">
                                    <h3 class="font-semibold text-gray-800">Language</h3>
                                    <p class="text-sm text-gray-500">English (US)</p>
                                </div>
                                <i data-lucide="chevron-right" class="w-5 h-5 text-gray-400"></i>
                            </div>
                            <div class="p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50">
                                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <i data-lucide="dollar-sign" class="w-5 h-5 text-purple-600"></i>
                                </div>
                                <div class="flex-1">
                                    <h3 class="font-semibold text-gray-800">Currency</h3>
                                    <p class="text-sm text-gray-500">USD ($)</p>
                                </div>
                                <i data-lucide="chevron-right" class="w-5 h-5 text-gray-400"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Privacy -->
                    <div class="mb-6">
                        <h2 class="text-sm font-bold text-gray-500 uppercase mb-3 px-2">Privacy & Security</h2>
                        <div class="bg-white rounded-xl shadow-sm divide-y">
                            ${[
                                { icon: 'shield', title: 'Privacy Policy', subtitle: 'Read our privacy policy' },
                                { icon: 'file-text', title: 'Terms of Service', subtitle: 'View terms and conditions' },
                                { icon: 'trash-2', title: 'Delete Account', subtitle: 'Permanently delete your account' },
                            ].map(item => `
                                <div class="p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50">
                                    <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                        <i data-lucide="${item.icon}" class="w-5 h-5 text-purple-600"></i>
                                    </div>
                                    <div class="flex-1">
                                        <h3 class="font-semibold text-gray-800">${item.title}</h3>
                                        <p class="text-sm text-gray-500">${item.subtitle}</p>
                                    </div>
                                    <i data-lucide="chevron-right" class="w-5 h-5 text-gray-400"></i>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    help() {
        return `
            <div class="fade-in">
                <div class="bg-white sticky top-0 z-10 shadow-sm">
                    <div class="flex items-center gap-4 p-4">
                        <button onclick="Actions.setActiveTab('profile')" class="p-2 hover:bg-gray-100 rounded-full">
                            <i data-lucide="arrow-left" class="w-6 h-6"></i>
                        </button>
                        <h1 class="text-xl font-bold">Help & Support</h1>
                    </div>
                </div>

                <div class="p-4">
                    <!-- Contact Options -->
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        ${[
                            { icon: 'message-circle', title: 'Live Chat', color: 'bg-blue-500' },
                            { icon: 'mail', title: 'Email Us', color: 'bg-purple-500' },
                            { icon: 'phone', title: 'Call Us', color: 'bg-green-500' },
                            { icon: 'book-open', title: 'FAQ', color: 'bg-orange-500' },
                        ].map(option => `
                            <div class="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition">
                                <div class="${option.color} w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white">
                                    <i data-lucide="${option.icon}" class="w-6 h-6"></i>
                                </div>
                                <h3 class="font-semibold text-gray-800">${option.title}</h3>
                            </div>
                        `).join('')}
                    </div>

                    <!-- FAQ Section -->
                    <h2 class="text-lg font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                    <div class="space-y-3">
                        ${[
                            { q: 'How do I track my order?', a: 'Visit My Orders section to track your shipments in real-time.' },
                            { q: 'What is your return policy?', a: 'We offer 30-day returns on most items. Check product details for specifics.' },
                            { q: 'How can I change my delivery address?', a: 'Go to Addresses section and update or add new addresses.' },
                            { q: 'Do you offer gift wrapping?', a: 'Yes! Select gift wrapping option during checkout.' },
                        ].map(faq => `
                            <div class="bg-white rounded-xl shadow-sm p-4">
                                <h3 class="font-semibold text-gray-800 mb-2">${faq.q}</h3>
                                <p class="text-sm text-gray-600">${faq.a}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    about() {
        return `
            <div class="fade-in">
                <div class="bg-white sticky top-0 z-10 shadow-sm">
                    <div class="flex items-center gap-4 p-4">
                        <button onclick="Actions.setActiveTab('profile')" class="p-2 hover:bg-gray-100 rounded-full">
                            <i data-lucide="arrow-left" class="w-6 h-6"></i>
                        </button>
                        <h1 class="text-xl font-bold">About</h1>
                    </div>
                </div>

                <div class="p-4">
                    <!-- App Info -->
                    <div class="bg-white rounded-xl shadow-md p-6 text-center mb-6">
                        <div class="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl mx-auto mb-4 flex items-center justify-center text-5xl">
                            🛒
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800 mb-2">ShopHub</h2>
                        <p class="text-gray-500 mb-4">Version 1.0.0</p>
                        <p class="text-sm text-gray-600 leading-relaxed">
                            Your favorite mobile shopping destination. Discover amazing products, exclusive deals, and seamless shopping experience.
                        </p>
                    </div>

                    <!-- Info Sections -->
                    <div class="bg-white rounded-xl shadow-sm divide-y">
                        ${[
                            { icon: 'code', title: 'Version', value: '1.0.0' },
                            { icon: 'calendar', title: 'Release Date', value: 'March 2024' },
                            { icon: 'package', title: 'Build', value: 'Production' },
                            { icon: 'cpu', title: 'Platform', value: 'Progressive Web App' },
                        ].map(item => `
                            <div class="p-4 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <i data-lucide="${item.icon}" class="w-5 h-5 text-purple-600"></i>
                                    <span class="font-semibold text-gray-800">${item.title}</span>
                                </div>
                                <span class="text-gray-600">${item.value}</span>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Links -->
                    <div class="mt-6 space-y-3">
                        ${[
                            { icon: 'globe', title: 'Visit Website', url: '#' },
                            { icon: 'star', title: 'Rate Us', url: '#' },
                            { icon: 'share-2', title: 'Share App', url: '#' },
                        ].map(link => `
                            <button class="w-full bg-white rounded-xl shadow-sm p-4 flex items-center justify-between hover:bg-gray-50">
                                <div class="flex items-center gap-3">
                                    <i data-lucide="${link.icon}" class="w-5 h-5 text-purple-600"></i>
                                    <span class="font-semibold text-gray-800">${link.title}</span>
                                </div>
                                <i data-lucide="external-link" class="w-5 h-5 text-gray-400"></i>
                            </button>
                        `).join('')}
                    </div>

                    <!-- Copyright -->
                    <p class="text-center text-sm text-gray-500 mt-8">
                        © 2024 ShopHub. All rights reserved.
                    </p>
                </div>
            </div>
        `;
    },

    productDetail() {
        const product = AppState.selectedProduct;
        if (!product) return Pages.home();

        const isInWishlist = AppState.wishlistItems.find(w => w.id === product.id);
        
        return `
            <div class="fade-in">
                <div class="bg-white sticky top-0 z-10 shadow-sm">
                    <div class="flex items-center justify-between p-4">
                        <button onclick="Actions.setActiveTab('home')" class="p-2 hover:bg-gray-100 rounded-full">
                            <i data-lucide="arrow-left" class="w-6 h-6"></i>
                        </button>
                        <h1 class="text-lg font-bold">Product Details</h1>
                        <button onclick="Actions.toggleWishlist(${product.id})" class="p-2 hover:bg-gray-100 rounded-full">
                            <i data-lucide="heart" class="w-6 h-6 ${isInWishlist ? 'fill-red-500 text-red-500' : ''}"></i>
                        </button>
                    </div>
                </div>

                <div class="pb-24">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-80 object-cover" />

                    <div class="p-4">
                        <div class="mb-4">
                            <h2 class="text-2xl font-bold text-gray-800 mb-2">${product.name}</h2>
                            <div class="flex items-center gap-2 mb-3">
                                <div class="flex items-center gap-1">
                                    <i data-lucide="star" class="w-4 h-4 fill-yellow-400 text-yellow-400"></i>
                                    <span class="font-semibold">${product.rating}</span>
                                </div>
                                <span class="text-gray-400">•</span>
                                <span class="text-gray-600">${product.stock} in stock</span>
                            </div>
                            <p class="text-3xl font-bold text-purple-600 mb-4">$${product.price}</p>
                            <p class="text-gray-600 leading-relaxed">${product.description}</p>
                        </div>

                        <!-- Features -->
                        <div class="bg-gray-50 rounded-xl p-4 mb-4">
                            <h3 class="font-bold text-gray-800 mb-3">Key Features</h3>
                            <ul class="space-y-2">
                                ${['Free shipping on orders over $50', 'Easy 30-day returns', '1-year warranty included', 'Secure payment options'].map(feature => `
                                    <li class="flex items-start gap-2">
                                        <i data-lucide="check-circle" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"></i>
                                        <span class="text-gray-700">${feature}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>

                    <!-- Fixed Add to Cart Button -->
                    <div class="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl p-4">
                        <div class="max-w-md mx-auto flex gap-3">
                            <button onclick="Actions.addToCart(${product.id})" class="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-full font-bold shadow-lg flex items-center justify-center gap-2">
                                <i data-lucide="shopping-cart" class="w-5 h-5"></i>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}; 