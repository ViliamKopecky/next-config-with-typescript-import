import { z } from 'zod'

export const PublicEnvSchema = z.object({
    NEXT_PUBLIC_API_URL: z.string().url(),
})