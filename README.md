# Video Production Agency Website

A modern, full-stack web application built for a video production agency. This project showcases services, case studies, motion graphics, reels, and video production capabilities with a professional design and responsive layout.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Pages & Routes](#pages--routes)
- [Customization](#customization)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

This website is a complete digital presence for a video production agency. It includes:

- **Homepage** - Introduction and brand showcase
- **Video Production** - Professional video production services
- **Motion Graphics** - Motion design and animation services
- **Case Studies** - Portfolio showcasing past projects and results
- **Reels** - Short-form video content with filtering capabilities

The application is built with modern web technologies, featuring:
- Server-side rendering for better performance
- Responsive design for all devices
- Interactive components and smooth animations
- Fast development with hot module reloading (HMR)

---

## ✨ Features

### Pages & Sections

1. **Homepage (`/`)**
   - Brand introduction
   - Contact information
   - Professional team details
   - Call-to-action buttons

2. **Video Production (`/video-production`)**
   - Service descriptions (Pre-Production, Production, Post-Production)
   - Portfolio showcase
   - Client testimonials
   - Pricing and packages

3. **Motion Graphics (`/motion-graphics`)**
   - 6 service categories (Logo Animation, UI/UX, Explainers, Data Visualization, Titles, Web Animation)
   - Portfolio with featured works
   - Tools and technologies used
   - Process breakdown
   - Statistics and achievements

4. **Case Studies (`/case-studies`)**
   - Detailed project case studies with challenge/solution/results
   - Client success metrics
   - Industry statistics
   - Process explanation

5. **Reels (`/reels`)**
   - Interactive grid of short-form videos
   - Category filtering (Commercial, Tutorial, Behind-the-Scenes, Trending)
   - Engagement metrics (views, likes, shares)
   - Responsive layout

### Technical Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Hot Module Reloading** - See changes instantly during development
- **Type Safety** - TypeScript for reliable code
- **Component Library** - Radix UI components for consistent UI
- **Styling** - Tailwind CSS for rapid, responsive design
- **Routing** - Wouter for lightweight client-side routing
- **Forms** - React Hook Form with Zod validation
- **State Management** - TanStack React Query for server state

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component library
- **Wouter** - Lightweight routing
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend
- **Express.js** - Node.js web framework
- **Drizzle ORM** - Type-safe database toolkit
- **PostgreSQL** - Database (via Neon)
- **Passport.js** - Authentication (ready for integration)

### Development Tools
- **tsx** - TypeScript execution
- **ESBuild** - Fast bundler
- **Autoprefixer** - CSS vendor prefixes
- **PostCSS** - CSS transformations

---

## 📁 Project Structure

```
.
├── client/                      # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/             # Reusable UI components
│   │   ├── pages/              # Page components
│   │   │   ├── HomeMain.tsx
│   │   │   ├── VideoProduction.tsx
│   │   │   ├── MotionGraphics.tsx
│   │   │   ├── CaseStudies.tsx
│   │   │   └── Reels.tsx
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Utility functions
│   │   ├── App.tsx             # Main app component with routes
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Global styles
│   ├── public/
│   │   └── figmaAssets/        # Images and assets
│   └── index.html              # HTML template
├── server/
│   ├── index.ts                # Express server setup
│   ├── routes.ts               # API routes
│   ├── storage.ts              # Database utilities
│   └── vite.ts                 # Vite development server setup
├── shared/
│   └── schema.ts               # Shared types and schemas
├── netlify.toml                # Netlify deployment config
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── drizzle.config.ts           # Drizzle ORM configuration
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor like [VS Code](https://code.visualstudio.com/)

### Installation

1. **Clone or Download the Project**
   ```bash
   # If cloning from a repository
   git clone <repository-url>
   cd project-folder
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   This will install all required packages including:
   - React and related libraries
   - Express and backend tools
   - Tailwind CSS and styling tools
   - Development tools and TypeScript

---

## 💻 Running Locally

### Start Development Server

```bash
npm run dev
```

This command will:
1. Start the Express backend on `http://127.0.0.1:5000`
2. Start Vite development server with hot module reloading
3. Open your browser automatically

You can now:
- Visit `http://127.0.0.1:5000` in your browser
- Edit any file and see changes instantly
- Keep the terminal open while working

### Stop the Server

Press `Ctrl+C` in the terminal to stop the development server.

---

## 🔨 Building for Production

To create an optimized production build:

```bash
npm run build
```

This will:
1. Build the React frontend with Vite
2. Bundle the Express backend with ESBuild
3. Create a `dist/` folder with optimized files

### Start Production Server

After building:

```bash
npm start
```

This runs the production version of your application.

---

## 🌐 Deployment

### Deploy to Netlify

This project is configured for Netlify deployment. Here are two options:

#### Option 1: Deploy Frontend Only (Recommended for Netlify)

Since this is a full-stack app, the frontend can be deployed to Netlify while the backend runs separately.

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy

3. **Backend Deployment:**
   - For the backend, consider deploying to Heroku, Railway, or Render
   - Update your frontend API calls to point to the backend URL

#### Option 2: Full-Stack on Netlify

1. **Modify package.json for Netlify Functions:**
   - Create a `netlify/functions` folder
   - Convert Express routes to serverless functions
   - Update environment variables

2. **Deploy:**
   ```bash
   npm run build
   netlify deploy --prod
   ```

#### Option 3: Deploy to Replit (Easiest)

1. Push your code to GitHub
2. Import the GitHub repository into Replit
3. Replit handles all the deployment automatically
4. Your app is live at a `.replit.app` domain

---

## 🗺️ Pages & Routes

### Available Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Main landing page with brand intro |
| `/video-production` | Video Production | Services and portfolio for video production |
| `/motion-graphics` | Motion Graphics | Motion design services and tools |
| `/case-studies` | Case Studies | Detailed project portfolio with results |
| `/reels` | Reels | Short-form video content gallery |
| `*` | 404 | Not Found page for invalid routes |

### Adding New Pages

1. Create a new file in `client/src/pages/YourPage.tsx`
2. Import it in `client/src/App.tsx`
3. Add a new route in the Router component:
   ```tsx
   <Route path="/your-path" component={YourPage} />
   ```

---

## 🎨 Customization

### Colors & Branding

Edit `tailwind.config.ts` to customize:
- Primary colors (Green: `#42ff92`, Purple: `#e87aff`)
- Typography
- Spacing
- Shadows
- Border radius

### Content

All page content is hardcoded in the component files. To update:

1. **Images** - Replace files in `client/public/figmaAssets/`
2. **Text** - Edit content directly in each page component
3. **Data** - Modify arrays of portfolio items, case studies, etc.

### Styling

Each page uses Tailwind CSS classes. To modify styles:

1. Find the component file in `client/src/pages/`
2. Update the `className` attributes with Tailwind classes
3. Changes will reflect immediately with hot reloading

### Adding Components

1. Create new UI components in `client/src/components/`
2. Use existing Radix UI components from `client/src/components/ui/`
3. Import and use in your pages

---

## 🔐 Environment Variables

Create a `.env` file in the root directory (if needed for database or APIs):

```env
DATABASE_URL=your_database_connection_string
PORT=5000
NODE_ENV=development
```

**Note:** Never commit `.env` files with sensitive information. Use Replit Secrets or Netlify environment variables for production.

---

## 📦 Dependencies

### Key Dependencies

```json
{
  "react": "^18.3.1",
  "express": "^4.21.2",
  "tailwindcss": "^3.4.17",
  "vite": "^5.4.20",
  "@radix-ui/react-*": "latest",
  "drizzle-orm": "^0.39.1",
  "wouter": "^3.3.5",
  "react-hook-form": "^7.55.0",
  "zod": "^3.24.2"
}
```

For a complete list, see `package.json`.

---

## 🐛 Troubleshooting

### Issue: "npm: command not found"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: Port 5000 already in use
**Solution:** 
```bash
# Kill the process using port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Issue: Changes not reflecting
**Solution:** 
- Ensure dev server is running with `npm run dev`
- Check browser console for errors (F12)
- Clear browser cache (Ctrl+Shift+Delete)
- Restart the dev server

### Issue: Module not found errors
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue: TypeScript errors
**Solution:**
```bash
npm run check
```
This checks TypeScript compilation. Fix errors shown in the output.

### Issue: Build fails
**Solution:**
```bash
npm run check  # Check TypeScript
npm run build  # Try building again
```

---

## 📝 Notes for Developers

- **Hot Module Reloading (HMR)** - Changes auto-refresh in browser
- **Type Safety** - All code is TypeScript; check types with `npm run check`
- **Database** - Uses Drizzle ORM; migrations can be pushed with `npm run db:push`
- **Styling** - Use Tailwind classes; custom CSS in `client/src/index.css`
- **Components** - Use Radix UI components for accessibility

---

## 🤝 Contributing

To contribute to this project:

1. Create a new branch
2. Make your changes
3. Test locally with `npm run dev`
4. Build with `npm run build` to ensure no errors
5. Submit a pull request

---

## 📄 License

MIT - Feel free to use this project for personal or commercial purposes.

---

## 📞 Support

For issues or questions:
- Check the [Troubleshooting](#troubleshooting) section
- Review the code structure in [Project Structure](#project-structure)
- Check browser console for error messages (F12)

---

**Last Updated:** December 2024

**Version:** 1.0.0

**Built with:** React, Express, Tailwind CSS, TypeScript, Vite
