var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/todo_pwa/',
    '/todo_pwa/404.html'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});
