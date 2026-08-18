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
- React
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose

**Authentication**
- Clerk (registration, email verification, session management, webhooks)

**Payments**
- Payment gateway integration for secure online transactions

## 📂 Project Structure

```
QuickStay/
├── client/             # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
├── server/             # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── ...
├── .env.example
├── .gitignore
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
   git clone https://github.com/sameersingh1106/QuickStay.git
   cd QuickStay
   ```

2. Install dependencies
   ```bash
   # Frontend
   cd client
   npm install

   # Backend
   cd ../server
   npm install
   ```

3. Set up environment variables

   Create a `.env` file in the `server` directory based on `.env.example`:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   CLERK_SECRET_KEY=your_clerk_secret_key
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   PAYMENT_GATEWAY_KEY=your_payment_gateway_key
   ```

   > ⚠️ Never commit your `.env` file. Make sure it's listed in `.gitignore`.

4. Run the development servers
   ```bash
   # Backend
   cd server
   npm run dev

   # Frontend (in a separate terminal)
   cd client
   npm run dev
   ```

5. Visit `http://localhost:5173` (or your configured port) to view the app.

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `CLERK_SECRET_KEY` | Clerk secret key for backend auth |
| `CLERK_PUBLISHABLE_KEY` | Clerk publishable key for frontend |
| `PAYMENT_GATEWAY_KEY` | API key for the payment provider |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Sameer Singh**
- GitHub: [@sameersingh1106](https://github.com/sameersingh1106)
