import request from 'supertest';
import app from '../src/app'; // Adjust the path as necessary
import FlightService from '../src/services/FlightService';

jest.mock('../src/services/FlightService');

describe('Flight API', () => {
    it('should return flight status', async () => {
        const mockFlightStatus = {
            flightNumber: 'AA123',
            status: 'On Time',
            departure: '2023-10-01T10:00:00Z',
            arrival: '2023-10-01T12:00:00Z',
        };

        (FlightService.prototype.fetchFlightStatus as jest.Mock).mockResolvedValue(mockFlightStatus);

        const response = await request(app).get('/api/flights/status/AA123');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockFlightStatus);
    });

    it('should return 404 for non-existent flight', async () => {
        (FlightService.prototype.fetchFlightStatus as jest.Mock).mockResolvedValue(null);

        const response = await request(app).get('/api/flights/status/INVALID123');

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'Flight not found' });
    });
});