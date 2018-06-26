import express from 'express'
import next from 'next'

const app = next(true)

app.prepare()
  .then(() => {
  const server = express()
  server.get('/', (req, res)=>{
    return app.render(req, res, '/', req.query)
  })
  
  server.listen(3000, () => console.log('server is listening on port 3000'))
})