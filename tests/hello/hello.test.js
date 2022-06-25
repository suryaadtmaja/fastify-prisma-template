import { test } from 'tap'
import { build } from '../helper.js'

test('the return should be hello world', async (t) => {
  const app = build(t)
  const res = await app.inject({
    url: '/'
  })
  t.equal(JSON.parse(res.payload).message, 'Hello World')
})
