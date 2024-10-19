const asyncHandler = require("express-async-handler");
const Habit = require("../models/habitModel");
const User = require("../models/useModel");

// Get all habits (admin feature or general)
const getAllHabits = asyncHandler(async (request, response) => {
  const allHabits = await Habit.find();
  response.status(200).json(allHabits);
});

// Get habits for the logged-in user
const getUserHabits = asyncHandler(async (request, response) => {
  const habits = await Habit.find({ user: request.user._id });

  if (!habits) {
    return response.status(404).json({ message: "No habits found for this user" });
  }

  response.status(200).json(habits);
});

// Create a new habit
const createHabit = asyncHandler(async (request, response) => {
  const { habitName, habitDescription } = request.body;

  if (!habitName || !habitDescription) {
    return response
      .status(400)
      .json({ message: "Please provide complete habit details" });
  }

  const newHabit = await Habit.create({
    habitName,
    habitDescription,
    user: request.user._id, // Assign to the logged-in user
  });

  response.status(200).json(newHabit);
});

// Update an existing habit
const updateHabit = asyncHandler(async (request, response) => {
  const habitId = request.params.id;

  if (!habitId) {
    return response.status(400).json({ message: "Please provide habit ID" });
  }

  const habit = await Habit.findById(habitId);
  if (!habit) {
    return response.status(404).json({ message: "Habit not found" });
  }

  const user = await User.findById(request.user._id);

  if (!habit.user.equals(user._id)) {
    return response
      .status(401)
      .json({ message: "Unauthorized user cannot update this habit" });
  }

  const updatedHabit = await Habit.findByIdAndUpdate(habitId, request.body, {
    new: true,
  });
  response.status(200).json(updatedHabit);
});

// Delete a habit
const deleteHabit = asyncHandler(async (request, response) => {
  const habitId = request.params.id;

  if (!habitId) {
    return response.status(400).json({ message: "Please provide habit ID" });
  }

  const habit = await Habit.findById(habitId);

  if (!habit) {
    return response.status(404).json({ message: "Habit not found" });
  }

  const user = await User.findById(request.user._id);
  if (!habit.user.equals(user._id)) {
    return response
      .status(404)
      .json({ message: "Habit cannot be deleted by an unauthorized user" });
  }

  await Habit.findByIdAndDelete(habitId);
  response.status(200).json({ message: `Habit with id: ${habitId} deleted` });
});

module.exports = {
  getAllHabits,
  getUserHabits,
  createHabit,
  updateHabit,
  deleteHabit,
};
