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

async function cacheFirst(request) {
	const cachedResponse = await caches.match(request);
	return cachedResponse || fetch(request);
}

async function networkFirst(request) {
	const cache = await caches.open("dynamic-cache");
	try {
		const response = await fetch(request);
		cache.put(request, response.clone());
		return response;
	} catch (error) {
		return await cache.match(request);
	}
}

// Path: public/manifest.json
