import axios, { AxiosInstance } from "axios";

interface AxiosConfig {
  baseURL?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export const axiosConfigBuilder = (config: AxiosConfig = {}) => {
  const setBaseURL = (baseURL: string) =>
    axiosConfigBuilder({ ...config, baseURL });

  const setTimeout = (timeout: number) =>
    axiosConfigBuilder({ ...config, timeout });

  const setHeaders = (headers: Record<string, string>) =>
    axiosConfigBuilder({
      ...config,
      headers: { ...config.headers, ...headers },
    });

  const build = (): AxiosInstance => {
    return axios.create(config);
  };

  return {
    setBaseURL,
    setTimeout,
    setHeaders,
    build,
  };
};
