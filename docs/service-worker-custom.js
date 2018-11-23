var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/todo_app/',
    '/todo_app/404.html'
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
