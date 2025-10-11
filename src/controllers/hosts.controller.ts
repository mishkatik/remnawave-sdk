import {
  BulkDeleteHostsCommand,
  BulkDisableHostsCommand,
  BulkEnableHostsCommand,
  CreateHostCommand,
  DeleteHostCommand,
  GetAllHostsCommand,
  GetAllHostTagsCommand,
  GetOneHostCommand,
  ReorderHostCommand,
  SetInboundToManyHostsCommand,
  SetPortToManyHostsCommand,
  UpdateHostCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class HostsController {
  constructor(private readonly httpClient: HttpClient) {}

  public async create(
    data: CreateHostCommand.Request,
  ): Promise<CreateHostCommand.Response['response']> {
    return this.httpClient.callApi<CreateHostCommand.Response['response']>({
      method: CreateHostCommand.endpointDetails.REQUEST_METHOD,
      url: CreateHostCommand.url,
      data,
    });
  }

  public async update(
    data: UpdateHostCommand.Request,
  ): Promise<UpdateHostCommand.Response['response']> {
    return this.httpClient.callApi<UpdateHostCommand.Response['response']>({
      method: UpdateHostCommand.endpointDetails.REQUEST_METHOD,
      url: UpdateHostCommand.url,
      data,
    });
  }

  public async delete(
    uuid: string,
  ): Promise<DeleteHostCommand.Response['response']> {
    return this.httpClient.callApi<DeleteHostCommand.Response['response']>({
      method: DeleteHostCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteHostCommand.url(uuid),
    });
  }

  public async getAll(): Promise<GetAllHostsCommand.Response['response']> {
    return this.httpClient.callApi<GetAllHostsCommand.Response['response']>({
      method: GetAllHostsCommand.endpointDetails.REQUEST_METHOD,
      url: GetAllHostsCommand.url,
    });
  }

  public async getByUuid(
    uuid: string,
  ): Promise<GetOneHostCommand.Response['response']> {
    return this.httpClient.callApi<GetOneHostCommand.Response['response']>({
      method: GetOneHostCommand.endpointDetails.REQUEST_METHOD,
      url: GetOneHostCommand.url(uuid),
    });
  }

  public async reorder(
    data: ReorderHostCommand.Request,
  ): Promise<ReorderHostCommand.Response['response']> {
    return this.httpClient.callApi<ReorderHostCommand.Response['response']>({
      method: ReorderHostCommand.endpointDetails.REQUEST_METHOD,
      url: ReorderHostCommand.url,
      data,
    });
  }

  public async getAllTags(): Promise<
    GetAllHostTagsCommand.Response['response']
  > {
    return this.httpClient.callApi<GetAllHostTagsCommand.Response['response']>({
      method: GetAllHostTagsCommand.endpointDetails.REQUEST_METHOD,
      url: GetAllHostTagsCommand.url,
    });
  }

  public async deleteMany(
    data: BulkDeleteHostsCommand.Request,
  ): Promise<BulkDeleteHostsCommand.Response['response']> {
    return this.httpClient.callApi<BulkDeleteHostsCommand.Response['response']>(
      {
        method: BulkDeleteHostsCommand.endpointDetails.REQUEST_METHOD,
        url: BulkDeleteHostsCommand.url,
        data,
      },
    );
  }

  public async enableMany(
    data: BulkEnableHostsCommand.Request,
  ): Promise<BulkEnableHostsCommand.Response['response']> {
    return this.httpClient.callApi<BulkEnableHostsCommand.Response['response']>(
      {
        method: BulkEnableHostsCommand.endpointDetails.REQUEST_METHOD,
        url: BulkEnableHostsCommand.url,
        data,
      },
    );
  }

  public async disableMany(
    data: BulkDisableHostsCommand.Request,
  ): Promise<BulkDisableHostsCommand.Response['response']> {
    return this.httpClient.callApi<
      BulkDisableHostsCommand.Response['response']
    >({
      method: BulkDisableHostsCommand.endpointDetails.REQUEST_METHOD,
      url: BulkDisableHostsCommand.url,
      data,
    });
  }

  public async setInboundToMany(
    data: SetInboundToManyHostsCommand.Request,
  ): Promise<SetInboundToManyHostsCommand.Response['response']> {
    return this.httpClient.callApi<
      SetInboundToManyHostsCommand.Response['response']
    >({
      method: SetInboundToManyHostsCommand.endpointDetails.REQUEST_METHOD,
      url: SetInboundToManyHostsCommand.url,
      data,
    });
  }

  public async setPortToMany(
    data: SetPortToManyHostsCommand.Request,
  ): Promise<SetPortToManyHostsCommand.Response['response']> {
    return this.httpClient.callApi<
      SetPortToManyHostsCommand.Response['response']
    >({
      method: SetPortToManyHostsCommand.endpointDetails.REQUEST_METHOD,
      url: SetPortToManyHostsCommand.url,
      data,
    });
  }
}
