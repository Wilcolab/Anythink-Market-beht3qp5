# Simple Express Server

This project is a simple Express server that listens on port 8001. It is designed to demonstrate the use of Docker and nodemon for development.

## Project Structure

```
simple-express-server
├── src
│   └── server.js        # Entry point of the application
├── package.json         # npm configuration file
├── Dockerfile           # Docker configuration file
├── nodemon.json         # Configuration for nodemon
└── README.md            # Project documentation
```

## Getting Started

To get started with this project, follow the instructions below:

### Prerequisites

- Node.js and npm installed on your machine.
- Docker installed on your machine.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/microsoft/vscode-remote-try-node.git
   cd simple-express-server
   ```

2. Install dependencies:

   ```
   yarn install
   ```

### Running the Server

To run the server with nodemon, use the following command:

```
yarn start
```

The server will listen on port 8001. Any changes made to the code will automatically restart the server.

### Running with Docker

To build and run the application using Docker, execute the following commands:

1. Build the Docker image:

   ```
   docker build -t simple-express-server .
   ```

2. Run the Docker container:

   ```
   docker run -p 8001:8001 simple-express-server
   ```

The server will be accessible at `http://localhost:8001`.

### License

This project is licensed under the MIT License.