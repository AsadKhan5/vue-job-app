import express from "express";
import cors from "cors";
import "express-async-errors";
import jobsRoutes from "./routes/jobs.js";
import connectDB from "./db/connect.js";

const PORT = process.env.PORT || 5050;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/jobs", jobsRoutes);

// Global error handling
app.use((err, _req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Uh oh! An unexpected error occurred.");
});

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
  });
