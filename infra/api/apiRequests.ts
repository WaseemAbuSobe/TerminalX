import { APIRequestContext, request } from "playwright";

const makeLoginViaApi = async <T>(url: string, data?: any,availableRequest?: APIRequestContext) => {
    const myRequest = availableRequest || (await request.newContext());
    await myRequest.post(url,data);
}
export { makeLoginViaApi }