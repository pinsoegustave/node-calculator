import  express  from "express";
import { calculatorRouter, healthRouter } from "./routes";
import { logger } from "./middlewares/log";
const app = express();
const port = 3000;

app.use(logger);

app.use('/health', healthRouter);
app.use('/calculator', calculatorRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})