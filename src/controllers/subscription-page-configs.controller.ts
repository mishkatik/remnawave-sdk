import {
  CloneSubscriptionPageConfigCommand,
  CreateSubscriptionPageConfigCommand,
  DeleteSubscriptionPageConfigCommand,
  GetSubscriptionPageConfigCommand,
  GetSubscriptionPageConfigsCommand,
  ReorderSubscriptionPageConfigsCommand,
  UpdateSubscriptionPageConfigCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class SubscriptionPageConfigsController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getAll(): Promise<
    GetSubscriptionPageConfigsCommand.Response['response']
  > {
    return this.httpClient.callApi<
      GetSubscriptionPageConfigsCommand.Response['response']
    >({
      method: GetSubscriptionPageConfigsCommand.endpointDetails.REQUEST_METHOD,
      url: GetSubscriptionPageConfigsCommand.url,
    });
  }

  public async update(
    data: UpdateSubscriptionPageConfigCommand.Request,
  ): Promise<UpdateSubscriptionPageConfigCommand.Response['response']> {
    return this.httpClient.callApi<
      UpdateSubscriptionPageConfigCommand.Response['response']
    >({
      method:
        UpdateSubscriptionPageConfigCommand.endpointDetails.REQUEST_METHOD,
      url: UpdateSubscriptionPageConfigCommand.url,
      data,
    });
  }

  public async create(
    data: CreateSubscriptionPageConfigCommand.Request,
  ): Promise<CreateSubscriptionPageConfigCommand.Response['response']> {
    return this.httpClient.callApi<
      CreateSubscriptionPageConfigCommand.Response['response']
    >({
      method:
        CreateSubscriptionPageConfigCommand.endpointDetails.REQUEST_METHOD,
      url: CreateSubscriptionPageConfigCommand.url,
      data,
    });
  }

  public async getByUuid(
    uuid: string,
  ): Promise<GetSubscriptionPageConfigCommand.Response['response']> {
    return this.httpClient.callApi<
      GetSubscriptionPageConfigCommand.Response['response']
    >({
      method: GetSubscriptionPageConfigCommand.endpointDetails.REQUEST_METHOD,
      url: GetSubscriptionPageConfigCommand.url(uuid),
    });
  }

  public async delete(
    uuid: string,
  ): Promise<DeleteSubscriptionPageConfigCommand.Response['response']> {
    return this.httpClient.callApi<
      DeleteSubscriptionPageConfigCommand.Response['response']
    >({
      method:
        DeleteSubscriptionPageConfigCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteSubscriptionPageConfigCommand.url(uuid),
    });
  }

  public async reorder(
    data: ReorderSubscriptionPageConfigsCommand.Request,
  ): Promise<ReorderSubscriptionPageConfigsCommand.Response['response']> {
    return this.httpClient.callApi<
      ReorderSubscriptionPageConfigsCommand.Response['response']
    >({
      method:
        ReorderSubscriptionPageConfigsCommand.endpointDetails.REQUEST_METHOD,
      url: ReorderSubscriptionPageConfigsCommand.url,
      data,
    });
  }

  public async clone(
    data: CloneSubscriptionPageConfigCommand.Request,
  ): Promise<CloneSubscriptionPageConfigCommand.Response['response']> {
    return this.httpClient.callApi<
      CloneSubscriptionPageConfigCommand.Response['response']
    >({
      method: CloneSubscriptionPageConfigCommand.endpointDetails.REQUEST_METHOD,
      url: CloneSubscriptionPageConfigCommand.url,
      data,
    });
  }
}
