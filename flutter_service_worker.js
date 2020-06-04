'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "9d2f6cd1847b18907187397088900ee9",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/master": "c47b91fea48a5c2c42a3dda1fa94df22",
".git/refs/heads/master": "c47b91fea48a5c2c42a3dda1fa94df22",
".git/objects/fd/a25e6c98ca19852eb9e780d8bc41af3d7b89ce": "4e8ab75e722a4ab68d5435895a5318f2",
".git/objects/cb/c87b68e6e5a843ee706125e9ce430a148a0f42": "e8f4916156ddc9f92871e4e52149ac9c",
".git/objects/4c/9ca410c70f4b9a7ecc89cddc52b0239aa3de20": "496be9fc2ce2e0e04ae5796f58cbfd62",
".git/objects/95/641eb00cc9daba87e1a315974afe6418278ad5": "af1f3713f8298ca4ddf8408d7c390e66",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/05/b7cc22dbba31c5ca64ee368558614f420f896f": "c3a475901b5902c1863b1e0e70beb89d",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/53/012fdfe5a58a39169888aea4878c5b195558c3": "70f39097f7fcf0be22c8b4c046b0e51d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/8b/45d707488bdc94eb7cd8e839eb656deed2a1f4": "3accc310d496c16a9c2c9ebd1e0c398a",
".git/objects/c8/bfcfffe4a001d4bc9b53d90b2eb812a5590bee": "ac1cc015b8c1336ded2868ab9937571a",
".git/objects/e9/b04900870b16015b3df4f2cae8d8a06ebfda0e": "fd58585545f9920310fc07bb289f28e0",
".git/objects/a5/3cbb06085fc3ec53499c82585b020faf9aa46e": "8c997dded161f285c5eb10fbad9a1d7c",
".git/objects/00/357cb9c97408f7904bdc0a73bb937b2a4041e4": "2affc5f764f2b8ab79c72f94c283b42c",
".git/objects/d4/f4f075757e83978c1f25e7c9c0f90653b504a6": "25d32b664bf24efcd42423f8fdd688a3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/23/2dcba5775f95882ee979f5ffde7dceae6b8ae9": "1dd40911a7f0d8a5e5962c6d7d6cce6f",
".git/objects/8e/2b99f3500ff0eca91f71e533d21971d2f419bf": "d25a7a98eb533fa5a0b99ca85d98a716",
".git/objects/55/77b93a6c51fa9d965270c3f649f7608bb28aaa": "cbe6745b03fc832c40c166a726c3476e",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/50/a831d776627f6d919d32550e1798a24a90bbf2": "f2d91237f46e54e211e407e3ede8fb8f",
".git/objects/c5/3a9295c41c93d8b049be3b448720f67c60861d": "1c7b26cade728272ff171ba9198a59e3",
".git/objects/51/9e06f3c929798755577ce15cda10c434a53aa1": "2b6b6022037faed4330ba1b68b387ef3",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/cd/c19678ac03749f53a0730f509721fd67514ed5": "63dd96a3575a36a042f34c6ea9c7d7bd",
".git/objects/32/496797857d489f13a455e8ecea2b1665e83eee": "c12547086f982bbc8fe1933b0080367c",
".git/objects/4e/4f53908e79b200ad4309554ee32742e9a14116": "3f025a57614894c5e8227dea7b4241f0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d5/e483a580f308ee6261fdee73f2a0ea552af744": "4e4e6bb703e0f37e9d675b69ab6ecd11",
".git/objects/da/a60b51e4a87094621aefdab7941c2fd77f2826": "d845789df6b7914c73b04d230ec6887a",
".git/objects/3a/7babf76127e3b535cad331a94d90730f708b29": "ae6f29e710fc36d6784c678458fb4afc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/f9/692b4b75528c445b9a58e48d63188b90426433": "79b4047f85e844275007c4edf982df8f",
".git/objects/87/74ae9c81ffe9642b37288fef99e91809aab99c": "ed95f62aacca3dfe228217d1e849ff1e",
".git/objects/87/7c8ee99f4cfc6653a0960ccb2dba6664d85950": "2989913a4a7d58ad0fbdea13fd7b73bc",
".git/FETCH_HEAD": "343163234792e1fc67bba434952ac283",
".git/index": "e592640b7cd3fa7a2387d072c001b591",
".git/ORIG_HEAD": "c47b91fea48a5c2c42a3dda1fa94df22",
".git/logs/refs/remotes/origin/master": "5263722a5f3dfba70af8da8b4f3e7bb9",
".git/logs/refs/heads/master": "3e1d41a3c6177a026b448d0e3d96c488",
".git/logs/HEAD": "167da788b4fffc032698d8d1eed3c031",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "31441342b805c5e47f37ef6edb602e22",
"assets/assets/listofcontents.json": "b5dc7a7e67b183e8576ed3f89c9fe742",
"assets/assets/articlesQuiz.json": "660a365db4ca0867780d03f1edd28792",
"assets/assets/animalsVocab.json": "3976b3e89319404cb72337e21ba28dbb",
"assets/assets/partsOfSpeechLesson.txt": "0b3be0f0ac0eab547159a3ca51f23809",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/AssetManifest.json": "54cb3380deb538e1eeacecd369a5e08d",
"manifest.json": "533ceda4ac3c816a477c646e2f4329e2",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "cd5e6beeda227f9ae5797adce3abb48c",
"/": "cd5e6beeda227f9ae5797adce3abb48c",
"main.dart.js": "839fe29832ef59454041cfb022263a30"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
