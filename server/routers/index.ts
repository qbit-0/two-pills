import { Router } from 'express';
const boxesRouter = require('./boxes.js');
const router = Router();

router.use('/boxes', boxesRouter);

module.exports = router;