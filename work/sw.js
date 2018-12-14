self.addEventListener("fetch", function(event) {});

self.addEventListener("push", function(event) {
  event.waitUntil(
    self.registration.showNotification("Got Push?", {
      body: "Push Message received"
    })
  );
});

screen.addEventListener("install", function(e) {
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
