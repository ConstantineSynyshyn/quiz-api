const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: String,
  score: Number,
  answers: [
    {
      question_id: String,
      answer: String,
      is_correct: Boolean,
    },
  ],
})

module.exports = mongoose.model("User", userSchema)
