import { APIRequestContext, request } from "playwright";
import { ResponseWrapper } from "./response-wrapper";

const apiPostMethod = async <T>(url: string, data: any,availableRequest?: APIRequestContext): Promise<ResponseWrapper<T>> => {
    const myRequest = availableRequest || (await request.newContext());
    const result = await myRequest.post(url, data);
    const responseWrapper: ResponseWrapper<T> = {
        data: await result.json(),
        ok: result.ok(),
        status: result.status()
    };
    return responseWrapper;
}

export {apiPostMethod }