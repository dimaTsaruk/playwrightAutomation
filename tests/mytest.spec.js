const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false });

  const context = await browser.newContext({
    geolocation: { latitude: 37.7749, longitude: -122.4194 }, // San Francisco, USA
    permissions: ['geolocation'],
    locale: 'en-US',
  });

  const page = await context.newPage();

  // your further test steps here...

  // Close
  await browser.close();
})();

