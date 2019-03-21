const querystring = require('querystring')

module.exports = function(req, res, next) {
  if(req.method === 'POST') {
    const body = []

    req.on('data', data => {
      body.push(data)
    })
    
    req.on('end', () => {
      const body_param = querystring.parse(body.toString()) || {}

      console.log(body_param)

      // ECHO POST TEST
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(body_param))

      return false
    })
  }else{
    // GET
    console.log(req.originalUrl)

    const url = (req.originalUrl || '')
    
    // ECHO GET TEST
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({url: url}))

    return false
  }
}