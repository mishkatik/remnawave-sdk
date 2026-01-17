import {
  CreateInfraBillingHistoryRecordCommand,
  CreateInfraBillingNodeCommand,
  CreateInfraProviderCommand,
  DeleteInfraBillingHistoryRecordCommand,
  DeleteInfraBillingNodeByUuidCommand,
  DeleteInfraProviderByUuidCommand,
  GetInfraBillingHistoryRecordsCommand,
  GetInfraBillingNodesCommand,
  GetInfraProviderByUuidCommand,
  GetInfraProvidersCommand,
  UpdateInfraBillingNodeCommand,
  UpdateInfraProviderCommand,
} from '@remnawave/backend-contract';
import type { HttpClient } from '../clients';

export class InfraBillingController {
  constructor(private readonly httpClient: HttpClient) {}

  // Infra Providers
  public async createProvider(
    data: CreateInfraProviderCommand.Request,
  ): Promise<CreateInfraProviderCommand.Response['response']> {
    return this.httpClient.callApi<
      CreateInfraProviderCommand.Response['response']
    >({
      method: CreateInfraProviderCommand.endpointDetails.REQUEST_METHOD,
      url: CreateInfraProviderCommand.url,
      data,
    });
  }

  public async updateProvider(
    data: UpdateInfraProviderCommand.Request,
  ): Promise<UpdateInfraProviderCommand.Response['response']> {
    return this.httpClient.callApi<
      UpdateInfraProviderCommand.Response['response']
    >({
      method: UpdateInfraProviderCommand.endpointDetails.REQUEST_METHOD,
      url: UpdateInfraProviderCommand.url,
      data,
    });
  }

  public async deleteProvider(
    uuid: string,
  ): Promise<DeleteInfraProviderByUuidCommand.Response['response']> {
    return this.httpClient.callApi<
      DeleteInfraProviderByUuidCommand.Response['response']
    >({
      method: DeleteInfraProviderByUuidCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteInfraProviderByUuidCommand.url(uuid),
    });
  }

  public async getProviders(): Promise<
    GetInfraProvidersCommand.Response['response']
  > {
    return this.httpClient.callApi<
      GetInfraProvidersCommand.Response['response']
    >({
      method: GetInfraProvidersCommand.endpointDetails.REQUEST_METHOD,
      url: GetInfraProvidersCommand.url,
    });
  }

  public async getProviderByUuid(
    uuid: string,
  ): Promise<GetInfraProviderByUuidCommand.Response['response']> {
    return this.httpClient.callApi<
      GetInfraProviderByUuidCommand.Response['response']
    >({
      method: GetInfraProviderByUuidCommand.endpointDetails.REQUEST_METHOD,
      url: GetInfraProviderByUuidCommand.url(uuid),
    });
  }

  // Billing Nodes
  public async createBillingNode(
    data: CreateInfraBillingNodeCommand.Request,
  ): Promise<CreateInfraBillingNodeCommand.Response['response']> {
    return this.httpClient.callApi<
      CreateInfraBillingNodeCommand.Response['response']
    >({
      method: CreateInfraBillingNodeCommand.endpointDetails.REQUEST_METHOD,
      url: CreateInfraBillingNodeCommand.url,
      data,
    });
  }

  public async updateBillingNode(
    data: UpdateInfraBillingNodeCommand.Request,
  ): Promise<UpdateInfraBillingNodeCommand.Response['response']> {
    return this.httpClient.callApi<
      UpdateInfraBillingNodeCommand.Response['response']
    >({
      method: UpdateInfraBillingNodeCommand.endpointDetails.REQUEST_METHOD,
      url: UpdateInfraBillingNodeCommand.url,
      data,
    });
  }

  public async deleteBillingNode(
    uuid: string,
  ): Promise<DeleteInfraBillingNodeByUuidCommand.Response['response']> {
    return this.httpClient.callApi<
      DeleteInfraBillingNodeByUuidCommand.Response['response']
    >({
      method:
        DeleteInfraBillingNodeByUuidCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteInfraBillingNodeByUuidCommand.url(uuid),
    });
  }

  public async getBillingNodes(): Promise<
    GetInfraBillingNodesCommand.Response['response']
  > {
    return this.httpClient.callApi<
      GetInfraBillingNodesCommand.Response['response']
    >({
      method: GetInfraBillingNodesCommand.endpointDetails.REQUEST_METHOD,
      url: GetInfraBillingNodesCommand.url,
    });
  }

  // Bill Records
  public async createBillRecord(
    data: CreateInfraBillingHistoryRecordCommand.Request,
  ): Promise<CreateInfraBillingHistoryRecordCommand.Response['response']> {
    return this.httpClient.callApi<
      CreateInfraBillingHistoryRecordCommand.Response['response']
    >({
      method:
        CreateInfraBillingHistoryRecordCommand.endpointDetails.REQUEST_METHOD,
      url: CreateInfraBillingHistoryRecordCommand.url,
      data,
    });
  }

  public async deleteBillRecord(
    uuid: string,
  ): Promise<DeleteInfraBillingHistoryRecordCommand.Response['response']> {
    return this.httpClient.callApi<
      DeleteInfraBillingHistoryRecordCommand.Response['response']
    >({
      method:
        DeleteInfraBillingHistoryRecordCommand.endpointDetails.REQUEST_METHOD,
      url: DeleteInfraBillingHistoryRecordCommand.url(uuid),
    });
  }

  public async getBillRecords(
    data: GetInfraBillingHistoryRecordsCommand.RequestQuery,
  ): Promise<GetInfraBillingHistoryRecordsCommand.Response['response']> {
    return this.httpClient.callApi<
      GetInfraBillingHistoryRecordsCommand.Response['response']
    >({
      method:
        GetInfraBillingHistoryRecordsCommand.endpointDetails.REQUEST_METHOD,
      url: GetInfraBillingHistoryRecordsCommand.url,
      params: data,
    });
  }
}
