const {Router} = require('express')
const router = Router() 
const db = require("../config/db")

function queryPromise(sql,values=[]){
    return new Promise((resolve,reject)=>{
    db.query(sql,values,(error,result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
    })
    })
    }

router.post('/register ', async(req, res) => {
    try{
      const {username, email, phonenumber, passwd} = request.body;
      if(!username || !email || !phonenumber || !passwd){
        response.send("Enter informations")
      }
      const uservalues = [username, email, phonenumber, passwd]
      const myquery = "INSERT INTO User(username, email, phonenumber, passwd) VALUES(?, ?, ?, ?)"
      const result = await queryPromise(myquery, uservalues)
      response.json(result)

    }
    catch(err){
        console.log(err)
    }
});

router.post('/login ', (req, res) => {
  
});


router.put('/update ', (req, res) => {
  
});



module.exports=router