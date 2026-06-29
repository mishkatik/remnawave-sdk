import {
  GetAllSubscriptionsCommand,
  GetConnectionKeysByUuidCommand,
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
    return this.httpClient.callApi(
      {
        method: GetAllSubscriptionsCommand.endpointDetails.REQUEST_METHOD,
        url: GetAllSubscriptionsCommand.url,
        params: data,
      },
      GetAllSubscriptionsCommand.ResponseSchema,
    );
  }

  public async getByUuid(
    uuid: string,
  ): Promise<GetSubscriptionByUuidCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetSubscriptionByUuidCommand.endpointDetails.REQUEST_METHOD,
        url: GetSubscriptionByUuidCommand.url(uuid),
      },
      GetSubscriptionByUuidCommand.ResponseSchema,
    );
  }

  public async getByUsername(
    username: string,
  ): Promise<GetSubscriptionByUsernameCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetSubscriptionByUsernameCommand.endpointDetails.REQUEST_METHOD,
        url: GetSubscriptionByUsernameCommand.url(username),
      },
      GetSubscriptionByUsernameCommand.ResponseSchema,
    );
  }

  public async getByShortUuidProtected(
    shortUuid: string,
  ): Promise<GetSubscriptionByShortUuidProtectedCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          GetSubscriptionByShortUuidProtectedCommand.endpointDetails
            .REQUEST_METHOD,
        url: GetSubscriptionByShortUuidProtectedCommand.url(shortUuid),
      },
      GetSubscriptionByShortUuidProtectedCommand.ResponseSchema,
    );
  }

  public async getRawByShortUuid(
    shortUuid: string,
  ): Promise<GetRawSubscriptionByShortUuidCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          GetRawSubscriptionByShortUuidCommand.endpointDetails.REQUEST_METHOD,
        url: GetRawSubscriptionByShortUuidCommand.url(shortUuid),
      },
      GetRawSubscriptionByShortUuidCommand.ResponseSchema,
    );
  }

  public async getSubPageConfigByShortUuid(
    shortUuid: string,
    data: GetSubpageConfigByShortUuidCommand.RequestBody,
  ): Promise<GetSubpageConfigByShortUuidCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          GetSubpageConfigByShortUuidCommand.endpointDetails.REQUEST_METHOD,
        url: GetSubpageConfigByShortUuidCommand.url(shortUuid),
        data,
      },
      GetSubpageConfigByShortUuidCommand.ResponseSchema,
    );
  }

  public async getConnectionKeysByUuid(
    uuid: string,
  ): Promise<GetConnectionKeysByUuidCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetConnectionKeysByUuidCommand.endpointDetails.REQUEST_METHOD,
        url: GetConnectionKeysByUuidCommand.url(uuid),
      },
      GetConnectionKeysByUuidCommand.ResponseSchema,
    );
  }
}
