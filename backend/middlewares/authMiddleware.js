const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token not provided",
            });
        }
        const decodedToken = jwt.verify(token, process.env.jwt_secret_key);
        req.user = decodedToken.userId;
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};




