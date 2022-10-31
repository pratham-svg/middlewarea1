
const middlw = function(req,res,next)
{ 
    let LogIn = false
    LogIn = req.header("LogIn")
    if(LogIn){
    console.log("ye")
    next()
    }
    else 
    {
      return   res.send({msg : "please log in first "})
    }
}
module.exports.middlw = middlw