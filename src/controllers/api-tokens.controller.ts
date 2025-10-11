import {
  CreateApiTokenCommand,
  DeleteApiTokenCommand,
  FindAllApiTokensCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class ApiTokensController {
  constructor(private readonly httpClient: HttpClient) {}

  public async create(
    data: CreateApiTokenCommand.Request,
  ): Promise<CreateApiTokenCommand.Response['response']> {
    return this.httpClient.callApi<CreateApiTokenCommand.Response['response']>({
      method: CreateApiTokenCommand.endpointDetails.REQUEST_METHOD,
      url: CreateApiTokenCommand.url,
      data,
    });
  }

  public async delete(
    data: DeleteApiTokenCommand.Request,
  ): Promise<DeleteApiTokenCommand.Response['response']> {
    return this.httpClient.callApi<DeleteApiTokenCommand.Response['response']>({
      method: DeleteApiTokenCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteApiTokenCommand.url(data.uuid),
    });
  }

  public async findAll(): Promise<
    FindAllApiTokensCommand.Response['response']
  > {
    return this.httpClient.callApi<
      FindAllApiTokensCommand.Response['response']
    >({
      method: FindAllApiTokensCommand.endpointDetails.REQUEST_METHOD,
      url: FindAllApiTokensCommand.url,
    });
  }
}
