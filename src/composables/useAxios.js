import axios from "axios";
import { ref } from "vue";
import useLocalStorage from "./local-storage";
import useBaseUrl from "./getBaseUrl";

const { baseUrl } = useBaseUrl();
const { getDataFromLocalStorage, removeLocalStorage } = useLocalStorage();

export function useAxios(
  { url, method = "POST", payload = [], callback, final, is_file },
  requiresAuth = true
) {
  const data = ref(null);
  const error = ref(null);
  let token = null;

  if (requiresAuth) {
    if (getDataFromLocalStorage("token")) {
      token = getDataFromLocalStorage("token");

      if (is_file) {
        axios.interceptors.request.use(
          (config) => {
            config.headers["Content-Type"] = "multipart/form-data";

            return config;
          },

          (error) => {
            return Promise.reject(error);
          }
        );
      }
    }
  }

  axios
    .request({
      url: baseUrl + url,
      method,
      data: {
        ...payload,
        token
      }
    })
    .then((res) => {
      if ((res.data.message === "token is required" || res.data.message === "token not valid") && res.data.status === "error") {
        removeLocalStorage();
        router.push({ name: "login" });
      }

      if (typeof callback == "function") {
        callback(res.data);
      }
    })
    .catch((err) => {
      console.log(err);
      if (err.response) {
        if ((err.response.status === 401) || (err.response.statusText === "Unauthorized") || (err.response.data.message === "Unauthenticated.")) {
          removeLocalStorage();
          location.reload();
        }
      }

      error.value = err;
      // TODO handle all unauthenticated requests and invalidate the token stored in localStorage
    })
    .finally(() => {
      if (typeof final == "function") {
        final();
      }
    });

  return { data, error };
}
