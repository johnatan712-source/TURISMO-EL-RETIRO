// Turismo El Retiro: guarda la app en la tablet para que funcione sin internet.
// Al cambiar fotos o archivos, sube el número de versión (v2 → v3).
const CACHE = 'turismo-el-retiro-v2';
const FILES = [
  './', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png',
  './fotos/boceto.jpg', './fotos/cafe.jpg', './fotos/capilla.jpg', './fotos/iglesia.jpg',
  './fotos/parque.jpg', './fotos/pueblo.jpg', './fotos/rural.jpg', './fotos/tequendamita2.jpg', './fotos/tucan.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // Página: primero internet (para recibir cambios); si no hay, la copia guardada.
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).then(r => {
      const copy = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return r;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  // Fotos, íconos y tipos de letra: primero la copia guardada.
  if (url.origin === location.origin || url.hostname.endsWith('fonts.googleapis.com') || url.hostname.endsWith('fonts.gstatic.com')) {
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
      const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r;
    })));
  }
});
