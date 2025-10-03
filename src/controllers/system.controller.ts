import {
  EncryptHappCryptoLinkCommand,
  GenerateX25519Command,
  GetBandwidthStatsCommand,
  GetNodesMetricsCommand,
  GetNodesStatisticsCommand,
  GetRemnawaveHealthCommand,
  GetStatsCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class SystemController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getStats(): Promise<GetStatsCommand.Response['response']> {
    return this.httpClient.callApi<GetStatsCommand.Response['response']>({
      method: GetStatsCommand.endpointDetails.REQUEST_METHOD,
      url: GetStatsCommand.url,
    });
  }

  public async getBandwidthStats(): Promise<
    GetBandwidthStatsCommand.Response['response']
  > {
    return this.httpClient.callApi<
      GetBandwidthStatsCommand.Response['response']
    >({
      method: GetBandwidthStatsCommand.endpointDetails.REQUEST_METHOD,
      url: GetBandwidthStatsCommand.url,
    });
  }

  public async getNodesMetrics(): Promise<
    GetNodesMetricsCommand.Response['response']
  > {
    return this.httpClient.callApi<GetNodesMetricsCommand.Response['response']>(
      {
        method: GetNodesMetricsCommand.endpointDetails.REQUEST_METHOD,
        url: GetNodesMetricsCommand.url,
      },
    );
  }

  public async getNodesStatistics(
    data?: GetNodesStatisticsCommand.Request,
  ): Promise<GetNodesStatisticsCommand.Response['response']> {
    return this.httpClient.callApi<
      GetNodesStatisticsCommand.Response['response']
    >({
      method: GetNodesStatisticsCommand.endpointDetails.REQUEST_METHOD,
      url: GetNodesStatisticsCommand.url,
      params: data,
    });
  }

  public async getRemnawaveHealth(): Promise<
    GetRemnawaveHealthCommand.Response['response']
  > {
    return this.httpClient.callApi<
      GetRemnawaveHealthCommand.Response['response']
    >({
      method: GetRemnawaveHealthCommand.endpointDetails.REQUEST_METHOD,
      url: GetRemnawaveHealthCommand.url,
    });
  }

  public async generateX25519(): Promise<
    GenerateX25519Command.Response['response']
  > {
    return this.httpClient.callApi<GenerateX25519Command.Response['response']>({
      method: GenerateX25519Command.endpointDetails.REQUEST_METHOD,
      url: GenerateX25519Command.url,
    });
  }

  public async encryptHappCryptoLink(
    data: EncryptHappCryptoLinkCommand.Request,
  ): Promise<EncryptHappCryptoLinkCommand.Response['response']> {
    return this.httpClient.callApi<
      EncryptHappCryptoLinkCommand.Response['response']
    >({
      method: EncryptHappCryptoLinkCommand.endpointDetails.REQUEST_METHOD,
      url: EncryptHappCryptoLinkCommand.url,
      data,
    });
  }
}
