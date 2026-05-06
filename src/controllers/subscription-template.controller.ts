import {
  CreateSubscriptionTemplateCommand,
  DeleteSubscriptionTemplateCommand,
  GetSubscriptionTemplateCommand,
  GetSubscriptionTemplatesCommand,
  ReorderSubscriptionTemplateCommand,
  UpdateSubscriptionTemplateCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class SubscriptionTemplateController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getAllTemplates(): Promise<
    GetSubscriptionTemplatesCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetSubscriptionTemplatesCommand.endpointDetails.REQUEST_METHOD,
        url: GetSubscriptionTemplatesCommand.url,
      },
      GetSubscriptionTemplatesCommand.ResponseSchema,
    );
  }

  public async createTemplate(
    data: CreateSubscriptionTemplateCommand.Request,
  ): Promise<CreateSubscriptionTemplateCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          CreateSubscriptionTemplateCommand.endpointDetails.REQUEST_METHOD,
        url: CreateSubscriptionTemplateCommand.url,
        data,
      },
      CreateSubscriptionTemplateCommand.ResponseSchema,
    );
  }

  public async getTemplate(
    uuid: string,
  ): Promise<GetSubscriptionTemplateCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetSubscriptionTemplateCommand.endpointDetails.REQUEST_METHOD,
        url: GetSubscriptionTemplateCommand.url(uuid),
      },
      GetSubscriptionTemplateCommand.ResponseSchema,
    );
  }

  public async updateTemplate(
    data: UpdateSubscriptionTemplateCommand.Request,
  ): Promise<UpdateSubscriptionTemplateCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          UpdateSubscriptionTemplateCommand.endpointDetails.REQUEST_METHOD,
        url: UpdateSubscriptionTemplateCommand.url,
        data,
      },
      UpdateSubscriptionTemplateCommand.ResponseSchema,
    );
  }

  public async deleteTemplate(
    uuid: string,
  ): Promise<DeleteSubscriptionTemplateCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          DeleteSubscriptionTemplateCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteSubscriptionTemplateCommand.url(uuid),
      },
      DeleteSubscriptionTemplateCommand.ResponseSchema,
    );
  }

  public async reorder(
    data: ReorderSubscriptionTemplateCommand.Request,
  ): Promise<ReorderSubscriptionTemplateCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          ReorderSubscriptionTemplateCommand.endpointDetails.REQUEST_METHOD,
        url: ReorderSubscriptionTemplateCommand.url,
        data,
      },
      ReorderSubscriptionTemplateCommand.ResponseSchema,
    );
  }
}
