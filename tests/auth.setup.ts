import { expect, test as setup } from '@playwright/test';
import { Header } from '../logic/ui/header';
import userCredntials from "../config/user-credentials.json"
import { makeLogin } from '../logic/api/api-requtsets';

  
setup('authenticate', async ({ browser, request }) => {
    await makeLogin(request);
    const state = await request.storageState();
    const context = await browser.newContext({ storageState: state });
    const page = await context.newPage();
    await page.goto("https://www.terminalx.com");
    const header = new Header(page)
    expect(await header.getLoggedinUserName()).toBe(userCredntials.name)
    await page.context().storageState({ path: userCredntials.authFile });
});
  
