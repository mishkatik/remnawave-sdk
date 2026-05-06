import {
  AddUsersToExternalSquadCommand,
  CreateExternalSquadCommand,
  DeleteExternalSquadCommand,
  DeleteUsersFromExternalSquadCommand,
  GetExternalSquadByUuidCommand,
  GetExternalSquadsCommand,
  ReorderExternalSquadCommand,
  UpdateExternalSquadCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class ExternalSquadsController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getAll(): Promise<
    GetExternalSquadsCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetExternalSquadsCommand.endpointDetails.REQUEST_METHOD,
        url: GetExternalSquadsCommand.url,
      },
      GetExternalSquadsCommand.ResponseSchema,
    );
  }

  public async getByUuid(
    uuid: string,
  ): Promise<GetExternalSquadByUuidCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetExternalSquadByUuidCommand.endpointDetails.REQUEST_METHOD,
        url: GetExternalSquadByUuidCommand.url(uuid),
      },
      GetExternalSquadByUuidCommand.ResponseSchema,
    );
  }

  public async create(
    data: CreateExternalSquadCommand.Request,
  ): Promise<CreateExternalSquadCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: CreateExternalSquadCommand.endpointDetails.REQUEST_METHOD,
        url: CreateExternalSquadCommand.url,
        data,
      },
      CreateExternalSquadCommand.ResponseSchema,
    );
  }

  public async update(
    data: UpdateExternalSquadCommand.Request,
  ): Promise<UpdateExternalSquadCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: UpdateExternalSquadCommand.endpointDetails.REQUEST_METHOD,
        url: UpdateExternalSquadCommand.url,
        data,
      },
      UpdateExternalSquadCommand.ResponseSchema,
    );
  }

  public async delete(
    uuid: string,
  ): Promise<DeleteExternalSquadCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: DeleteExternalSquadCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteExternalSquadCommand.url(uuid),
      },
      DeleteExternalSquadCommand.ResponseSchema,
    );
  }

  public async addUsers(
    uuid: string,
  ): Promise<AddUsersToExternalSquadCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: AddUsersToExternalSquadCommand.endpointDetails.REQUEST_METHOD,
        url: AddUsersToExternalSquadCommand.url(uuid),
      },
      AddUsersToExternalSquadCommand.ResponseSchema,
    );
  }

  public async removeUsers(
    uuid: string,
  ): Promise<DeleteUsersFromExternalSquadCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          DeleteUsersFromExternalSquadCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteUsersFromExternalSquadCommand.url(uuid),
      },
      DeleteUsersFromExternalSquadCommand.ResponseSchema,
    );
  }

  public async reorder(
    data: ReorderExternalSquadCommand.Request,
  ): Promise<ReorderExternalSquadCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: ReorderExternalSquadCommand.endpointDetails.REQUEST_METHOD,
        url: ReorderExternalSquadCommand.url,
        data,
      },
      ReorderExternalSquadCommand.ResponseSchema,
    );
  }
}
