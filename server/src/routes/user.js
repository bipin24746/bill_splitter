import express from 'express';
import { getallUsers, postUser } from '../controller/user.js';
const router = express.Router();

router.get('/users', getallUsers)
router.post('/users',postUser)

export default router;