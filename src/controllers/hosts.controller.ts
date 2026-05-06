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
    return this.httpClient.callApi(
      {
        method: CreateHostCommand.endpointDetails.REQUEST_METHOD,
        url: CreateHostCommand.url,
        data,
      },
      CreateHostCommand.ResponseSchema,
    );
  }

  public async update(
    data: UpdateHostCommand.Request,
  ): Promise<UpdateHostCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: UpdateHostCommand.endpointDetails.REQUEST_METHOD,
        url: UpdateHostCommand.url,
        data,
      },
      UpdateHostCommand.ResponseSchema,
    );
  }

  public async delete(
    uuid: string,
  ): Promise<DeleteHostCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: DeleteHostCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteHostCommand.url(uuid),
      },
      DeleteHostCommand.ResponseSchema,
    );
  }

  public async getAll(): Promise<GetAllHostsCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetAllHostsCommand.endpointDetails.REQUEST_METHOD,
        url: GetAllHostsCommand.url,
      },
      GetAllHostsCommand.ResponseSchema,
    );
  }

  public async getByUuid(
    uuid: string,
  ): Promise<GetOneHostCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetOneHostCommand.endpointDetails.REQUEST_METHOD,
        url: GetOneHostCommand.url(uuid),
      },
      GetOneHostCommand.ResponseSchema,
    );
  }

  public async reorder(
    data: ReorderHostCommand.Request,
  ): Promise<ReorderHostCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: ReorderHostCommand.endpointDetails.REQUEST_METHOD,
        url: ReorderHostCommand.url,
        data,
      },
      ReorderHostCommand.ResponseSchema,
    );
  }

  public async getAllTags(): Promise<
    GetAllHostTagsCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetAllHostTagsCommand.endpointDetails.REQUEST_METHOD,
        url: GetAllHostTagsCommand.url,
      },
      GetAllHostTagsCommand.ResponseSchema,
    );
  }

  public async deleteMany(
    data: BulkDeleteHostsCommand.Request,
  ): Promise<BulkDeleteHostsCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: BulkDeleteHostsCommand.endpointDetails.REQUEST_METHOD,
        url: BulkDeleteHostsCommand.url,
        data,
      },
      BulkDeleteHostsCommand.ResponseSchema,
    );
  }

  public async enableMany(
    data: BulkEnableHostsCommand.Request,
  ): Promise<BulkEnableHostsCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: BulkEnableHostsCommand.endpointDetails.REQUEST_METHOD,
        url: BulkEnableHostsCommand.url,
        data,
      },
      BulkEnableHostsCommand.ResponseSchema,
    );
  }

  public async disableMany(
    data: BulkDisableHostsCommand.Request,
  ): Promise<BulkDisableHostsCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: BulkDisableHostsCommand.endpointDetails.REQUEST_METHOD,
        url: BulkDisableHostsCommand.url,
        data,
      },
      BulkDisableHostsCommand.ResponseSchema,
    );
  }

  public async setInboundToMany(
    data: SetInboundToManyHostsCommand.Request,
  ): Promise<SetInboundToManyHostsCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: SetInboundToManyHostsCommand.endpointDetails.REQUEST_METHOD,
        url: SetInboundToManyHostsCommand.url,
        data,
      },
      SetInboundToManyHostsCommand.ResponseSchema,
    );
  }

  public async setPortToMany(
    data: SetPortToManyHostsCommand.Request,
  ): Promise<SetPortToManyHostsCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: SetPortToManyHostsCommand.endpointDetails.REQUEST_METHOD,
        url: SetPortToManyHostsCommand.url,
        data,
      },
      SetPortToManyHostsCommand.ResponseSchema,
    );
  }
}
