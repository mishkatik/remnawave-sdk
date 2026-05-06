import {
  DropConnectionsCommand,
  FetchIpsCommand,
  FetchIpsResultCommand,
  FetchUsersIpsCommand,
  FetchUsersIpsResultCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class IPManagementController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getIpListForUser(
    userUuid: string,
  ): Promise<FetchIpsCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: FetchIpsCommand.endpointDetails.REQUEST_METHOD,
        url: FetchIpsCommand.url(userUuid),
      },
      FetchIpsCommand.ResponseSchema,
    );
  }

  public async getIpListResultByJobId(
    jobId: string,
  ): Promise<FetchIpsResultCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: FetchIpsResultCommand.endpointDetails.REQUEST_METHOD,
        url: FetchIpsResultCommand.url(jobId),
      },
      FetchIpsResultCommand.ResponseSchema,
    );
  }

  public async dropConnectionsForUsersOrIps(
    data: DropConnectionsCommand.Request,
  ): Promise<DropConnectionsCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: DropConnectionsCommand.endpointDetails.REQUEST_METHOD,
        url: DropConnectionsCommand.url,
        data,
      },
      DropConnectionsCommand.ResponseSchema,
    );
  }

  public async getUserIpsListForNode(
    nodeUuid: string,
  ): Promise<FetchUsersIpsCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: FetchUsersIpsCommand.endpointDetails.REQUEST_METHOD,
        url: FetchUsersIpsCommand.url(nodeUuid),
      },
      FetchUsersIpsCommand.ResponseSchema,
    );
  }

  public async getUserIpsListForNodeResultByJobId(
    jobId: string,
  ): Promise<FetchUsersIpsResultCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: FetchUsersIpsResultCommand.endpointDetails.REQUEST_METHOD,
        url: FetchUsersIpsResultCommand.url(jobId),
      },
      FetchUsersIpsResultCommand.ResponseSchema,
    );
  }
}
