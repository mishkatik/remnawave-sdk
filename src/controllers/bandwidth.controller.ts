import {
  GetLegacyStatsNodeUserUsageCommand,
  GetLegacyStatsUserUsageCommand,
  GetStatsNodesUsageCommand,
  GetStatsNodesUsersUsageCommand,
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
    return this.httpClient.callApi(
      {
        method:
          GetLegacyStatsNodeUserUsageCommand.endpointDetails.REQUEST_METHOD,
        url: GetLegacyStatsNodeUserUsageCommand.url(nodeUuid),
        params,
      },
      GetLegacyStatsNodeUserUsageCommand.ResponseSchema,
    );
  }

  public async getNodeUserUsageByRange(
    nodeUuid: string,
    params?: GetStatsNodeUsersUsageCommand.RequestQuery,
  ): Promise<GetStatsNodeUsersUsageCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetStatsNodeUsersUsageCommand.endpointDetails.REQUEST_METHOD,
        url: GetStatsNodeUsersUsageCommand.url(nodeUuid),
        params,
      },
      GetStatsNodeUsersUsageCommand.ResponseSchema,
    );
  }

  public async getLegacyUserUsageByRange(
    userUuid: string,
    params?: GetLegacyStatsUserUsageCommand.RequestQuery,
  ): Promise<GetLegacyStatsUserUsageCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetLegacyStatsUserUsageCommand.endpointDetails.REQUEST_METHOD,
        url: GetLegacyStatsUserUsageCommand.url(userUuid),
        params,
      },
      GetLegacyStatsUserUsageCommand.ResponseSchema,
    );
  }

  public async getUserUsageByRange(
    userUuid: string,
    params?: GetStatsUserUsageCommand.RequestQuery,
  ): Promise<GetStatsUserUsageCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetStatsUserUsageCommand.endpointDetails.REQUEST_METHOD,
        url: GetStatsUserUsageCommand.url(userUuid),
        params,
      },
      GetStatsUserUsageCommand.ResponseSchema,
    );
  }

  public async getNodesUsageByRange(
    params?: GetStatsNodesUsageCommand.RequestQuery,
  ): Promise<GetStatsNodesUsageCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetStatsNodesUsageCommand.endpointDetails.REQUEST_METHOD,
        url: GetStatsNodesUsageCommand.url,
        params,
      },
      GetStatsNodesUsageCommand.ResponseSchema,
    );
  }

  public async getNodesUsersUsage(
    data: GetStatsNodesUsersUsageCommand.Request,
    params: GetStatsNodesUsersUsageCommand.RequestQuery,
  ): Promise<GetStatsNodesUsersUsageCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetStatsNodesUsersUsageCommand.endpointDetails.REQUEST_METHOD,
        url: GetStatsNodesUsersUsageCommand.url,
        data,
        params,
      },
      GetStatsNodesUsersUsageCommand.ResponseSchema,
    );
  }
}
