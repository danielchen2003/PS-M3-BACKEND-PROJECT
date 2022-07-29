const db = require("../db")

const Book = require("../models/employees")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const books = [
    {
      first_name: "Bruno1",
      last_name: "Galvao1",
      email: "bruno.galvao@ga.co",
      job_title: "Software Engineering Instructor",
      address: {
        street: "10 E 21St St",
        city: "New York",
        state: "NY",
        zip: "10010",
      },
    },
    {
      first_name: "Bruno2",
      last_name: "Galvao2",
      email: "bruno.galvao@ga.co",
      job_title: "Software Engineering Instructor",
      address: {
        street: "10 E 21St St",
        city: "New York",
        state: "NY",
        zip: "10010",
      },
    },
    {
      first_name: "Bruno3",
      last_name: "Galvao3",
      email: "bruno.galvao@ga.co",
      job_title: "Software Engineering Instructor",
      address: {
        street: "10 E 21St St",
        city: "New York",
        state: "NY",
        zip: "10010",
      },
    },
    {
      first_name: "Bruno4",
      last_name: "Galvao4",
      email: "bruno.galvao@ga.co",
      job_title: "Software Engineering Instructor",
      address: {
        street: "10 E 21St St",
        city: "New York",
        state: "NY",
        zip: "10010",
      },
    },
    {
      first_name: "Bruno5",
      last_name: "Galvao5",
      email: "bruno.galvao@ga.co",
      job_title: "Software Engineering Instructor",
      address: {
        street: "10 E 21St St",
        city: "New York",
        state: "NY",
        zip: "10010",
      },
    },
  ]

  await Book.insertMany(books)
  console.log("Created books with Publishers!")
}
const run = async () => {
  await main()
  db.close()
}
run()
