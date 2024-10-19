const mongoose = require("mongoose");

const habitSchema = mongoose.Schema(
  {
    habitName: {
      type: String,
      required: true
    },
    habitDescription: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
  },
  { timestamps: true }
);

const Habit = mongoose.model("Habit", habitSchema);
module.exports = Habit
