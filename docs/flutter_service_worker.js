'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "b3697f0e1c02e3032faad0f928437526",
"assets/assets/icons/car_doctor.png": "161545500693b513401aecc1e3530e52",
"assets/assets/icons/home.png": "f314b297037a3beeb7cdb8c009a5fafc",
"assets/assets/icons/pin_staff.png": "1f15d7340da4dbddf009c227e64ddbee",
"assets/assets/icons/map.png": "db1f970dc7a02d485aae61c786a73eae",
"assets/assets/icons/yes.png": "dfe631ca125b86f567dce70aa9e02af5",
"assets/assets/icons/profile.png": "57ba1056a4aa479b4fdd457ef24cbf07",
"assets/assets/icons/pin.png": "3968d0405e288cfa079dd05b7e469765",
"assets/assets/icons/search.png": "ce6e0da708efcc41bba026df3a659e69",
"assets/assets/icons/car_security.png": "6eee6bb9a2901267e702936604fbcaac",
"assets/assets/icons/car_volunteer.png": "0f418f58ae79073182bc7e9356608ca9",
"assets/assets/icons/car_lawyer.png": "432aa7c7a3add7e9a3b40e6ee716c2b9",
"assets/assets/images/car_doctor.png": "161545500693b513401aecc1e3530e52",
"assets/assets/images/volunteer.png": "8aa77c5973a64945054e21598c19aae6",
"assets/assets/images/shade.png": "9ca94955bfcc200411b6894c1d0c8644",
"assets/assets/images/volunteer_cropped.png": "430b3db5085207e815cd795fb4d48b84",
"assets/assets/images/lawyer_cropped.png": "d75d824706586f5fd4b527e2b22e1bd3",
"assets/assets/images/doctor_cropped.png": "fdebbd28e6c1b7e300ffb7d156367796",
"assets/assets/images/logo.png": "098be2b04b3406e9413672999d2f52c2",
"assets/assets/images/staff_stop_active.png": "0981b62fd21bb252942f3824cc99e49a",
"assets/assets/images/lawyer.png": "de8bd65d01b2417a25a90ea970b9be64",
"assets/assets/images/doctor.png": "1d1cd2fe3a80a9fd87ece9463193d7cb",
"assets/assets/images/car_security.png": "6eee6bb9a2901267e702936604fbcaac",
"assets/assets/images/car_volunteer.png": "0f418f58ae79073182bc7e9356608ca9",
"assets/assets/images/car_lawyer.png": "432aa7c7a3add7e9a3b40e6ee716c2b9",
"assets/assets/images/staff_stop_inactive.png": "1c9fa13beb0596ecbafdc5091e0d639f",
"assets/assets/images/logo.svg": "7e1d9f27093de388bfdb49efd957921b",
"assets/assets/images/staff_start_inactive.png": "69ef4f43bafef2fe851cc3272bc3f2b8",
"assets/assets/images/security_cropped.png": "131f06897a63c762ac7c29f565a0285e",
"assets/assets/images/logo_text.png": "41cfe51aea554cacd914ae6af42d0fbc",
"assets/assets/images/user_photo.png": "2be52004989f97712aac5da7b9721039",
"assets/assets/images/staff_start_active.png": "4461dff3154f253ed757aff37f6f9209",
"assets/assets/images/security.png": "715642dd884c0926c9d619b26b367e4c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "42be331aeea1e805cf59afc9d41b48d2",
"assets/AssetManifest.bin.json": "6690a1e5f11ce689ddd4c16bf0164ef3",
"assets/AssetManifest.json": "829ea2dc68c0b53fee9294605fcbfd81",
"assets/NOTICES": "a075c5c6ebe99aca8e583bf682faf84a",
"assets/AssetManifest.bin": "01cf7a89ae76e86708773b65cd390a7d",
"assets/fonts/PTSans-Regular.ttf": "5b127e9e1cedad57860a5bb8b2cc9d61",
"assets/fonts/PTSans-Bold.ttf": "7ce12caf9c41197f791da7e40970a69c",
"assets/fonts/MaterialIcons-Regular.otf": "09b8f52b49ff6d3d2d5f55aadd1aa1a2",
"assets/fonts/Cormorant-Bold.ttf": "34af1a57ae6381c389bf15d27d4a822e",
"assets/fonts/OpenSans-Bold.ttf": "0a191f83602623628320f3d3c667a276",
"assets/fonts/OpenSans-SemiBold.ttf": "e2ca235bf1ddc5b7a350199cf818c9c8",
"assets/fonts/OpenSans-Regular.ttf": "931aebd37b54b3e5df2fedfce1432d52",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"index.html": "1c566b12dde2ecc1bf9d72a67325384c",
"/": "1c566b12dde2ecc1bf9d72a67325384c",
"version.json": "397843f9054663615800eef8eab6c62c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "4319fa72e342e5128ad6fca66812142a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
