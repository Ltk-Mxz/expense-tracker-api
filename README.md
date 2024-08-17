# Expense Tracker API

This is an Expense Tracker API built using Node.js, Express.js, and MongoDB. The API helps manage and track expenses, categorize transactions, and perform user authentication and management.

## Features

- **User Authentication**: Register, login, and password reset functionalities with JWT token-based authentication.
- **Expense & Income Management**: CRUD operations for adding, updating, and deleting expenses and income transactions.
- **Transaction History**: Get transaction history for a user, filtered by type (expense/income).
- **Error Handling**: Centralized error handling with custom error responses.
- **Email Functionality**: Email support for password reset functionality.

## Technologies

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database used for storing users and transaction data.
- **JWT**: For handling user authentication and securing endpoints.
- **Mongoose**: MongoDB object modeling for Node.js.
- **bcrypt.js**: Password hashing.
- **Nodemailer**: For handling email functionalities (e.g., password reset).
- **dotenv**: To manage environment variables.

## Project Structure

```plaintext
EXPENSE-TRACKER-API/
│
├── handlers/             # Custom error handlers and middleware
│   └── errorHandler.js   # Centralized error handler for the API
│
├── managers/             # Utility managers for JWT and email
│   ├── emailManager.js   # Handles sending emails (e.g., password reset)
│   └── jwtManager.js     # Manages JWT token creation and verification
│
├── middleware/           # Middleware for authentication
│   └── auth.js           # JWT-based authentication middleware
│
├── models/               # Mongoose models for MongoDB
│   ├── transactions.model.js  # Defines the schema for transactions (expenses/income)
│   └── users.model.js    # Defines the schema for users
│
├── modules/              # Core modules for handling different parts of the API
│   ├── transactions/
│   │   ├── addExpense.js      # Adds a new expense
│   │   ├── addIncome.js       # Adds a new income
│   │   ├── deleteTransaction.js  # Deletes a transaction by ID
│   │   ├── editTransaction.js    # Edits an existing transaction
│   │   ├── getTransactions.js    # Retrieves user transactions (income/expenses)
│   │   └── transactions.routes.js  # Defines transaction-related API routes
│   │
│   └── users/
│       ├── controller/          # User-related controller logic
│       │   ├── forgotPassword.js  # Handles password reset requests
│       │   ├── login.js          # Handles user login
│       │   ├── register.js       # Handles user registration
│       │   ├── resetPassword.js  # Resets the user's password
│       │   └── userDashboard.js  # User dashboard for retrieving user data
│       └── users.routes.js      # Defines user-related API routes
│
├── .env                 # Environment variables (not included in repo)
├── .gitignore           # Git ignore file to exclude files/folders from git
├── app.js               # Entry point for the Express server
├── package-lock.json    # Automatically generated lock file for exact dependency versions
└── package.json         # Node.js project metadata and dependency list
```

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/expense-tracker-api.git
cd expense-tracker-api
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a `.env` file in the root directory and add the following:

```plaintext
mongo_connection=MONGO_DB_CONNECTION_URL
jwt_salt=JWT_SALT_KEY
```

4. **Run the application:**

```bash
npm start
```

The server will start on `http://localhost:8000`.

## API Endpoints

### Users

- **POST** `/api/users/register`: User registration.
- **POST** `/api/users/login`: User login, returns a JWT token.
- **POST** `/api/users/forgotPassword`: Initiates the password reset process via email.
- **POST** `/api/users/resetPassword`: Resets the user's password.
- **GET** `/api/users/dashboard`: Retrieves the user's dashboard data (requires authentication).

### Transactions

- **POST** `/api/transactions/addIncome`: Adds a new income transaction.
- **POST** `/api/transactions/addExpense`: Adds a new expense transaction.
- **POST** `/api/transactions`: Retrieves the user's transaction history (both income and expenses).
- **DELETE** `/api/transactions/:transaction_id`: Deletes a transaction by its ID.
- **PATCH** `/api/transactions/`: Edits an existing transaction by its ID.

## Error Handling

The API uses a centralized error handler located in the `handlers/errorHandler.js` file. This ensures that any errors encountered are caught and responded to with a standardized format, making debugging easier.

## Email Functionality

- The API uses `Nodemailer` for sending emails for password resets. Ensure that valid email credentials are provided in the `.env` file.

## Authentication

The API secures routes using JWT-based authentication. The authentication middleware (`auth.js`) verifies the JWT tokens and grants access to protected routes.

### Example JWT Protected Route

To access protected routes, include the JWT token in the `Authorization` header:

```plaintext
Authorization: Bearer <your_token>
```

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to reach out:

- **Email**: a96.paul96@gmail.com
- **GitHub**: [Ltk-Mxz](https://github.com/Ltk-Mxz)
