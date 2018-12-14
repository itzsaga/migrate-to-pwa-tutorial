self.addEventListener("fetch", function(event) {});

self.addEventListener("push", function(event) {
  event.waitUntil(
    self.registration.showNotification("Got Push?", {
      body: "Push Message received"
    })
  );
});
