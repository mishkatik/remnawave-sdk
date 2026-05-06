import {
  CreateUserHwidDeviceCommand,
  DeleteAllUserHwidDevicesCommand,
  DeleteUserHwidDeviceCommand,
  GetAllHwidDevicesCommand,
  GetHwidDevicesStatsCommand,
  GetTopUsersByHwidDevicesCommand,
  GetUserHwidDevicesCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class HwidController {
  constructor(private readonly httpClient: HttpClient) {}

  public async create(
    data: CreateUserHwidDeviceCommand.Request,
  ): Promise<CreateUserHwidDeviceCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: CreateUserHwidDeviceCommand.endpointDetails.REQUEST_METHOD,
        url: CreateUserHwidDeviceCommand.url,
        data,
      },
      CreateUserHwidDeviceCommand.ResponseSchema,
    );
  }

  public async delete(
    data: DeleteUserHwidDeviceCommand.Request,
  ): Promise<DeleteUserHwidDeviceCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: DeleteUserHwidDeviceCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteUserHwidDeviceCommand.url,
        data,
      },
      DeleteUserHwidDeviceCommand.ResponseSchema,
    );
  }

  public async deleteAllByUser(
    data: DeleteAllUserHwidDevicesCommand.Request,
  ): Promise<DeleteAllUserHwidDevicesCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: DeleteAllUserHwidDevicesCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteAllUserHwidDevicesCommand.url,
        data,
      },
      DeleteAllUserHwidDevicesCommand.ResponseSchema,
    );
  }

  public async getAll(
    data: GetAllHwidDevicesCommand.RequestQuery,
  ): Promise<GetAllHwidDevicesCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetAllHwidDevicesCommand.endpointDetails.REQUEST_METHOD,
        url: GetAllHwidDevicesCommand.url,
        params: data,
      },
      GetAllHwidDevicesCommand.ResponseSchema,
    );
  }

  public async getByUser(
    data: GetUserHwidDevicesCommand.Request,
  ): Promise<GetUserHwidDevicesCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetUserHwidDevicesCommand.endpointDetails.REQUEST_METHOD,
        url: GetUserHwidDevicesCommand.url(data.userUuid),
      },
      GetUserHwidDevicesCommand.ResponseSchema,
    );
  }

  public async getStats(): Promise<
    GetHwidDevicesStatsCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetHwidDevicesStatsCommand.endpointDetails.REQUEST_METHOD,
        url: GetHwidDevicesStatsCommand.url,
      },
      GetHwidDevicesStatsCommand.ResponseSchema,
    );
  }

  public async getTopUsers(
    query: GetTopUsersByHwidDevicesCommand.RequestQuery,
  ): Promise<GetTopUsersByHwidDevicesCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetTopUsersByHwidDevicesCommand.endpointDetails.REQUEST_METHOD,
        url: GetTopUsersByHwidDevicesCommand.url,
        params: query,
      },
      GetTopUsersByHwidDevicesCommand.ResponseSchema,
    );
  }
}
