import { GetSubscriptionInfoByShortUuidCommand } from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class SubscriptionController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getInfoByShortUuid(
    shortUuid: string,
  ): Promise<GetSubscriptionInfoByShortUuidCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          GetSubscriptionInfoByShortUuidCommand.endpointDetails.REQUEST_METHOD,
        url: GetSubscriptionInfoByShortUuidCommand.url(shortUuid),
      },
      GetSubscriptionInfoByShortUuidCommand.ResponseSchema,
    );
  }
}
