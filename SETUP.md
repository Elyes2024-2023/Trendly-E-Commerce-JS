# Trendly E-Commerce Setup Guide

This guide will help you set up the Trendly e-commerce project on your local machine.

## Prerequisites

1. **Node.js and npm**
   - Download and install Node.js from [https://nodejs.org/](https://nodejs.org/)
   - Choose the LTS (Long Term Support) version
   - During installation, make sure to check "Automatically install the necessary tools"
   - After installation, restart your computer

2. **Git** (optional, for version control)
   - Download and install Git from [https://git-scm.com/](https://git-scm.com/)

## Installation Steps

1. **Clone the repository** (if using Git)
   ```
   git clone https://github.com/yourusername/trendly.git
   cd trendly
   ```

2. **Install dependencies**
   - Open a terminal/command prompt in the project directory
   - Run the following command:
   ```
   npm install
   ```
   - Or run the provided batch file:
   ```
   install-dependencies.bat
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Fill in the required environment variables

4. **Start the development server**
   ```
   npm run dev
   ```
   - The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                  # Next.js app router
│   ├── (auth)/           # Authentication routes
│   ├── (shop)/           # Shop routes
│   ├── api/              # API routes
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/               # UI components
│   ├── layout/           # Layout components
│   ├── product/          # Product components
│   └── cart/             # Cart components
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── store/                # State management
└── styles/               # Global styles
```

## Troubleshooting

### Common Issues

1. **"npm is not recognized"**
   - Make sure Node.js is installed correctly
   - Restart your computer after installation
   - Check if Node.js is in your PATH environment variable

2. **TypeScript errors**
   - Run `npm install` to ensure all type definitions are installed
   - Check that `next-env.d.ts` exists in the root directory

3. **Missing dependencies**
   - Run the `install-dependencies.bat` file
   - Or manually install missing packages with `npm install [package-name]`

## Need Help?

If you encounter any issues not covered in this guide, please open an issue on the GitHub repository or contact the development team.

---

## Author

**ELYES**

## Copyright

© ELYES 2024-2025. All rights reserved.

---

Done by ELYES 