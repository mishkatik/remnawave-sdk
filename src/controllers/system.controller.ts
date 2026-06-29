import {
  GenerateX25519Command,
  GetBandwidthStatsCommand,
  GetMetadataCommand,
  GetNodesMetricsCommand,
  GetNodesStatisticsCommand,
  GetRecapCommand,
  GetRemnawaveHealthCommand,
  GetStatsCommand,
  TestSrrMatcherCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class SystemController {
  constructor(private readonly httpClient: HttpClient) {}

  public async getRemnawaveInformation(): Promise<
    GetMetadataCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetMetadataCommand.endpointDetails.REQUEST_METHOD,
        url: GetMetadataCommand.url,
      },
      GetMetadataCommand.ResponseSchema,
    );
  }

  public async getStats(): Promise<GetStatsCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetStatsCommand.endpointDetails.REQUEST_METHOD,
        url: GetStatsCommand.url,
      },
      GetStatsCommand.ResponseSchema,
    );
  }

  public async getBandwidthStats(): Promise<
    GetBandwidthStatsCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetBandwidthStatsCommand.endpointDetails.REQUEST_METHOD,
        url: GetBandwidthStatsCommand.url,
      },
      GetBandwidthStatsCommand.ResponseSchema,
    );
  }

  public async getNodesMetrics(): Promise<
    GetNodesMetricsCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetNodesMetricsCommand.endpointDetails.REQUEST_METHOD,
        url: GetNodesMetricsCommand.url,
      },
      GetNodesMetricsCommand.ResponseSchema,
    );
  }

  public async getNodesStatistics(
    data?: GetNodesStatisticsCommand.Request,
  ): Promise<GetNodesStatisticsCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetNodesStatisticsCommand.endpointDetails.REQUEST_METHOD,
        url: GetNodesStatisticsCommand.url,
        params: data,
      },
      GetNodesStatisticsCommand.ResponseSchema,
    );
  }

  public async getRemnawaveHealth(): Promise<
    GetRemnawaveHealthCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetRemnawaveHealthCommand.endpointDetails.REQUEST_METHOD,
        url: GetRemnawaveHealthCommand.url,
      },
      GetRemnawaveHealthCommand.ResponseSchema,
    );
  }

  public async generateX25519(): Promise<
    GenerateX25519Command.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GenerateX25519Command.endpointDetails.REQUEST_METHOD,
        url: GenerateX25519Command.url,
      },
      GenerateX25519Command.ResponseSchema,
    );
  }

  public async testSRRMatcher(
    data: TestSrrMatcherCommand.Request,
  ): Promise<TestSrrMatcherCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: TestSrrMatcherCommand.endpointDetails.REQUEST_METHOD,
        url: TestSrrMatcherCommand.url,
        data,
      },
      TestSrrMatcherCommand.ResponseSchema,
    );
  }

  public async getRecap(): Promise<GetRecapCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetRecapCommand.endpointDetails.REQUEST_METHOD,
        url: GetRecapCommand.url,
      },
      GetRecapCommand.ResponseSchema,
    );
  }
}
