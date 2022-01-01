'use strict'

import * as dotenv from 'dotenv'
import Fastify from 'fastify'

dotenv.config()

const app = Fastify({
  logger: true
})

app.register(import('../src/app.js'))

export default async (req, res) => {
  await app.ready()
  app.server.emit('request', req, res)
}
