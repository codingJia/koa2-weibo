/**
 * @description sequelize实例
 */

const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { isProd, isTest } = require('../utils/env')

const { host, user, password, database } = MYSQL_CONF
const conf = {
  host,
  dialect: 'mysql',
}

if (isTest) {
  conf.logging = () => {}
}

if (isProd) {
  // 线上环境使用连接池
  conf.pool = {
    max: 5, // 连接池最大的连接数量
    min: 0, // 最小
    idle: 10000, // 如果一个连接池10s之内没有被使用，则释放
  }
}

const seq = new Sequelize(database, user, password, conf)

module.exports = seq
