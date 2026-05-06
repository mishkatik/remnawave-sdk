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
    return this.httpClient.callApi<GetUserMetadataCommand.Response['response']>(
      {
        method: GetUserMetadataCommand.endpointDetails.REQUEST_METHOD,
        url: GetUserMetadataCommand.url(uuid),
      },
    );
  }

  public async updateOrCreateUserMetadata(
    uuid: string,
    data: UpsertUserMetadataCommand.RequestBody,
  ): Promise<UpsertUserMetadataCommand.Response['response']> {
    return this.httpClient.callApi<
      UpsertUserMetadataCommand.Response['response']
    >({
      method: UpsertUserMetadataCommand.endpointDetails.REQUEST_METHOD,
      url: UpsertUserMetadataCommand.url(uuid),
      data,
    });
  }

  public async getNodeMetadata(
    uuid: string,
  ): Promise<GetNodeMetadataCommand.Response['response']> {
    return this.httpClient.callApi<GetNodeMetadataCommand.Response['response']>(
      {
        method: GetNodeMetadataCommand.endpointDetails.REQUEST_METHOD,
        url: GetNodeMetadataCommand.url(uuid),
      },
    );
  }

  public async updateOrCreateNodeMetadata(
    uuid: string,
    data: UpsertNodeMetadataCommand.RequestBody,
  ): Promise<UpsertNodeMetadataCommand.Response['response']> {
    return this.httpClient.callApi<
      UpsertNodeMetadataCommand.Response['response']
    >({
      method: UpsertNodeMetadataCommand.endpointDetails.REQUEST_METHOD,
      url: UpsertNodeMetadataCommand.url(uuid),
      data,
    });
  }
}
