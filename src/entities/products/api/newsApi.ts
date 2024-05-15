import axios from "axios";

const API_BASE_URL = "https://fakestoreapi.com";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

const handleApiError = (error: unknown) => {
  console.error("API call failed. ", error);
  throw error;
};

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
