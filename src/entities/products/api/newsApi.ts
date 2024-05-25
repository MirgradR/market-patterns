import { axiosConfigBuilder } from "@/shared/utils/configs/axiosConfigBuilder";

const API_BASE_URL = "https://fakestoreapi.com";

const axiosInstance = axiosConfigBuilder()
  .setBaseURL(API_BASE_URL)
  .setTimeout(10000)
  .setHeaders({ "Content-Type": "application/json" })
  .build();

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
