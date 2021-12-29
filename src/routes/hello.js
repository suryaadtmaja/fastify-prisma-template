export default async function (app) {
  app.get('/', async (req, reply) => {
    reply.code(200).send({
      message: 'Hello World'
    })
  })
}
