import {
  CreateSnippetCommand,
  DeleteSnippetCommand,
  GetSnippetsCommand,
  UpdateSnippetCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class SnippetsController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getAll(): Promise<GetSnippetsCommand.Response['response']> {
    return this.httpClient.callApi<GetSnippetsCommand.Response['response']>({
      method: GetSnippetsCommand.endpointDetails.REQUEST_METHOD,
      url: GetSnippetsCommand.url,
    });
  }

  public async create(
    data: CreateSnippetCommand.Request,
  ): Promise<CreateSnippetCommand.Response['response']> {
    return this.httpClient.callApi<CreateSnippetCommand.Response['response']>({
      method: CreateSnippetCommand.endpointDetails.REQUEST_METHOD,
      url: CreateSnippetCommand.url,
      data,
    });
  }

  public async update(
    data: UpdateSnippetCommand.Request,
  ): Promise<UpdateSnippetCommand.Response['response']> {
    return this.httpClient.callApi<UpdateSnippetCommand.Response['response']>({
      method: UpdateSnippetCommand.endpointDetails.REQUEST_METHOD,
      url: UpdateSnippetCommand.url,
      data,
    });
  }

  public async delete(
    data: DeleteSnippetCommand.Request,
  ): Promise<DeleteSnippetCommand.Response['response']> {
    return this.httpClient.callApi<DeleteSnippetCommand.Response['response']>({
      method: DeleteSnippetCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteSnippetCommand.url,
      data,
    });
  }
}
