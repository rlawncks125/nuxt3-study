export default defineNuxtPlugin(() => {
  console.log("플러그인", navigator);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(() => {
      console.log("서비스 워커 등록");
    });
  }
});
