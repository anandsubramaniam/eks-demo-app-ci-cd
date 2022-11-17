const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello edit1 world hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
