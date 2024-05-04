import { z } from 'zod'
import { PublicEnvSchema } from './PublicEnvSchema'

export const publicEnv = PublicEnvSchema.parse({
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
} satisfies Partial<z.infer<typeof PublicEnvSchema>>)