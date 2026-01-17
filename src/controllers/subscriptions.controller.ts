import {
  GetAllSubscriptionsCommand,
  GetRawSubscriptionByShortUuidCommand,
  GetSubpageConfigByShortUuidCommand,
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
    uuid: string,
  ): Promise<GetSubscriptionByUuidCommand.Response['response']> {
    return this.httpClient.callApi<
      GetSubscriptionByUuidCommand.Response['response']
    >({
      method: GetSubscriptionByUuidCommand.endpointDetails.REQUEST_METHOD,
      url: GetSubscriptionByUuidCommand.url(uuid),
    });
  }

  public async getByUsername(
    username: string,
  ): Promise<GetSubscriptionByUsernameCommand.Response['response']> {
    return this.httpClient.callApi<
      GetSubscriptionByUsernameCommand.Response['response']
    >({
      method: GetSubscriptionByUsernameCommand.endpointDetails.REQUEST_METHOD,
      url: GetSubscriptionByUsernameCommand.url(username),
    });
  }

  public async getByShortUuidProtected(
    shortUuid: string,
  ): Promise<GetSubscriptionByShortUuidProtectedCommand.Response['response']> {
    return this.httpClient.callApi<
      GetSubscriptionByShortUuidProtectedCommand.Response['response']
    >({
      method:
        GetSubscriptionByShortUuidProtectedCommand.endpointDetails
          .REQUEST_METHOD,
      url: GetSubscriptionByShortUuidProtectedCommand.url(shortUuid),
    });
  }

  public async getRawByShortUuid(
    shortUuid: string,
  ): Promise<GetRawSubscriptionByShortUuidCommand.Response['response']> {
    return this.httpClient.callApi<
      GetRawSubscriptionByShortUuidCommand.Response['response']
    >({
      method:
        GetRawSubscriptionByShortUuidCommand.endpointDetails.REQUEST_METHOD,
      url: GetRawSubscriptionByShortUuidCommand.url(shortUuid),
    });
  }

  public async getSubPageConfigByShortUuid(
    shortUuid: string,
  ): Promise<GetSubpageConfigByShortUuidCommand.Response['response']> {
    return this.httpClient.callApi<
      GetSubpageConfigByShortUuidCommand.Response['response']
    >({
      method: GetSubpageConfigByShortUuidCommand.endpointDetails.REQUEST_METHOD,
      url: GetSubpageConfigByShortUuidCommand.url(shortUuid),
    });
  }
}
