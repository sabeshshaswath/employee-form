const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
const app=express();
app.use(express.json())
app.use(cors())
const val={name:'monglee',doj:'2020-12-12',salary:24000}
let con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1598',
    database:'studentbase'
});
con.connect((er)=>{
    if(er) throw er
    console.log("db connected")
})
// let query="insert into employee values('sabesh',1,'2023-10-12',200)"
// con.query(query,(err,res)=>{
//     if(err) throw err
//     console.log("DB populated")
// })
app.get('/',(req,res)=>{
    res.send("alive")
})

app.post('/data',(req,res)=>{
    const {name,doj,salary}=req.body
    console.log(name)
    con.query(`insert into employee (name,doj,salary) values('${name}',"${doj}",${salary})`,
    (err,result)=>{
        if(err) throw err
        res.send("Populated successfully")
    }
    )
})
app.get('/empdetail',(req,res)=>{
    con.query('SELECT * FROM EMPLOYEE',(er,result)=>{
        if(er) throw er
        console.log(result)
        res.status(200).json(result)
    })
})

app.listen(3002,()=>console.log("Server is on 🔥"))