const express=require('express');
const dotenv=require('dotenv');
dotenv.config();

const app=express();
// changes from container
app.get('/home',(req,res)=>{
    res.json({message: 'Welcome home!!'});
});

// app.get('/info',(req,res)=>{
//     res.json({message: 'this is my house <3'});
// });

app.listen(process.env.PORT,()=>{
    console.log(`Server started on PORT: ${process.env.PORT}`);
});
