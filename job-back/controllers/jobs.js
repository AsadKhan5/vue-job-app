import JobApplication from "../db/jobModal.js";

export const addJobController = async (req, res) => {
  try {
    const newJob = new JobApplication(req.body);
    const result = await newJob.save();
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error adding job", error });
  }
};

export const deleteJobController = async (req, res) => {
  try {
    const result = await JobApplication.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error deleting job", error });
  }
};

export const updateJobController = async (req, res) => {
  try {
    console.log(req.body, req.params.id )
    const result = await JobApplication.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!result) {
      return res.status(404).json( "Job not found" );
    }
    console.log(result)
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json(error );
  }
};

export const getJobsController = async (req, res) => {
  try {
    const results = await JobApplication.find().limit(50);
    console.log(results)
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const getSingleJobById = async (req, res) => {
  try {
    const result = await JobApplication.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error fetching job", error });
  }
};

export const fetchLatestJob = async (req, res) => {
  try {
    const results = await JobApplication.find()
      .select("applicantName jobTitle date")
      .sort({ date: -1 })
      .limit(3);
    res.status(200).json({ success: true, data: results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error fetching latest jobs", error });
  }
};

// Export all as default
export default {
  addJobController,
  deleteJobController,
  updateJobController,
  getJobsController,
  getSingleJobById,
  fetchLatestJob,
};
