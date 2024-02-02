import express from "express";
const router = express.Router();
import { generateToken, authenticateToken } from '../auth/index';
import { Todo } from '../db/schema';

router.delete('/:id', authenticateToken, async (req: any, res) => {
    try {
        const idFromParams = req.params.id;
        // console.log('ID from params:', idFromParams);
        const todo = await Todo.findByIdAndDelete(idFromParams);
        if (todo) {
            // console.log(todo);
            res.json({ message: 'Todo deleted successfully' });
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
