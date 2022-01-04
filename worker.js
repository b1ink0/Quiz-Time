var CACHE_NAME = "quizTimeCache";
var urlsToCache = [
  "/Quiz-Time/index.html",
  "/Quiz-Time/asset-manifest.json",
  "/Quiz-Time/favicon.ico",
  "/Quiz-Time/logo192.png",
  "/Quiz-Time/logo512.png",
  "/Quiz-Time/manifest.json",
  "/Quiz-Time/maskable192.png",
  "/Quiz-Time/maskable512.png",
  "/Quiz-Time/robots.txt",
  "/Quiz-Time/worker.js",
  "/Quiz-Time/star.png",
  "/Quiz-Time/three.min.js",
  "/Quiz-Time/static/media/contact.b80a2194.jpeg",
  "/Quiz-Time/static/media/copied.739aac08.svg",
  "/Quiz-Time/static/media/copy.43b5481e.svg",
  "/Quiz-Time/static/media/edit.1cd86f8f.svg",
  "/Quiz-Time/static/media/logo.c7241fb8.svg",
  "/Quiz-Time/static/media/profile.e9e1f9ff.svg",
  "/Quiz-Time/static/media/rank_1.9cdeb73b.svg",
  "/Quiz-Time/static/media/rank_2.3e55031c.svg",
  "/Quiz-Time/static/media/rank_3.4d4a08b6.svg",
  "/Quiz-Time/static/css/main.0aaad12c.chunk.css",
  "/Quiz-Time/static/css/main.0aaad12c.chunk.css.map",
];

// Install a service worker
self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// Update a service worker
self.addEventListener("activate", (event) => {
  var cacheWhitelist = ["quizTimeCache"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
