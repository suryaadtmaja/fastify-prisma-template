import Fastify from 'fastify'
import fp from 'fastify-plugin'
import App from '../src/app.js'

function config () {
  return {}
}

function build (t) {
  const app = Fastify()

  app.register(fp(App), config())
  t.teardown(app.close.bind(app))
  return app
}

export {
  config,
  build
}
