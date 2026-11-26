// PitchCount：電波がない球場でも開けるように、ページを端末に保存しておく。
// 電波があるときは新しい版を取りにいき、取れなければ保存しておいた版を出す。
//
// 注意：DugoutTools のアプリはすべて同じ yatti3g-byte.github.io の上にあり、
// 保存（Cache Storage）はドメイン全体で共有される。古い版を消すときは、
// 必ず「pitchcount-」で始まる自分の保存だけを消す（TapScore など、ほかのアプリの保存を消さない）。
const PREFIX = 'pitchcount-';
const CACHE = PREFIX + 'v4';
const FILES = ['./', './index.html', './help.html', './og.jpg', './favicon.svg', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      })
      // 探すのも自分の保存の中だけ（ほかのアプリの保存から同じ名前のファイルを返さない）
      .catch(() => caches.open(CACHE).then(c => c.match(req).then(r => r || c.match('./index.html'))))
  );
});
