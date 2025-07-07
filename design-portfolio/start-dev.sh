#!/bin/bash

echo "🚀 Starting Design Engineer Portfolio (MERN Stack)"
echo "=================================================="

# Check if MongoDB is running
if ! pgrep mongod > /dev/null; then
    echo "⚠️  MongoDB is not running. Please start MongoDB first:"
    echo "   sudo systemctl start mongod"
    echo "   or use MongoDB Atlas cloud connection"
fi

echo ""
echo "📋 To start the application:"
echo ""
echo "1. Backend (Terminal 1):"
echo "   cd backend && npm run dev"
echo ""
echo "2. Frontend (Terminal 2):"
echo "   cd frontend && npm start"
echo ""
echo "3. Open your browser:"
echo "   http://localhost:3000"
echo ""
echo "🎯 API Endpoints:"
echo "   GET  http://localhost:5000/api/portfolio"
echo "   PUT  http://localhost:5000/api/portfolio"
echo "   GET  http://localhost:5000/api/health"
echo ""
echo "✨ Features:"
echo "   • Modern glassmorphism design"
echo "   • Smooth animations with Framer Motion"
echo "   • Responsive design with Tailwind CSS"
echo "   • Dynamic content from MongoDB"
echo "   • Contact form with validation"
echo "   • SEO optimized"