const cacheName = "v6";
const cacheList = [
  "/",
  "/manifest.json",
  "/icons/lakun.png",
  "/icons/logo_128.png",
  "/icons/logo_384.png",
  "/icons/logo_x32.png",
  "/icons/logo_x48.png",
  "/icons/logo_x72.png",
  "/icons/logo_x96.png",
  "/icons/logo_x120.png",
  "/icons/logo_x180.png",
  "/icons/logo_x192.png",
  "/icons/logo_x512.png",
];
// ...(process.env.NODE_ENV === "prod" ? [] : []),

self.addEventListener("install", () => {
  // 대기상태에 머무르지 않고 활성화
  self.skipWaiting();
  console.log("install");

  // 캐시 저장
  caches.open(cacheName).then((cache) => {
    console.log("캐시 저장");
    return cache.addAll(cacheList);
  });
});

self.addEventListener("activate", (event) => {
  console.log("activate");

  // 작업이 마무리될떄가지 설치단계를 연장
  event.waitUntil(
    // 불필요한 캐시 지우기
    caches.keys().then((keylist) => {
      return Promise.all(
        keylist.map((key) => {
          if (key !== cacheName) {
            console.log("지움", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  // console.log("fetch", event.request.url);

  // 캐싱된 데이터 fetch하기
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("push", (event) => {
  console.log("push", event.data.text());

  const title = "my PWA";
  const options = {
    body: event.data.text(),
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
