const mongoose = require("mongoose")
const Scheme = mongoose.Schema

const Book = new Scheme(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    published_date: { type: String, required: true },
    publisher_id: { type: Scheme.Types.ObjectId, ref: "publisher_id" },
  },
  { timestamps: true }
)
module.exports = mongoose.model("book", Book)
