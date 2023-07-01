import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import axios from 'axios'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request) => {
    const bodySchema = z.object({
      authCode: z.string(),
    })
    const { authCode } = bodySchema.parse(request.body)

    const acessTokenResponse = await axios.post(
      'https://oauth2.googleapis.com/token',
      null,
      {
        params: {
          code: authCode,
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          grant_type: 'authorization_code',
          redirect_uri: process.env.AUTH_REDIRECT_URI,
        },
        headers: {
          Accept: 'application/json',
        },
      },
    )

    const { acess_token } = acessTokenResponse.data

    return {
      acess_token,
    }
  })
}
