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

## 📚 Available Controllers

The SDK provides access to 17 controllers:

- `auth`
- `users`
- `nodes`
- `hosts`
- `system`
- `subscription`
- `subscriptions`
- `internalSquads`
- `externalSquads`
- `configProfiles`
- `keygen`
- `snippets`
- `hwid`
- `subscriptionTemplate`
- `subscriptionSettings`
- `subscriptionRequestHistory`
- `infraBilling`

---

## 🎯 Usage Example

```typescript
import { RemnawaveSDK } from "@mishkat/remnawave-sdk";

const client = new RemnawaveSDK({
  panelUrl: 'https://remna.st',
  apiKey: "your-api-key",
});

// Access any controller
const users = await client.users.getAll({ start: 0, size: 25 });
const nodes = await client.nodes.getAll();
const stats = await client.system.getStats();
```

---

## 🤝 Support

- **GitHub**: [mishkatik/remnawave-sdk](https://github.com/mishkatik/remnawave-sdk)
- **Issues**: [GitHub Issues](https://github.com/mishkatik/remnawave-sdk/issues)

---