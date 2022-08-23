import Express from "express";
import {addUser, getUser, verifyUser} from '../controllers/users.js';

const router= Express.Router();

router.post('/add', addUser);
router.get('/:email', getUser);
router.post('/login',verifyUser);

export default router;