const { Builder, By, Capabilities } = require("selenium-webdriver");

describe("BStack demo test", () => {
  let driver;

  beforeAll(() => {
    driver = new Builder()
      .usingServer(`http://localhost:4444/wd/hub`)
      .withCapabilities(Capabilities.chrome())
      .build();
  });
  
  afterAll(async () => {
    await driver.quit();
  })

  test("local test", async () => {
    await driver.get("http://127.0.0.1:5500/");

    expect(await driver.getTitle()).toContain('BrowserStack Local');
  }, 100000);
});
