const express=require('express');
const appForEmps=express.Router();
const mysql=require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'exam'
});

appForEmps.get("/",(request,response)=>{
    var query=`select * from Employee_Tb`;
    connection.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result);
            response.setHeader("content-type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("content-type","application/json");
            response.write(error);
        }
        response.end();
    })
})

appForEmps.post("/",(request,response)=>{
    var query=`insert into Employee_Tb values(${request.body.id},'${request.body.e_name}','${request.body.email}','${request.body.password}','${request.body.emp_id}','${request.body.dname}','${request.body.doj}')`;
    connection.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result);
            response.setHeader("content-type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("content-type","application/json");
            response.write(error);
        }
        response.end();
    })
})

appForEmps.put("/:id",(request,response)=>{
    var query=`update Employee_Tb set dname=${request.body.dname},
                              dob=${request.body.dob}
                             where id=${request.params.id}`;
    connection.query(query,(error,result)=>{
        if(error==null){
            response.setHeader("content-type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("content-type","application/json");
            response.write(error);
        }
        response.end();
    })
})

appForEmps.delete("/:id",(request,response)=>{
    var query=`delete from Employee_Tb
                            where id=${request.params.id}`;
    connection.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result);
            response.setHeader("content-type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("content-type","application/json");
            response.write(error);
        }
        response.end();
    })
})

appForEmps.get("/:e_name",(request,response)=>{
    var query=`select * from Employee_Tb where e_name='${request.params.e_name}'`;
    connection.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result);
            response.setHeader("content-type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("content-type","application/json");
            response.write(error);
        }
        response.end();
    })
})

module.exports = appForEmps;