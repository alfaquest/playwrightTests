// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [ ['html', { open: 'never'}], ['list']],
  use: {
    baseURL: 'http://localhost:3000',
    headless: true
  },
});
