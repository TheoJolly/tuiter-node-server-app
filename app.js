// nodemon app.js ; tuiter-node-server-app
// http://localhost:4000/ ; Node Server app
// http://localhost:3000/ ; React Client app

import express from 'express';
import cors from 'cors'
import HelloController from './controllers/hello-controller.js';
import UserController from "./controllers/users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
const app = express()
app.use(cors())
app.use(express.json()) // parse JSON from request body
TuitsController(app)
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000)