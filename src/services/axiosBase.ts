import axios, { Axios } from "axios";
import { ENV } from "../constants";

const { API_URL } = ENV;

export const axiosBase: Axios = axios.create({ baseURL: API_URL });
