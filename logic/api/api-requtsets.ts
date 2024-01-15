import { makeLoginViaApi } from "../../infra/api/apiRequests"
import apiUrls from "../../config/api-urls.json"
import userCredential from "../../config/user-credentials.json"
import { requestOptionsUserLogin } from "./request-body/login-api-request"
import { APIRequestContext } from "playwright"

export const makeLogin = async (request : APIRequestContext) => {
    return await makeLoginViaApi(apiUrls.loginApiUrl,requestOptionsUserLogin(userCredential.username,userCredential.password),request)
}
