self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('textcrypt-cache-v2').then((cache) => {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'service-worker.js',
        'icon-192.png',
        'icon-512.png',
        'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
