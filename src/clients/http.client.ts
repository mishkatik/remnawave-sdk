import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  isAxiosError,
} from 'axios';
import type { Config } from '../config/config.js';
import type { ApiResponse } from '../interfaces/api-response.interface.ts';

export class HttpClient {
  public readonly axios: AxiosInstance;

  constructor(config: Config) {
    this.axios = axios.create({
      baseURL: config.panelUrl,
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        'x-forwarded-for': '127.0.0.1',
        'x-forwarded-proto': 'https',
      },
      timeout: 10_000,
    });

    if (config.caddyAuthToken) {
      this.axios.defaults.headers.common['X-Api-Key'] = config.caddyAuthToken;
    }
  }

  async callApi<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.axios.request<ApiResponse<T>>(config);
      return response.data.response;
    } catch (error) {
      if (isAxiosError(error)) {
        const message = error.response?.data
          ? `API Error: ${JSON.stringify(error.response.data)}`
          : `Network Error: ${error.message}`;

        throw new Error(message);
      }

      if (error instanceof Error) {
        throw new Error(`API Error: ${error.message}`);
      }

      throw new Error(`API Error: ${String(error)}`);
    }
  }
}
