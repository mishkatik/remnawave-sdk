import {
  CreateConfigProfileCommand,
  DeleteConfigProfileCommand,
  GetAllInboundsCommand,
  GetComputedConfigProfileByUuidCommand,
  GetConfigProfileByUuidCommand,
  GetConfigProfilesCommand,
  GetInboundsByProfileUuidCommand,
  ReorderConfigProfileCommand,
  UpdateConfigProfileCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class ConfigProfilesController {
  constructor(private readonly httpClient: HttpClient) {}

  public async create(
    data: CreateConfigProfileCommand.Request,
  ): Promise<CreateConfigProfileCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: CreateConfigProfileCommand.endpointDetails.REQUEST_METHOD,
        url: CreateConfigProfileCommand.url,
        data,
      },
      CreateConfigProfileCommand.ResponseSchema,
    );
  }

  public async getComputedByProfileUuid(
    uuid: string,
  ): Promise<GetComputedConfigProfileByUuidCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          GetComputedConfigProfileByUuidCommand.endpointDetails.REQUEST_METHOD,
        url: GetComputedConfigProfileByUuidCommand.url(uuid),
      },
      GetComputedConfigProfileByUuidCommand.ResponseSchema,
    );
  }

  public async update(
    data: UpdateConfigProfileCommand.Request,
  ): Promise<UpdateConfigProfileCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: UpdateConfigProfileCommand.endpointDetails.REQUEST_METHOD,
        url: UpdateConfigProfileCommand.url,
        data,
      },
      UpdateConfigProfileCommand.ResponseSchema,
    );
  }

  public async delete(
    data: DeleteConfigProfileCommand.Request,
  ): Promise<DeleteConfigProfileCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: DeleteConfigProfileCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteConfigProfileCommand.url(data.uuid),
      },
      DeleteConfigProfileCommand.ResponseSchema,
    );
  }

  public async getAll(): Promise<
    GetConfigProfilesCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetConfigProfilesCommand.endpointDetails.REQUEST_METHOD,
        url: GetConfigProfilesCommand.url,
      },
      GetConfigProfilesCommand.ResponseSchema,
    );
  }

  public async getByUuid(
    data: GetConfigProfileByUuidCommand.Request,
  ): Promise<GetConfigProfileByUuidCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetConfigProfileByUuidCommand.endpointDetails.REQUEST_METHOD,
        url: GetConfigProfileByUuidCommand.url(data.uuid),
      },
      GetConfigProfileByUuidCommand.ResponseSchema,
    );
  }

  public async getAllInbounds(): Promise<
    GetAllInboundsCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetAllInboundsCommand.endpointDetails.REQUEST_METHOD,
        url: GetAllInboundsCommand.url,
      },
      GetAllInboundsCommand.ResponseSchema,
    );
  }

  public async getInboundsByProfileUuid(
    data: GetInboundsByProfileUuidCommand.Request,
  ): Promise<GetInboundsByProfileUuidCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetInboundsByProfileUuidCommand.endpointDetails.REQUEST_METHOD,
        url: GetInboundsByProfileUuidCommand.url(data.uuid),
      },
      GetInboundsByProfileUuidCommand.ResponseSchema,
    );
  }

  public async reorder(
    data: ReorderConfigProfileCommand.Request,
  ): Promise<ReorderConfigProfileCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: ReorderConfigProfileCommand.endpointDetails.REQUEST_METHOD,
        url: ReorderConfigProfileCommand.url,
        data,
      },
      ReorderConfigProfileCommand.ResponseSchema,
    );
  }
}
