import { Before, After } from '@cucumber/cucumber';

Before({ timeout: 30000 }, async function () {
  await this.init();
});

After(async function () {
  await this.cleanup();
});
