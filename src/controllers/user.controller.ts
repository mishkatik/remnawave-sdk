import {
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
  GetUserByShortUuidCommand,
  GetUserByTagCommand,
  GetUserByTelegramIdCommand,
  GetUserByUsernameCommand,
  GetUserByUuidCommand,
  GetUserSubscriptionRequestHistoryCommand,
  GetUserUsageByRangeCommand,
  ResetUserTrafficCommand,
  RevokeUserSubscriptionCommand,
  UpdateUserCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class UserController {
  constructor(private readonly httpClient: HttpClient) {}

  public async create(
    user: CreateUserCommand.Request,
  ): Promise<CreateUserCommand.Response['response']> {
    return this.httpClient.callApi<CreateUserCommand.Response['response']>({
      method: CreateUserCommand.endpointDetails.REQUEST_METHOD,
      url: CreateUserCommand.url,
      data: user,
    });
  }

  public async updateByUuidOrUsername(
    data: UpdateUserCommand.Request,
  ): Promise<UpdateUserCommand.Response['response']> {
    return this.httpClient.callApi<UpdateUserCommand.Response['response']>({
      method: UpdateUserCommand.endpointDetails.REQUEST_METHOD,
      url: UpdateUserCommand.url,
      data,
    });
  }

  public async getAll(
    data: GetAllUsersCommand.RequestQuery,
  ): Promise<GetAllUsersCommand.Response['response']> {
    return this.httpClient.callApi<GetAllUsersCommand.Response['response']>({
      method: GetAllUsersCommand.endpointDetails.REQUEST_METHOD,
      url: GetAllUsersCommand.url,
      params: data,
    });
  }

  public async delete(
    data: DeleteUserCommand.Request,
  ): Promise<DeleteUserCommand.Response['response']> {
    return this.httpClient.callApi<DeleteUserCommand.Response['response']>({
      method: DeleteUserCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteUserCommand.url(data.uuid),
    });
  }

  public async getByUuid(
    data: GetUserByUuidCommand.Request,
  ): Promise<GetUserByUuidCommand.Response['response']> {
    return this.httpClient.callApi<GetUserByUuidCommand.Response['response']>({
      method: GetUserByUuidCommand.endpointDetails.REQUEST_METHOD,
      url: GetUserByUuidCommand.url(data.uuid),
    });
  }

  public async getAllExistingTags(): Promise<
    GetAllTagsCommand.Response['response']
  > {
    return this.httpClient.callApi<GetAllTagsCommand.Response['response']>({
      method: GetAllTagsCommand.endpointDetails.REQUEST_METHOD,
      url: GetAllTagsCommand.url,
    });
  }

  public async getUserAccessibleNodes(
    data: GetUserAccessibleNodesCommand.Request,
  ): Promise<GetUserAccessibleNodesCommand.Response['response']> {
    return this.httpClient.callApi<
      GetUserAccessibleNodesCommand.Response['response']
    >({
      method: GetUserAccessibleNodesCommand.endpointDetails.REQUEST_METHOD,
      url: GetUserAccessibleNodesCommand.url(data.uuid),
    });
  }

  public async getSubscriptionRequestHistory(
    data: GetUserSubscriptionRequestHistoryCommand.Request,
  ): Promise<GetUserSubscriptionRequestHistoryCommand.Response['response']> {
    return this.httpClient.callApi<
      GetUserSubscriptionRequestHistoryCommand.Response['response']
    >({
      method:
        GetUserSubscriptionRequestHistoryCommand.endpointDetails.REQUEST_METHOD,
      url: GetUserSubscriptionRequestHistoryCommand.url(data.uuid),
    });
  }

  public async getByShortUuid(
    data: GetUserByShortUuidCommand.Request,
  ): Promise<GetUserByShortUuidCommand.Response['response']> {
    return this.httpClient.callApi<
      GetUserByShortUuidCommand.Response['response']
    >({
      method: GetUserByShortUuidCommand.endpointDetails.REQUEST_METHOD,
      url: GetUserByShortUuidCommand.url(data.shortUuid),
    });
  }

  public async getByUsername(
    data: GetUserByUsernameCommand.Request,
  ): Promise<GetUserByUsernameCommand.Response['response']> {
    return this.httpClient.callApi<
      GetUserByUsernameCommand.Response['response']
    >({
      method: GetUserByUsernameCommand.endpointDetails.REQUEST_METHOD,
      url: GetUserByUsernameCommand.url(data.username),
    });
  }

  public async getByTelegramId(
    data: GetUserByTelegramIdCommand.Request,
  ): Promise<GetUserByTelegramIdCommand.Response['response']> {
    return this.httpClient.callApi<
      GetUserByTelegramIdCommand.Response['response']
    >({
      method: GetUserByTelegramIdCommand.endpointDetails.REQUEST_METHOD,
      url: GetUserByTelegramIdCommand.url(data.telegramId),
    });
  }

  public async getByEmail(
    data: GetUserByEmailCommand.Request,
  ): Promise<GetUserByEmailCommand.Response['response']> {
    return this.httpClient.callApi<GetUserByEmailCommand.Response['response']>({
      method: GetUserByEmailCommand.endpointDetails.REQUEST_METHOD,
      url: GetUserByEmailCommand.url(data.email),
    });
  }

  public async getByTag(
    data: GetUserByTagCommand.Request,
  ): Promise<GetUserByTagCommand.Response['response']> {
    return this.httpClient.callApi<GetUserByTagCommand.Response['response']>({
      method: GetUserByTagCommand.endpointDetails.REQUEST_METHOD,
      url: GetUserByTagCommand.url(data.tag),
    });
  }

  public async revoke(
    uuid: string,
    data?: RevokeUserSubscriptionCommand.Request,
  ): Promise<RevokeUserSubscriptionCommand.Response['response']> {
    return this.httpClient.callApi<
      RevokeUserSubscriptionCommand.Response['response']
    >({
      method: RevokeUserSubscriptionCommand.endpointDetails.REQUEST_METHOD,
      url: RevokeUserSubscriptionCommand.url(uuid),
      data,
    });
  }

  public async disable(
    data: DisableUserCommand.Request,
  ): Promise<DisableUserCommand.Response['response']> {
    return this.httpClient.callApi<DisableUserCommand.Response['response']>({
      method: DisableUserCommand.endpointDetails.REQUEST_METHOD,
      url: DisableUserCommand.url(data.uuid),
    });
  }

  public async enable(
    data: EnableUserCommand.Request,
  ): Promise<EnableUserCommand.Response['response']> {
    return this.httpClient.callApi<EnableUserCommand.Response['response']>({
      method: EnableUserCommand.endpointDetails.REQUEST_METHOD,
      url: EnableUserCommand.url(data.uuid),
    });
  }

  public async resetTraffic(
    data: ResetUserTrafficCommand.Request,
  ): Promise<ResetUserTrafficCommand.Response['response']> {
    return this.httpClient.callApi<
      ResetUserTrafficCommand.Response['response']
    >({
      method: ResetUserTrafficCommand.endpointDetails.REQUEST_METHOD,
      url: ResetUserTrafficCommand.url(data.uuid),
    });
  }

  public async getUserUsageByRange(
    data: GetUserUsageByRangeCommand.Request,
    query: GetUserUsageByRangeCommand.RequestQuery,
  ): Promise<GetUserUsageByRangeCommand.Response['response']> {
    return this.httpClient.callApi<
      GetUserUsageByRangeCommand.Response['response']
    >({
      method: GetUserUsageByRangeCommand.endpointDetails.REQUEST_METHOD,
      url: GetUserUsageByRangeCommand.url(data.uuid),
      params: query,
    });
  }

  // Bulk operations
  public async bulkDelete(
    data: BulkDeleteUsersCommand.Request,
  ): Promise<BulkDeleteUsersCommand.Response['response']> {
    return this.httpClient.callApi<BulkDeleteUsersCommand.Response['response']>(
      {
        method: BulkDeleteUsersCommand.endpointDetails.REQUEST_METHOD,
        url: BulkDeleteUsersCommand.url,
        data,
      },
    );
  }

  public async bulkDeleteByStatus(
    data: BulkDeleteUsersByStatusCommand.Request,
  ): Promise<BulkDeleteUsersByStatusCommand.Response['response']> {
    return this.httpClient.callApi<
      BulkDeleteUsersByStatusCommand.Response['response']
    >({
      method: BulkDeleteUsersByStatusCommand.endpointDetails.REQUEST_METHOD,
      url: BulkDeleteUsersByStatusCommand.url,
      data,
    });
  }

  public async bulkResetTraffic(
    data: BulkResetTrafficUsersCommand.Request,
  ): Promise<BulkResetTrafficUsersCommand.Response['response']> {
    return this.httpClient.callApi<
      BulkResetTrafficUsersCommand.Response['response']
    >({
      method: BulkResetTrafficUsersCommand.endpointDetails.REQUEST_METHOD,
      url: BulkResetTrafficUsersCommand.url,
      data,
    });
  }

  public async bulkRevokeSubscription(
    data: BulkRevokeUsersSubscriptionCommand.Request,
  ): Promise<BulkRevokeUsersSubscriptionCommand.Response['response']> {
    return this.httpClient.callApi<
      BulkRevokeUsersSubscriptionCommand.Response['response']
    >({
      method: BulkRevokeUsersSubscriptionCommand.endpointDetails.REQUEST_METHOD,
      url: BulkRevokeUsersSubscriptionCommand.url,
      data,
    });
  }

  public async bulkUpdate(
    data: BulkUpdateUsersCommand.Request,
  ): Promise<BulkUpdateUsersCommand.Response['response']> {
    return this.httpClient.callApi<BulkUpdateUsersCommand.Response['response']>(
      {
        method: BulkUpdateUsersCommand.endpointDetails.REQUEST_METHOD,
        url: BulkUpdateUsersCommand.url,
        data,
      },
    );
  }

  public async bulkUpdateSquads(
    data: BulkUpdateUsersSquadsCommand.Request,
  ): Promise<BulkUpdateUsersSquadsCommand.Response['response']> {
    return this.httpClient.callApi<
      BulkUpdateUsersSquadsCommand.Response['response']
    >({
      method: BulkUpdateUsersSquadsCommand.endpointDetails.REQUEST_METHOD,
      url: BulkUpdateUsersSquadsCommand.url,
      data,
    });
  }

  // Bulk all operations
  public async bulkAllResetTraffic(): Promise<
    BulkAllResetTrafficUsersCommand.Response['response']
  > {
    return this.httpClient.callApi<
      BulkAllResetTrafficUsersCommand.Response['response']
    >({
      method: BulkAllResetTrafficUsersCommand.endpointDetails.REQUEST_METHOD,
      url: BulkAllResetTrafficUsersCommand.url,
    });
  }

  public async bulkAllUpdate(
    data: BulkAllUpdateUsersCommand.Request,
  ): Promise<BulkAllUpdateUsersCommand.Response['response']> {
    return this.httpClient.callApi<
      BulkAllUpdateUsersCommand.Response['response']
    >({
      method: BulkAllUpdateUsersCommand.endpointDetails.REQUEST_METHOD,
      url: BulkAllUpdateUsersCommand.url,
      data,
    });
  }
}
