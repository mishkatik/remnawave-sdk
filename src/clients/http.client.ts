import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  isAxiosError,
} from 'axios';
import { z } from 'zod';
import type { Config } from '../config/config.js';

export class HttpClient {
  public readonly axios: AxiosInstance;

  constructor(config: Config) {
    this.axios = axios.create({
      baseURL: config.panelUrl,
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        'User-Agent': 'Remnawave SDK Client',
      },
      timeout: 10_000,
    });

    if (config.caddyAuthToken) {
      this.axios.defaults.headers.common['X-Api-Key'] = config.caddyAuthToken;
    }

    if (
      config.cloudflareZeroTrustClientSecret &&
      config.cloudflareZeroTrustClientId
    ) {
      this.axios.defaults.headers.common['CF-Access-Client-Id'] =
        config.cloudflareZeroTrustClientId;
      this.axios.defaults.headers.common['CF-Access-Client-Secret'] =
        config.cloudflareZeroTrustClientSecret;
    }

    if (config.eGamesCookie) {
      // biome-ignore lint/complexity/useLiteralKeys: <stfu biome>
      this.axios.defaults.headers.common['Cookie'] = config.eGamesCookie;
    }

    if (config.panelUrl.startsWith('http://')) {
      this.axios.defaults.headers.common['x-forwarded-for'] = '127.0.0.1';
      this.axios.defaults.headers.common['x-forwarded-proto'] = 'https';
    }
  }

  /** Executes an API request, validates the response envelope with the provided Zod schema, and returns the inner `response` field. */
  async callApi<TSchema extends z.ZodObject<{ response: z.ZodTypeAny }>>(
    config: AxiosRequestConfig,
    schema: TSchema,
  ): Promise<z.infer<TSchema>['response']> {
    try {
      const response = await this.axios.request(config);
      const parsed = schema.parse(response.data);
      return parsed.response;
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(`Validation Error: ${error.message}`);
      }

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
