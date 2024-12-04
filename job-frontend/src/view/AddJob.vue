<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
const base_url = "http://localhost:5050/api/"


export default {
  name: "AddJob",
  data() {
    return {
      form: {
        type: "Full-Time",
        title: "",
        description: "",
        salary: "",
        location: "",
        company: {
          name: "",
          description: "",
          contactEmail: "",
          contactPhone: "",
        },
      },
    };
  },
  setup(){
    const router = useRouter();
    const toast = useToast();

    return {router, toast};
  },
  methods: {
    async addJob() {
      try {
        const response = await axios.post(`${base_url}jobs/`, this.form);
        this.toast.success("Job added successfully!");

        // Reset form after successful submission
        this.form = {
          type: "Full-Time",
          title: "",
          description: "",
          salary: "",
          location: "",
          company: {
            name: "",
            description: "",
            contactEmail: "",
            contactPhone: "",
          },
        };
        this.router.push(`/job/${response?.data?._id}`);
      } catch (error) {
        this.toast.error("Failed to add job. Please try again.");
      }
    },
  },
};
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="addJob">
          <h2 class="text-3xl text-center font-semibold mb-6">Add Job</h2>

          <!-- Job Type -->
          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2">Job Type</label>
            <select
              v-model="form.type"
              id="type"
              name="type"
              class="border rounded w-full py-2 px-3"
              required
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <!-- Job Title -->
          <div class="mb-4">
            <label for="title" class="block text-gray-700 font-bold mb-2">Job Title</label>
            <input
              v-model="form.title"
              type="text"
              id="title"
              name="title"
              class="border rounded w-full py-2 px-3"
              placeholder="Job Title"
              required
            />
          </div>

          <!-- Job Description -->
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2">Description</label>
            <textarea
              v-model="form.description"
              id="description"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Job duties, expectations, requirements, etc."
              required
            ></textarea>
          </div>

          <!-- Salary -->
          <div class="mb-4">
            <label for="salary" class="block text-gray-700 font-bold mb-2">Salary</label>
            <input
              v-model="form.salary"
              type="text"
              id="salary"
              name="salary"
              class="border rounded w-full py-2 px-3"
              placeholder="Salary Range"
              required
            />
          </div>

          <!-- Location -->
          <div class="mb-4">
            <label for="location" class="block text-gray-700 font-bold mb-2">Location</label>
            <input
              v-model="form.location"
              type="text"
              id="location"
              name="location"
              class="border rounded w-full py-2 px-3"
              placeholder="Company Location"
              required
            />
          </div>

          <!-- Company Info -->
          <h3 class="text-2xl mb-5">Company Info</h3>
          <div class="mb-4">
            <label for="company-name" class="block text-gray-700 font-bold mb-2">Company Name</label>
            <input
              v-model="form.company.name"
              type="text"
              id="company-name"
              name="company-name"
              class="border rounded w-full py-2 px-3"
              placeholder="Company Name"
              required
            />
          </div>

          <div class="mb-4">
            <label
              for="company-description"
              class="block text-gray-700 font-bold mb-2"
            >
              Company Description
            </label>
            <textarea
              v-model="form.company.description"
              id="company-description"
              name="company-description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="What does your company do?"
              required
            ></textarea>
          </div>

          <div class="mb-4">
            <label
              for="contact-email"
              class="block text-gray-700 font-bold mb-2"
            >
              Contact Email
            </label>
            <input
              v-model="form.company.contactEmail"
              type="email"
              id="contact-email"
              name="contact-email"
              class="border rounded w-full py-2 px-3"
              placeholder="Email address for applicants"
              required
            />
          </div>

          <div class="mb-4">
            <label
              for="contact-phone"
              class="block text-gray-700 font-bold mb-2"
            >
              Contact Phone
            </label>
            <input
              v-model="form.company.contactPhone"
              type="tel"
              id="contact-phone"
              name="contact-phone"
              class="border rounded w-full py-2 px-3"
              placeholder="Optional phone for applicants"
            />
          </div>

          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full"
              type="submit"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 600px;
}
</style>
