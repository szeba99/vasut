self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('soundboard-cache').then((cache) => {
      return cache.addAll([
        '/',
        'szeba99.github.io/vasut/index.html',
        'szeba99.github.io/vasut/style.css',
        'szeba99.github.io/vasut/script.js',
        'szeba99.github.io/vasut/sounds/*',
        'szeba99.github.io/vasut/icons/icon-192x192.png',
        'szeba99.github.io/vasut/icons/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
