const jwt = require('jsonwebtoken');

const SECRET = '463sgs';
export function generateToken(user : string) {
    return jwt.sign({ user }, SECRET , { expiresIn: '12h' });
}

export function authenticateToken(req : any, res : any, next : any) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
  
    jwt.verify(token,SECRET, (err : any, decoded : any) => {
      // console.log(token);
      if (err) return res.status(403).json({ error: 'Invalid token' });
      req.user = decoded.user;
      next();
    });
}