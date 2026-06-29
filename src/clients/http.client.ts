import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  isAxiosError,
} from 'axios';
import { z } from 'zod';
import type { Config } from '../config/config.js';
import {
  RemnawaveApiError,
  type RemnawaveApiErrorBody,
  RemnawaveValidationError,
} from './errors';

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
        throw new RemnawaveValidationError(error);
      }

      if (isAxiosError(error)) {
        const data = error.response?.data as RemnawaveApiErrorBody | undefined;

        if (error.response) {
          throw new RemnawaveApiError(`API Error: ${JSON.stringify(data)}`, {
            status: error.response.status,
            errorCode:
              data && typeof data === 'object' ? data.errorCode : undefined,
            data,
            cause: error,
          });
        }

        throw new RemnawaveApiError(`Network Error: ${error.message}`, {
          cause: error,
        });
      }

      if (error instanceof Error) {
        throw new RemnawaveApiError(`API Error: ${error.message}`, {
          cause: error,
        });
      }

      throw new RemnawaveApiError(`API Error: ${String(error)}`);
    }
  }
}
