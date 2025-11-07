class FlightController {
    async getFlightStatus(req, res) {
        const flightNumber = req.params.flightNumber;
        // Logic to get flight status using FlightService
        try {
            const flightService = new FlightService();
            const status = await flightService.fetchFlightStatus(flightNumber);
            res.status(200).json(status);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch flight status' });
        }
    }
}

export default FlightController;