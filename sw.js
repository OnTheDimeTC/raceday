const CACHE="otd-event-timer-v2-4-pause-reset-gun";
const CORE=["./","index.html","manifest.webmanifest","icon-180.png","icon-512.png","Starting Pistol Sound Effect.wav"];
self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)));
  self.skipWaiting();
});
self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(
    keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))
  )));
  self.clients.claim();
});
self.addEventListener("fetch",event=>{
  const url=new URL(event.request.url);
  if(url.hostname.endsWith(".supabase.co")){
    event.respondWith(fetch(event.request));
    return;
  }
  if(event.request.mode==="navigate"){
    event.respondWith(
      fetch(event.request).then(response=>{
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put("index.html",copy));
        return response;
      }).catch(()=>caches.match("index.html"))
    );
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
