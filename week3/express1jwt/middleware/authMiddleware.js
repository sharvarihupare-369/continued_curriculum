const { BlackListModel } = require("../models/BlacklistModel");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if(!token){
        return res.status("400").send({"message":"Please Provide the token!"})
    }
    
    const isTokenBlackListed = await BlackListModel.findOne({token})

    if(isTokenBlackListed){
        return res.status("400").send({"message":"Token is already blacklisted!"})
    }
    const decoded = jwt.verify(token, process.env.secret_key);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { authMiddleware };
