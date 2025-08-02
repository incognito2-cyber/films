self.addEventListener("install", e => {
  e.waitUntil(
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
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
