const express = require("express")
const PORT = process.env.PORT || 3000
const app = express()

app.listen(PORT, () => {
  console.log(`express servie on ${PORT}`)
})

app.get("/", (req, res) => {
  res.send("Hello Wrold")
})

app.get("/ping", (req, res) => {
  res.json("helloling")
})

// // GET /favorite-food Response content: Your favorite food
// // GET /favorite-movie Response content: Your favorite movie
// // GET /about-me Response content: A little autobiography
// // GET /contact Response content: Your preferred contact info

// app.get("/favorite-food", (req, res) => {
//   res.json({
//     drink: "coke",
//     seafood: "shrimp",
//     meat: [{ beef: "steak" }, { chicken: "breast" }],
//   })
// })

// app.get("/favorite-movie", (req, res) => {
//   res.send("Interstellar")
// })

// app.get("/about-me", (req, res) => {
//   res.send(`🔭 Check out my Linkin Page: Linkedin!
//   🌱 I'm currently learning everything 🤣
//   👯 I'm looking to collaborate with Pro Coder
//   🥅 2022 Goals: Learn more about React
//   ⚡ Fun fact: I love to and play Vedio Game
//   😻 Check out the other project I created: Pokeman Go
//   `)
// })
// app.get("/contact", (req, res) => {
//   res.send("Email: ku2003ku@gmail.com")
// })

const fruits = require("./fruit")

// /greet/:name
// GET /greet/:name should return a greeting with the supplied name, e.g., 'Why hello there, !'
app.get("/greet/:name", (req, res) => {
  // const name = JSON.parse(req.params[name])
  const name = req.params["name"]
  res.send(`Why hello there,${name}!
`)
})
// Recall you can access the url parameters with req.params

// /five
// GET /five should return an array of the numbers from 1-5

app.get("/five", (req, res) => {
  // const name = JSON.parse(req.params[name])

  res.json([1, 2, 3, 4, 5])
})
// evens
// GET /evens/:n should return an array of even numbers from 2 up to and including n. So when you call this route, n in the url should be a number.

// Also, you may need to use parseInt to cast the supplied n parameter to a number
app.get("/even/:n", (req, res) => {
  // const name = JSON.parse(req.params[name])
  const number = parseInt(req.params["n"])
  // parseInt(

  const result = []
  for (let i = 2; i <= number; i += 2) {
    result.push(i)
  }
  return res.json(result)
})

// /namelength/:name
// GET /namelength/:name should return the length of the supplied name

app.get("/namelength/:name", (req, res) => {
  // const name = JSON.parse(req.params[name])
  const name = req.params["name"]
  res.send(`length of name is ${name.length}!
`)
})

// /fruits
// GET /fruits should return an array with all the fruits.
app.get("/fruits", (req, res) => {
  // const name = JSON.parse(req.params[name])

  res.json(fruits)
})

// Let's add a route that retrieves all the fruits from our fruits.js file. Recall we imported it on top of our index.js.

// app.get('/fruits', (req, res) => {
//   //your code here
//   res.send()
// })
// /fruits/:name
// Now let's add a route that takes a route parameter name and retrieves the fruit that matches the supplied name.

app.get("/fruits/:name", (req, res) => {
  //your code here
  const fruitName = req.params["name"]
  // HINT - you can use a higher-order array method
  const filtered = fruits.filter(
    (x) => x.name.toLowerCase() === fruitName.toLowerCase()
  )
  console.log(filtered[0].imgUrl) //
  res.send(
    `<img src=${filtered[0].imgUrl} alt="fruit" width="500" height="600" />`
  )
  filtered.length > 0 ? res.json(filtered[0].imgUrl) : res.send("no match")
})
// Recall you can access the url parameters with req.params. So when you call this route, name in the url should be a capitalized string(refer to fruits.js, if you are unsure).
