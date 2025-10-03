import {
  GetAllSubscriptionsCommand,
  GetSubscriptionByShortUuidProtectedCommand,
  GetSubscriptionByUsernameCommand,
  GetSubscriptionByUuidCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class SubscriptionsController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getAll(
    data: GetAllSubscriptionsCommand.RequestQuery,
  ): Promise<GetAllSubscriptionsCommand.Response['response']> {
    return this.httpClient.callApi<
      GetAllSubscriptionsCommand.Response['response']
    >({
      method: GetAllSubscriptionsCommand.endpointDetails.REQUEST_METHOD,
      url: GetAllSubscriptionsCommand.url,
      params: data,
    });
  }

  public async getByUuid(
    data: GetSubscriptionByUuidCommand.Request,
  ): Promise<GetSubscriptionByUuidCommand.Response['response']> {
    return this.httpClient.callApi<
      GetSubscriptionByUuidCommand.Response['response']
    >({
      method: GetSubscriptionByUuidCommand.endpointDetails.REQUEST_METHOD,
      url: GetSubscriptionByUuidCommand.url(data.uuid),
    });
  }

  public async getByUsername(
    data: GetSubscriptionByUsernameCommand.Request,
  ): Promise<GetSubscriptionByUsernameCommand.Response['response']> {
    return this.httpClient.callApi<
      GetSubscriptionByUsernameCommand.Response['response']
    >({
      method: GetSubscriptionByUsernameCommand.endpointDetails.REQUEST_METHOD,
      url: GetSubscriptionByUsernameCommand.url(data.username),
    });
  }

  public async getByShortUuidProtected(
    data: GetSubscriptionByShortUuidProtectedCommand.Request,
  ): Promise<GetSubscriptionByShortUuidProtectedCommand.Response['response']> {
    return this.httpClient.callApi<
      GetSubscriptionByShortUuidProtectedCommand.Response['response']
    >({
      method:
        GetSubscriptionByShortUuidProtectedCommand.endpointDetails
          .REQUEST_METHOD,
      url: GetSubscriptionByShortUuidProtectedCommand.url(data.shortUuid),
    });
  }
}
