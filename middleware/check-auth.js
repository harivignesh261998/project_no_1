const jwt = require('jsonwebtoken');

 module.exports = (req,res,next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        decodedToken = jwt.verify(token, 'secrete_this_should_be_longer');
        req.userData = { email: decodedToken.mailId, userId: decodedToken.userId }
        next();
    } catch (err) {
        res.status(401).json({message: "You are not authenticated"})
    }
 };
