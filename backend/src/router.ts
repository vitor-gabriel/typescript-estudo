import { Router } from "express";
import userControllers from "./controllers/userControllers";

const routes = Router();

routes.get('/', (req, res) => {
    return res.send('Hello World');
})

routes.get('/users', userControllers.index);
routes.post('/users', userControllers.create);

export default routes;