 const jwt = require('jsonwebtoken');

 module.exports = (req,res,next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, 'secrete_this_should_be_longer')
        next();
    } catch (err) {
        res.status(401).json({message: "Unauthorised request"})
    }
 };