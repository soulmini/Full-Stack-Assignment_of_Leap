import express from "express";
const router = express.Router();
import { generateToken, authenticateToken } from '../auth/index';
import { Todo } from '../db/schema';
router.put('/:id', authenticateToken, async (req: any, res) => {
    try {
        const idFromParams = req.params.id;
        console.log('ID from params:', idFromParams);
        const todo = await Todo.findByIdAndUpdate(idFromParams, req.body, { new: true });
        if (todo) {
            // console.log(todo);
            res.json({ message: todo });
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
