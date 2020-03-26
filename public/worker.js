var cacheName = 'partyuber_v1';
var urlsToCache = [
    "./offline.html",
    "./logo192.png"
];

// Install a service worker
self.addEventListener('install', async event => {
    console.log("Service Worker: I am being installed, hello world!");
    const cache = await caches.open(cacheName)
    cache.addAll(urlsToCache)
});

// Cache and return requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request.url).then((response)=>{
            return response||fetch(event.request).then((response)=>{
                return caches.open(cacheName).then((cache)=>{
                    return response;
                });
            }).catch(function(){      
                console.log("Service Worker: Not in cache and fetching online failed, HAALLPPPP!!!",event.request);
                if(event.request.mode==="navigate"){            
                    return caches.match("./offline.html");
                }
          })
        })
    );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = ['partyuber_v1'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});