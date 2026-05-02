import axios from "axios";

export const api = axios.create({
    baseURL: "https://tkhan-backend.onrender.com",
});