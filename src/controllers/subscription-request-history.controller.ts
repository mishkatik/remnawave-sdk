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
    return this.httpClient.callApi(
      {
        method:
          GetSubscriptionRequestHistoryCommand.endpointDetails.REQUEST_METHOD,
        url: GetSubscriptionRequestHistoryCommand.url,
        params: data,
      },
      GetSubscriptionRequestHistoryCommand.ResponseSchema,
    );
  }

  public async getStats(): Promise<
    GetSubscriptionRequestHistoryStatsCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method:
          GetSubscriptionRequestHistoryStatsCommand.endpointDetails
            .REQUEST_METHOD,
        url: GetSubscriptionRequestHistoryStatsCommand.url,
      },
      GetSubscriptionRequestHistoryStatsCommand.ResponseSchema,
    );
  }
}
