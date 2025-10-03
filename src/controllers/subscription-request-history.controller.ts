import {
  GetSubscriptionRequestHistoryCommand,
  GetSubscriptionRequestHistoryStatsCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class SubscriptionRequestHistoryController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getHistory(
    data: GetSubscriptionRequestHistoryCommand.RequestQuery,
  ): Promise<GetSubscriptionRequestHistoryCommand.Response['response']> {
    return this.httpClient.callApi<
      GetSubscriptionRequestHistoryCommand.Response['response']
    >({
      method:
        GetSubscriptionRequestHistoryCommand.endpointDetails.REQUEST_METHOD,
      url: GetSubscriptionRequestHistoryCommand.url,
      params: data,
    });
  }

  public async getStats(): Promise<
    GetSubscriptionRequestHistoryStatsCommand.Response['response']
  > {
    return this.httpClient.callApi<
      GetSubscriptionRequestHistoryStatsCommand.Response['response']
    >({
      method:
        GetSubscriptionRequestHistoryStatsCommand.endpointDetails
          .REQUEST_METHOD,
      url: GetSubscriptionRequestHistoryStatsCommand.url,
    });
  }
}
