import autoload from 'fastify-autoload'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

import pkg from '@prisma/client'

const { PrismaClient } = pkg

const prisma = new PrismaClient({
  errorFormat: 'pretty'
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default async function (fastify, opts) {
  const app = fastify
  app.decorate('prisma', prisma)
  app.register(autoload, {
    dir: join(__dirname, 'routes')
  })

  app.register(autoload, {
    dir: join(__dirname, 'plugins')
  })

  return app
}
