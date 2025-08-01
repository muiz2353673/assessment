// Import required Node.js modules
const express = require("express"); // Web framework for Node.js
const sqlite3 = require("sqlite3").verbose(); // SQLite database driver
const cors = require("cors"); // Cross-Origin Resource Sharing middleware
const path = require("path"); // Path utilities for file/directory operations

// Create Express application instance
const app = express();

// Connect to SQLite database
// This creates a new database file if it doesn't exist, or connects to existing one
const db = new sqlite3.Database("./db/jokes.db");

// Middleware setup
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.static("public")); // Serve static files from 'public' directory

// API Route: Get a random joke
// This endpoint returns a single random joke from the database
app.get("/api/joke/random", (req, res) => {
  // SQL query to select one random joke from the jokes table
  db.get("SELECT * FROM jokes ORDER BY RANDOM() LIMIT 1", (err, row) => {
    if (err) {
      // If there's a database error, return 500 status with error message
      return res.status(500).json({ error: err.message });
    }
    // Send the joke data as JSON response
    res.json(row);
  });
});

// Set the port number (use environment variable or default to 3000)
const PORT = process.env.PORT || 3000;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
