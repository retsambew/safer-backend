import Express from "express";
import {addUser, getUser} from '../controllers/users.js';

const router= Express.Router();

router.post('/add', addUser);
router.get('/:uid', getUser);

export default router;