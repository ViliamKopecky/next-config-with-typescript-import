import { z } from 'zod'

export const ServerEnvSchema = z.object({
    TOKEN: z.string(),
})