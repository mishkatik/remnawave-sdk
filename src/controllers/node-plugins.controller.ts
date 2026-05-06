import {
  CloneNodePluginCommand,
  CreateNodePluginCommand,
  DeleteNodePluginCommand,
  GetNodePluginCommand,
  GetNodePluginsCommand,
  GetTorrentBlockerReportsCommand,
  GetTorrentBlockerReportsStatsCommand,
  PluginExecutorCommand,
  ReorderNodePluginCommand,
  TruncateTorrentBlockerReportsCommand,
  UpdateNodePluginCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class NodePluginsController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getTorrentBlockerReports(
    params?: GetTorrentBlockerReportsCommand.RequestQuery,
  ): Promise<GetTorrentBlockerReportsCommand.Response['response']> {
    return this.httpClient.callApi<
      GetTorrentBlockerReportsCommand.Response['response']
    >({
      method: GetTorrentBlockerReportsCommand.endpointDetails.REQUEST_METHOD,
      url: GetTorrentBlockerReportsCommand.url,
      params,
    });
  }

  public async getTorrentBlockerReportsStats(): Promise<
    GetTorrentBlockerReportsStatsCommand.Response['response']
  > {
    return this.httpClient.callApi<
      GetTorrentBlockerReportsStatsCommand.Response['response']
    >({
      method:
        GetTorrentBlockerReportsStatsCommand.endpointDetails.REQUEST_METHOD,
      url: GetTorrentBlockerReportsStatsCommand.url,
    });
  }

  public async truncateTorrentBlockerReports(): Promise<
    TruncateTorrentBlockerReportsCommand.Response['response']
  > {
    return this.httpClient.callApi<
      TruncateTorrentBlockerReportsCommand.Response['response']
    >({
      method:
        TruncateTorrentBlockerReportsCommand.endpointDetails.REQUEST_METHOD,
      url: TruncateTorrentBlockerReportsCommand.url,
    });
  }

  public async getAllNodePlugins(): Promise<
    GetNodePluginsCommand.Response['response']
  > {
    return this.httpClient.callApi<GetNodePluginsCommand.Response['response']>({
      method: GetNodePluginsCommand.endpointDetails.REQUEST_METHOD,
      url: GetNodePluginsCommand.url,
    });
  }

  public async updateNodePlugin(
    data: UpdateNodePluginCommand.Request,
  ): Promise<UpdateNodePluginCommand.Response['response']> {
    return this.httpClient.callApi<
      UpdateNodePluginCommand.Response['response']
    >({
      method: UpdateNodePluginCommand.endpointDetails.REQUEST_METHOD,
      url: UpdateNodePluginCommand.url,
      data,
    });
  }

  public async createNodePlugin(
    data: CreateNodePluginCommand.Request,
  ): Promise<CreateNodePluginCommand.Response['response']> {
    return this.httpClient.callApi<
      CreateNodePluginCommand.Response['response']
    >({
      method: CreateNodePluginCommand.endpointDetails.REQUEST_METHOD,
      url: CreateNodePluginCommand.url,
      data,
    });
  }

  public async getNodePluginByUuid(
    uuid: string,
  ): Promise<GetNodePluginCommand.Response['response']> {
    return this.httpClient.callApi<GetNodePluginCommand.Response['response']>({
      method: GetNodePluginCommand.endpointDetails.REQUEST_METHOD,
      url: GetNodePluginCommand.url(uuid),
    });
  }

  public async deleteNodePlugin(
    uuid: string,
  ): Promise<DeleteNodePluginCommand.Response['response']> {
    return this.httpClient.callApi<
      DeleteNodePluginCommand.Response['response']
    >({
      method: DeleteNodePluginCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteNodePluginCommand.url(uuid),
    });
  }

  public async reorderNodePlugins(
    data: ReorderNodePluginCommand.Request,
  ): Promise<ReorderNodePluginCommand.Response['response']> {
    return this.httpClient.callApi<
      ReorderNodePluginCommand.Response['response']
    >({
      method: ReorderNodePluginCommand.endpointDetails.REQUEST_METHOD,
      url: ReorderNodePluginCommand.url,
      data,
    });
  }

  public async cloneNodePlugin(
    data: CloneNodePluginCommand.Request,
  ): Promise<CloneNodePluginCommand.Response['response']> {
    return this.httpClient.callApi<CloneNodePluginCommand.Response['response']>(
      {
        method: CloneNodePluginCommand.endpointDetails.REQUEST_METHOD,
        url: CloneNodePluginCommand.url,
        data,
      },
    );
  }

  public async executeCommandOnNodePlugins(
    data: PluginExecutorCommand.Request,
  ): Promise<PluginExecutorCommand.Response['response']> {
    return this.httpClient.callApi<PluginExecutorCommand.Response['response']>({
      method: PluginExecutorCommand.endpointDetails.REQUEST_METHOD,
      url: PluginExecutorCommand.url,
      data,
    });
  }
}
