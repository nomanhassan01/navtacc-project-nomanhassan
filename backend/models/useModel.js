const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: [true, "Username should be unique"]
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: [true, "Email should be unique"]
        },
        contact: {
            type: String,
            unique: [true, "Contact is required."]
        },
        address:{
            type: String,
            required: [true, "Address is required."]
        },
        age: {
            type: Number,
            required: [true, "Age is required."],
            min: 20,
            max: 50
        },
        profilePhoto: {
            type: String,
            default: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
        },
        role: {
            type: String,
            enum: ["admin", "manager", "user"],
            default: "user"
        },
        password: {
            type: String,
            required: [true, "Password is required."],
            minLength: 4,
            maxLength: 100
        }
    },
    { timestamps: true }
)

const User = mongoose.model("User", userSchema)
module.exports = User