const staticClimorFresh = "climorfresh-site-v6";
const assets = [
  "/",
  "/index.html",
  "/css/jquery.mobile-1.4.5.min.css",
  "/css/style.css",
  "/js/app.js",
  "/js/jquery.min.js",
  "/js/jquery.mobile-1.4.5.min.js",
  "/images/icons/icon72x72.png",
  "/images/icons/icon72x72.png"
  "/images/icons/icon96x96.png",
  "/images/icons/icon128x128.png",
  "/images/icons/icon144x144.png",
  "/images/icons/icon152x152.png",
  "/images/icons/icon192x192.png",
  "/images/icons/icon384x384.png",
  "/images/icons/icon512x512.png",
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(staticClimorFresh)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(assets);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
