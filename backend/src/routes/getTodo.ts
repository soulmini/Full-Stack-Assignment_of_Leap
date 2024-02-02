import express  from "express";
const router = express.Router();
import { generateToken, authenticateToken } from '../auth/index';
import {Todo} from '../db/schema';

router.get('/', authenticateToken ,async (req : any, res) => {
    const user = req.user;
    console.log(user);
    const getTodo = await Todo.find({email : user});
    if(getTodo) {
        return res.json(getTodo);
    }

    return res.json({message : 'todo could not found'});
})

export default router;