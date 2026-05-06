import {
  GetRemnawaveSettingsCommand,
  UpdateRemnawaveSettingsCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class RemnawaveSettingsController {
  constructor(private readonly httpClient: HttpClient) {}

  public async get(): Promise<
    GetRemnawaveSettingsCommand.Response['response']
  > {
    return this.httpClient.callApi<
      GetRemnawaveSettingsCommand.Response['response']
    >({
      method: GetRemnawaveSettingsCommand.endpointDetails.REQUEST_METHOD,
      url: GetRemnawaveSettingsCommand.url,
    });
  }

  public async update(
    data: UpdateRemnawaveSettingsCommand.Request,
  ): Promise<UpdateRemnawaveSettingsCommand.Response['response']> {
    return this.httpClient.callApi<
      UpdateRemnawaveSettingsCommand.Response['response']
    >({
      method: UpdateRemnawaveSettingsCommand.endpointDetails.REQUEST_METHOD,
      url: UpdateRemnawaveSettingsCommand.url,
      data,
    });
  }
}
