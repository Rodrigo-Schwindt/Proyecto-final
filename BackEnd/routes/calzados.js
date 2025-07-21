import { Router } from "express";
import { Calzados } from '../controllers/calzados.js'
export const routeForCalzados = Router();

export function calzadosRoute (model) {

    const calzadosController = new Calzados(model);

    routeForCalzados.get('/calzados', async (req, res) => {
        const result = await calzadosController.GetCalzados();

        res.json(result);

    });
    routeForCalzados.post('/calzados', async (req, res) => {
        const data = req.body;
        const result = await calzadosController.CreateCalzados(data);
        res.json(result);
    });
}


