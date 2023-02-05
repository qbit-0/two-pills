import { Router } from 'express';
const router = Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    return res.status(200).json({box1: {id:1, lable: "First box"}})
});

module.exports = router;