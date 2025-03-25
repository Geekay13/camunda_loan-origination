const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const loanRoutes = require("./routes/loanRoutes");
const deploymentRoutes = require("./routes/processRoutes");
const app = express();
dotenv.config();



app.use(express.json());

// Connect to MongoDB
connectDB();

// Import and use routes

app.use("/api", deploymentRoutes,loanRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
