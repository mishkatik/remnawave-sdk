import {
  GetSubscriptionSettingsCommand,
  UpdateSubscriptionSettingsCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class SubscriptionSettingsController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getSettings(): Promise<
    GetSubscriptionSettingsCommand.Response['response']
  > {
    return this.httpClient.callApi<
      GetSubscriptionSettingsCommand.Response['response']
    >({
      method: GetSubscriptionSettingsCommand.endpointDetails.REQUEST_METHOD,
      url: GetSubscriptionSettingsCommand.url,
    });
  }

  public async updateSettings(
    data: UpdateSubscriptionSettingsCommand.Request,
  ): Promise<UpdateSubscriptionSettingsCommand.Response['response']> {
    return this.httpClient.callApi<
      UpdateSubscriptionSettingsCommand.Response['response']
    >({
      method: UpdateSubscriptionSettingsCommand.endpointDetails.REQUEST_METHOD,
      url: UpdateSubscriptionSettingsCommand.url,
      data,
    });
  }
}
