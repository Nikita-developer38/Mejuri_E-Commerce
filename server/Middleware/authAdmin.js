const jwt = require('jsonwebtoken');

const isAdminAuthorized = (req, res, next) => {
    try {

        const token = req.cookies.token;
        console.log(token)

        if (!token) {
            return res.status(401).json({ message: 'Authorization token is missing in cookies' });
        }


        const JWT_SECRET = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, JWT_SECRET);



        console.log(decoded)

        req.admin = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = isAdminAuthorized;
