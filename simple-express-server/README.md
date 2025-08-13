# Simple Express Server

This project is a simple Express server that listens on port 8001. It is designed to demonstrate the basic setup of an Express application using Docker and Yarn.

## Project Structure

```
simple-express-server
├── src
│   └── server.js        # Entry point of the application
├── package.json         # Configuration file for npm
├── Dockerfile           # Instructions to build the Docker image
├── yarn.lock            # Locks the versions of the dependencies
└── README.md            # Documentation for the project
```

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

- Ensure you have Docker installed on your machine.
- Ensure you have Yarn installed on your machine.

### Running the Server

1. Clone the repository:
   ```
   git clone https://github.com/microsoft/vscode-remote-try-node.git
   cd simple-express-server
   ```

2. Build the Docker image:
   ```
   docker build -t simple-express-server .
   ```

3. Run the Docker container:
   ```
   docker run -p 8001:8001 simple-express-server
   ```

4. The server will be running on `http://localhost:8001`.

### Development

To run the server with automatic restarts on code changes, use the following command:

```
yarn start
```

This will start the server using Nodemon, which watches for file changes and restarts the server automatically.

### License

This project is licensed under the MIT License.