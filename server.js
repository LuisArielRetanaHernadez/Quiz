const { app } = require('./index')

// database
const { conn } = require('./src/database/database')

const startSever = () => {
  app.listen(3030, () => {
    conn()
    console.log('The is running on port 3030')
  })
}

startSever()