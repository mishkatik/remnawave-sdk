import {
  BulkAllExtendExpirationDateCommand,
  BulkAllResetTrafficUsersCommand,
  BulkAllUpdateUsersCommand,
  BulkDeleteUsersByStatusCommand,
  BulkDeleteUsersCommand,
  BulkResetTrafficUsersCommand,
  BulkRevokeUsersSubscriptionCommand,
  BulkUpdateUsersCommand,
  BulkUpdateUsersSquadsCommand,
  CreateUserCommand,
  DeleteUserCommand,
  DisableUserCommand,
  EnableUserCommand,
  GetAllTagsCommand,
  GetAllUsersCommand,
  GetUserAccessibleNodesCommand,
  GetUserByEmailCommand,
  GetUserByIdCommand,
  GetUserByShortUuidCommand,
  GetUserByTagCommand,
  GetUserByTelegramIdCommand,
  GetUserByUsernameCommand,
  GetUserByUuidCommand,
  GetUserSubscriptionRequestHistoryCommand,
  ResetUserTrafficCommand,
  ResolveUserCommand,
  RevokeUserSubscriptionCommand,
  UpdateUserCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class UserController {
  constructor(private readonly httpClient: HttpClient) {}

  public async create(
    user: CreateUserCommand.Request,
  ): Promise<CreateUserCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: CreateUserCommand.endpointDetails.REQUEST_METHOD,
        url: CreateUserCommand.url,
        data: user,
      },
      CreateUserCommand.ResponseSchema,
    );
  }

  public async updateByUuidOrUsername(
    data: UpdateUserCommand.Request,
  ): Promise<UpdateUserCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: UpdateUserCommand.endpointDetails.REQUEST_METHOD,
        url: UpdateUserCommand.url,
        data,
      },
      UpdateUserCommand.ResponseSchema,
    );
  }

  public async getAll(
    data: GetAllUsersCommand.RequestQuery,
  ): Promise<GetAllUsersCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetAllUsersCommand.endpointDetails.REQUEST_METHOD,
        url: GetAllUsersCommand.url,
        params: data,
      },
      GetAllUsersCommand.ResponseSchema,
    );
  }

  public async delete(
    uuid: string,
  ): Promise<DeleteUserCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: DeleteUserCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteUserCommand.url(uuid),
      },
      DeleteUserCommand.ResponseSchema,
    );
  }

  public async getByUuid(
    uuid: string,
  ): Promise<GetUserByUuidCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetUserByUuidCommand.endpointDetails.REQUEST_METHOD,
        url: GetUserByUuidCommand.url(uuid),
      },
      GetUserByUuidCommand.ResponseSchema,
    );
  }

  public async getAllExistingTags(): Promise<
    GetAllTagsCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetAllTagsCommand.endpointDetails.REQUEST_METHOD,
        url: GetAllTagsCommand.url,
      },
      GetAllTagsCommand.ResponseSchema,
    );
  }

  public async getUserAccessibleNodes(
    uuid: string,
  ): Promise<GetUserAccessibleNodesCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetUserAccessibleNodesCommand.endpointDetails.REQUEST_METHOD,
        url: GetUserAccessibleNodesCommand.url(uuid),
      },
      GetUserAccessibleNodesCommand.ResponseSchema,
    );
  }

  public async getSubscriptionRequestHistory(
    uuid: string,
  ): Promise<GetUserSubscriptionRequestHistoryCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          GetUserSubscriptionRequestHistoryCommand.endpointDetails
            .REQUEST_METHOD,
        url: GetUserSubscriptionRequestHistoryCommand.url(uuid),
      },
      GetUserSubscriptionRequestHistoryCommand.ResponseSchema,
    );
  }

  public async getByShortUuid(
    shortUuid: string,
  ): Promise<GetUserByShortUuidCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetUserByShortUuidCommand.endpointDetails.REQUEST_METHOD,
        url: GetUserByShortUuidCommand.url(shortUuid),
      },
      GetUserByShortUuidCommand.ResponseSchema,
    );
  }

  public async getByUsername(
    username: string,
  ): Promise<GetUserByUsernameCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetUserByUsernameCommand.endpointDetails.REQUEST_METHOD,
        url: GetUserByUsernameCommand.url(username),
      },
      GetUserByUsernameCommand.ResponseSchema,
    );
  }

  public async getById(
    id: string,
  ): Promise<GetUserByIdCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetUserByIdCommand.endpointDetails.REQUEST_METHOD,
        url: GetUserByIdCommand.url(id),
      },
      GetUserByIdCommand.ResponseSchema,
    );
  }

  public async getByTelegramId(
    telegramId: string,
  ): Promise<GetUserByTelegramIdCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetUserByTelegramIdCommand.endpointDetails.REQUEST_METHOD,
        url: GetUserByTelegramIdCommand.url(telegramId),
      },
      GetUserByTelegramIdCommand.ResponseSchema,
    );
  }

  public async getByEmail(
    email: string,
  ): Promise<GetUserByEmailCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetUserByEmailCommand.endpointDetails.REQUEST_METHOD,
        url: GetUserByEmailCommand.url(email),
      },
      GetUserByEmailCommand.ResponseSchema,
    );
  }

  public async getByTag(
    tag: string,
  ): Promise<GetUserByTagCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetUserByTagCommand.endpointDetails.REQUEST_METHOD,
        url: GetUserByTagCommand.url(tag),
      },
      GetUserByTagCommand.ResponseSchema,
    );
  }

  public async revoke(
    uuid: string,
    data?: RevokeUserSubscriptionCommand.RequestBody,
  ): Promise<RevokeUserSubscriptionCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: RevokeUserSubscriptionCommand.endpointDetails.REQUEST_METHOD,
        url: RevokeUserSubscriptionCommand.url(uuid),
        data,
      },
      RevokeUserSubscriptionCommand.ResponseSchema,
    );
  }

  public async disable(
    uuid: string,
  ): Promise<DisableUserCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: DisableUserCommand.endpointDetails.REQUEST_METHOD,
        url: DisableUserCommand.url(uuid),
      },
      DisableUserCommand.ResponseSchema,
    );
  }

  public async enable(
    uuid: string,
  ): Promise<EnableUserCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: EnableUserCommand.endpointDetails.REQUEST_METHOD,
        url: EnableUserCommand.url(uuid),
      },
      EnableUserCommand.ResponseSchema,
    );
  }

  public async resetTraffic(
    uuid: string,
  ): Promise<ResetUserTrafficCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: ResetUserTrafficCommand.endpointDetails.REQUEST_METHOD,
        url: ResetUserTrafficCommand.url(uuid),
      },
      ResetUserTrafficCommand.ResponseSchema,
    );
  }

  public async resolve(
    data: ResolveUserCommand.Request,
  ): Promise<ResolveUserCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: ResolveUserCommand.endpointDetails.REQUEST_METHOD,
        url: ResolveUserCommand.url,
        data,
      },
      ResolveUserCommand.ResponseSchema,
    );
  }

  // Bulk operations
  public async bulkDelete(
    data: BulkDeleteUsersCommand.Request,
  ): Promise<BulkDeleteUsersCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: BulkDeleteUsersCommand.endpointDetails.REQUEST_METHOD,
        url: BulkDeleteUsersCommand.url,
        data,
      },
      BulkDeleteUsersCommand.ResponseSchema,
    );
  }

  public async bulkDeleteByStatus(
    data: BulkDeleteUsersByStatusCommand.Request,
  ): Promise<BulkDeleteUsersByStatusCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: BulkDeleteUsersByStatusCommand.endpointDetails.REQUEST_METHOD,
        url: BulkDeleteUsersByStatusCommand.url,
        data,
      },
      BulkDeleteUsersByStatusCommand.ResponseSchema,
    );
  }

  public async bulkResetTraffic(
    data: BulkResetTrafficUsersCommand.Request,
  ): Promise<BulkResetTrafficUsersCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: BulkResetTrafficUsersCommand.endpointDetails.REQUEST_METHOD,
        url: BulkResetTrafficUsersCommand.url,
        data,
      },
      BulkResetTrafficUsersCommand.ResponseSchema,
    );
  }

  public async bulkRevokeSubscription(
    data: BulkRevokeUsersSubscriptionCommand.Request,
  ): Promise<BulkRevokeUsersSubscriptionCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          BulkRevokeUsersSubscriptionCommand.endpointDetails.REQUEST_METHOD,
        url: BulkRevokeUsersSubscriptionCommand.url,
        data,
      },
      BulkRevokeUsersSubscriptionCommand.ResponseSchema,
    );
  }

  public async bulkUpdate(
    data: BulkUpdateUsersCommand.Request,
  ): Promise<BulkUpdateUsersCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: BulkUpdateUsersCommand.endpointDetails.REQUEST_METHOD,
        url: BulkUpdateUsersCommand.url,
        data,
      },
      BulkUpdateUsersCommand.ResponseSchema,
    );
  }

  public async bulkUpdateSquads(
    data: BulkUpdateUsersSquadsCommand.Request,
  ): Promise<BulkUpdateUsersSquadsCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: BulkUpdateUsersSquadsCommand.endpointDetails.REQUEST_METHOD,
        url: BulkUpdateUsersSquadsCommand.url,
        data,
      },
      BulkUpdateUsersSquadsCommand.ResponseSchema,
    );
  }

  // Bulk all operations
  public async bulkAllResetTraffic(): Promise<
    BulkAllResetTrafficUsersCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: BulkAllResetTrafficUsersCommand.endpointDetails.REQUEST_METHOD,
        url: BulkAllResetTrafficUsersCommand.url,
      },
      BulkAllResetTrafficUsersCommand.ResponseSchema,
    );
  }

  public async bulkAllUpdate(
    data: BulkAllUpdateUsersCommand.Request,
  ): Promise<BulkAllUpdateUsersCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: BulkAllUpdateUsersCommand.endpointDetails.REQUEST_METHOD,
        url: BulkAllUpdateUsersCommand.url,
        data,
      },
      BulkAllUpdateUsersCommand.ResponseSchema,
    );
  }

  public async bulkExtendAllExpiration(
    data: BulkAllExtendExpirationDateCommand.Request,
  ): Promise<BulkAllExtendExpirationDateCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          BulkAllExtendExpirationDateCommand.endpointDetails.REQUEST_METHOD,
        url: BulkAllExtendExpirationDateCommand.url,
        data,
      },
      BulkAllExtendExpirationDateCommand.ResponseSchema,
    );
  }
}
