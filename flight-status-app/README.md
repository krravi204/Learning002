# Flight Status App

This project is a Flight Status application that allows users to check the status of flights. It is built using TypeScript and Express.

## Project Structure

```
flight-status-app
├── src
│   ├── app.ts
│   ├── controllers
│   │   └── FlightController.ts
│   ├── models
│   │   └── Flight.ts
│   ├── services
│   │   └── FlightService.ts
│   ├── routes
│   │   └── flightRoutes.ts
│   └── types
│       └── index.ts
├── tests
│   └── flight.test.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd flight-status-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   npm start
   ```

## Usage

- To check the status of a flight, send a GET request to the `/flight-status` endpoint with the flight number as a query parameter.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.