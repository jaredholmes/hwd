self.addEventListener('install', function(event) {
  event.waitUntil(caches.open('static')
    .then(function(cache) {
      cache.addAll([
        'https://www.holmeswebdev.com/',
        'https://www.holmeswebdev.com/web-development-services/',
        'https://www.holmeswebdev.com/contact/',
        'https://www.holmeswebdev.com/static/main/src/images/logo.png',
        'https://fonts.googleapis.com/css?family=Raleway:300,400',
      ]);
    }));
});

self.addEventListener('activate', () => {
  // console.log('Activated');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        } else {
          return fetch(event.request);
        }
      })
  );
});
