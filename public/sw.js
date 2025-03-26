const staticCacheName = 'static-site-v2'
const dynamicCacheName = 'dynamic-site-v2'
const ASSETS = ['/', '/index.html', '/offline.html']

// sw.js
self.addEventListener('install', async (event) => {
  //event.waitUntil(self.skipWaiting())

  console.log('SW intalled')

  const cache = await caches.open(staticCacheName)
  await cache.addAll(ASSETS)
})

self.addEventListener('activate', async () => {
  console.log('SW activated')

  const cacheKeys = await caches.keys()
  await Promise.all(
    cacheKeys
      .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
      .map((key) => caches.delete(key))
  )
})

self.addEventListener('fetch', async (event) => {
  console.log('fetch', event)

  event.respondWith(catchFirst(event.request))
})

async function catchFirst(req) {
  const cache = await caches.open(staticCacheName)
  const cached = await cache.match(req.url)
  try {
    return cached ?? (await fetch(req.url).then(networkFirst))
  } catch (e) {
    return networkFirst(req)
  }
}

async function networkFirst(req) {
  const cache = await caches.open(dynamicCacheName)
  try {
    const res = await fetch(req.url)
    await cache.put(req.url, res.clone())

    return res
  } catch (e) {
    const cached = await cache.match(req.url)
    return cached ?? (await caches.match('/offline.html'))
  }
}
