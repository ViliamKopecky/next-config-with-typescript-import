import { z } from 'zod'
import { ServerEnvSchema } from './ServerEnvSchema'

export const serverEnv = ServerEnvSchema.parse({
    TOKEN: process.env.TOKEN,
} satisfies Partial<z.infer<typeof ServerEnvSchema>>)