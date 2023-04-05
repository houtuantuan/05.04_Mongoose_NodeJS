const Student = require('../models/students')

const createStudent = async (req, res, next) => {
  const { firstName, fullName, email } = req.body
  try {
    const newStudent = await Student.create({
      firstName,
      fullName,
      email
    })
    res.json({ data: newStudent })
  } catch (e) {
    next(e)
  }
}

const getStudent = async (req, res, next) => {
  try {
    const students = await Student.find({})
    res.json({ data: students })
  } catch (e) {
    next(error)
  }
}

const updateFirstName = async (req, res, next) => {
  const { _id } = req.params
  const { firstName } = req.body
  console.log("11111")
  try {
    const updateStudent = await Student.findOneAndUpdate(
      {
        _id
      },
      {
        firstName
      }
    )
    res.json({ data: updateStudent })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createStudent,
  getStudent,
  updateFirstName
}
