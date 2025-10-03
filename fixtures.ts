// tests/fixtures.ts
import { test as base, expect } from '@playwright/test';
import { TestPageMain } from './pages/testPageMain';
import { TestPageTwo } from './pages/testPageTwo';

// Define custom fixture types
type MyFixtures = {
  testPageMain: TestPageMain;
  testPageTwo: TestPageTwo;
};

// Extend the base test
export const test = base.extend<MyFixtures>({
  testPageMain: async ({ page }, use) => {
    const testPageMain = new TestPageMain(page);
    await use(testPageMain);
  },

  testPageTwo: async ({ page }, use) => {
    const testPageTwo = new TestPageTwo(page);
    await use(testPageTwo);
  },
});

export { expect };
