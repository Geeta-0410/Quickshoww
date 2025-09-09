import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";

const app = express();
const port = process.env.PORT || 3000;  // ✅ important for Render

// Connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

// API routes
app.get("/", (req, res) => res.send("Server is live!"));

// Inngest route
app.use("/api/inngest", serve({ client: inngest, functions }));

// Start server
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);

export default app;
