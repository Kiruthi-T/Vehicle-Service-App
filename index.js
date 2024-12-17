const express=require('express');
const app=express();
const mongoose=require('mongoose');

require('dotenv').config();
const PORT= process.env.PORT || 8000;
const mongoURI = process.env.MONGODB_URI; // MongoDB URI from .env
console.log(process.env.MONGODB_URI);

async function run(){
    await mongoose.connect(mongoURI) ;
    console.log("connected");

}
run();

app.set('view engine','ejs');

app.use(express.static('public'));

const myrouter=require("./routes/router.js");
app.use('/home',myrouter)

app.get('/',(req,res)=>{
    res.render('login');
})


app.listen(PORT,()=>console.log(`server is listening http://localhost:${PORT}/`))

// open(`http://localhost:8087/`)
