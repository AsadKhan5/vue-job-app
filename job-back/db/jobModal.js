import  mongoose from "mongoose"; 

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  contactEmail: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (v) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v),
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  contactPhone: {
    type: String,
    required: true,
  },
});

const jobApplicationSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Contract", "Internship"],
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    salary: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: companySchema,
      required: true,
    },
  },
  { timestamps: true }
);

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);

export default JobApplication;
