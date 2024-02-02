import express  from "express";
const router = express.Router();
import { generateToken, authenticateToken } from './../auth/index';
import {User} from './../db/schema';

router.post('/', async (req : any, res) => {
    try {
        const newData = req.body; 
        console.log(newData);
        const userData = await new User(newData);
        await userData.save();
        const token = generateToken(newData.email);
        return res.status(200).json({token, ...userData._doc});
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


export default router;