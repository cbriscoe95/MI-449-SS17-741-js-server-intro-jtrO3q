// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Hello Traveler!</h1>'
    )
  } else if (request.url === '/random-joke') {
    // Create a random number between 1 and 3 when the user goes to the /random-joke Page
    var randNum = Math.floor((Math.random() * 3) + 1)
    var joke
    if (randNum === 1) {
      joke = 'Can a kangaroo jump higher than a house? Of course, a house cant jump at all.'
    } else if (randNum === 2) {
      joke = 'I cannot believe I forgot to go to the gym today. Thats 7 years in a row now.'
    } else {
      joke = 'I thought I would tell you a good time travel joke, but you did not like it.'
    }
    response.end('<h1>Random Joke</h1>' + joke
  )
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cute Cat</h1>' +
      '<img src="http://i.imgur.com/WfnZwgV.jpg" alt="Cute cat" width=500 height=400>'
)
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')

// Potential error Page: document.getElementById('url').innerHTML = window.location.href
