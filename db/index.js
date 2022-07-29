const mongoose = require("mongoose")

mongoose
  .connect("mongodb://127.0.0.1:/booksDatabase", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("succseesfull conected to MongoDb")
  })
  .catch((e) => {
    console.error("Conection error", e.message)
  })

mongoose.set("debug", true)
const db = mongoose.connection
module.exports = db
