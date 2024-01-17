import { APIRequestContext, request } from "playwright";

const makeLoginViaApi = async (url: string, data: any, availableRequest?: APIRequestContext) => {
    const myRequest = availableRequest || (await request.newContext());
    const result = await myRequest.post(url, data);
}

const apiPostMethod = async (url: string, data: any) => {
    const myRequest = (await request.newContext());
    const result = await myRequest.post(url, data);
}

export { makeLoginViaApi, apiPostMethod }