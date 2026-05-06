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
    return this.httpClient.callApi(
      {
        method: LoginCommand.endpointDetails.REQUEST_METHOD,
        url: LoginCommand.url,
        data,
      },
      LoginCommand.ResponseSchema,
    );
  }

  public async register(
    data: RegisterCommand.Request,
  ): Promise<RegisterCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: RegisterCommand.endpointDetails.REQUEST_METHOD,
        url: RegisterCommand.url,
        data,
      },
      RegisterCommand.ResponseSchema,
    );
  }

  public async getStatus(): Promise<GetStatusCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetStatusCommand.endpointDetails.REQUEST_METHOD,
        url: GetStatusCommand.url,
      },
      GetStatusCommand.ResponseSchema,
    );
  }
}
