const mysql = require('serverless-mysql')({
  config: {
    host     : process.env.ENDPOINT,
    database : process.env.DATABASE,
    user     : process.env.USERNAME,
    password : process.env.PASSWORD
  }
})


const initialize = async (event, context) => {
  let results = await mysql.query('SELECT * FROM table')
  
  await mysql.end()
  
  return results
}


module.exports = {
  initialize: initialize
}