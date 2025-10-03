import {
  GetSubscriptionTemplateCommand,
  UpdateSubscriptionTemplateCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class SubscriptionTemplateController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getTemplate(
    data: GetSubscriptionTemplateCommand.Request,
  ): Promise<GetSubscriptionTemplateCommand.Response['response']> {
    return this.httpClient.callApi<
      GetSubscriptionTemplateCommand.Response['response']
    >({
      method: GetSubscriptionTemplateCommand.endpointDetails.REQUEST_METHOD,
      url: GetSubscriptionTemplateCommand.url(data.templateType),
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
}
