import express  from "express";
const router = express.Router();
import { generateToken, authenticateToken } from './../auth/index';
import {User} from './../db/schema';

router.post('/', async (req, res) => {
    const {email, password} = req.body;
     try {
       const userhas = await User.findOne({ email });
       if (userhas) {
           const token = generateToken(email);
           return res.status(200).json({token});
       } else {
         res.status(404).json({ message: 'User not found' });
       }
     } catch (error) {
       console.error(error);
       res.status(500).json({ error: 'Internal Server Error' });
    }
})

export default router;