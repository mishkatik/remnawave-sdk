import {
  CreateUserHwidDeviceCommand,
  DeleteAllUserHwidDevicesCommand,
  DeleteUserHwidDeviceCommand,
  GetAllHwidDevicesCommand,
  GetHwidDevicesStatsCommand,
  GetUserHwidDevicesCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class HwidController {
  constructor(private readonly httpClient: HttpClient) {}

  public async create(
    data: CreateUserHwidDeviceCommand.Request,
  ): Promise<CreateUserHwidDeviceCommand.Response['response']> {
    return this.httpClient.callApi<
      CreateUserHwidDeviceCommand.Response['response']
    >({
      method: CreateUserHwidDeviceCommand.endpointDetails.REQUEST_METHOD,
      url: CreateUserHwidDeviceCommand.url,
      data,
    });
  }

  public async delete(
    data: DeleteUserHwidDeviceCommand.Request,
  ): Promise<DeleteUserHwidDeviceCommand.Response['response']> {
    return this.httpClient.callApi<
      DeleteUserHwidDeviceCommand.Response['response']
    >({
      method: DeleteUserHwidDeviceCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteUserHwidDeviceCommand.url,
      data,
    });
  }

  public async deleteAllByUser(
    data: DeleteAllUserHwidDevicesCommand.Request,
  ): Promise<DeleteAllUserHwidDevicesCommand.Response['response']> {
    return this.httpClient.callApi<
      DeleteAllUserHwidDevicesCommand.Response['response']
    >({
      method: DeleteAllUserHwidDevicesCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteAllUserHwidDevicesCommand.url,
      data,
    });
  }

  public async getAll(
    data: GetAllHwidDevicesCommand.RequestQuery,
  ): Promise<GetAllHwidDevicesCommand.Response['response']> {
    return this.httpClient.callApi<
      GetAllHwidDevicesCommand.Response['response']
    >({
      method: GetAllHwidDevicesCommand.endpointDetails.REQUEST_METHOD,
      url: GetAllHwidDevicesCommand.url,
      params: data,
    });
  }

  public async getByUser(
    data: GetUserHwidDevicesCommand.Request,
  ): Promise<GetUserHwidDevicesCommand.Response['response']> {
    return this.httpClient.callApi<
      GetUserHwidDevicesCommand.Response['response']
    >({
      method: GetUserHwidDevicesCommand.endpointDetails.REQUEST_METHOD,
      url: GetUserHwidDevicesCommand.url(data.userUuid),
    });
  }

  public async getStats(): Promise<
    GetHwidDevicesStatsCommand.Response['response']
  > {
    return this.httpClient.callApi<
      GetHwidDevicesStatsCommand.Response['response']
    >({
      method: GetHwidDevicesStatsCommand.endpointDetails.REQUEST_METHOD,
      url: GetHwidDevicesStatsCommand.url,
    });
  }
}
