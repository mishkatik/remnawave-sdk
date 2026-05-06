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
    return this.httpClient.callApi<FetchIpsCommand.Response['response']>({
      method: FetchIpsCommand.endpointDetails.REQUEST_METHOD,
      url: FetchIpsCommand.url(userUuid),
    });
  }

  public async getIpListResultByJobId(
    jobId: string,
  ): Promise<FetchIpsResultCommand.Response['response']> {
    return this.httpClient.callApi<FetchIpsResultCommand.Response['response']>({
      method: FetchIpsResultCommand.endpointDetails.REQUEST_METHOD,
      url: FetchIpsResultCommand.url(jobId),
    });
  }

  public async dropConnectionsForUsersOrIps(
    data: DropConnectionsCommand.Request,
  ): Promise<DropConnectionsCommand.Response['response']> {
    return this.httpClient.callApi<DropConnectionsCommand.Response['response']>(
      {
        method: DropConnectionsCommand.endpointDetails.REQUEST_METHOD,
        url: DropConnectionsCommand.url,
        data,
      },
    );
  }

  public async getUserIpsListForNode(
    nodeUuid: string,
  ): Promise<FetchUsersIpsCommand.Response['response']> {
    return this.httpClient.callApi<FetchIpsCommand.Response['response']>({
      method: FetchUsersIpsCommand.endpointDetails.REQUEST_METHOD,
      url: FetchUsersIpsCommand.url(nodeUuid),
    });
  }

  public async getUserIpsListForNodeResultByJobId(
    jobId: string,
  ): Promise<FetchUsersIpsResultCommand.Response['response']> {
    return this.httpClient.callApi<
      FetchUsersIpsResultCommand.Response['response']
    >({
      method: FetchUsersIpsResultCommand.endpointDetails.REQUEST_METHOD,
      url: FetchUsersIpsResultCommand.url(jobId),
    });
  }
}
