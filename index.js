const express=require('express')
const empsRelatedToroutes=require('./routes/emps');
const app=express();

app.use((request,response,next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods',"*");
    next();
})

app.use(express.json());
app.use('/emps',empsRelatedToroutes);
app.listen(9990,()=>{console.log("server started at 9990")})
