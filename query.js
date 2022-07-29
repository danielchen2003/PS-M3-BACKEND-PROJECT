//find a book

const db = require("./db")
const Publisher = require("./models/publisher")
const Book = require("./models/books")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const findBook = async () => {
  const thePowerOfNow = await Book.find({ title: "The Power of Now" })
  console.log(thePowerOfNow)
}

//create
const createBook = async () => {
  const penguinBooks = await Publisher.find({ title: "Penguin Books" })
  const aNewEarthBook = new Book({
    title: "A New Earth",
    author: "Eckhart Tolle",
    published_date: "2005",
    publisher_id: penguinBooks[0]._id,
  })
  await aNewEarthBook.save()
  console.log("Created Book:", aNewEarthBook)
}

//update

const updateBook = async () => {
  const updated = await Book.updateOne(
    { title: "A New Earth" },
    { title: "A New Earth: Awakening to your life's" }
  )
  console.log(updated) //most bugy
}
//delte
const deleteBook = async () => {
  const deleted = await Book.deleteOne({ title: "The Alchemist" })
  console.log(deleted)
  // most trouble
  // 永久删除
}

const run = async () => {
  // await findBook()
  // await createBook()
  // await updateBook()
  await deleteBook()
  db.close()
}
run()
