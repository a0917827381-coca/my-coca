// 滿足 Chrome PWA 安裝的硬性指標，讓 App 具備啟動權限
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // 保持空載即可，讓連線直接通過
});