import { expect, test as setup } from '@playwright/test';
import { Header } from '../logic/ui/header';
import userCredntials from "../config/user-credentials.json"
import { ApiCalls } from '../logic/api/api-requtsets';
import userCredential from "../config/user-credentials.json"
import { setUserCredential } from '../logic/api/request-body/login';




setup('authenticate', async ({ browser, request }) => {
    const apiCall = new ApiCalls()
    const data = setUserCredential(userCredential.username,userCredential.password)
    await apiCall.makeLogin(data,request);
    const state = await request.storageState();
    const context = await browser.newContext({ storageState: state });
    const page = await context.newPage();
    await page.goto("https://www.terminalx.com");
    await page.context().storageState({ path: userCredntials.authFile });
});

