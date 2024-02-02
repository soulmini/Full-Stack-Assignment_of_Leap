import express  from "express";
const router = express.Router();
import { generateToken, authenticateToken } from '../auth/index';
import {User} from '../db/schema';
import {Todo} from '../db/schema';

router.post('/', authenticateToken ,async (req : any, res) => {
    const { title, description, due_date, completed} = req.body;
    const user = req.user;
    // console.log(due_date);
    // console.log(user);
    const todoCreated = await new Todo({email : user, ...req.body});
    todoCreated.save();

    return res.json({message : 'todo created'});
})

export default router;