
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 915, hash: '1c359a13d66621a74f7e0af6a29007326a4b5dfbecf8d042269aa90380b5b9c3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: 'd18c2e81b7b26dddd44b354cba56409fd7795e5582122409ef25cdd7a01d9b98', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9614, hash: '06a171a024b6ff630eda67b12f61e7b5a5865caf54b3f95f2111e46105a6c152', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2D427E5H.css': {size: 323, hash: 'zL4J9GZz4SI', text: () => import('./assets-chunks/styles-2D427E5H_css.mjs').then(m => m.default)}
  },
};
