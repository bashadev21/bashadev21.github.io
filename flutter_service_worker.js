'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6b320cd711c62349b0536ecf09b77790",
"index.html": "145bfb926c51d44e6239810901c0c8d2",
"/": "145bfb926c51d44e6239810901c0c8d2",
"main.dart.js": "61e146c64976762a48e9842254dbf81b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "35962b7fd17541cbeca25a0a0a725ccb",
"assets/images/1_Aham.jpg": "fc8777824ed69ec5ecf878831cd28b26",
"assets/images/cars.png": "7f90fc724d8f27302ceedd0cc1ab265e",
"assets/images/5_Shidilageetam.jpg": "fcadd047877864cf02250206af505f8c",
"assets/images/quest.jpg": "04d6f493fd51cf79d428b9b7a533d945",
"assets/images/science.jpg": "7e0cfbba5d6fa08b45bae8982c304c30",
"assets/images/5.jfif": "5c8ef7d9cc82f5f435c62e237c87a1be",
"assets/images/junglebook.jpg": "dfbbc60677ededc11e4e04f6c2b9af96",
"assets/images/aha.jpg": "44891e00cdde624b64f78de8902bc283",
"assets/images/jumanji.jfif": "be20fa4f4a0e939b6dc7ee5ecb568ef5",
"assets/images/4.jfif": "949bf3fe741ba6ce0af61b8964202d34",
"assets/images/trending_new.jpg": "db7cb03ffa4d115546fee5d1e963f23e",
"assets/images/zee.jpg": "87fc59f13c187f72d44c31c80101a9e8",
"assets/images/9_CoffeePettavu.jpg": "e813f4d29bd6d22e2627ed7e90a64ace",
"assets/images/elephant.jpg": "8b2d1ad3b7c07d83add9d659534320eb",
"assets/images/story.mp3": "6dbbfe92785ffd99e1b9505a5f5cc93d",
"assets/images/3.jfif": "f560c8ccd04270c63bac9ff13dce2bca",
"assets/images/allone.jpg": "63132dc885955090edaa591ee3523a12",
"assets/images/13_Sankramanam.jpg": "555092b33b94a6833ec18290782d3fd5",
"assets/images/fb.png": "006277abd6d8a040332dc9bb8fcc2e58",
"assets/images/4_Allari.jpg": "cd03d38cc9eed72e3e8873034f956083",
"assets/images/kab.jpg": "51a7a91f0dd4819d6c7ddff77f894651",
"assets/images/moral.jpg": "5714c6de3dca27e62a6e4f248f6c6604",
"assets/images/15_Dimpudukallam.jpg": "18f8a2aab8cf5b17a0f6964edb696f28",
"assets/images/user.png": "ff22a7d131647c54106ea252c6094bc5",
"assets/images/arrow.png": "2ceef97f797e036a8be8af30c2e01075",
"assets/images/2_Om_Gassippaya_Namaha.jpg": "d2b2d3d81fb8e5a9e5655d452a6e9e80",
"assets/images/like.png": "419fa7a286ac13bbf75457d44e25cd10",
"assets/images/2.jfif": "d3451c4fc4589187e632f6a7d0d4f01e",
"assets/images/8_Fullu_Guarantee.jpg": "af464a404daf4f205e2b3a3c13d9bf33",
"assets/images/storytime.jpg": "42a7a470f0623ded4bd7de3c70b11543",
"assets/images/story1.jpg": "e48839bd0e0a81732270844fd7d62ee3",
"assets/images/story3.jpg": "36875a5e69366e03d5fb8b918e6defa3",
"assets/images/audio/Aham%2520EP%25202.mp3": "de4ddb316252a0d85a3d0b057baf5548",
"assets/images/audio/Aham%2520EP%25201.mp3": "7300c975cc5d0ca4f3c6302c64902282",
"assets/images/3_Nanna_Mondodu.jpg": "740c15363b301b72c57ddbc1cc94775c",
"assets/images/potter.jpg": "889230bc240d247356536794330d5513",
"assets/images/forward.png": "4aa56dc504084f5a8a8bca4762096368",
"assets/images/logo.png": "eb58f7b90b994891c75afbf9fc6323f0",
"assets/images/story2.jpg": "72ff10a0ed7abd62e3a22dd103e42fc1",
"assets/images/aug%2520logo.jpg": "54f5ec26e2e334689a9b7efacfb9f4df",
"assets/images/story6.jpg": "d5135e7fc835ef70b88f31f057d6f3ca",
"assets/images/hp2.png": "cb9cf8d26dfa89e63a255a7f023ef392",
"assets/images/insta.jpg": "8a771b1b7957e966bfe238f41d08d175",
"assets/images/7_Antaram.jpg": "020bbfbc9f87cc3d323132da7f20baaa",
"assets/images/zar.jpg": "799f14c60cc5af0b228ad0877340d779",
"assets/images/godofwar.jpg": "a1560503146feeb4ace5248a2f8787b5",
"assets/images/storyofscience.jpg": "a96ba443db7a5d66920e6fca5ba2350f",
"assets/images/car.png": "9f574f42b89200103f6e5d8780e23db0",
"assets/images/misery.jpg": "40a7d29b8a8c2f6226cf339ac56b0de2",
"assets/images/10_No_credit.jpg": "09658aa4f48b08dcf69cb1edf756c000",
"assets/images/14_PellikaniPrasad.jpg": "a238b6beba35d61bd0e351c6fe7f3e19",
"assets/images/1_No_Mechine_day.jpg": "a1f0c2436e60ca89c8444e1e001e714b",
"assets/images/godofwar2.jpg": "812eb37b375ad5856eed28cf109e0bd2",
"assets/images/3_Mrutyuvihari.jpg": "52f9e91c8e20c90a9beed64f0ef67c47",
"assets/images/darknight.png": "6f3d49a0a9e8a0ec9164fa94a6851593",
"assets/images/story4.jpg": "8fe57c7f53c4b0e0d449dedcf341f14b",
"assets/images/11_GavvalaMoota.jpg": "228bc7f7e7972588f4de550a58148a54",
"assets/images/4_Sri%2520Balaji%2520Talkies.jpg": "b6c27f0570ecbab9ede702886ec9af91",
"assets/images/mark.jpg": "da749224f6765bdfb6c03f59e10dc15b",
"assets/images/new_image.jpg": "25e937083406c94e55da0de60a1cfcc1",
"assets/images/harry.jpg": "71fd7a60474dd25c3fd56a29fceb6b06",
"assets/images/voot.jpg": "b038681d9390ea60e7cb8a900a47aa9e",
"assets/images/aug12.jpg": "644d39506f43f23225a50f1808d1bbd0",
"assets/images/trending.jpg": "4b36508f04c024dce674de320722e37b",
"assets/images/Fonts/Whisper-Regular.ttf": "31ff5ec762769cc295fca678de23a35c",
"assets/images/Fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/images/2_ManavaParinamam.jpg": "27f7f8514d75d59f3abe3fc5aeb21561",
"assets/images/love.png": "7a40460d1d9a8231c6b6c994a7729bc7",
"assets/images/5_AdiAntham.jpg": "79a08e6bdc0e90348d204434b55515cb",
"assets/images/whatsapp.png": "12028c01a3e9d3cf62bf007c5a714f97",
"assets/images/12_Kumarsir.jpg": "beb445aa1edb9e6d58f615a1519da515",
"assets/images/night.png": "a2e252422c3c6842e95da4fb587c3861",
"assets/images/coupon.jpg": "58d3830d8363f476f5826a3e91f5aae7",
"assets/images/backward.png": "0b425ea5a9079f8d97d7e150d2184345",
"assets/images/1.png": "726250c20b4d6e0d5e9e0bf56fa20d54",
"assets/images/6_Chillaginja.jpg": "e678836bbb31b284f23df4a6fef199e0",
"assets/AssetManifest.json": "8b45f8fcce4b83b7f8e7ed20e1627e9a",
"assets/NOTICES": "34d6dabe48ec6e0a22f0b213a0db39a3",
"assets/FontManifest.json": "4895f332f3f17facdf20326401cab239",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/sn_progress_dialog/example/assets/completed.png": "3e65bf4ed5f8b0f808b57fecdb26b7d1",
"assets/packages/sn_progress_dialog/assets/completed.png": "4f4ec717f6bb773c80db76261bb367c3",
"assets/packages/dark_light_button/assets/images/day.png": "bc9725b94cf914436c0c6ac86cb44c14",
"assets/packages/dark_light_button/assets/images/night.png": "6c2ac44e311a73ec85d5bf864771bca6",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
