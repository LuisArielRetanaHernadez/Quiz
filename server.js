const { app } = require('./index')

// database
const { conn } = require('./src/database/database')

const startSever = () => {
  app.listen(3000, () => {
    conn()
    console.log('The is running on port 3000')
  })
}

startSever()