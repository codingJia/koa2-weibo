/**
 * @description json test
 */

const server = require('./server')

test('should 返回格式正确', async () => {
  const res = await server.get('/json')
  expect(res.body).toEqual({
    title: 'koa2 json',
  })
})
