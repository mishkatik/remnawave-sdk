import {
  AddUsersToInternalSquadCommand,
  CreateInternalSquadCommand,
  DeleteInternalSquadCommand,
  DeleteUsersFromInternalSquadCommand,
  GetInternalSquadAccessibleNodesCommand,
  GetInternalSquadByUuidCommand,
  GetInternalSquadsCommand,
  UpdateInternalSquadCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class InternalSquadsController {
  constructor(private readonly httpClient: HttpClient) {}

  public async create(
    data: CreateInternalSquadCommand.Request,
  ): Promise<CreateInternalSquadCommand.Response['response']> {
    return this.httpClient.callApi<
      CreateInternalSquadCommand.Response['response']
    >({
      method: CreateInternalSquadCommand.endpointDetails.REQUEST_METHOD,
      url: CreateInternalSquadCommand.url,
      data,
    });
  }

  public async update(
    data: UpdateInternalSquadCommand.Request,
  ): Promise<UpdateInternalSquadCommand.Response['response']> {
    return this.httpClient.callApi<
      UpdateInternalSquadCommand.Response['response']
    >({
      method: UpdateInternalSquadCommand.endpointDetails.REQUEST_METHOD,
      url: UpdateInternalSquadCommand.url,
      data,
    });
  }

  public async delete(
    uuid: string,
  ): Promise<DeleteInternalSquadCommand.Response['response']> {
    return this.httpClient.callApi<
      DeleteInternalSquadCommand.Response['response']
    >({
      method: DeleteInternalSquadCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteInternalSquadCommand.url(uuid),
    });
  }

  public async getAll(): Promise<
    GetInternalSquadsCommand.Response['response']
  > {
    return this.httpClient.callApi<
      GetInternalSquadsCommand.Response['response']
    >({
      method: GetInternalSquadsCommand.endpointDetails.REQUEST_METHOD,
      url: GetInternalSquadsCommand.url,
    });
  }

  public async getByUuid(
    uuid: string,
  ): Promise<GetInternalSquadByUuidCommand.Response['response']> {
    return this.httpClient.callApi<
      GetInternalSquadByUuidCommand.Response['response']
    >({
      method: GetInternalSquadByUuidCommand.endpointDetails.REQUEST_METHOD,
      url: GetInternalSquadByUuidCommand.url(uuid),
    });
  }

  public async getAccessibleNodes(
    uuid: string,
  ): Promise<GetInternalSquadAccessibleNodesCommand.Response['response']> {
    return this.httpClient.callApi<
      GetInternalSquadAccessibleNodesCommand.Response['response']
    >({
      method:
        GetInternalSquadAccessibleNodesCommand.endpointDetails.REQUEST_METHOD,
      url: GetInternalSquadAccessibleNodesCommand.url(uuid),
    });
  }

  public async addUsers(
    uuid: string,
  ): Promise<AddUsersToInternalSquadCommand.Response['response']> {
    return this.httpClient.callApi<
      AddUsersToInternalSquadCommand.Response['response']
    >({
      method: AddUsersToInternalSquadCommand.endpointDetails.REQUEST_METHOD,
      url: AddUsersToInternalSquadCommand.url(uuid),
    });
  }

  public async deleteUsers(
    uuid: string,
  ): Promise<DeleteUsersFromInternalSquadCommand.Response['response']> {
    return this.httpClient.callApi<
      DeleteUsersFromInternalSquadCommand.Response['response']
    >({
      method:
        DeleteUsersFromInternalSquadCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteUsersFromInternalSquadCommand.url(uuid),
    });
  }
}
