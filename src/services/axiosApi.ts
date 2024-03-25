import axios, { AxiosInstance } from "axios";
import { ENV, LocalStorageKey } from "../constants";
import { useTranslation } from "react-i18next";

const { API_URL } = ENV;
const tokenKey = LocalStorageKey.Token;

export const api: AxiosInstance = axios.create({ baseURL: API_URL });

api.interceptors.response.use(
  (config) => config,
  (error) => {
    const { response } = error;

    if (response?.status === 500) {
      const { t } = useTranslation();
      let errorMessage = t("something-wrong");

      if (response.data?.message) {
        errorMessage = t(response.data.message);
      }
      // show error Message
    }
    return Promise.reject(error);
  }
);

export const authApi: AxiosInstance = axios.create({ baseURL: API_URL });

authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(tokenKey);

    if (token) {
      config.headers["Authorization"] = token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

authApi.interceptors.response.use(
  (config) => config,
  (error) => {
    const { response } = error;

    if (response?.status === 401) {
      // clear token;
      localStorage.removeItem(tokenKey);
      // redirect login;
      window.location.href = "/login";
    }

    if (response.status === 500) {
      const { t } = useTranslation();
      let errorMessage = t("something-wrong");
      if (response.data?.message) {
        errorMessage = t(response.data.message);
      }
      // show error message
    }

    return Promise.reject(error);
  }
);
