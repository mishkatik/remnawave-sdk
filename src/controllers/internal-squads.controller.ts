import {
  AddUsersToInternalSquadCommand,
  CreateInternalSquadCommand,
  DeleteInternalSquadCommand,
  DeleteUsersFromInternalSquadCommand,
  GetInternalSquadAccessibleNodesCommand,
  GetInternalSquadByUuidCommand,
  GetInternalSquadsCommand,
  ReorderInternalSquadCommand,
  UpdateInternalSquadCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class InternalSquadsController {
  constructor(private readonly httpClient: HttpClient) {}

  public async create(
    data: CreateInternalSquadCommand.Request,
  ): Promise<CreateInternalSquadCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: CreateInternalSquadCommand.endpointDetails.REQUEST_METHOD,
        url: CreateInternalSquadCommand.url,
        data,
      },
      CreateInternalSquadCommand.ResponseSchema,
    );
  }

  public async update(
    data: UpdateInternalSquadCommand.Request,
  ): Promise<UpdateInternalSquadCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: UpdateInternalSquadCommand.endpointDetails.REQUEST_METHOD,
        url: UpdateInternalSquadCommand.url,
        data,
      },
      UpdateInternalSquadCommand.ResponseSchema,
    );
  }

  public async delete(
    uuid: string,
  ): Promise<DeleteInternalSquadCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: DeleteInternalSquadCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteInternalSquadCommand.url(uuid),
      },
      DeleteInternalSquadCommand.ResponseSchema,
    );
  }

  public async getAll(): Promise<
    GetInternalSquadsCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetInternalSquadsCommand.endpointDetails.REQUEST_METHOD,
        url: GetInternalSquadsCommand.url,
      },
      GetInternalSquadsCommand.ResponseSchema,
    );
  }

  public async getByUuid(
    uuid: string,
  ): Promise<GetInternalSquadByUuidCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetInternalSquadByUuidCommand.endpointDetails.REQUEST_METHOD,
        url: GetInternalSquadByUuidCommand.url(uuid),
      },
      GetInternalSquadByUuidCommand.ResponseSchema,
    );
  }

  public async getAccessibleNodes(
    uuid: string,
  ): Promise<GetInternalSquadAccessibleNodesCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          GetInternalSquadAccessibleNodesCommand.endpointDetails.REQUEST_METHOD,
        url: GetInternalSquadAccessibleNodesCommand.url(uuid),
      },
      GetInternalSquadAccessibleNodesCommand.ResponseSchema,
    );
  }

  public async addUsers(
    uuid: string,
  ): Promise<AddUsersToInternalSquadCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: AddUsersToInternalSquadCommand.endpointDetails.REQUEST_METHOD,
        url: AddUsersToInternalSquadCommand.url(uuid),
      },
      AddUsersToInternalSquadCommand.ResponseSchema,
    );
  }

  public async deleteUsers(
    uuid: string,
  ): Promise<DeleteUsersFromInternalSquadCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          DeleteUsersFromInternalSquadCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteUsersFromInternalSquadCommand.url(uuid),
      },
      DeleteUsersFromInternalSquadCommand.ResponseSchema,
    );
  }

  public async reorder(
    data: ReorderInternalSquadCommand.Request,
  ): Promise<ReorderInternalSquadCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: ReorderInternalSquadCommand.endpointDetails.REQUEST_METHOD,
        url: ReorderInternalSquadCommand.url,
        data,
      },
      ReorderInternalSquadCommand.ResponseSchema,
    );
  }
}
