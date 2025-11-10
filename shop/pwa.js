// PWA Features - Service Worker & Install Prompt

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        const swCode = `
            const CACHE_NAME = 'shophub-v1';
            const urlsToCache = [
                '/',
                'https://cdn.tailwindcss.com',
                'https://unpkg.com/lucide@latest'
            ];

            self.addEventListener('install', event => {
                event.waitUntil(
                    caches.open(CACHE_NAME)
                        .then(cache => cache.addAll(urlsToCache))
                );
            });

            self.addEventListener('fetch', event => {
                event.respondWith(
                    caches.match(event.request)
                        .then(response => response || fetch(event.request))
                );
            });

            self.addEventListener('activate', event => {
                event.waitUntil(
                    caches.keys().then(cacheNames => {
                        return Promise.all(
                            cacheNames.map(cacheName => {
                                if (cacheName !== CACHE_NAME) {
                                    return caches.delete(cacheName);
                                }
                            })
                        );
                    })
                );
            });
        `;
        
        const blob = new Blob([swCode], { type: 'application/javascript' });
        const swUrl = URL.createObjectURL(blob);
        
        navigator.serviceWorker.register(swUrl)
            .then(reg => console.log('✅ Service Worker registered'))
            .catch(err => console.log('❌ Service Worker registration failed:', err));
    });
}

// PWA Install Prompt
let deferredPrompt;

const InstallPrompt = {
    show() {
        const promptEl = document.getElementById('installPrompt');
        if (!promptEl) return;

        promptEl.innerHTML = `
            <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 max-w-xs">
                <span class="text-2xl">📱</span>
                <div class="flex-1">
                    <p class="text-sm font-semibold">Install ShopHub</p>
                    <p class="text-xs opacity-90">Add to home screen</p>
                </div>
                <button id="installBtn" class="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-bold">
                    Install
                </button>
                <button id="dismissBtn" class="text-white opacity-75 hover:opacity-100">
                    ✕
                </button>
            </div>
        `;
        
        promptEl.classList.remove('hidden');

        // Add event listeners
        document.getElementById('installBtn')?.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`User response: ${outcome}`);
                deferredPrompt = null;
                this.hide();
            }
        });

        document.getElementById('dismissBtn')?.addEventListener('click', () => {
            this.hide();
        });
    },

    hide() {
        const promptEl = document.getElementById('installPrompt');
        if (promptEl) {
            promptEl.classList.add('hidden');
        }
    }
};

// Listen for install prompt
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    InstallPrompt.show();
});

// Listen for successful install
window.addEventListener('appinstalled', () => {
    console.log('✅ PWA installed successfully!');
    deferredPrompt = null;
});