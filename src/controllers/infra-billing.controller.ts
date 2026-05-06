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
    return this.httpClient.callApi(
      {
        method: CreateInfraProviderCommand.endpointDetails.REQUEST_METHOD,
        url: CreateInfraProviderCommand.url,
        data,
      },
      CreateInfraProviderCommand.ResponseSchema,
    );
  }

  public async updateProvider(
    data: UpdateInfraProviderCommand.Request,
  ): Promise<UpdateInfraProviderCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: UpdateInfraProviderCommand.endpointDetails.REQUEST_METHOD,
        url: UpdateInfraProviderCommand.url,
        data,
      },
      UpdateInfraProviderCommand.ResponseSchema,
    );
  }

  public async deleteProvider(
    uuid: string,
  ): Promise<DeleteInfraProviderByUuidCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: DeleteInfraProviderByUuidCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteInfraProviderByUuidCommand.url(uuid),
      },
      DeleteInfraProviderByUuidCommand.ResponseSchema,
    );
  }

  public async getProviders(): Promise<
    GetInfraProvidersCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetInfraProvidersCommand.endpointDetails.REQUEST_METHOD,
        url: GetInfraProvidersCommand.url,
      },
      GetInfraProvidersCommand.ResponseSchema,
    );
  }

  public async getProviderByUuid(
    uuid: string,
  ): Promise<GetInfraProviderByUuidCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: GetInfraProviderByUuidCommand.endpointDetails.REQUEST_METHOD,
        url: GetInfraProviderByUuidCommand.url(uuid),
      },
      GetInfraProviderByUuidCommand.ResponseSchema,
    );
  }

  // Billing Nodes
  public async createBillingNode(
    data: CreateInfraBillingNodeCommand.Request,
  ): Promise<CreateInfraBillingNodeCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: CreateInfraBillingNodeCommand.endpointDetails.REQUEST_METHOD,
        url: CreateInfraBillingNodeCommand.url,
        data,
      },
      CreateInfraBillingNodeCommand.ResponseSchema,
    );
  }

  public async updateBillingNode(
    data: UpdateInfraBillingNodeCommand.Request,
  ): Promise<UpdateInfraBillingNodeCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method: UpdateInfraBillingNodeCommand.endpointDetails.REQUEST_METHOD,
        url: UpdateInfraBillingNodeCommand.url,
        data,
      },
      UpdateInfraBillingNodeCommand.ResponseSchema,
    );
  }

  public async deleteBillingNode(
    uuid: string,
  ): Promise<DeleteInfraBillingNodeByUuidCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          DeleteInfraBillingNodeByUuidCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteInfraBillingNodeByUuidCommand.url(uuid),
      },
      DeleteInfraBillingNodeByUuidCommand.ResponseSchema,
    );
  }

  public async getBillingNodes(): Promise<
    GetInfraBillingNodesCommand.Response['response']
  > {
    return this.httpClient.callApi(
      {
        method: GetInfraBillingNodesCommand.endpointDetails.REQUEST_METHOD,
        url: GetInfraBillingNodesCommand.url,
      },
      GetInfraBillingNodesCommand.ResponseSchema,
    );
  }

  // Bill Records
  public async createBillRecord(
    data: CreateInfraBillingHistoryRecordCommand.Request,
  ): Promise<CreateInfraBillingHistoryRecordCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          CreateInfraBillingHistoryRecordCommand.endpointDetails.REQUEST_METHOD,
        url: CreateInfraBillingHistoryRecordCommand.url,
        data,
      },
      CreateInfraBillingHistoryRecordCommand.ResponseSchema,
    );
  }

  public async deleteBillRecord(
    uuid: string,
  ): Promise<DeleteInfraBillingHistoryRecordCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          DeleteInfraBillingHistoryRecordCommand.endpointDetails.REQUEST_METHOD,
        url: DeleteInfraBillingHistoryRecordCommand.url(uuid),
      },
      DeleteInfraBillingHistoryRecordCommand.ResponseSchema,
    );
  }

  public async getBillRecords(
    data: GetInfraBillingHistoryRecordsCommand.RequestQuery,
  ): Promise<GetInfraBillingHistoryRecordsCommand.Response['response']> {
    return this.httpClient.callApi(
      {
        method:
          GetInfraBillingHistoryRecordsCommand.endpointDetails.REQUEST_METHOD,
        url: GetInfraBillingHistoryRecordsCommand.url,
        params: data,
      },
      GetInfraBillingHistoryRecordsCommand.ResponseSchema,
    );
  }
}
