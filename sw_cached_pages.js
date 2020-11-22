const cacheVersion = 'v2';
const cacheName = `${registration.scope}!${cacheVersion}`;
const scopeUrl = new URL(registration.scope);
const assetUrl = scopeUrl.pathname + 'cacheAssets.json';
var cacheAssets;

//Call install event
self.addEventListener('install', (e) => {
    console.log('Service Worker- install!');
    e.waitUntil(
        fetch(assetUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(json => {
            cacheAssets = json;
            for (i = 0; i < cacheAssets.length; i++) {
                cacheAssets[i] = registration.scope + cacheAssets[i];
            }
        })
        .then(() => {
            caches
            .open(cacheName)
            .then(cache => {
                console.log('SW: caching files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
        })//then
        .catch((err) => console.log('fetch err', err))
    );//waitUntil
});//event install

//Call activate event
self.addEventListener('activate', (e) => {
    console.log('Service Worker- activate!');
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache.startsWith(`${registration.scope}!`) &&
                    cache !== cacheName){
                        console.log('SW cleanup');
                        return caches.delete(cache);
                    }//if
                })//map
            )//ret
        })//keys
    );//waitUntil
});//event activate


//Call fetch event
self.addEventListener('fetch', (e) => {
    // console.log('SW: fetch--', e.request);
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );//respondWith
});//event fetch