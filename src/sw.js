"use strict"

var cacheName = 'some-cache-name';
var filesToCache = [];

self.addEventListener('install', function(event) {
  event.waitUntil(
      // Add all the files to cache to the cache on service worker installation.
      caches.open(cacheName).then(function(cache) {
          return cache.addAll(filesToCache);
      })
  );
});

// Service worker updates it's cache whenever any of the app shell files change.
self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(cacheNames.map(function(key) {
          if( key !== cacheName) {
            return caches.delete(key);
          }
        }));
      })
    );

  return self.clients.claim();
});

// Serve any requests from the cache if it exists, if not fetch a copy from the network.
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
