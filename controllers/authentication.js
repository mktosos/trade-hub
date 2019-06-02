const jwt = require("jsonwebtoken");
// Add authorization
module.exports = function(req, res, next) {
    const token =req.header("Authorization");
    let bearer = "";
    if (token) {
      bearer=token.replace("bearer ","");
    }else{
      return (res.status(403).json({
        error: "authorization required"
      }))
    }
    jwt.verify(bearer,process.env.SECRET_KEY, function(err, decoded){
      if(err){
        return (res.status(404).json({
          error: "authorization required"
        }))
      }
      
      console.log(decoded.id);
      console.log(decoded.userName);
      req.user = decoded;
      console.log(req.user);
      
      next()
    })
}