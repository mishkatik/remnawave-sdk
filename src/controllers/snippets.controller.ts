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
    return this.httpClient.callApi(
      {
        method: GetSnippetsCommand.endpointDetails.REQUEST_METHOD,
        url: GetSnippetsCommand.url,
      },
      GetSnippetsCommand.ResponseSchema,
    );
  }

  public async create(
    data: CreateSnippetCommand.Request,
  ): Promise<CreateSnippetCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: CreateSnippetCommand.endpointDetails.REQUEST_METHOD,
        url: CreateSnippetCommand.url,
        data,
      },
      CreateSnippetCommand.ResponseSchema,
    );
  }

  public async update(
    data: UpdateSnippetCommand.Request,
  ): Promise<UpdateSnippetCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: UpdateSnippetCommand.endpointDetails.REQUEST_METHOD,
        url: UpdateSnippetCommand.url,
        data,
      },
      UpdateSnippetCommand.ResponseSchema,
    );
  }

  public async delete(
    data: DeleteSnippetCommand.Request,
  ): Promise<DeleteSnippetCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: DeleteSnippetCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteSnippetCommand.url,
        data,
      },
      DeleteSnippetCommand.ResponseSchema,
    );
  }
}
