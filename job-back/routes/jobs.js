import jobsControllers from "../controllers/jobs.js";
import express from "express";

const router = express.Router();

// Get a list of 50 jobs
router.get("/", jobsControllers.getJobsController);

// Fetches the latest jobs
router.get("/latest", jobsControllers.fetchLatestJob);

// Get a single job
router.get("/:id", jobsControllers.getSingleJobById);

// Add a new job to the collection
router.post("/", jobsControllers.addJobController);

// Update the job with a new comment
router.patch("/:id", jobsControllers.updateJobController);

// Delete job
router.delete("/:id", jobsControllers.deleteJobController);

export default router;
