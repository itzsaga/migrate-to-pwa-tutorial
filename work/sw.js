self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("push", function(event) {
  event.waitUntil(
    self.registration.showNotification("Got Push?", {
      body: "Push Message received"
    })
  );
});

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("the-magic-cache").then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/dragon.html",
        "/faq.html",
        "/manifest.json",
        "/background.jpeg",
        "/construction.gif",
        "/dragon.png",
        "/logo.png",
        "/site.js",
        "/dragon.js",
        "/styles.css"
      ]);
    })
  );
});
