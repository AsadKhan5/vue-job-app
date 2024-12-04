<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { reactive } from "vue";
const base_url = "http://localhost:5050/api/"


export default {
  name: "EditJob",
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
      state: reactive({
        job: {},
        isLoading: true,
      }),
      jobId: null,
    };
  },
  setup() {
    const router = useRouter();
    const toast = useToast();

    return { router, toast };
  },
  mounted() {
    this.jobId = this.$route.params.id;
    this.fetchJob();
  },
  methods: {
    // Fetch existing job details
    async fetchJob() {
      try {
        const response = await axios.get(`${base_url}jobs/${this.jobId}`);
        this.state.job = response.data;

        // Populate form fields with fetched job data
        Object.assign(this.form, response.data);
        this.form.company = response.data.company || {};
      } catch (error) {
        this.toast.error("Failed to fetch job details.");
        console.error("Error fetching job:", error);
      } finally {
        this.state.isLoading = false;
      }
    },

    // Update job
    async updateJob() {
      try {
        const response = await axios.patch(`${base_url}jobs/${this.jobId}`, this.form);
        this.toast.success("Job updated successfully!");

        // Redirect to the job details page
        this.router.push(`/job/${response?.data?._id}`);
      } catch (error) {
        this.toast.error("Failed to update the job. Please try again.");
        console.error("Error updating job:", error);
      }
    },
  },
};
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div v-if="!state.isLoading" class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border">
        <form @submit.prevent="updateJob">
          <h2 class="text-3xl text-center font-semibold mb-6">Edit Job</h2>

          <!-- Job Type -->
          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2">Job Type</label>
            <select v-model="form.type" id="type" class="border rounded w-full py-2 px-3" required>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <!-- Other fields -->
          <div class="mb-4">
            <label for="title" class="block text-gray-700 font-bold mb-2">Job Title</label>
            <input v-model="form.title" id="title" class="border rounded w-full py-2 px-3" required />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2">Description</label>
            <textarea v-model="form.description" id="description" rows="4" class="border rounded w-full py-2 px-3" required></textarea>
          </div>
          <div class="mb-4">
            <label for="salary" class="block text-gray-700 font-bold mb-2">Salary</label>
            <input v-model="form.salary" id="salary" class="border rounded w-full py-2 px-3" required />
          </div>
          <div class="mb-4">
            <label for="location" class="block text-gray-700 font-bold mb-2">Location</label>
            <input v-model="form.location" id="location" class="border rounded w-full py-2 px-3" required />
          </div>

          <!-- Company Info -->
          <h3 class="text-2xl mb-5">Company Info</h3>
          <div class="mb-4">
            <label for="company-name" class="block text-gray-700 font-bold mb-2">Company Name</label>
            <input v-model="form.company.name" id="company-name" class="border rounded w-full py-2 px-3" required />
          </div>
          <div class="mb-4">
            <label for="company-description" class="block text-gray-700 font-bold mb-2">Company Description</label>
            <textarea v-model="form.company.description" id="company-description" rows="4" class="border rounded w-full py-2 px-3" required></textarea>
          </div>
          <div class="mb-4">
            <label for="contact-email" class="block text-gray-700 font-bold mb-2">Contact Email</label>
            <input v-model="form.company.contactEmail" id="contact-email" class="border rounded w-full py-2 px-3" required />
          </div>
          <div class="mb-4">
            <label for="contact-phone" class="block text-gray-700 font-bold mb-2">Contact Phone</label>
            <input v-model="form.company.contactPhone" id="contact-phone" class="border rounded w-full py-2 px-3" />
          </div>

          <!-- Submit -->
          <div>
            <button type="submit" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full">
              Update Job
            </button>
          </div>
        </form>
      </div>

      <!-- Loader -->
      <div v-else class="text-center">
        <p>Loading...</p>
      </div>
    </div>
  </section>
</template>
