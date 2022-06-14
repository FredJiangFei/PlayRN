import { create } from 'apisauce'
import {store as storeCache, get as getCache} from '../utility/cache';

const apiClient = create({
    // baseURL: 'https://fred-jiang-test-default-rtdb.firebaseio.com/'
    baseURL: 'https://reqres.in/api/'
    // baseURL: 'http://localhost:3000/'
});

apiClient.addAsyncRequestTransform(async request => {
    const authToken = await authStorage.getToken();
    if (!authToken) return;
    request.headers['x-auth-token'] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
    const res = await get(url, params, axiosConfig);
    if (res.ok) {
      storeCache(url, res.data);
      return res;
    }
  
    const data = await getCache(url);
    return data ? {ok: true, data} : res;
};

export default apiClient