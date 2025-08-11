import express from 'express';
import { getallUsers, registerUser } from '../controller/user.js';
const router = express.Router();

router.get('/users', getallUsers)
router.post('/users',registerUser)

export default router;