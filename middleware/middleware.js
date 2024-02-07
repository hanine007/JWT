const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
const tooken = req.header('Authorization'); //this is to take the value of the token from the header of the request that have a key of Authorization
if (!tooken) return res.status(401).json({ error: 'Access denied' });
try {
 const decoded = jwt.verify(tooken, 'secret_pass'); //this is to verify the token with the secret_pass
 req.userId = decoded.userId; //this is to take the value of the user id from the token and assign it to the request object
 next(); //this is to move to the next middleware
 } catch (error) {
 res.status(401).json({ error: 'Invalid token' });
 }
 };

module.exports = verifyToken