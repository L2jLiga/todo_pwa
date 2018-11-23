importScripts('https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min.js');

const SERVER_URL = 'https://www.jsonstore.io/c1e61fddba68a34eb79eeb97fc56d72df86092d86ad5def5dc25a7252e6cf382';
const CACHE_NAME = '1542974895609';

self.addEventListener('install', async function () {
    const cache = await caches.open(CACHE_NAME);
    const responseBody = await (await fetch('asset-manifest.json')).json();

    const urlsToCache = Object.values(responseBody);

    return await cache.addAll([
        ...urlsToCache,
        '/todo-pwa/img/feather-sprite.svg'
    ]);
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // handle backend requests in network first, cache second order
                if (event.request.url.startsWith(SERVER_URL)) {
                    return fetchTodos(event);
                }

                // Cache hit - return response
                if (response) {
                    return response;
                }

                // IMPORTANT: Clone the request. A request is a stream and
                // can only be consumed once. Since we are consuming this
                // once by cache and once by the browser for fetch, we need
                // to clone the response.
                var fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                    function (response) {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have two streams.
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function (cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                ).catch(() => {
                });
            })
    );
});

async function fetchTodos(event) {
    await fetch(event.request)
        .then(response => response.json())
        .then(response => response.result)
        .then(todos => localforage.setItem('todos', todos))
        .catch(() => {});

    const result = await localforage.getItem('todos') || [];

    const body = JSON.stringify({result});

    return new Response(await body);
}

// background sync
self.addEventListener('sync', function (event) {
    if (event.tag === 'sync') {
        event.waitUntil(
            localforage.getItem('todos').then(todos => {
                return localforage.getItem('login').then(login => {
                    return fetch(SERVER_URL + '/todos/' + login, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8'
                        },
                        body: JSON.stringify(todos)
                    }).then(() => {
                        console.log('synced');
                    }).catch(console.error);
                });
            })
        );
    }
});

// deletes old caches
self.addEventListener('activate', function (event) {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
