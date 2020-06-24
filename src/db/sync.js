/**
 * @description sequelize 设置
 */

const seq = require('./seq')

// require('./model')

// 测试连接
seq
  .authenticate()
  .then(() => {
    console.log('ok')
  })
  .catch(() => {
    console.log('err')
  })

// 执行同步
seq.sync({ force: true }).then(() => {
  console.log('ok')
  process.exit()
})
