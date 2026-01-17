import {
  CreateNodeCommand,
  DeleteNodeCommand,
  DisableNodeCommand,
  EnableNodeCommand,
  GetAllNodesCommand,
  GetLegacyStatsNodeUserUsageCommand,
  GetOneNodeCommand,
  GetStatsNodesRealtimeUsageCommand,
  GetStatsNodesUsageCommand,
  GetStatsNodeUsersUsageCommand,
  ReorderNodeCommand,
  ResetNodeTrafficCommand,
  RestartAllNodesCommand,
  RestartNodeCommand,
  UpdateNodeCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class NodesController {
  constructor(private readonly httpClient: HttpClient) {}

  public async create(
    data: CreateNodeCommand.Request,
  ): Promise<CreateNodeCommand.Response['response']> {
    return this.httpClient.callApi<CreateNodeCommand.Response['response']>({
      method: CreateNodeCommand.endpointDetails.REQUEST_METHOD,
      url: CreateNodeCommand.url,
      data,
    });
  }

  public async update(
    data: UpdateNodeCommand.Request,
  ): Promise<UpdateNodeCommand.Response['response']> {
    return this.httpClient.callApi<UpdateNodeCommand.Response['response']>({
      method: UpdateNodeCommand.endpointDetails.REQUEST_METHOD,
      url: UpdateNodeCommand.url,
      data,
    });
  }

  public async delete(
    uuid: string,
  ): Promise<DeleteNodeCommand.Response['response']> {
    return this.httpClient.callApi<DeleteNodeCommand.Response['response']>({
      method: DeleteNodeCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteNodeCommand.url(uuid),
    });
  }

  public async getAll(): Promise<GetAllNodesCommand.Response['response']> {
    return this.httpClient.callApi<GetAllNodesCommand.Response['response']>({
      method: GetAllNodesCommand.endpointDetails.REQUEST_METHOD,
      url: GetAllNodesCommand.url,
    });
  }

  public async getOne(
    uuid: string,
  ): Promise<GetOneNodeCommand.Response['response']> {
    return this.httpClient.callApi<GetOneNodeCommand.Response['response']>({
      method: GetOneNodeCommand.endpointDetails.REQUEST_METHOD,
      url: GetOneNodeCommand.url(uuid),
    });
  }

  public async enable(
    uuid: string,
  ): Promise<EnableNodeCommand.Response['response']> {
    return this.httpClient.callApi<EnableNodeCommand.Response['response']>({
      method: EnableNodeCommand.endpointDetails.REQUEST_METHOD,
      url: EnableNodeCommand.url(uuid),
    });
  }

  public async disable(
    uuid: string,
  ): Promise<DisableNodeCommand.Response['response']> {
    return this.httpClient.callApi<DisableNodeCommand.Response['response']>({
      method: DisableNodeCommand.endpointDetails.REQUEST_METHOD,
      url: DisableNodeCommand.url(uuid),
    });
  }

  public async restart(
    uuid: string,
  ): Promise<RestartNodeCommand.Response['response']> {
    return this.httpClient.callApi<RestartNodeCommand.Response['response']>({
      method: RestartNodeCommand.endpointDetails.REQUEST_METHOD,
      url: RestartNodeCommand.url(uuid),
    });
  }

  public async restartAll(): Promise<
    RestartAllNodesCommand.Response['response']
  > {
    return this.httpClient.callApi<RestartAllNodesCommand.Response['response']>(
      {
        method: RestartAllNodesCommand.endpointDetails.REQUEST_METHOD,
        url: RestartAllNodesCommand.url,
      },
    );
  }

  public async reorder(
    data: ReorderNodeCommand.Request,
  ): Promise<ReorderNodeCommand.Response['response']> {
    return this.httpClient.callApi<ReorderNodeCommand.Response['response']>({
      method: ReorderNodeCommand.endpointDetails.REQUEST_METHOD,
      url: ReorderNodeCommand.url,
      data,
    });
  }

  public async getRealtimeUsage(): Promise<
    GetStatsNodesRealtimeUsageCommand.Response['response']
  > {
    return this.httpClient.callApi<
      GetStatsNodesRealtimeUsageCommand.Response['response']
    >({
      method: GetStatsNodesRealtimeUsageCommand.endpointDetails.REQUEST_METHOD,
      url: GetStatsNodesRealtimeUsageCommand.url,
    });
  }

  public async getUsageByRange(
    data: GetStatsNodesUsageCommand.RequestQuery,
  ): Promise<GetStatsNodesUsageCommand.Response['response']> {
    return this.httpClient.callApi<
      GetStatsNodesUsageCommand.Response['response']
    >({
      method: GetStatsNodesUsageCommand.endpointDetails.REQUEST_METHOD,
      url: GetStatsNodesUsageCommand.url,
      params: data,
    });
  }

  public async getNodeUserUsageByRange(
    uuid: string,
    query: GetStatsNodeUsersUsageCommand.RequestQuery,
  ): Promise<GetStatsNodeUsersUsageCommand.Response['response']> {
    return this.httpClient.callApi<
      GetStatsNodeUsersUsageCommand.Response['response']
    >({
      method: GetStatsNodeUsersUsageCommand.endpointDetails.REQUEST_METHOD,
      url: GetStatsNodeUsersUsageCommand.url(uuid),
      params: query,
    });
  }

  public async getNodeUserUsageByRangeLegacy(
    uuid: string,
    query: GetLegacyStatsNodeUserUsageCommand.RequestQuery,
  ): Promise<GetLegacyStatsNodeUserUsageCommand.Response['response']> {
    return this.httpClient.callApi<
      GetLegacyStatsNodeUserUsageCommand.Response['response']
    >({
      method: GetLegacyStatsNodeUserUsageCommand.endpointDetails.REQUEST_METHOD,
      url: GetLegacyStatsNodeUserUsageCommand.url(uuid),
      params: query,
    });
  }

  public async resetTraffic(
    uuid: string,
  ): Promise<ResetNodeTrafficCommand.Response['response']> {
    return this.httpClient.callApi<
      ResetNodeTrafficCommand.Response['response']
    >({
      method: ResetNodeTrafficCommand.endpointDetails.REQUEST_METHOD,
      url: ResetNodeTrafficCommand.url(uuid),
    });
  }
}
