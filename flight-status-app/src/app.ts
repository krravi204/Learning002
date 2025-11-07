import express from 'express';
import { setFlightRoutes } from './routes/flightRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
setFlightRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});