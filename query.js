//find a Employee

const db = require("./db")

const Employee = require("./models/employees")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const findAllEmployee = async () => {
  const thePowerOfNow = await Employee.find({})
  console.log(thePowerOfNow)
}

//create

const createoneEmployee = async () => {
  const aNewEmployee = new Employee({
    first_name: "Bruno10",
    last_name: "Galvao10",
    email: "bruno.galvao@ga.co",
    job_title: "Software Engineering Instructor",
    address: {
      street: "10 E 21St St",
      city: "New York",
      state: "NY",
      zip: "10010",
    },
  })
  await aNewEmployee.save()
  console.log("aNewEmployee", aNewEmployee)
}

const createEmployees = async () => {
  const newEmployees = [
    {
      first_name: "Bruno20",
      last_name: "Galvao20",
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
      first_name: "Bruno21",
      last_name: "Galvao21",
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
      first_name: "Bruno22",
      last_name: "Galvao22",
      email: "bruno.galvao@ga.co",
      job_title: "Software Engineering Instructor",
      address: {
        street: "10 E 21St St",
        city: "New York",
        state: "NY",
        zip: "10010",
      },
    },
  ].map((newuser) => {
    new Employee(newuser)
  })
  await Employee.bulksave(newEmployees)
  // insert manay
  console.log("Created Employees:", newEmployees)
}

//update

const updateEmployee = async () => {
  const updated = await Employee.updateOne(
    { first_name: "Bruno5" },
    { first_name: "Bruno6" }
  )
  console.log(updated) //most bugy
}
//delte
const deleteEmployee = async () => {
  const deleted = await Employee.deleteOne({ first_name: "Bruno5" })
  console.log(deleted)
  // most trouble
  // 永久删除
}

// const printAllEmployee = async () => {
//   const all = await Employee.find({})
//   // const nameList = all.map((x) => x.first_name + x.last_name).join(" ")
//   console.log(nameList)
// }
// const printAllEmployee = async () => {
//   const namelist = await Employee.find(
//     {},
//     { first_name: 1, last_name: 1, _id: 0 }
//   )

//   console.log(namelist)
// }

const concatName = async () => {
  // const all = await Employee.find({})
  const updatedone = await Employee.aggregate([
    {
      $project: {
        full_name: { $concat: ["$first_name", " - ", "$last_name"] },
      },
    },
  ])
  console.log(updatedone)
}

const run = async () => {
  // await findAllEmployee()
  // await createEmployees()
  // await createoneEmployee()
  // await updateEmployee()
  // await deleteEmployee()
  // await printAllEmployee()
  // await concatName()
  db.close()
}
run()
