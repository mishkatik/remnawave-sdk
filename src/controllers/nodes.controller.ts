import {
  BulkNodesActionsCommand,
  BulkNodesProfileModificationCommand,
  BulkNodesUpdateCommand,
  CreateNodeCommand,
  DeleteNodeCommand,
  DisableNodeCommand,
  EnableNodeCommand,
  GetAllNodesCommand,
  GetAllNodesTagsCommand,
  GetLegacyStatsNodeUserUsageCommand,
  GetNodesMetricsCommand,
  GetOneNodeCommand,
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
    return this.httpClient.callApi(
      {
        method: CreateNodeCommand.endpointDetails.REQUEST_METHOD,
        url: CreateNodeCommand.url,
        data,
      },
      CreateNodeCommand.ResponseSchema,
    );
  }

  public async update(
    data: UpdateNodeCommand.Request,
  ): Promise<UpdateNodeCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: UpdateNodeCommand.endpointDetails.REQUEST_METHOD,
        url: UpdateNodeCommand.url,
        data,
      },
      UpdateNodeCommand.ResponseSchema,
    );
  }

  public async delete(
    uuid: string,
  ): Promise<DeleteNodeCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: DeleteNodeCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteNodeCommand.url(uuid),
      },
      DeleteNodeCommand.ResponseSchema,
    );
  }

  public async getAll(): Promise<GetAllNodesCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetAllNodesCommand.endpointDetails.REQUEST_METHOD,
        url: GetAllNodesCommand.url,
      },
      GetAllNodesCommand.ResponseSchema,
    );
  }

  public async getOne(
    uuid: string,
  ): Promise<GetOneNodeCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetOneNodeCommand.endpointDetails.REQUEST_METHOD,
        url: GetOneNodeCommand.url(uuid),
      },
      GetOneNodeCommand.ResponseSchema,
    );
  }

  public async enable(
    uuid: string,
  ): Promise<EnableNodeCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: EnableNodeCommand.endpointDetails.REQUEST_METHOD,
        url: EnableNodeCommand.url(uuid),
      },
      EnableNodeCommand.ResponseSchema,
    );
  }

  public async disable(
    uuid: string,
  ): Promise<DisableNodeCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: DisableNodeCommand.endpointDetails.REQUEST_METHOD,
        url: DisableNodeCommand.url(uuid),
      },
      DisableNodeCommand.ResponseSchema,
    );
  }

  public async restart(
    uuid: string,
    data: RestartNodeCommand.RequestBody,
  ): Promise<RestartNodeCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: RestartNodeCommand.endpointDetails.REQUEST_METHOD,
        url: RestartNodeCommand.url(uuid),
        data,
      },
      RestartNodeCommand.ResponseSchema,
    );
  }

  public async restartAll(
    data: RestartAllNodesCommand.RequestBody,
  ): Promise<RestartAllNodesCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: RestartAllNodesCommand.endpointDetails.REQUEST_METHOD,
        url: RestartAllNodesCommand.url,
        data,
      },
      RestartAllNodesCommand.ResponseSchema,
    );
  }

  public async reorder(
    data: ReorderNodeCommand.Request,
  ): Promise<ReorderNodeCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: ReorderNodeCommand.endpointDetails.REQUEST_METHOD,
        url: ReorderNodeCommand.url,
        data,
      },
      ReorderNodeCommand.ResponseSchema,
    );
  }

  public async getRealtimeUsage(): Promise<
    GetNodesMetricsCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetNodesMetricsCommand.endpointDetails.REQUEST_METHOD,
        url: GetNodesMetricsCommand.url,
      },
      GetNodesMetricsCommand.ResponseSchema,
    );
  }

  public async getUsageByRange(
    data: GetStatsNodesUsageCommand.RequestQuery,
  ): Promise<GetStatsNodesUsageCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetStatsNodesUsageCommand.endpointDetails.REQUEST_METHOD,
        url: GetStatsNodesUsageCommand.url,
        params: data,
      },
      GetStatsNodesUsageCommand.ResponseSchema,
    );
  }

  public async getNodeUserUsageByRange(
    uuid: string,
    query: GetStatsNodeUsersUsageCommand.RequestQuery,
  ): Promise<GetStatsNodeUsersUsageCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetStatsNodeUsersUsageCommand.endpointDetails.REQUEST_METHOD,
        url: GetStatsNodeUsersUsageCommand.url(uuid),
        params: query,
      },
      GetStatsNodeUsersUsageCommand.ResponseSchema,
    );
  }

  public async getNodeUserUsageByRangeLegacy(
    uuid: string,
    query: GetLegacyStatsNodeUserUsageCommand.RequestQuery,
  ): Promise<GetLegacyStatsNodeUserUsageCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          GetLegacyStatsNodeUserUsageCommand.endpointDetails.REQUEST_METHOD,
        url: GetLegacyStatsNodeUserUsageCommand.url(uuid),
        params: query,
      },
      GetLegacyStatsNodeUserUsageCommand.ResponseSchema,
    );
  }

  public async resetTraffic(
    uuid: string,
  ): Promise<ResetNodeTrafficCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: ResetNodeTrafficCommand.endpointDetails.REQUEST_METHOD,
        url: ResetNodeTrafficCommand.url(uuid),
      },
      ResetNodeTrafficCommand.ResponseSchema,
    );
  }

  public async bulkProfileModification(
    data: BulkNodesProfileModificationCommand.Request,
  ): Promise<BulkNodesProfileModificationCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          BulkNodesProfileModificationCommand.endpointDetails.REQUEST_METHOD,
        url: BulkNodesProfileModificationCommand.url,
        data,
      },
      BulkNodesProfileModificationCommand.ResponseSchema,
    );
  }

  public async bulkAction(
    data: BulkNodesActionsCommand.Request,
  ): Promise<BulkNodesActionsCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: BulkNodesActionsCommand.endpointDetails.REQUEST_METHOD,
        url: BulkNodesActionsCommand.url,
        data,
      },
      BulkNodesActionsCommand.ResponseSchema,
    );
  }

  public async bulkUpdate(
    data: BulkNodesUpdateCommand.Request,
  ): Promise<BulkNodesUpdateCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: BulkNodesUpdateCommand.endpointDetails.REQUEST_METHOD,
        url: BulkNodesUpdateCommand.url,
        data,
      },
      BulkNodesUpdateCommand.ResponseSchema,
    );
  }

  public async getAllTags(): Promise<
    GetAllNodesTagsCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetAllNodesTagsCommand.endpointDetails.REQUEST_METHOD,
        url: GetAllNodesTagsCommand.url,
      },
      GetAllNodesTagsCommand.ResponseSchema,
    );
  }
}
