const CACHE_NAME = 'talhahabib-portfolio-v1';
const urlsToCache = [
  '/favicon.ico',
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/assets/styles/m.css',
  '/assets/styles/bg-p.css',
  '/assets/styles/ct.css',
  '/assets/scripts/bg-p.js',
  '/assets/scripts/ct.js',
  '/assets/scripts/m2.js',
  // Add other assets you want to cache (images, scripts, etc.)
];

// Install event: cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Activate event: cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch event: serve cached files if available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});