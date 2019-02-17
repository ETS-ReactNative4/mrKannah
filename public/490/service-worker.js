var CACHE = 'v1';
const CACHE_MISS = 'cache-miss';
var filesToCache = [
  '/490/',
  '/490/index.html',
  '/490/gauge.js',
  '/490/manifest.webmanifest',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  self.skipWaiting();
  e.waitUntil(precache());
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== CACHE) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  e.respondWith(fromCache(e.request).catch(() => fromNetworkAndCache(e.request)));
});

function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(filesToCache);
  });
}

function fromNetworkAndCache(request) {
  return fetch(request.clone()).then(function (response) {
    if(!response || response.status !== 200) {
      return response; // response stream consumed
    }
    let resClone = response.clone();
    return caches.open(CACHE)
      .then(function(cache) {
        console.log('caching', request.url)
        cache.put(request, resClone); // reqCopy, resCopy streams consumed
        return response; // response stream consumed
      });
  })
}


function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (matching) return matching;
      return Promise.reject(CACHE_MISS)
    });
  });
}
