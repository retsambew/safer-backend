import Express from "express";
import {addApp, getApp} from '../controllers/apps.js';

const router= Express.Router();

router.post('/add', addApp);
router.get('/:uid', getApp);

export default router;