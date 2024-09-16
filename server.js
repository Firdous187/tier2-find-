const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
//const { console } = require("inspector");

const app = express();
app.use(cors());

app.get("/getEmployees", async (req, res) => {

    let employeesData = await Employee.find().distinct("gender")
    //.sort("-age +id");
    //.select("email");
    //.and([
    //     { Country: "Russia" }, 
    //     { gender:"Male"}]);
    console.log(employeesData);

    // let employeesCount = await Employee.find().and([
    //     { Country: "Russia" }, 
    //     { gender:"Male"}]).countDocuments();

    let dataToSend = {
        data:employeesData,
        //count:employeesCount
    }

    res.json(dataToSend);

});

app.listen(4567, () => {
    console.log("Listening to port 4567");

});
let employeeSchema = new mongoose.Schema({

    id: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    age: String,
    Country: String,
    profilePic: String
})

let Employee = new mongoose.model("employee", employeeSchema);

// let getEmployeesFromDB = async () => {
//     let employeesData = await Employee.find();
//     console.log(employeesData);
// }

let connectToMDB = async () => {

    try {
        mongoose.connect("mongodb+srv://shaikfirdousunnisabegum882:begum882@createdatabase.n1bl7.mongodb.net/Tata?retryWrites=true&w=majority&appName=createDatabase");
        console.log("Successfully connected to MDB");
        //getEmployeesFromDB();
    } catch (err) {
        console.log(err)
        console.log("Unable to connect to MDB");
    }

};

connectToMDB();