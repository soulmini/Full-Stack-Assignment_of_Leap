import express  from "express";
const router = express.Router();


router.get('/', (req, res)=>{
    return res.send('hello from routes');
})

export default router;

