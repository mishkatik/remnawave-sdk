import {
  GetNodeMetadataCommand,
  GetUserMetadataCommand,
  UpsertNodeMetadataCommand,
  UpsertUserMetadataCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class MetadataController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getUserMetadata(
    uuid: string,
  ): Promise<GetUserMetadataCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetUserMetadataCommand.endpointDetails.REQUEST_METHOD,
        url: GetUserMetadataCommand.url(uuid),
      },
      GetUserMetadataCommand.ResponseSchema,
    );
  }

  public async updateOrCreateUserMetadata(
    uuid: string,
    data: UpsertUserMetadataCommand.RequestBody,
  ): Promise<UpsertUserMetadataCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: UpsertUserMetadataCommand.endpointDetails.REQUEST_METHOD,
        url: UpsertUserMetadataCommand.url(uuid),
        data,
      },
      UpsertUserMetadataCommand.ResponseSchema,
    );
  }

  public async getNodeMetadata(
    uuid: string,
  ): Promise<GetNodeMetadataCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetNodeMetadataCommand.endpointDetails.REQUEST_METHOD,
        url: GetNodeMetadataCommand.url(uuid),
      },
      GetNodeMetadataCommand.ResponseSchema,
    );
  }

  public async updateOrCreateNodeMetadata(
    uuid: string,
    data: UpsertNodeMetadataCommand.RequestBody,
  ): Promise<UpsertNodeMetadataCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: UpsertNodeMetadataCommand.endpointDetails.REQUEST_METHOD,
        url: UpsertNodeMetadataCommand.url(uuid),
        data,
      },
      UpsertNodeMetadataCommand.ResponseSchema,
    );
  }
}
