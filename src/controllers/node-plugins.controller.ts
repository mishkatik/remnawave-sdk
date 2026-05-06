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
    return this.httpClient.callApi(
      {
        method: GetTorrentBlockerReportsCommand.endpointDetails.REQUEST_METHOD,
        url: GetTorrentBlockerReportsCommand.url,
        params,
      },
      GetTorrentBlockerReportsCommand.ResponseSchema,
    );
  }

  public async getTorrentBlockerReportsStats(): Promise<
    GetTorrentBlockerReportsStatsCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method:
          GetTorrentBlockerReportsStatsCommand.endpointDetails.REQUEST_METHOD,
        url: GetTorrentBlockerReportsStatsCommand.url,
      },
      GetTorrentBlockerReportsStatsCommand.ResponseSchema,
    );
  }

  public async truncateTorrentBlockerReports(): Promise<
    TruncateTorrentBlockerReportsCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method:
          TruncateTorrentBlockerReportsCommand.endpointDetails.REQUEST_METHOD,
        url: TruncateTorrentBlockerReportsCommand.url,
      },
      TruncateTorrentBlockerReportsCommand.ResponseSchema,
    );
  }

  public async getAllNodePlugins(): Promise<
    GetNodePluginsCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetNodePluginsCommand.endpointDetails.REQUEST_METHOD,
        url: GetNodePluginsCommand.url,
      },
      GetNodePluginsCommand.ResponseSchema,
    );
  }

  public async updateNodePlugin(
    data: UpdateNodePluginCommand.Request,
  ): Promise<UpdateNodePluginCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: UpdateNodePluginCommand.endpointDetails.REQUEST_METHOD,
        url: UpdateNodePluginCommand.url,
        data,
      },
      UpdateNodePluginCommand.ResponseSchema,
    );
  }

  public async createNodePlugin(
    data: CreateNodePluginCommand.Request,
  ): Promise<CreateNodePluginCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: CreateNodePluginCommand.endpointDetails.REQUEST_METHOD,
        url: CreateNodePluginCommand.url,
        data,
      },
      CreateNodePluginCommand.ResponseSchema,
    );
  }

  public async getNodePluginByUuid(
    uuid: string,
  ): Promise<GetNodePluginCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetNodePluginCommand.endpointDetails.REQUEST_METHOD,
        url: GetNodePluginCommand.url(uuid),
      },
      GetNodePluginCommand.ResponseSchema,
    );
  }

  public async deleteNodePlugin(
    uuid: string,
  ): Promise<DeleteNodePluginCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: DeleteNodePluginCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteNodePluginCommand.url(uuid),
      },
      DeleteNodePluginCommand.ResponseSchema,
    );
  }

  public async reorderNodePlugins(
    data: ReorderNodePluginCommand.Request,
  ): Promise<ReorderNodePluginCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: ReorderNodePluginCommand.endpointDetails.REQUEST_METHOD,
        url: ReorderNodePluginCommand.url,
        data,
      },
      ReorderNodePluginCommand.ResponseSchema,
    );
  }

  public async cloneNodePlugin(
    data: CloneNodePluginCommand.Request,
  ): Promise<CloneNodePluginCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: CloneNodePluginCommand.endpointDetails.REQUEST_METHOD,
        url: CloneNodePluginCommand.url,
        data,
      },
      CloneNodePluginCommand.ResponseSchema,
    );
  }

  public async executeCommandOnNodePlugins(
    data: PluginExecutorCommand.Request,
  ): Promise<PluginExecutorCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: PluginExecutorCommand.endpointDetails.REQUEST_METHOD,
        url: PluginExecutorCommand.url,
        data,
      },
      PluginExecutorCommand.ResponseSchema,
    );
  }
}
