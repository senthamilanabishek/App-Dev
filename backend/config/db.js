const mongoose = require('mongoose');

const connectDB = async ()=>
{
    await mongoose.connect('mongodb+srv://abishek:abishek.t12092004@cluster0.jwhoafs.mongodb.net/renting').
    then(()=>{console.log("DB connected")});
}
module.exports={connectDB};