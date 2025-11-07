export interface FlightStatus {
    flightNumber: string;
    status: 'on-time' | 'delayed' | 'cancelled';
    departureTime: Date;
    arrivalTime: Date;
}

export interface FlightDetails {
    flightNumber: string;
    departure: string;
    arrival: string;
    airline: string;
    status: FlightStatus;
}