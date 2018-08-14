self.addEventListener('install', function(event) {
  event.waitUntil(caches.open('static')
    .then(function(cache) {
      cache.addAll([
        // Pages
        'https://www.holmeswebdev.com/',
        'https://www.holmeswebdev.com/web-development-services/',
        'https://www.holmeswebdev.com/contact/',
        // Bundles
        'https://www.holmeswebdev.com/static/main/dist/scripts/animate.bundle.js',
        'https://www.holmeswebdev.com/static/main/dist/scripts/externals.bundle.js',
        'https://www.holmeswebdev.com/static/main/dist/scripts/index.bundle.js',
        'https://www.holmeswebdev.com/static/main/dist/scripts/styles.bundle.js',
        //CDN's
        'https://fonts.googleapis.com/css?family=Raleway:300,400',
        'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
        // Static files
        'https://www.holmeswebdev.com/static/main/src/images/logo.png',
        'https://www.holmeswebdev.com/static/main/src/images/favicon.png',
        'https://www.holmeswebdev.com/static/main/src/images/background.jpeg',
        'https://www.holmeswebdev.com/static/main/src/icons/icon-blog.png',
        'https://www.holmeswebdev.com/static/main/src/icons/icon-coding.png',
        'https://www.holmeswebdev.com/static/main/src/icons/icon-database.png',
        'https://www.holmeswebdev.com/static/main/src/icons/icon-eye.png',
        'https://www.holmeswebdev.com/static/main/src/icons/icon-graph.png',
        'https://www.holmeswebdev.com/static/main/src/icons/icon-menu.png',
        'https://www.holmeswebdev.com/static/main/src/icons/icon-search.png',
        'https://www.holmeswebdev.com/static/main/src/icons/icon-ux.png',
        'https://www.holmeswebdev.com/static/main/src/icons/logo/logo-96.png',
        'https://www.holmeswebdev.com/static/main/src/icons/logo/logo-144.png',
        'https://www.holmeswebdev.com/static/main/src/icons/logo/logo-256.png',
        'https://www.holmeswebdev.com/static/main/src/icons/logo/logo-512.png',
        'https://www.holmeswebdev.com/static/main/src/scripts/toast_contact_failed.js',
        'https://www.holmeswebdev.com/static/main/src/scripts/toast_contact_thanks.js',
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
