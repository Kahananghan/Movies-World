# Movies World

A modern React-based movie application that allows users to discover, search, and explore movies with detailed information and ratings.

## Features

- Browse popular and trending movies
- Search movies by title
- View detailed movie information
- Responsive design for all devices
- Fast loading with optimized performance

## Tech Stack

- **React** - Frontend library
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **CSS3** - Styling
- **Movie API** - Data source

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd movieapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Create a `.env` file and add your movie API key:
```bash
VITE_API_KEY=your_api_key_here
```

5. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
movieapp/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## Deployment

```bash
npm run build
npm run preview
```

## Troubleshooting

- **Port already in use**: Change port with `npm run dev -- --port 3000`
- **API errors**: Check your API key in `.env` file
- **Build issues**: Clear cache with `rm -rf node_modules package-lock.json && npm install`

## Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - see LICENSE file for details
