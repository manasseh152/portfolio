// This is the service worker with the Cache-first network
// In this project we are using next.js but we don't need any package to use service worker

self.addEventListener("install", async event => {
	const cache = await caches.open("static-cache");
	cache.addAll(["/_next/static/*"]);
});

self.addEventListener("fetch", async event => {
	const request = event.request;
	const url = new URL(request.url);
	if (url.origin === location.origin) {
		event.respondWith(cacheFirst(request));
	} else {
		event.respondWith(networkFirst(request));
	}
});
