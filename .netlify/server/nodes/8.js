import * as server from '../entries/pages/pin/_slug_/_page.server.js';

export const index = 8;
export const component = async () => (await import('../entries/pages/pin/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/pin/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/8.5e79bcf2.js","_app/immutable/chunks/index.147df613.js","_app/immutable/chunks/camperpins-service.5c14c325.js","_app/immutable/chunks/stores.1f488022.js","_app/immutable/chunks/index.88bdc188.js","_app/immutable/chunks/paths.9ae8cf3f.js","_app/immutable/chunks/index.b011b30b.js","_app/immutable/chunks/MainNavigator.38550f66.js","_app/immutable/chunks/TitleBar.64d8cee7.js","_app/immutable/chunks/leaflet-src.133e4506.js","_app/immutable/chunks/data-mod.f6d667d5.js"];
export const stylesheets = [];
export const fonts = [];
