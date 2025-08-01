// Import required Node.js modules
const fs = require("fs"); // File system operations
const sqlite3 = require("sqlite3").verbose(); // SQLite database driver
const jokes = require("./data/index.json"); // Import jokes data from JSON file

// Connect to SQLite database
// This will create the database file if it doesn't exist
const db = new sqlite3.Database("./db/jokes.db");

// Execute database operations in sequence (serialized)
db.serialize(() => {
  // Drop the existing jokes table if it exists
  // This ensures we start with a clean slate
  db.run("DROP TABLE IF EXISTS jokes");

  // Create the jokes table with the required columns
  // id: Primary key (auto-incrementing)
  // type: Joke category (e.g., "general", "programming")
  // setup: The joke setup/question
  // punchline: The joke punchline/answer
  db.run(
    "CREATE TABLE jokes (id INTEGER PRIMARY KEY, type TEXT, setup TEXT, punchline TEXT)"
  );

  // Prepare SQL statement for inserting jokes
  // This is more efficient than running individual INSERT statements
  const stmt = db.prepare(
    "INSERT INTO jokes (type, setup, punchline) VALUES (?, ?, ?)"
  );

  // Loop through each joke in the JSON data and insert it into the database
  jokes.forEach((joke) => {
    stmt.run(joke.type, joke.setup, joke.punchline);
  });

  // Finalize the prepared statement to complete the insertion
  stmt.finalize();

  // Log success message
  console.log("✅ Jokes imported!");
});

// Close the database connection when done
db.close();
