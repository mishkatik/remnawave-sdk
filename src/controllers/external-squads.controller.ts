import {
  AddUsersToExternalSquadCommand,
  CreateExternalSquadCommand,
  DeleteExternalSquadCommand,
  DeleteUsersFromExternalSquadCommand,
  GetExternalSquadByUuidCommand,
  GetExternalSquadsCommand,
  UpdateExternalSquadCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class ExternalSquadsController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getAll(): Promise<
    GetExternalSquadsCommand.Response['response']
  > {
    return this.httpClient.callApi<
      GetExternalSquadsCommand.Response['response']
    >({
      method: GetExternalSquadsCommand.endpointDetails.REQUEST_METHOD,
      url: GetExternalSquadsCommand.url,
    });
  }

  public async getByUuid(
    uuid: string,
  ): Promise<GetExternalSquadByUuidCommand.Response['response']> {
    return this.httpClient.callApi<
      GetExternalSquadByUuidCommand.Response['response']
    >({
      method: GetExternalSquadByUuidCommand.endpointDetails.REQUEST_METHOD,
      url: GetExternalSquadByUuidCommand.url(uuid),
    });
  }

  public async create(
    data: CreateExternalSquadCommand.Request,
  ): Promise<CreateExternalSquadCommand.Response['response']> {
    return this.httpClient.callApi<
      CreateExternalSquadCommand.Response['response']
    >({
      method: CreateExternalSquadCommand.endpointDetails.REQUEST_METHOD,
      url: CreateExternalSquadCommand.url,
      data,
    });
  }

  public async update(
    data: UpdateExternalSquadCommand.Request,
  ): Promise<UpdateExternalSquadCommand.Response['response']> {
    return this.httpClient.callApi<
      UpdateExternalSquadCommand.Response['response']
    >({
      method: UpdateExternalSquadCommand.endpointDetails.REQUEST_METHOD,
      url: UpdateExternalSquadCommand.url,
      data,
    });
  }

  public async delete(
    uuid: string,
  ): Promise<DeleteExternalSquadCommand.Response['response']> {
    return this.httpClient.callApi<
      DeleteExternalSquadCommand.Response['response']
    >({
      method: DeleteExternalSquadCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteExternalSquadCommand.url(uuid),
    });
  }

  public async addUsers(
    uuid: string,
  ): Promise<AddUsersToExternalSquadCommand.Response['response']> {
    return this.httpClient.callApi<
      AddUsersToExternalSquadCommand.Response['response']
    >({
      method: AddUsersToExternalSquadCommand.endpointDetails.REQUEST_METHOD,
      url: AddUsersToExternalSquadCommand.url(uuid),
    });
  }

  public async removeUsers(
    uuid: string,
  ): Promise<DeleteUsersFromExternalSquadCommand.Response['response']> {
    return this.httpClient.callApi<
      DeleteUsersFromExternalSquadCommand.Response['response']
    >({
      method:
        DeleteUsersFromExternalSquadCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteUsersFromExternalSquadCommand.url(uuid),
    });
  }
}
