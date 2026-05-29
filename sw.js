self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
});

// 攔截請求並直接放行至網路，確保 WebAPK 啟動時不會抓不到資料而閃退
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});