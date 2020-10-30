var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // response.writeHead(200, { 'Content-Type': 'text/plain' })
    // response.end('Hello World\n')

    var name = require('url').parse(req.url, true).query.name

    if (name === undefined) name = 'world'

    if (name === 'burningbird') {
      var file = './knowledge/node/assets/yangchaoyue.jpg'
      fs.stat(file, function (err, stat) {
        if (err) {
          console.error(err)
          res.writeHead(200, { 'Content-Type': 'text/plain' })
          res.end('Sorry, Burningbird isn is around right now \n')
        } else {
          var img = fs.readFileSync(file)
          res.contentType = 'image/png'
          res.contentLength = stat.size
          res.end(img, 'binary')
        }
      })
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Hello ' + name + '\n')
    }
  })
  .listen(8124)

console.log('Server runing at port 8124')
