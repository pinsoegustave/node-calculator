import { Router } from "express";
import { logger } from "../middlewares/log";

export const router = Router();

router.get('/', logger, (req, res ) => {
    res.send({
        message: "Get All calculations",
        data: [
            {id: 1, result: 1},
            {id: 2, result: 2},
        ],
    });
});


router.get('/:id', logger, logger, logger, (req, res) => {
    res.send({
        message: "Get Calculation by ID",
        id: req.params.id,
        result: 1,
    });
});
