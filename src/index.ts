import app from "./app";
import http from "http"; // Import the 'http' module for server creation

const port: number = parseInt(process.env.PORT as string) || 3000; // Define 'port' with type 'number'

const server = http.createServer(app); // Create an HTTP server using 'app'

server.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`); // Log the actual port in use
});
