import { create } from "apisauce";
import cache from "../utility/cache";
<<<<<<< HEAD
import authStorage from "../auth/storage";
=======
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
import settings from "../config/settings";

const apiClient = create({
  baseURL: settings.apiUrl,
});

<<<<<<< HEAD
apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

=======
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
