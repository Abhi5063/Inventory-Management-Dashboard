# Stock Inventory Management System

A modern, full-stack inventory management application built with Next.js, React, Prisma, and MongoDB. Features a beautiful UI with glassmorphism effects, smooth animations, and comprehensive business analytics.

## ✨ Features

### Core Functionality
- **Product Management**: Complete CRUD operations with SKU tracking
- **Category Management**: Organize products with custom categories
- **Supplier Management**: Track and manage product suppliers
- **Real-time Search**: Instant filtering by product name or SKU
- **Advanced Filtering**: Filter by category, supplier, and stock status
- **Responsive Design**: Seamless experience on desktop, tablet, and mobile
- **Dark/Light Theme**: Toggle between themes with system preference detection

### Advanced Features
- **📊 Analytics Dashboard**: Comprehensive business insights with interactive charts
- **📈 Data Visualization**: Inventory trends and statistics using Recharts
- **🔍 Advanced Search**: Multi-filter search capabilities
- **📱 QR Code Generation**: Generate QR codes for products
- **📄 Data Export**: Export to CSV and Excel formats
- **📚 API Documentation**: Built-in API documentation
- **🔧 API Status Monitor**: Real-time API health monitoring
- **⚠️ Low Stock Alerts**: Visual alerts for low inventory items
- **📊 Performance Optimizations**: React memoization and lazy loading

### Modern UI/UX
- **Glassmorphism Effects**: Modern glass-like UI components
- **Gradient Backgrounds**: Vibrant purple-blue-pink color scheme
- **Smooth Animations**: Fade-in, slide-up, and hover effects
- **Inter Font Family**: Professional typography
- **Micro-interactions**: Enhanced user engagement

### Authentication & Security
- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for secure password storage
- **Session Management**: Persistent login with automatic token refresh
- **Protected Routes**: Automatic redirection for unauthenticated users

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern component library
- **Zustand** - Lightweight state management
- **React Table** - Advanced table functionality
- **Recharts** - Data visualization library
- **Lucide React** - Modern icon library

### Backend
- **Next.js API Routes** - Server-side API endpoints
- **Prisma ORM** - Type-safe database operations
- **MongoDB** - NoSQL database
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhi5063/Inventory-Management-Dashboard.git
   cd Inventory-Management-Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory:

   ```env
   # Database Configuration
   DATABASE_URL="your-mongodb-connection-string"

   # JWT Configuration
   JWT_SECRET="your-secure-jwt-secret-key"
   JWT_EXPIRES_IN="1h"

   # Application Configuration (Optional)
   NODE_ENV="development"
   ```

   **Important Security Notes:**
   - Never commit your `.env` file to version control
   - Use strong, unique values for `JWT_SECRET`
   - For MongoDB Atlas, create a database user with appropriate permissions
   - Keep your connection strings private

4. **Database Setup**

   Generate Prisma client:
   ```bash
   npx prisma generate
   ```

   Push the schema to your database:
   ```bash
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── login/             # Login page
│   ├── register/          # Register page
│   ├── business-insights/ # Analytics dashboard
│   ├── AppHeader/         # Navigation component
│   ├── AppTable/          # Product table component
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   └── ui/               # Shadcn/ui components
├── lib/                  # Utility functions
├── prisma/               # Prisma schema and client
├── utils/                # Helper utilities
└── public/               # Static assets
```

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret key for JWT signing | Yes |
| `JWT_EXPIRES_IN` | Token expiration time | No (default: 1h) |
| `NODE_ENV` | Environment mode | No (default: development) |

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/session` - Get current session

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create new product
- `PUT /api/products` - Update product
- `DELETE /api/products` - Delete product

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category
- `PUT /api/categories` - Update category
- `DELETE /api/categories` - Delete category

### Suppliers
- `GET /api/suppliers` - Get all suppliers
- `POST /api/suppliers` - Create supplier
- `PUT /api/suppliers` - Update supplier
- `DELETE /api/suppliers` - Delete supplier

## 🎨 Design System

The application features a modern design system with:
- **Color Palette**: Purple-blue-pink gradients
- **Typography**: Inter font family
- **Effects**: Glassmorphism, backdrop blur
- **Animations**: Fade-in, slide-up, hover effects
- **Components**: Consistent shadcn/ui components

## 🚢 Deployment

### Deploying to Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure environment variables in Render dashboard
4. Set build command: `npm install && npx prisma generate && npm run build`
5. Set start command: `npm start`

For detailed deployment instructions, see the deployment guide in the project documentation.

### Deploying to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Prisma](https://www.prisma.io/) - Database ORM
- [Shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [MongoDB](https://www.mongodb.com/) - Database

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Note**: This is a learning project and demonstration of modern web development practices. Always follow security best practices when deploying to production.
