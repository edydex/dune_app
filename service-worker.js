// Cache the app shell and its local dependencies for offline use.
const CACHE_PREFIX = 'dune-shell-';
const CACHE_NAME = `${CACHE_PREFIX}v1.1.0`;
const APP_SHELL = [
    './index.html',
    './manifest.json',
    './dune_x1024.png',
    './vendor/qrcode.min.js',
    './js/battle-rules.js',
    './js/setup-codec.js'
].map(path => new URL(path, self.registration.scope).href);
const OFFLINE_URL = APP_SHELL[0];

self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
    // Activate on the next visit so an open page keeps its matching app shell.
});

self.addEventListener('activate', event => {
    event.waitUntil(caches.keys().then(names => Promise.all(
        names.filter(name => (name.startsWith(CACHE_PREFIX) || name === 'pwa-cache-v1') && name !== CACHE_NAME)
            .map(name => caches.delete(name))
    )));
});

self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== 'GET') return;
    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return;

    if (request.mode === 'navigate') {
        event.respondWith(fetch(request).catch(() => caches.match(OFFLINE_URL)));
        return;
    }
    if (APP_SHELL.includes(url.href)) {
        event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
    }
});
