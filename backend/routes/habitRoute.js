const router = require("express").Router();
const {
    getAllHabits,
    getUserHabits,
    createHabit,
    updateHabit,
    deleteHabit
} = require("../controllers/habitController"); // Habit controller
const authMiddleware = require("../middlewares/authMiddleware"); // Auth middleware


router.route("/")
    .get(getAllHabits)
    .post(authMiddleware, createHabit);  // Create new habit

router.get("/userHabits", authMiddleware, getUserHabits)

router.route("/:id")
    .put(authMiddleware, updateHabit)    // Update habit
    .delete(authMiddleware, deleteHabit); // Delete habit

module.exports = router
