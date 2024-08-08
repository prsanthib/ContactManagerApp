const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const validationToken = asyncHandler(async (req , res , next)=>{

    const authHeader = req.headers['authorization'];
    let token;
    if(authHeader && authHeader.length > 7 && authHeader.substring(0, 7) === 'Bearer ')
    {
        token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if(err)
            {
                res.status(401);
                throw new Error("user is not Authorized");
            }
            
            req.user = decoded.payload;
            next();
        });
    }

    if(!token)
    {
        res.status(401);
        throw new Error("user is not Authorized or Token is Missing");
    }
});

module.exports = validationToken;