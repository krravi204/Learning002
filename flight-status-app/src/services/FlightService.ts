import axios from 'axios';

export class FlightService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = 'https://api.example.com/flights'; // Replace with actual API URL
    }

    public async fetchFlightStatus(flightNumber: string): Promise<any> {
        try {
            const response = await axios.get(`${this.apiUrl}/${flightNumber}`);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching flight status: ${error.message}`);
        }
    }
}