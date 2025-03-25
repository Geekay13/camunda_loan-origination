const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Import and use routes
const deploymentRoutes = require("./routes/processRoutes");
app.use("/api", deploymentRoutes);  // Base path for routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
