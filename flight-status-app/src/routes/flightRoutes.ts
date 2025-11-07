import { Router } from 'express';
import FlightController from '../controllers/FlightController';

const router = Router();
const flightController = new FlightController();

export const setFlightRoutes = (app: any) => {
    app.use('/api/flights', router);
    router.get('/:flightNumber/status', flightController.getFlightStatus.bind(flightController));
};