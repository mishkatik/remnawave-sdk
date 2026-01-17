# Remnawave SDK

<div align="center">

[![npm](https://img.shields.io/npm/v/@mishkat/remnawave-sdk?logo=npm&style=flat&labelColor=000&color=3b82f6)](https://www.npmjs.org/package/@mishkat/remnawave-sdk)
[![npm downloads](https://img.shields.io/npm/dw/@mishkat/remnawave-sdk?logo=npm&style=flat&labelColor=000&color=3b82f6)](https://www.npmjs.org/package/@mishkat/remnawave-sdk)

</div>

---

## 📦 Installation

Choose your preferred package manager:

### bun

```bash
bun install @mishkat/remnawave-sdk

```

### npm

```bash
npm install @mishkat/remnawave-sdk

```

### yarn

```bash
yarn add @mishkat/remnawave-sdk

```

### pnpm

```bash
pnpm add @mishkat/remnawave-sdk

```

---

## 🚀 Quick Start

```typescript
import { RemnawaveSDK } from "@mishkat/remnawave-sdk";

const client = new RemnawaveSDK({
  panelUrl: 'https://remna.st', // or 'http://remnawave:3000' for docker network
  apiKey: "your-api-key",

  // For Caddy reverse proxy authentication (Optional)
  caddyAuthToken: "your-caddy-token",

  // For Cloudflare Zero Trust (Optional)
  cloudflareZeroTrustClientId: "your-cf-client-id",
  cloudflareZeroTrustClientSecret: "your-cf-client-secret",
});

```

---

## 📚 Usage Examples

### 🔐 Auth Controller

```typescript
// Login
const loginResult = await client.auth.login({
  username: "user@example.com",
  password: "password123"
});

// Register
const registerResult = await client.auth.register({
  username: "newuser",
  email: "user@example.com",
  password: "password123"
});

// Get Status
const status = await client.auth.getStatus();

```

---

### 👥 User Controller

```typescript
// Create User
const user = await client.users.create({
  username: "newuser",
  email: "user@example.com",
  // ... other fields
});

// Get All Users
const users = await client.users.getAll({ start: 0, size: 25 });

// Get User by UUID
const userByUuid = await client.users.getByUuid("user-uuid");

// Get User by Username
const userByUsername = await client.users.getByUsername("username");

// Get User by Email
const userByEmail = await client.users.getByEmail("user@example.com");

// Get User by Telegram ID
const userByTelegram = await client.users.getByTelegramId("123456789");

// Get User by Short UUID
const userByShortUuid = await client.users.getByShortUuid("short-uuid");

// Get User by Tag
const userByTag = await client.users.getByTag("premium");

// Update User
const updated = await client.users.updateByUuidOrUsername({
  uuid: "user-uuid",
  email: "newemail@example.com"
});

// Delete User
await client.users.delete("user-uuid");

// Enable User
await client.users.enable("user-uuid");

// Disable User
await client.users.disable("user-uuid");

// Reset User Traffic
await client.users.resetTraffic("user-uuid");

// Revoke User Subscription
await client.users.revoke("user-uuid");

// Get All Tags
const tags = await client.users.getAllExistingTags();

// Get User Accessible Nodes
const nodes = await client.users.getUserAccessibleNodes("user-uuid");

// Get Subscription Request History
const history = await client.users.getSubscriptionRequestHistory("user-uuid");

// Get User Usage by Range
const usage = await client.users.getUserUsageByRange("user-uuid", {
  startDate: "2024-01-01",
  endDate: "2024-01-31"
});

// Bulk Delete Users
await client.users.bulkDelete({
  uuids: ["uuid1", "uuid2", "uuid3"]
});

// Bulk Delete Users by Status
await client.users.bulkDeleteByStatus({
  status: "disabled"
});

// Bulk Reset Traffic
await client.users.bulkResetTraffic({
  uuids: ["uuid1", "uuid2"]
});

// Bulk Revoke Subscription
await client.users.bulkRevokeSubscription({
  uuids: ["uuid1", "uuid2"]
});

// Bulk Update Users
await client.users.bulkUpdate({
  uuids: ["uuid1", "uuid2"],
  updateData: {
    tag: "premium"
  }
});

// Bulk Update Squads
await client.users.bulkUpdateSquads({
  uuids: ["uuid1", "uuid2"],
  squadUuids: ["squad-uuid1", "squad-uuid2"]
});

// Bulk All Reset Traffic
await client.users.bulkAllResetTraffic();

// Bulk All Update
await client.users.bulkAllUpdate({
  updateData: {
    tag: "standard"
  }
});

```

---

### 🖥️ Nodes Controller

```typescript
// Create Node
const node = await client.nodes.create({
  name: "Node 1",
  host: "node.example.com",
  port: 443
  // ... other fields
});

// Get All Nodes
const nodes = await client.nodes.getAll();

// Get One Node
const node = await client.nodes.getOne("node-uuid");

// Update Node
const updated = await client.nodes.update({
  uuid: "node-uuid",
  name: "Updated Node Name"
});

// Delete Node
await client.nodes.delete("node-uuid");

// Enable Node
await client.nodes.enable("node-uuid");

// Disable Node
await client.nodes.disable("node-uuid");

// Restart Node
await client.nodes.restart("node-uuid");

// Restart All Nodes
await client.nodes.restartAll();

// Reorder Nodes
await client.nodes.reorder({
  uuids: ["uuid1", "uuid2", "uuid3"]
});

// Reset Node Traffic
await client.nodes.resetTraffic("node-uuid");

// Get Realtime Usage
const realtimeUsage = await client.nodes.getRealtimeUsage();

// Get Usage by Range
const usage = await client.nodes.getUsageByRange({
  startDate: "2024-01-01",
  endDate: "2024-01-31"
});

// Get Node User Usage by Range
const nodeUsage = await client.nodes.getNodeUserUsageByRange("node-uuid", {
  startDate: "2024-01-01",
  endDate: "2024-01-31"
});

```

---

### 🌐 Hosts Controller

```typescript
// Create Host
const host = await client.hosts.create({
  name: "Host 1",
  address: "host.example.com"
  // ... other fields
});

// Get All Hosts
const hosts = await client.hosts.getAll();

// Get Host by UUID
const host = await client.hosts.getByUuid("host-uuid");

// Update Host
const updated = await client.hosts.update({
  uuid: "host-uuid",
  name: "Updated Host Name"
});

// Delete Host
await client.hosts.delete("host-uuid");

// Reorder Hosts
await client.hosts.reorder({
  uuids: ["uuid1", "uuid2", "uuid3"]
});

// Get All Tags
const tags = await client.hosts.getAllTags();

// Bulk Delete Hosts
await client.hosts.deleteMany({
  uuids: ["uuid1", "uuid2", "uuid3"]
});

// Bulk Enable Hosts
await client.hosts.enableMany({
  uuids: ["uuid1", "uuid2"]
});

// Bulk Disable Hosts
await client.hosts.disableMany({
  uuids: ["uuid1", "uuid2"]
});

// Set Inbound to Many Hosts
await client.hosts.setInboundToMany({
  uuids: ["uuid1", "uuid2"],
  inboundUuid: "inbound-uuid"
});

// Set Port to Many Hosts
await client.hosts.setPortToMany({
  uuids: ["uuid1", "uuid2"],
  port: 443
});

```

---

### ⚙️ System Controller

```typescript
// Get Stats
const stats = await client.system.getStats();

// Get Bandwidth Stats
const bandwidth = await client.system.getBandwidthStats();

// Get Nodes Metrics
const metrics = await client.system.getNodesMetrics();

// Get Nodes Statistics
const statistics = await client.system.getNodesStatistics();

// Get Remnawave Health
const health = await client.system.getRemnawaveHealth();

// Generate X25519
const keys = await client.system.generateX25519();

// Encrypt Happ Crypto Link
const encrypted = await client.system.encryptHappCryptoLink({
  data: "data-to-encrypt"
});

```

---

### 📋 Subscription Controller

```typescript
// Get Subscription Info by Short UUID
const subscription = await client.subscription.getInfoByShortUuid("short-uuid");

```

---

### 📊 Subscriptions Controller

```typescript
// Get All Subscriptions
const subscriptions = await client.subscriptions.getAll({
  start: 0,
  size: 25
});

// Get Subscription by UUID
const subscription = await client.subscriptions.getByUuid("subscription-uuid");

// Get Subscription by Username
const subscription = await client.subscriptions.getByUsername("username");

// Get Subscription by Short UUID Protected
const subscription = await client.subscriptions.getByShortUuidProtected("short-uuid");

```

---

### 👨‍👩‍👧‍👦 Internal Squads Controller

```typescript
// Create Internal Squad
const squad = await client.internalSquads.create({
  name: "Premium Squad",
  // ... other fields
});

// Get All Internal Squads
const squads = await client.internalSquads.getAll();

// Get Internal Squad by UUID
const squad = await client.internalSquads.getByUuid("squad-uuid");

// Update Internal Squad
const updated = await client.internalSquads.update({
  uuid: "squad-uuid",
  name: "Updated Squad Name"
});

// Delete Internal Squad
await client.internalSquads.delete("squad-uuid");

// Get Accessible Nodes
const nodes = await client.internalSquads.getAccessibleNodes("squad-uuid");

// Add Users
await client.internalSquads.addUsers("squad-uuid");

// Delete Users
await client.internalSquads.deleteUsers("squad-uuid");

```

---

### 🌍 External Squads Controller

```typescript
// Get All External Squads
const squads = await client.externalSquads.getAll();

// Get External Squad by UUID
const squad = await client.externalSquads.getByUuid("squad-uuid");

// Create External Squad
const squad = await client.externalSquads.create({
  name: "External Squad",
  // ... other fields
});

// Update External Squad
const updated = await client.externalSquads.update({
  uuid: "squad-uuid",
  name: "Updated Squad Name"
});

// Delete External Squad
await client.externalSquads.delete("squad-uuid");

// Add Users
await client.externalSquads.addUsers("squad-uuid");

// Remove Users
await client.externalSquads.removeUsers("squad-uuid");

```

---

### ⚙️ Config Profiles Controller

```typescript
// Create Config Profile
const profile = await client.configProfiles.create({
  name: "Profile 1",
  // ... other fields
});

// Get All Config Profiles
const profiles = await client.configProfiles.getAll();

// Get Config Profile by UUID
const profile = await client.configProfiles.getByUuid({ uuid: "profile-uuid" });

// Update Config Profile
const updated = await client.configProfiles.update({
  uuid: "profile-uuid",
  name: "Updated Profile Name"
});

// Delete Config Profile
await client.configProfiles.delete({ uuid: "profile-uuid" });

// Get Computed Config Profile
const computed = await client.configProfiles.getComputedByProfileUuid("profile-uuid");

// Get All Inbounds
const inbounds = await client.configProfiles.getAllInbounds();

// Get Inbounds by Profile UUID
const inbounds = await client.configProfiles.getInboundsByProfileUuid({ uuid: "profile-uuid" });

```

---

### 🔑 Keygen Controller

```typescript
// Get Public Key
const pubkey = await client.keygen.getPubkey();

```

---

### 📝 Snippets Controller

```typescript
// Get All Snippets
const snippets = await client.snippets.getAll();

// Create Snippet
const snippet = await client.snippets.create({
  name: "My Snippet",
  content: "snippet content"
  // ... other fields
});

// Update Snippet
const updated = await client.snippets.update({
  uuid: "snippet-uuid",
  content: "updated content"
});

// Delete Snippet
await client.snippets.delete({ uuid: "snippet-uuid" });

```

---

### 🖥️ HWID Controller

```typescript
// Create HWID Device
const device = await client.hwid.create({
  userUuid: "user-uuid",
  hwid: "device-hwid"
  // ... other fields
});

// Get All HWID Devices
const devices = await client.hwid.getAll({ start: 0, size: 25 });

// Get HWID Devices by User
const devices = await client.hwid.getByUser({ userUuid: "user-uuid" });

// Delete HWID Device
await client.hwid.delete({ uuid: "device-uuid" });

// Delete All User HWID Devices
await client.hwid.deleteAllByUser({ userUuid: "user-uuid" });

// Get HWID Stats
const stats = await client.hwid.getStats();

```

---

### 📄 Subscription Template Controller

```typescript
// Get Subscription Template
const template = await client.subscriptionTemplate.getTemplate("template-uuid");

// Update Subscription Template
const updated = await client.subscriptionTemplate.updateTemplate({
  uuid: "template-uuid",
  // ... fields to update
});

```

---

### ⚙️ Subscription Settings Controller

```typescript
// Get Subscription Settings
const settings = await client.subscriptionSettings.getSettings();

// Update Subscription Settings
const updated = await client.subscriptionSettings.updateSettings({
  // ... fields to update
});

```

---

### 📜 Subscription Request History Controller

```typescript
// Get Subscription Request History
const history = await client.subscriptionRequestHistory.getHistory({
  start: 0,
  size: 25
});

// Get Subscription Request History Stats
const stats = await client.subscriptionRequestHistory.getStats();

```

---

### 💰 Infra Billing Controller

```typescript
// Create Infra Provider
const provider = await client.infraBilling.createProvider({
  name: "Provider 1",
  // ... other fields
});

// Get All Infra Providers
const providers = await client.infraBilling.getProviders();

// Get Infra Provider by UUID
const provider = await client.infraBilling.getProviderByUuid({ uuid: "provider-uuid" });

// Update Infra Provider
const updated = await client.infraBilling.updateProvider({
  uuid: "provider-uuid",
  name: "Updated Provider Name"
});

// Delete Infra Provider
await client.infraBilling.deleteProvider({ uuid: "provider-uuid" });

// Create Billing Node
const node = await client.infraBilling.createBillingNode({
  name: "Billing Node 1",
  providerUuid: "provider-uuid"
  // ... other fields
});

// Get All Billing Nodes
const nodes = await client.infraBilling.getBillingNodes();

// Update Billing Node
const updated = await client.infraBilling.updateBillingNode({
  uuid: "node-uuid",
  name: "Updated Node Name"
});

// Delete Billing Node
await client.infraBilling.deleteBillingNode({ uuid: "node-uuid" });

// Create Bill Record
const record = await client.infraBilling.createBillRecord({
  nodeUuid: "node-uuid",
  amount: 100.50,
  date: "2024-01-01"
  // ... other fields
});

// Get Bill Records
const records = await client.infraBilling.getBillRecords({
  start: 0,
  size: 25
});

// Delete Bill Record
await client.infraBilling.deleteBillRecord({ uuid: "record-uuid" });

```

---

## 🔧 Error Handling

```typescript
try {
  const user = await client.users.getByUuid("user-uuid");
  console.log(user);
} catch (error) {
  if (error instanceof Error) {
    console.error("API Error:", error.message);
  }
}

```

---

## 🔗 Links

* **GitHub**: [mishkatik/remnawave-sdk](https://github.com/mishkatik/remnawave-sdk)
* **Issues**: [GitHub Issues](https://github.com/mishkatik/remnawave-sdk/issues)
* **NPM**: [@mishkat/remnawave-sdk](https://www.npmjs.org/package/@mishkat/remnawave-sdk)

---

## 👨‍💻 Author

**Mishkat** - [GitHub](https://github.com/mishkatik)