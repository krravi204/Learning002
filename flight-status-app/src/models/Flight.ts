class Flight {
    flightNumber: string;
    departure: string;
    arrival: string;

    constructor(flightNumber: string, departure: string, arrival: string) {
        this.flightNumber = flightNumber;
        this.departure = departure;
        this.arrival = arrival;
    }

    getFlightDetails() {
        return {
            flightNumber: this.flightNumber,
            departure: this.departure,
            arrival: this.arrival,
        };
    }
}

export default Flight;