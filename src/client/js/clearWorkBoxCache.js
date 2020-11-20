// Purpose
// Why: When doing development, changes were not showing up in browser
// Appeared that WorkBox was caching
// Made sure workbox was not in dev build - no luck

const clearWorkBoxCache = () => {
  caches.keys().then((cacheNames) => {
    cacheNames.forEach((cacheName) => {
      caches.delete(cacheName);
    });
  });
};

export { clearWorkBoxCache };
// Source: https://stackoverflow.com/questions/54376355/clear-workbox-cache-of-all-content
