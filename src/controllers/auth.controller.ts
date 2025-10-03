import {
  GetStatusCommand,
  LoginCommand,
  RegisterCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class AuthController {
  constructor(private readonly httpClient: HttpClient) {}

  public async login(
    data: LoginCommand.Request,
  ): Promise<LoginCommand.Response['response']> {
    return this.httpClient.callApi<LoginCommand.Response['response']>({
      method: LoginCommand.endpointDetails.REQUEST_METHOD,
      url: LoginCommand.url,
      data,
    });
  }

  public async register(
    data: RegisterCommand.Request,
  ): Promise<RegisterCommand.Response['response']> {
    return this.httpClient.callApi<RegisterCommand.Response['response']>({
      method: RegisterCommand.endpointDetails.REQUEST_METHOD,
      url: RegisterCommand.url,
      data,
    });
  }

  public async getStatus(): Promise<GetStatusCommand.Response['response']> {
    return this.httpClient.callApi<GetStatusCommand.Response['response']>({
      method: GetStatusCommand.endpointDetails.REQUEST_METHOD,
      url: GetStatusCommand.url,
    });
  }
}
