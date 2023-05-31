import * as server from '../entries/pages/weather/_page.server.js';

export const index = 10;
export const component = async () => (await import('../entries/pages/weather/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/weather/+page.server.js";
export const imports = ["_app/immutable/nodes/10.8c0773c5.js","_app/immutable/chunks/index.147df613.js","_app/immutable/chunks/MainNavigator.38550f66.js","_app/immutable/chunks/TitleBar.64d8cee7.js","_app/immutable/chunks/stores.1f488022.js","_app/immutable/chunks/index.88bdc188.js","_app/immutable/chunks/base.2b9b707c.js"];
export const stylesheets = [];
export const fonts = [];
