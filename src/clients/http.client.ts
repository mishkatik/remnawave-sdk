import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  isAxiosError,
} from 'axios';
import type { ConfigCommand } from '../commands/config.command.ts';
import type { ApiResponse } from '../interfaces/api-response.interface.ts';

export class HttpClient {
  public readonly axios: AxiosInstance;

  constructor(config: ConfigCommand.Config) {
    this.axios = axios.create({
      baseURL: config.baseUrl,
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        'x-forwarded-for': 'remnawave-sdk',
        'x-forwarded-proto': 'https',
      },
      timeout: 10_000,
    });
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
