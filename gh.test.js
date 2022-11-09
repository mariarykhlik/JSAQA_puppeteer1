let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe('Github team page tests', () => {
  beforeEach(async () => {
    await page.goto('https://github.com/team');
  });

  test('The h1 header content', async () => {
    const firstLink = await page.$('header div div a');
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Let’s build from here · GitHub');
  }, 30000);

  test('The first link attribute', async () => {
    const actual = await page.$eval('a', link => link.getAttribute('href'));
    expect(actual).toEqual('#start-of-content');
  },);

  test('The page contains Get started with Team button', async () => {
    const btnSelector = '.btn-large-mktg.btn-mktg';
    await page.waitForSelector(btnSelector, {visible: true});
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain('Get started with Team');
  }, 30000);
});

describe('Github enterprise page tests', () => {
  jest.setTimeout(30000);

  beforeEach(async () => {
    await page.goto('https://github.com/enterprise');
  });

  test('The h1 header content', async () => {
    const firstLink = await page.$('header div div a');
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Let’s build from here · GitHub');
  });

  test('The first link attribute', async () => {
    const actual = await page.$eval('a', link => link.getAttribute('href'));
    expect(actual).toEqual('#start-of-content');
  });

  test("The page contains Contact sales button", async () => {
    const btnSelector = '.btn-large-mktg.btn-mktg';
    await page.waitForSelector(btnSelector, {visible: true});
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain('Contact sales');
  });
});

describe('Netology page tests', () => {
  beforeEach(async () => {
    await page.goto('https://netology.ru', {waitUntil: 'domcontentloaded'});
  });

  test('The h1 header content', async () => {
    const firstLink = await page.$('header div div a');
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('Нетология — обучение современным профессиям онлайн');
  });

  test('The first link attribute', async () => {
    const actual = await page.$eval('a', link => link.getAttribute('href'));
    expect(actual).toEqual('https://netology.ru/marketing');
  });

  test("The page contains navigation button", async () => {
    await page.setViewport({ width: 1024, height: 768});
    const btnSelector = '.src-reallyShared-components-Header--navigatorButton--vmR8H';
    await page.waitForSelector(btnSelector, {visible: true});
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain('Каталог курсов');
  });
});