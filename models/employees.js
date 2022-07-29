const mongoose = require("mongoose")
const Scheme = mongoose.Schema

const Address = new Scheme({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
})

const employee = new Scheme(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    job_title: { type: String, required: true },
    address: Address,
  },
  { timestamps: true }
)

module.exports = mongoose.model("employees", employee)
