import { test, expect } from './fixtures.js';

import App from '../src/App.svelte';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(App);
  await expect(component).toContainText('Vite + Svelte');
});