import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';

import { routeForCalzados, calzadosRoute } from './routes/calzados.js';

dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());
//cors

export function createApp (model) {
    app.get('/', (req, res) => { res.send("hola mundo")});
    // rutas
    calzadosRoute(model);

    app.use('/', routeForCalzados);

    app.use((req, res) => {
        res.status(404).json({message: '404  Not Found'});
    }); 
}

app.get('/', (req, res) => { res.send("hola mundo");});

const server = app.listen(process.env.PORT, () => {
    console.log(`servidor en http://localhost:${server.address().port}`)
})

//01:10:00