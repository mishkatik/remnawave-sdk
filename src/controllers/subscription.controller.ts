import { GetSubscriptionInfoByShortUuidCommand } from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class SubscriptionController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getInfoByShortUuid(
    data: GetSubscriptionInfoByShortUuidCommand.Request,
  ): Promise<GetSubscriptionInfoByShortUuidCommand.Response['response']> {
    return this.httpClient.callApi<
      GetSubscriptionInfoByShortUuidCommand.Response['response']
    >({
      method:
        GetSubscriptionInfoByShortUuidCommand.endpointDetails.REQUEST_METHOD,
      url: GetSubscriptionInfoByShortUuidCommand.url(data.shortUuid),
    });
  }
}
