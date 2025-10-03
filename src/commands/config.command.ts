import * as z from 'zod';

export namespace ConfigCommand {
  export const Schema = z.object({
    baseUrl: z.url(),
    apiKey: z.jwt(),
  });

  export type Config = z.infer<typeof Schema>;
  export type Input = z.input<typeof Schema>;
}
