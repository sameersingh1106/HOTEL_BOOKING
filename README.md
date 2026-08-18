# QuickStay 🏨

QuickStay is a full-stack hotel booking platform that lets users search, book, and pay for hotel rooms online — with secure authentication and email handling powered by Clerk.

## ✨ Features

- 🔍 Browse and search available hotel rooms
- 📅 Real-time room booking
- 💳 Integrated online payment services
- 🔐 User authentication & registration via Clerk (with email handling)
- 📱 Responsive UI for a seamless booking experience across devices

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose

**Authentication**
- Clerk (registration, email verification, session management, webhooks)

**Media & Email**
- Cloudinary (image uploads)
- Nodemailer (transactional emails)

**Payments**
- Payment gateway integration for secure online transactions

## 📂 Project Structure

```
Hotel-Booking/
├── Backend/
│   ├── config/
│   │   ├── cloudinary.js
│   │   ├── db.js
│   │   └── nodemailer.js
│   ├── controllers/
│   ├── middleware/
│   │   ├── authmiddleware.js
│   │   └── uploadMiddleware.js
│   ├── models/
│   │   ├── Booking.js
│   │   ├── Hotel.js
│   │   ├── Room.js
│   │   └── user.js
│   ├── routes/
│   │   ├── Bookingroutes.js
│   │   ├── Hotelroutes.js
│   │   ├── Roomroutes.js
│   │   └── userRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── Server.js
├── Frontend/
│   ├── assets/
│   ├── components/
│   │   ├── pages/
│   │   ├── exclusiveoffers.jsx
│   │   ├── featureDestination.jsx
│   │   ├── footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HotelCart.jsx
│   │   ├── HotelReg.jsx
│   │   ├── Navbar.jsx
│   │   ├── newsletter.jsx
│   │   ├── starRating.jsx
│   │   ├── testimonials.jsx
│   │   └── Title.jsx
│   ├── context/
│   ├── .env
│   ├── .gitignore
│   ├── App.jsx
│   ├── eslint.config.js
│   ├── index.css
│   ├── index.html
│   ├── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
├── LICENSE
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)
- Clerk account & API keys
- Payment gateway API keys

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/sameersingh1106/Hotel-Booking.git
   cd Hotel-Booking
   ```

2. Install dependencies
   ```bash
   # Backend
   cd Backend
   npm install

   # Frontend
   cd ../Frontend
   npm install
   ```

3. Set up environment variables

   Create a `.env` file in `Backend/` and another in `Frontend/` based on `.env.example` (add one if it doesn't exist yet):
   ```env
   # Backend/.env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   CLERK_SECRET_KEY=your_clerk_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   SMTP_USER=your_email
   SMTP_PASS=your_email_app_password
   PAYMENT_GATEWAY_KEY=your_payment_gateway_key
   ```
   ```env
   # Frontend/.env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_BACKEND_URL=http://localhost:5000
   ```

   > ⚠️ Never commit your `.env` files. Make sure both are listed in `.gitignore`.

4. Run the development servers
   ```bash
   # Backend
   cd Backend
   npm run dev

   # Frontend (in a separate terminal)
   cd Frontend
   npm run dev
   ```

5. Visit `http://localhost:5173` (or your configured port) to view the app.

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `CLERK_SECRET_KEY` | Clerk secret key for backend auth |
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for frontend |
| `CLOUDINARY_CLOUD_NAME` / `CLOUDINARY_API_KEY` / `CLOUDINARY_API_SECRET` | Cloudinary credentials for image uploads |
| `SMTP_USER` / `SMTP_PASS` | Nodemailer email credentials |
| `PAYMENT_GATEWAY_KEY` | API key for the payment provider |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Sameer Singh**
- GitHub: [@sameersingh1106](https://github.com/sameersingh1106)
- Repo: [Hotel-Booking](https://github.com/sameersingh1106/Hotel-Booking)

