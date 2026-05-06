import { HttpClient } from './clients';
import { type Config, loadConfig } from './config';
import {
  AuthController,
  BandwidthController,
  ConfigProfilesController,
  ExternalSquadsController,
  HostsController,
  HwidController,
  InfraBillingController,
  InternalSquadsController,
  IPManagementController,
  KeygenController,
  MetadataController,
  NodePluginsController,
  NodesController,
  RemnawaveSettingsController,
  SnippetsController,
  SubscriptionController,
  SubscriptionPageConfigsController,
  SubscriptionRequestHistoryController,
  SubscriptionSettingsController,
  SubscriptionsController,
  SubscriptionTemplateController,
  SystemController,
  UserController,
} from './controllers';

export class RemnawaveSDK {
  private readonly client: HttpClient;
  public readonly auth: AuthController;
  public readonly configProfiles: ConfigProfilesController;
  public readonly hosts: HostsController;
  public readonly hwid: HwidController;
  public readonly infraBilling: InfraBillingController;
  public readonly internalSquads: InternalSquadsController;
  public readonly externalSquads: ExternalSquadsController;
  public readonly keygen: KeygenController;
  public readonly nodes: NodesController;
  public readonly nodePlugins: NodePluginsController;
  public readonly snippets: SnippetsController;
  public readonly subscription: SubscriptionController;
  public readonly subscriptionRequestHistory: SubscriptionRequestHistoryController;
  public readonly subscriptions: SubscriptionsController;
  public readonly subscriptionSettings: SubscriptionSettingsController;
  public readonly subscriptionTemplate: SubscriptionTemplateController;
  public readonly subscriptionPageConfigs: SubscriptionPageConfigsController;
  public readonly system: SystemController;
  public readonly users: UserController;
  public readonly bandwidth: BandwidthController;
  public readonly ipManagement: IPManagementController;
  public readonly remnawaveSettings: RemnawaveSettingsController;
  public readonly metadata: MetadataController;

  constructor(config: Config) {
    const validatedConfig = loadConfig(config);

    this.client = new HttpClient(validatedConfig);
    this.auth = new AuthController(this.client);
    this.configProfiles = new ConfigProfilesController(this.client);
    this.hosts = new HostsController(this.client);
    this.hwid = new HwidController(this.client);
    this.infraBilling = new InfraBillingController(this.client);
    this.internalSquads = new InternalSquadsController(this.client);
    this.externalSquads = new ExternalSquadsController(this.client);
    this.keygen = new KeygenController(this.client);
    this.nodes = new NodesController(this.client);
    this.nodePlugins = new NodePluginsController(this.client);
    this.snippets = new SnippetsController(this.client);
    this.subscription = new SubscriptionController(this.client);
    this.subscriptionRequestHistory = new SubscriptionRequestHistoryController(
      this.client,
    );
    this.subscriptions = new SubscriptionsController(this.client);
    this.subscriptionSettings = new SubscriptionSettingsController(this.client);
    this.subscriptionTemplate = new SubscriptionTemplateController(this.client);
    this.subscriptionPageConfigs = new SubscriptionPageConfigsController(
      this.client,
    );
    this.system = new SystemController(this.client);
    this.users = new UserController(this.client);
    this.bandwidth = new BandwidthController(this.client);
    this.ipManagement = new IPManagementController(this.client);
    this.remnawaveSettings = new RemnawaveSettingsController(this.client);
    this.metadata = new MetadataController(this.client);
  }
}
