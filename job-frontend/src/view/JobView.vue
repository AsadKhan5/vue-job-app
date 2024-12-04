<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";
import { RouterLink } from 'vue-router';
import BackButton from "@/components/BackButton.vue";
import { useToast } from "vue-toastification";
const base_url = "http://localhost:5050/api/"


export default {
  name: "JobView",
  components: { PulseLoader, RouterLink, BackButton },
  data() {
    return {
      job: {}, // Stores job details
      isLoading: true, // Controls the loading state
      jobId: null, // Job ID from route params
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  methods: {
    async fetchJobDetails() {
      try {
        const response = await axios.get(`${base_url}jobs/${this.jobId}`);
        console.log(response.data)
        this.job = response.data;
      } catch (error) {
        console.error("Error fetching job details:", error);
        this.toast.error("Failed to load job details.");
      } finally {
        this.isLoading = false;
      }
    },
    async deleteJob() {
      const confirmDelete = confirm("Are you sure you want to delete this job?");
      if (!confirmDelete) return;

      try {
        await axios.delete(`${base_url}jobs/${this.jobId}`);
        this.toast.success("Job deleted successfully.");
        this.$router.push("/jobs"); // Redirect to job listing page
      } catch (error) {
        console.error("Error deleting job:", error);
        this.toast.error("Failed to delete the job. Please try again.");
      }
    },
  },
  mounted() {
    this.jobId = this.$route.params.id; // Get jobId from route params
    this.fetchJobDetails(); // Fetch job details when the component is mounted
  },
};
</script>

<template>
  <section v-if="!isLoading" class="bg-green-50">
    <BackButton />
    <div class="container m-auto py-6 px-6">
      <div class="grid grid-cols-1  md:grid-cols-[70%_30%] w-full gap-6">
        <!-- Main Content -->
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div class="text-gray-500 mb-4">{{ job.type || "Full-Time" }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ job.title }}</h1>
            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
            >
              <i class="pi pi-map-marker text-lg text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ job.location }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">Job Description</h3>
            <p class="mb-4">{{ job.description }}</p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>
            <p class="mb-4">{{ job.salary }}</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>

            <h2 class="text-2xl font-bold">{{ job?.company?.name }}</h2>
            <p class="my-2">{{ job?.company?.description }}</p>
            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">{{ job?.company?.contactEmail }}</p>

            <h3 class="text-xl">Contact Phone:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">{{ job?.company?.contactPhone }}</p>
          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink
              :to="`/edit-job/${job._id}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Edit Job
            </RouterLink>
            <button
              @click="deleteJob"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <!-- Loader -->
  <div v-if="isLoading" class="text-center py-10">
    <PulseLoader />
  </div>
</template>

