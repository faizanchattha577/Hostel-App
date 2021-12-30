import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
// import hostelApplications from "./Routes/hostelApplication.js"

const app = express();


// const url =
//   "mongodb://localhost/students";

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true} )
// .then(() => console.log("Connected to the database."));

// app.listen(5000);
// const url = "mongodb+srv://faizan:1234@cluster0.wptzy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("connected to the database."))
//     .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json( { extended: true } ));
app.use(bodyParser.urlencoded( { extended: true } ));
// app.use("/hostelApplicants", hostelApplications);
// app.use("/viewApplicants", hostelApplications);

app.get("/", (req, res)=>{
  res.json("cbazkjcb");
})

const PORT = process.env.PORT || 5000;
// Executing the sever on given port number
app.listen(PORT, console.log(
    `Server started on port ${PORT}`));






 