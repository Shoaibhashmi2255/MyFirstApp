// Import necessary modules
const app = require("./BackEnd/app");
const debug = require("debug")("node-angular");
const http = require("http");

// Function to normalize the port
const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

// Function to handle errors during server startup
const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// Function to handle server listening event
const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

// Normalize the port from environment variables or use a default (3000)
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// Create an HTTP server using the Express app
const server = http.createServer(app);
// Event handlers for server errors and listening
server.on("error", onError);
server.on("listening", onListening);
// Start the server and make it listen on the specified port
server.listen(port);