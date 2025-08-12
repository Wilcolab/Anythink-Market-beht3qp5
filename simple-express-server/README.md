# Simple Express Server

This project is a simple Express server that listens on port 8001. It is designed to be lightweight and serves as a starting point for building more complex applications.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your machine.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/microsoft/vscode-remote-try-node.git
   cd simple-express-server
   ```

2. Install the dependencies:

   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:

```
yarn start
```

The server will listen on port 8001. You can access it at `http://localhost:8001`.

### Docker

To run the server in a Docker container, build the Docker image and run it:

1. Build the Docker image:

   ```
   docker build -t simple-express-server .
   ```

2. Run the Docker container:

   ```
   docker run -p 8001:8001 simple-express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

### License

This project is licensed under the MIT License. See the LICENSE file for details.