self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("textcrypt-cache").then(cache => {
      return cache.addAll([
        "./",
        "index.html",
        "manifest.json",
        "icon.png",
        "https://cdn.jsdelivr.net/npm/crypto-js@4.1.1/crypto-js.min.js",
        "https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js",
        "https://unpkg.com/html5-qrcode"
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
