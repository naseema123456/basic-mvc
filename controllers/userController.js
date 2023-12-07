const express = require("express");
const app = express()
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config()


const User = require('../models/usermodel');
const Category = require('../models/categorymodel')
const Product = require('../models/productmodel')
const UserOTPVerification = require('../models/userOTPVerification')
const order = require('../models/order');
const Razorpay = require('razorpay');
const Coupon = require('../models/coupen')
const banner=require('../models/banner')




const landing = async (req, res) => {
    try {
        const userId=req.session._id
   
        const user=await User.findOne({_id:userId})
        const ban=await banner.find();
        res.render('landing',{banner:ban,user:user||false})
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    landing,
}