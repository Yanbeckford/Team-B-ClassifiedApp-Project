const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const session = require('express-session')
const db = require("./config/db")
const users = require("./routes/user")
const products = require("./routes/products")
const category = require("./routes/category")
const comments = require("./routes/comments")
const contact = require("./routes/contact")



const port = 5000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser());





app.use("/api/users",users)
app.use("/api/products",products)
app.use("/api/category",category)
app.use("/api/comment",comments)
app.use("/api/contact",contact)





  app.listen(port, () => { 
  console.log(`Server started on port ${port}` );
  })





  /*

function queryPromise(sql,values=[]){
  return new Promise((resolve,reject)=>{
  db.query(sql,values,(error,result)=>{
          if(error){
              reject(error)
          }else{
              resolve(result)
          }
  })
  });
  }

  */