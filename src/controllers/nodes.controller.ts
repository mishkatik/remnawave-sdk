import {
  CreateNodeCommand,
  DeleteNodeCommand,
  DisableNodeCommand,
  EnableNodeCommand,
  GetAllNodesCommand,
  GetNodesRealtimeUsageCommand,
  GetNodesUsageByRangeCommand,
  GetNodeUserUsageByRangeCommand,
  GetOneNodeCommand,
  ReorderNodeCommand,
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
    data: DeleteNodeCommand.Request,
  ): Promise<DeleteNodeCommand.Response['response']> {
    return this.httpClient.callApi<DeleteNodeCommand.Response['response']>({
      method: DeleteNodeCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteNodeCommand.url(data.uuid),
    });
  }

  public async getAll(): Promise<GetAllNodesCommand.Response['response']> {
    return this.httpClient.callApi<GetAllNodesCommand.Response['response']>({
      method: GetAllNodesCommand.endpointDetails.REQUEST_METHOD,
      url: GetAllNodesCommand.url,
    });
  }

  public async getOne(
    data: GetOneNodeCommand.Request,
  ): Promise<GetOneNodeCommand.Response['response']> {
    return this.httpClient.callApi<GetOneNodeCommand.Response['response']>({
      method: GetOneNodeCommand.endpointDetails.REQUEST_METHOD,
      url: GetOneNodeCommand.url(data.uuid),
    });
  }

  public async enable(
    data: EnableNodeCommand.Request,
  ): Promise<EnableNodeCommand.Response['response']> {
    return this.httpClient.callApi<EnableNodeCommand.Response['response']>({
      method: EnableNodeCommand.endpointDetails.REQUEST_METHOD,
      url: EnableNodeCommand.url(data.uuid),
    });
  }

  public async disable(
    data: DisableNodeCommand.Request,
  ): Promise<DisableNodeCommand.Response['response']> {
    return this.httpClient.callApi<DisableNodeCommand.Response['response']>({
      method: DisableNodeCommand.endpointDetails.REQUEST_METHOD,
      url: DisableNodeCommand.url(data.uuid),
    });
  }

  public async restart(
    data: RestartNodeCommand.Request,
  ): Promise<RestartNodeCommand.Response['response']> {
    return this.httpClient.callApi<RestartNodeCommand.Response['response']>({
      method: RestartNodeCommand.endpointDetails.REQUEST_METHOD,
      url: RestartNodeCommand.url(data.uuid),
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
    GetNodesRealtimeUsageCommand.Response['response']
  > {
    return this.httpClient.callApi<
      GetNodesRealtimeUsageCommand.Response['response']
    >({
      method: GetNodesRealtimeUsageCommand.endpointDetails.REQUEST_METHOD,
      url: GetNodesRealtimeUsageCommand.url,
    });
  }

  public async getUsageByRange(
    data: GetNodesUsageByRangeCommand.RequestQuery,
  ): Promise<GetNodesUsageByRangeCommand.Response['response']> {
    return this.httpClient.callApi<
      GetNodesUsageByRangeCommand.Response['response']
    >({
      method: GetNodesUsageByRangeCommand.endpointDetails.REQUEST_METHOD,
      url: GetNodesUsageByRangeCommand.url,
      params: data,
    });
  }

  public async getNodeUserUsageByRange(
    data: GetNodeUserUsageByRangeCommand.Request,
    query: GetNodeUserUsageByRangeCommand.RequestQuery,
  ): Promise<GetNodeUserUsageByRangeCommand.Response['response']> {
    return this.httpClient.callApi<
      GetNodeUserUsageByRangeCommand.Response['response']
    >({
      method: GetNodeUserUsageByRangeCommand.endpointDetails.REQUEST_METHOD,
      url: GetNodeUserUsageByRangeCommand.url(data.uuid),
      params: query,
    });
  }
}
