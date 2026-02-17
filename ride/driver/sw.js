const CACHE = 'tickride-driver-v1';
const BASE = '/ride/driver';
const ASSETS = [
  `${BASE}/`,`${BASE}/index.html`,`${BASE}/login.html`,`${BASE}/signup.html`,
  `${BASE}/trips.html`,`${BASE}/earnings.html`,`${BASE}/profile.html`,
  `${BASE}/notifications.html`,`${BASE}/driver.css`,`${BASE}/manifest.json`,
  '/ride/icons/icon-192x192.png','/ride/icons/icon-512x512.png'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
