const staticClimorFresh = "climorfresh-site-v6";
const assets = [
  "/",
  "/index.html",
  "css/jquery.mobile-1.4.5.min.css",
  "/css/style.css",
  "/js/app.js",
  "js/jquery.min.js",
  "js/jquery.mobile-1.4.5.min.js",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticClimorFresh).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
