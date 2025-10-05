const CACHE_NAME = 'andi-rental-v1';
const urlsToCache = [
  '/',
  '/img/logo.png',
  '/img/favicon/favicon-192x192.png',
  '/img/favicon/android-icon-192x192.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
