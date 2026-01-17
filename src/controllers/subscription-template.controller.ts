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
    return this.httpClient.callApi<
      GetSubscriptionTemplatesCommand.Response['response']
    >({
      method: GetSubscriptionTemplatesCommand.endpointDetails.REQUEST_METHOD,
      url: GetSubscriptionTemplatesCommand.url,
    });
  }

  public async createTemplate(
    data: CreateSubscriptionTemplateCommand.Request,
  ): Promise<CreateSubscriptionTemplateCommand.Response['response']> {
    return this.httpClient.callApi<
      CreateSubscriptionTemplateCommand.Response['response']
    >({
      method: CreateSubscriptionTemplateCommand.endpointDetails.REQUEST_METHOD,
      url: CreateSubscriptionTemplateCommand.url,
      data,
    });
  }

  public async getTemplate(
    uuid: string,
  ): Promise<GetSubscriptionTemplateCommand.Response['response']> {
    return this.httpClient.callApi<
      GetSubscriptionTemplateCommand.Response['response']
    >({
      method: GetSubscriptionTemplateCommand.endpointDetails.REQUEST_METHOD,
      url: GetSubscriptionTemplateCommand.url(uuid),
    });
  }

  public async updateTemplate(
    data: UpdateSubscriptionTemplateCommand.Request,
  ): Promise<UpdateSubscriptionTemplateCommand.Response['response']> {
    return this.httpClient.callApi<
      UpdateSubscriptionTemplateCommand.Response['response']
    >({
      method: UpdateSubscriptionTemplateCommand.endpointDetails.REQUEST_METHOD,
      url: UpdateSubscriptionTemplateCommand.url,
      data,
    });
  }

  public async deleteTemplate(
    uuid: string,
  ): Promise<DeleteSubscriptionTemplateCommand.Response['response']> {
    return this.httpClient.callApi<
      DeleteSubscriptionTemplateCommand.Response['response']
    >({
      method: DeleteSubscriptionTemplateCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteSubscriptionTemplateCommand.url(uuid),
    });
  }

  public async reorder(
    data: ReorderSubscriptionTemplateCommand.Request,
  ): Promise<ReorderSubscriptionTemplateCommand.Response['response']> {
    return this.httpClient.callApi<
      ReorderSubscriptionTemplateCommand.Response['response']
    >({
      method: ReorderSubscriptionTemplateCommand.endpointDetails.REQUEST_METHOD,
      url: ReorderSubscriptionTemplateCommand.url,
      data,
    });
  }
}
