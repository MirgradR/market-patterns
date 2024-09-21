import { axiosConfigBuilder } from "@/shared/utils/configs/axiosConfigBuilder";
import { adaptProductData } from "../utils/productAdapter";
import { APIProduct, Product } from "../model/types";

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

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get<APIProduct[]>("/products");
    return response.data.map(adaptProductData);
  } catch (error) {
    handleApiError(error);
    return [];
  }
};
