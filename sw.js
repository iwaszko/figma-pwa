const cacheName = "cache1"; // Change value to force update

self.addEventListener("install", event => {
	// Kick out the old service worker
	self.skipWaiting();

	event.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
				"/",
				"android-chrome-36x36.png", // Favicon, Android Chrome M39+ with 0.75 screen density
				"android-chrome-48x48.png", // Favicon, Android Chrome M39+ with 1.0 screen density
				"android-chrome-72x72.png", // Favicon, Android Chrome M39+ with 1.5 screen density
				"android-chrome-96x96.png", // Favicon, Android Chrome M39+ with 2.0 screen density
				"android-chrome-144x144.png", // Favicon, Android Chrome M39+ with 3.0 screen density
				"android-chrome-192x192.png", // Favicon, Android Chrome M39+ with 4.0 screen density
				"android-chrome-256x256.png", // Favicon, Android Chrome M47+ Splash screen with 1.5 screen density
				"android-chrome-384x384.png", // Favicon, Android Chrome M47+ Splash screen with 3.0 screen density
				"android-chrome-512x512.png", // Favicon, Android Chrome M47+ Splash screen with 4.0 screen density
				"apple-touch-icon.png", // Favicon, Apple default
				"apple-touch-icon-57x57.png", // Apple iPhone, Non-retina with iOS6 or prior
				"apple-touch-icon-60x60.png", // Apple iPhone, Non-retina with iOS7
				"apple-touch-icon-72x72.png", // Apple iPad, Non-retina with iOS6 or prior
				"apple-touch-icon-76x76.png", // Apple iPad, Non-retina with iOS7
				"apple-touch-icon-114x114.png", // Apple iPhone, Retina with iOS6 or prior
				"apple-touch-icon-120x120.png", // Apple iPhone, Retina with iOS7
				"apple-touch-icon-144x144.png", // Apple iPad, Retina with iOS6 or prior
				"apple-touch-icon-152x152.png", // Apple iPad, Retina with iOS7
				"apple-touch-icon-180x180.png", // Apple iPhone 6 Plus with iOS8
				"browserconfig.xml", // IE11 icon configuration file
				"favicon.ico", // Favicon, IE and fallback for other browsers
				"favicon-16x16.png", // Favicon, default
				"favicon-32x32.png", // Favicon, Safari on Mac OS
				"logo.png", // Logo
				"manifest.json", // Manifest file
				"maskable_icon.png", // Favicon, maskable https://web.dev/maskable-icon
				"mstile-70x70.png", // Favicon, Windows 8 / IE11
				"mstile-144x144.png", // Favicon, Windows 8 / IE10
				"mstile-150x150.png", // Favicon, Windows 8 / IE11
				"mstile-310x150.png", // Favicon, Windows 8 / IE11
				"mstile-310x310.png", // Favicon, Windows 8 / IE11
				"safari-pinned-tab.svg", // Favicon, Safari pinned tab
				"share.jpg", // Social media sharing

				"index.html", // Main HTML file

				// Use ./list-files.sh to update this list
				"data/handoff.js",
				"data/story.js",
				"images/frame-1461-1.png",
				"images/frame-1461-0.png",
				"images/full/frame-1238.png",
				"images/full/frame-1466.png",
				"images/full/frame-1459.png",
				"images/full/frame-1458.png",
				"images/full/frame-1464.png",
				"images/full/frame-1460.png",
				"images/full/frame-1461.png",
				"images/full/frame-1463.png",
				"images/full/frame-1462.png",
				"images/full/frame-1453.png",
				"images/full/frame-1255.png",
				"images/full/frame-1452.png",
				"images/full/frame-1242.png",
				"images/full/frame-1455.png",
				"images/full/frame-1454.png",
				"images/full/frame-1456.png",
				"images/full/frame-1457.png",
				"images/full/trg-welcome.png",
				"images/frame-1463-0.png",
				"images/frame-1463-1.png",
				"images/frame-1238.png",
				"images/frame-1255-0.png",
				"images/frame-1458-0.png",
				"images/frame-1458-1.png",
				"images/frame-1255-1.png",
				"images/frame-1466.png",
				"images/frame-1462-0.png",
				"images/frame-1462-1.png",
				"images/frame-1460-1.png",
				"images/frame-1459.png",
				"images/frame-1458.png",
				"images/frame-1460-0.png",
				"images/frame-1464.png",
				"images/frame-1460.png",
				"images/frame-1459-0.png",
				"images/frame-1464-0.png",
				"images/frame-1464-1.png",
				"images/frame-1459-1.png",
				"images/frame-1461.png",
				"images/frame-1463.png",
				"images/frame-1466-1.png",
				"images/frame-1466-0.png",
				"images/frame-1462.png",
				"images/frame-1453.png",
				"images/frame-1457-0.png",
				"images/frame-1255.png",
				"images/frame-1452.png",
				"images/frame-1242.png",
				"images/frame-1455-0.png",
				"images/frame-1455.png",
				"images/frame-1454.png",
				"images/frame-1456.png",
				"images/frame-1453-0.png",
				"images/pp-home.png",
				"images/frame-1457.png",
				"images/frame-1238-0.png",
				"images/previews/frame-1238.png",
				"images/previews/frame-1466.png",
				"images/previews/frame-1459.png",
				"images/previews/frame-1458.png",
				"images/previews/frame-1464.png",
				"images/previews/frame-1460.png",
				"images/previews/frame-1461.png",
				"images/previews/frame-1463.png",
				"images/previews/frame-1462.png",
				"images/previews/frame-1453.png",
				"images/previews/frame-1255.png",
				"images/previews/frame-1452.png",
				"images/previews/frame-1242.png",
				"images/previews/frame-1455.png",
				"images/previews/frame-1454.png",
				"images/previews/frame-1456.png",
				"images/previews/pp-home.png",
				"images/previews/frame-1457.png",
				"images/previews/pp-new-message.png",
				"images/previews/trg-welcome.png",
				"images/previews/pp-inbox.png",
				"images/frame-1454-0.png",
				"images/frame-1456-0.png",
				"images/frame-1242-1.png",
				"images/frame-1242-0.png",
				"images/pp-new-message.png",
				"images/frame-1452-1.png",
				"images/trg-welcome.png",
				"images/frame-1452-0.png",
				"images/trg-welcome-0.png",
				"images/pp-inbox.png",
				"images/trg-welcome-1.png",
				"js/.DS_Store",
				"js/ExpViewer.js",
				"js/AbstractViewer.js",
				"js/CommentsViewer.js",
				"js/other/jquery-3.3.1.min.js",
				"js/other/jquery.hotkeys.js",
				"js/other/jquery.ba-hashchange.min.js",
				"js/Viewer.js",
				"js/InfoViewer.js",
				"js/PresenterViewer.js",
				"js/SymbolViewer.js",
				"js/ViewerPage.js",
				"js/GalleryViewer.js",
				"resources/viewer-top.css",
				"resources/icon.png",
				"resources/animations.css",
				"resources/viewer.css",
				"resources/cursormap.png",
				"resources/viewer-center.css",
				"resources/1.png",
			]);
		})
	);
});

self.addEventListener("activate", event => {
	// Delete any non-current cache
	event.waitUntil(
		caches.keys().then(keys => {
			Promise.all(
				keys.map(key => {
					if (![cacheName].includes(key)) {
						return caches.delete(key);
					}
				})
			)
		})
	);
});

// Offline-first, cache-first strategy
// Kick off two asynchronous requests, one to the cache and one to the network
// If there's a cached version available, use it, but fetch an update for next time.
// Gets data on screen as quickly as possible, then updates once the network has returned the latest data. 
self.addEventListener("fetch", event => {
	event.respondWith(
		caches.open(cacheName).then(cache => {
			return cache.match(event.request).then(response => {
				return response || fetch(event.request).then(networkResponse => {
					cache.put(event.request, networkResponse.clone());
					return networkResponse;
				});
			})
		})
	);
});