if (!self.define) {
    let e,
        s = {};
    const i = (i, n) => (
        (i = new URL(i + '.js', n).href),
        s[i] ||
            new Promise((s) => {
                if ('document' in self) {
                    const e = document.createElement('script');
                    (e.src = i), (e.onload = s), document.head.appendChild(e);
                } else (e = i), importScripts(i), s();
            }).then(() => {
                let e = s[i];
                if (!e)
                    throw new Error(`Module ${i} didn’t register its module`);
                return e;
            })
    );
    self.define = (n, t) => {
        const r =
            e ||
            ('document' in self ? document.currentScript.src : '') ||
            location.href;
        if (s[r]) return;
        let o = {};
        const d = (e) => i(e, r),
            l = { module: { uri: r }, exports: o, require: d };
        s[r] = Promise.all(n.map((e) => l[e] || d(e))).then(
            (e) => (t(...e), o),
        );
    };
}
define(['./workbox-3e911b1d'], function (e) {
    'use strict';
    self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: 'assets/index-DJuXWAb1.js', revision: null },
                { url: 'assets/index-VX1Ymtc9.css', revision: null },
                {
                    url: 'index.html',
                    revision: '8c740bf2b65625ffb20fbc7df53f78a4',
                },
                {
                    url: 'registerSW.js',
                    revision: '1872c500de691dce40960bb85481de07',
                },
                {
                    url: 'manifest.webmanifest',
                    revision: 'dfd414140fe2b06934dc135dcd329f26',
                },
            ],
            {},
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            new e.NavigationRoute(e.createHandlerBoundToURL('index.html')),
        );
});
