# Design Engineer Portfolio - MERN Stack

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring beautiful animations, glassmorphism design, and a dynamic content management system.

## ✨ Features

- **Modern Design**: Beautiful UI with glassmorphism effects and gradient backgrounds
- **Responsive**: Fully responsive design that works on all devices
- **Animated**: Smooth animations using Framer Motion
- **Dynamic Content**: Portfolio data managed through MongoDB
- **Contact Form**: Functional contact form with form validation
- **SEO Optimized**: Proper meta tags and structured data
- **Fast Performance**: Optimized for speed and performance

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and interactions
- **React Icons** - Beautiful icon library
- **React Intersection Observer** - Scroll-triggered animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd design-portfolio
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   Create a `.env` file in the backend directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/design-portfolio
   CLIENT_URL=http://localhost:3000
   NODE_ENV=development
   ```

5. **Start MongoDB**
   Make sure MongoDB is running on your system

6. **Run the Application**
   
   **Backend (Terminal 1):**
   ```bash
   cd backend
   npm run dev
   ```
   
   **Frontend (Terminal 2):**
   ```bash
   cd frontend
   npm start
   ```

7. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
design-portfolio/
├── backend/
│   ├── server.js              # Express server and API routes
│   ├── package.json           # Backend dependencies
│   └── .env                   # Environment variables
├── frontend/
│   ├── public/
│   │   └── index.html         # HTML template
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── Header.js      # Navigation header
│   │   │   ├── Hero.js        # Hero section
│   │   │   ├── About.js       # About section
│   │   │   ├── Skills.js      # Skills section
│   │   │   ├── Projects.js    # Projects showcase
│   │   │   ├── Experience.js  # Work experience
│   │   │   ├── Contact.js     # Contact form
│   │   │   ├── Footer.js      # Footer
│   │   │   └── LoadingScreen.js # Loading animation
│   │   ├── App.js             # Main app component
│   │   ├── index.js           # React entry point
│   │   └── index.css          # Global styles
│   ├── package.json           # Frontend dependencies
│   ├── tailwind.config.js     # Tailwind configuration
│   └── postcss.config.js      # PostCSS configuration
└── README.md                  # Project documentation
```

## 🎨 Customization

### Portfolio Data
The portfolio data is stored in MongoDB and includes:
- Personal information (name, title, bio, contact details)
- Skills and expertise levels
- Project portfolio with images and descriptions
- Work experience and achievements
- Education background
- Social media links

### Styling
- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font families in the Tailwind config
- **Animations**: Customize animations in component files
- **Layout**: Adjust section layouts and spacing

### Content Sections
Each section is a separate React component that can be:
- Reordered by changing the order in `App.js`
- Modified by editing the respective component files
- Hidden by removing the import and component tag


## 🚀 Deployment

### Backend Deployment (Railway/Heroku)
1. Set environment variables in your hosting platform
2. Deploy the backend folder
3. Update CORS settings for production domain

### Frontend Deployment (Netlify/Vercel)
1. Build the React app: `npm run build`
2. Deploy the build folder
3. Update API endpoints to point to production backend

### Database (MongoDB Atlas)
1. Create a MongoDB Atlas cluster
2. Update MONGODB_URI in environment variables
3. Whitelist your server's IP address

## 📧 API Endpoints

- `GET /api/portfolio` - Get portfolio data
- `PUT /api/portfolio` - Update portfolio data
- `GET /api/health` - Health check endpoint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by Feather Icons
- Images from Unsplash
- Animations powered by Framer Motion

---

Built with ❤️ for design engineers who want to showcase their work beautifully.