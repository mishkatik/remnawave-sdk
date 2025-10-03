import { GetPubKeyCommand } from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class KeygenController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getPubkey(): Promise<GetPubKeyCommand.Response['response']> {
    return this.httpClient.callApi<GetPubKeyCommand.Response['response']>({
      method: GetPubKeyCommand.endpointDetails.REQUEST_METHOD,
      url: GetPubKeyCommand.url,
    });
  }
}
