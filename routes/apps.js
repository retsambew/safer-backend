import Express from "express";
import {addApp, getApp} from '../controllers/apps.js';
import { getReport } from "../controllers/report.js";

const router= Express.Router();

router.post('/add', addApp);
router.get('/:id', getApp);
router.get('report/:app', getReport);

export default router;