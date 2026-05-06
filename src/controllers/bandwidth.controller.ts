import {
  GetLegacyStatsNodeUserUsageCommand,
  GetLegacyStatsUserUsageCommand,
  GetStatsNodesUsageCommand,
  GetStatsNodeUsersUsageCommand,
  GetStatsUserUsageCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class BandwidthController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getNodeUserUsageByRangeAndNodeUuid(
    nodeUuid: string,
    params?: GetLegacyStatsNodeUserUsageCommand.RequestQuery,
  ): Promise<GetLegacyStatsNodeUserUsageCommand.Response['response']> {
    return this.httpClient.callApi<
      GetLegacyStatsNodeUserUsageCommand.Response['response']
    >({
      method: GetLegacyStatsNodeUserUsageCommand.endpointDetails.REQUEST_METHOD,
      url: GetLegacyStatsNodeUserUsageCommand.url(nodeUuid),
      params,
    });
  }

  public async getNodeUserUsageByRange(
    nodeUuid: string,
    params?: GetStatsNodeUsersUsageCommand.RequestQuery,
  ): Promise<GetStatsNodeUsersUsageCommand.Response['response']> {
    return this.httpClient.callApi<
      GetStatsNodeUsersUsageCommand.Response['response']
    >({
      method: GetStatsNodeUsersUsageCommand.endpointDetails.REQUEST_METHOD,
      url: GetStatsNodeUsersUsageCommand.url(nodeUuid),
      params,
    });
  }

  public async getLegacyUserUsageByRange(
    userUuid: string,
    params?: GetLegacyStatsUserUsageCommand.RequestQuery,
  ): Promise<GetLegacyStatsUserUsageCommand.Response['response']> {
    return this.httpClient.callApi<
      GetLegacyStatsUserUsageCommand.Response['response']
    >({
      method: GetLegacyStatsUserUsageCommand.endpointDetails.REQUEST_METHOD,
      url: GetLegacyStatsUserUsageCommand.url(userUuid),
      params,
    });
  }

  public async getUserUsageByRange(
    userUuid: string,
    params?: GetStatsUserUsageCommand.RequestQuery,
  ): Promise<GetStatsUserUsageCommand.Response['response']> {
    return this.httpClient.callApi<
      GetStatsUserUsageCommand.Response['response']
    >({
      method: GetStatsUserUsageCommand.endpointDetails.REQUEST_METHOD,
      url: GetStatsUserUsageCommand.url(userUuid),
      params,
    });
  }

  public async getNodesUsageByRange(
    params?: GetStatsNodesUsageCommand.RequestQuery,
  ): Promise<GetStatsNodesUsageCommand.Response['response']> {
    return this.httpClient.callApi<
      GetStatsNodesUsageCommand.Response['response']
    >({
      method: GetStatsNodesUsageCommand.endpointDetails.REQUEST_METHOD,
      url: GetStatsNodesUsageCommand.url,
      params,
    });
  }
}
