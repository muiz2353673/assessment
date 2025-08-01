# Joke App - Full Stack Developer Assignment

A modern, interactive web application that displays random jokes from a database. Built with Node.js, Express, and SQLite, featuring a clean, responsive design with smooth animations.

## 🎯 Features

- **Random Joke Display**: Shows jokes one at a time, chosen randomly from a database
- **Interactive Reveal**: Click to reveal the punchline with smooth animations
- **Keyboard Navigation**: Use Space or Enter keys for navigation
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Loading States**: Visual feedback during joke loading
- **Error Handling**: Graceful error handling with user-friendly messages

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd assessment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Initialize the database**

   ```bash
   node import.js
   ```

4. **Start the application**

   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎮 How to Use

1. **Initial Load**: The app automatically displays a random joke when you first visit
2. **Reveal Punchline**: Click anywhere on the joke card to reveal the punchline
3. **Next Joke**: Click again to load the next random joke
4. **Keyboard Shortcuts**: Use Space or Enter keys for the same actions

## 🏗️ Project Structure

```
assessment/
├── server.js          # Express server and API endpoints
├── package.json       # Project dependencies and scripts
├── import.js          # Database initialization script
├── data/
│   └── index.json     # Source jokes data (2000+ jokes)
├── db/
│   └── jokes.db       # SQLite database file
└── public/
    ├── index.html     # Main frontend application
    └── styles.css     # Modern CSS styling
```

## 🔌 API Endpoints

| Endpoint           | Method | Description                 | Response                   |
| ------------------ | ------ | --------------------------- | -------------------------- |
| `/api/joke/random` | GET    | Returns a random joke       | JSON object with joke data |
| `/`                | GET    | Serves the main application | HTML page                  |

### API Response Format

```json
{
  "id": 42,
  "type": "general",
  "setup": "What did the fish say when it hit the wall?",
  "punchline": "Dam."
}
```

## 🛠️ Technologies Used

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **SQLite3** - Lightweight, file-based database
- **CORS** - Cross-Origin Resource Sharing middleware

### Frontend

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - ES6+ features, no frameworks

### Data

- **SQLite Database** - Local file-based storage
- **JSON Data Source** - Structured joke data

## 📊 Database Schema

The application uses a simple SQLite database with the following structure:

| Column      | Type                | Description                                       |
| ----------- | ------------------- | ------------------------------------------------- |
| `id`        | INTEGER PRIMARY KEY | Auto-incrementing unique identifier               |
| `type`      | TEXT                | Joke category (general, programming, knock-knock) |
| `setup`     | TEXT                | The joke question or setup                        |
| `punchline` | TEXT                | The joke answer or punchline                      |

## 🔧 Development

### Available Scripts

```bash
npm start          # Start the development server
node import.js     # Initialize database with jokes
```

### Environment Variables

- `PORT` - Server port (default: 3000)

### Adding New Jokes

1. Edit `data/index.json` to add new jokes
2. Run `node import.js` to update the database

## 🐛 Troubleshooting

### Common Issues

**Port Already in Use**

```bash
# Change port or kill existing process
lsof -ti:3000 | xargs kill -9
```

**Database Not Found**

```bash
# Recreate the database
node import.js
```

**Module Not Found**

```bash
# Reinstall dependencies
npm install
```

### Debug Steps

1. Check Node.js version: `node --version`
2. Verify dependencies: `npm list`
3. Check database exists: `ls -la db/`
4. Test API endpoint: `curl http://localhost:3000/api/joke/random`

## 📈 Performance

- **Fast Loading**: SQLite provides quick random joke selection
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: CSS transitions for better UX
- **Efficient Queries**: Uses SQLite's built-in RANDOM() function

## 🔒 Security

- **CORS Enabled**: Cross-origin requests are properly handled
- **Parameterized Queries**: SQL injection protection
- **Static File Serving**: Secure file serving from public directory

## 🚀 Deployment

This application can be deployed to various platforms:

- **Heroku**: Add `Procfile` and set environment variables
- **Vercel**: Deploy as Node.js application
- **Railway**: Direct deployment from GitHub
- **DigitalOcean**: Deploy to App Platform

### Production Considerations

- Set up HTTPS
- Add rate limiting
- Implement proper logging
- Consider using a production database (PostgreSQL, MySQL)
- Add monitoring and error tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of a full-stack developer assignment.

---

**Built with ❤️ using Node.js, Express, and SQLite**
