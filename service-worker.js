self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('soundboard-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/sounds/Máv Szignál.mp3',       // Egyedi fájlok hozzáadása
        '/sounds/Máv Intercity Szignál.mp3',
        '/sounds/Régi Intercity Szignál.mp3',
        '/sounds/Régi Eurocity.mp3',
        '/sounds/Railjet Euronight Eurocity.mp3',
        '/sounds/GYSEV.mp3',
        '/sounds/CFR Tájékoztatás.mp3',
        '/sounds/Utastájékoztató1.mp3',
        '/sounds/Utastájékoztató2.mp3',
        '/sounds/Vonat Indul Székesfehérvárra.mp3',
        '/sounds/A 2. vágányra vonat érkezik.mp3',
        '/sounds/Lassan Tolják.mp3',
        '/sounds/Menetzaj.mp3',
        '/sounds/KerékKattogás.mp3',
        '/sounds/Fékcsikorgás.mp3',
        '/sounds/Kürt.mp3',
        '/sounds/Vasúti átjáró.mp3',
        '/sounds/Autós Forgalmi Dugó.mp3',
        '/sounds/Kutyaugatás.mp3',
        '/sounds/Falusi Háttérzaj.mp3',
        '/icons/icon-192x192.png',
        '/icons/icon-512x512.png'
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
