import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ExamplePage } from '../pages/ExamplePage';

Given('I navigate to the example page', async function () {
  const page = new ExamplePage(this.page);
  await page.goto();
});

Then('I should see the page title', async function () {
  const page = new ExamplePage(this.page);
  const title = await page.title();
  expect(title).toContain('Example');
});
