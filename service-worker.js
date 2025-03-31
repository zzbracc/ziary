self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('ziary-store').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/ziary_home.html',
        '/ziary_calendar.html',
        '/ziary_export.html',
        '/ziary_login.html',
        '/ziary_list_overview.html',
        '/ziary_stats.html',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});