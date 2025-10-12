import * as z from 'zod';

export const ConfigSchema = z.object({
  panelUrl: z.url('Panel URL Must Be A Valid URL'),
  apiKey: z.jwt('API Key Must Be A Valid JWT'),
  caddyAuthToken: z.string().optional(),
  cloudflareZeroTrustClientSecret: z.string().optional(),
  cloudflareZeroTrustClientId: z.string().optional(),
});

export type Config = z.infer<typeof ConfigSchema>;

export function loadConfig(config: Config): Config {
  try {
    return ConfigSchema.parse(config);
  } catch (err) {
    if (err instanceof z.ZodError) {
      const errors = err.issues
        .map((e) => `  - ${e.path.join('.')}: ${e.message}`)
        .join('\n');

      throw new Error(
        [
          '❌ Configuration Validation Failed:',
          errors,
          'Please provide valid configuration parameters.',
        ].join('\n'),
      );
    }

    throw err;
  }
}
