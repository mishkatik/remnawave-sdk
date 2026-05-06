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
    return this.httpClient.callApi(
      {
        method:
          GetSubscriptionPageConfigsCommand.endpointDetails.REQUEST_METHOD,
        url: GetSubscriptionPageConfigsCommand.url,
      },
      GetSubscriptionPageConfigsCommand.ResponseSchema,
    );
  }

  public async update(
    data: UpdateSubscriptionPageConfigCommand.Request,
  ): Promise<UpdateSubscriptionPageConfigCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          UpdateSubscriptionPageConfigCommand.endpointDetails.REQUEST_METHOD,
        url: UpdateSubscriptionPageConfigCommand.url,
        data,
      },
      UpdateSubscriptionPageConfigCommand.ResponseSchema,
    );
  }

  public async create(
    data: CreateSubscriptionPageConfigCommand.Request,
  ): Promise<CreateSubscriptionPageConfigCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          CreateSubscriptionPageConfigCommand.endpointDetails.REQUEST_METHOD,
        url: CreateSubscriptionPageConfigCommand.url,
        data,
      },
      CreateSubscriptionPageConfigCommand.ResponseSchema,
    );
  }

  public async getByUuid(
    uuid: string,
  ): Promise<GetSubscriptionPageConfigCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetSubscriptionPageConfigCommand.endpointDetails.REQUEST_METHOD,
        url: GetSubscriptionPageConfigCommand.url(uuid),
      },
      GetSubscriptionPageConfigCommand.ResponseSchema,
    );
  }

  public async delete(
    uuid: string,
  ): Promise<DeleteSubscriptionPageConfigCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          DeleteSubscriptionPageConfigCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteSubscriptionPageConfigCommand.url(uuid),
      },
      DeleteSubscriptionPageConfigCommand.ResponseSchema,
    );
  }

  public async reorder(
    data: ReorderSubscriptionPageConfigsCommand.Request,
  ): Promise<ReorderSubscriptionPageConfigsCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          ReorderSubscriptionPageConfigsCommand.endpointDetails.REQUEST_METHOD,
        url: ReorderSubscriptionPageConfigsCommand.url,
        data,
      },
      ReorderSubscriptionPageConfigsCommand.ResponseSchema,
    );
  }

  public async clone(
    data: CloneSubscriptionPageConfigCommand.Request,
  ): Promise<CloneSubscriptionPageConfigCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          CloneSubscriptionPageConfigCommand.endpointDetails.REQUEST_METHOD,
        url: CloneSubscriptionPageConfigCommand.url,
        data,
      },
      CloneSubscriptionPageConfigCommand.ResponseSchema,
    );
  }
}
