const CACHE_NAME = 'rakara-abila-v1.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/uikit.min.css',
    '/css/style.css',
    '/js/uikit.min.js',
    'https://code.jquery.com/jquery-3.7.0.js',
    '/img/about_bg.jpg',
    '/img/cta_bg.jpg',
    '/video/ETRG.mp4'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});