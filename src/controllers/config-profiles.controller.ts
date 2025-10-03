import {
  CreateConfigProfileCommand,
  DeleteConfigProfileCommand,
  GetAllInboundsCommand,
  GetConfigProfileByUuidCommand,
  GetConfigProfilesCommand,
  GetInboundsByProfileUuidCommand,
  UpdateConfigProfileCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class ConfigProfilesController {
  constructor(private readonly httpClient: HttpClient) {}

  public async create(
    data: CreateConfigProfileCommand.Request,
  ): Promise<CreateConfigProfileCommand.Response['response']> {
    return this.httpClient.callApi<
      CreateConfigProfileCommand.Response['response']
    >({
      method: CreateConfigProfileCommand.endpointDetails.REQUEST_METHOD,
      url: CreateConfigProfileCommand.url,
      data,
    });
  }

  public async update(
    data: UpdateConfigProfileCommand.Request,
  ): Promise<UpdateConfigProfileCommand.Response['response']> {
    return this.httpClient.callApi<
      UpdateConfigProfileCommand.Response['response']
    >({
      method: UpdateConfigProfileCommand.endpointDetails.REQUEST_METHOD,
      url: UpdateConfigProfileCommand.url,
      data,
    });
  }

  public async delete(
    data: DeleteConfigProfileCommand.Request,
  ): Promise<DeleteConfigProfileCommand.Response['response']> {
    return this.httpClient.callApi<
      DeleteConfigProfileCommand.Response['response']
    >({
      method: DeleteConfigProfileCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteConfigProfileCommand.url(data.uuid),
    });
  }

  public async getAll(): Promise<
    GetConfigProfilesCommand.Response['response']
  > {
    return this.httpClient.callApi<
      GetConfigProfilesCommand.Response['response']
    >({
      method: GetConfigProfilesCommand.endpointDetails.REQUEST_METHOD,
      url: GetConfigProfilesCommand.url,
    });
  }

  public async getByUuid(
    data: GetConfigProfileByUuidCommand.Request,
  ): Promise<GetConfigProfileByUuidCommand.Response['response']> {
    return this.httpClient.callApi<
      GetConfigProfileByUuidCommand.Response['response']
    >({
      method: GetConfigProfileByUuidCommand.endpointDetails.REQUEST_METHOD,
      url: GetConfigProfileByUuidCommand.url(data.uuid),
    });
  }

  public async getAllInbounds(): Promise<
    GetAllInboundsCommand.Response['response']
  > {
    return this.httpClient.callApi<GetAllInboundsCommand.Response['response']>({
      method: GetAllInboundsCommand.endpointDetails.REQUEST_METHOD,
      url: GetAllInboundsCommand.url,
    });
  }

  public async getInboundsByProfileUuid(
    data: GetInboundsByProfileUuidCommand.Request,
  ): Promise<GetInboundsByProfileUuidCommand.Response['response']> {
    return this.httpClient.callApi<
      GetInboundsByProfileUuidCommand.Response['response']
    >({
      method: GetInboundsByProfileUuidCommand.endpointDetails.REQUEST_METHOD,
      url: GetInboundsByProfileUuidCommand.url(data.uuid),
    });
  }
}
