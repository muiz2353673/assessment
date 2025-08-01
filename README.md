# Joke App - Full Stack Developer Assignment

A simple web application that displays random jokes from a database. Built with Node.js, Express, and SQLite.

## Features

- Displays jokes one at a time, chosen randomly
- Shows the "setup" property from JSON
- Click to reveal the "punchline"
- Click again to get the next joke
- Clean, responsive design

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd joke-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Import jokes to database**
   ```bash
   node import.js
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## How to Use

1. The app automatically loads a random joke when you first visit
2. Click anywhere on the joke card to reveal the punchline
3. Click again to load the next random joke
4. You can also use Space or Enter keys for navigation

## Project Structure

```
joke-app/
├── server.js          # Express server
├── package.json       # Dependencies
├── import.js          # Database import script
├── data/
│   └── index.json     # Jokes data
├── db/
│   └── jokes.db       # SQLite database
└── public/
    ├── index.html     # Frontend
    └── styles.css     # Styling
```

## API Endpoints

- `GET /api/joke/random` - Returns a random joke
- `GET /` - Serves the main application

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **Frontend**: HTML, CSS, JavaScript
- **Data**: Local JSON file with jokes

