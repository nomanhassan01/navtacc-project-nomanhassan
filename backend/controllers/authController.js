const User = require("../models/useModel")
const bcrypt = require("bcryptjs")
const generateToken = require("../utils/generateToken")

const register = async (request, response)=> {
    try{
        const { username, email, contact, address, age, profilePhoto, role, password} = request.body
        
        if(!username || !email || !contact || !address || !age || !password){
            return response.status(400).json({ success: false, message: "All fields are required" })
        }

        const user = await User.findOne({ username })
        if(user){
            return response.status(400).json({ message: "user already registered" })
        }
        
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const registeredUser = await User.create({
            username,
            email,
            contact,
            address,
            age,
            profilePhoto,
            role,
            password: hashPassword
        })
        
        response.status(201).json({ message: `User registered`, user: registeredUser})        
    }catch(err){
        response.status(500).json(err)
    }

}

const login = async (request, response)=> {
    try{
        const { username, password } = request.body

        if(!username || !password){
            return response.status(400).json({ message: "Enter credentials"})
        }
        const user = await User.findOne({ username })
        if(!user){
            return response.status(400).json({ message: "User not registered." })
        }

        const matchPassword = await bcrypt.compare(password, user.password)
        if(!matchPassword){
            return response.status(400).json({ message: `Invalid Password` })
        }

        const loginUser = await User.findById(user._id).select("-password")
    
        response.status(200).json({ 
            message: `User login successfully`, 
            loginUser,
            token: generateToken(user._id)
        })        
    
    }catch(err){
        response.status(500).json({ message: `Problem from our side`})
    }

}

const profile = async(request, response) => {
    try{
        const user = await User.findById(request.user._id)
        if(!user){
            return response.status(401).json({ message: "not authorized"})
        }

        response.status(200).json(user)
    }catch(err){
        response.status(500).json({ message: err})
    }
}

module.exports = {
    register,
    login,
    profile
}