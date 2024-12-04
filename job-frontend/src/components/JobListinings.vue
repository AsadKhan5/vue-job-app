<script>
import JobListning from './JobListning.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { reactive } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
const base_url = "http://localhost:5050/api/"

export default {
  name: "JobListings",
  components: {
  JobListning,
    RouterLink,
    PulseLoader,
  },
  props: {
    limit: {
      type: Number,
      default: null,
    },
    showButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      state: reactive({
        jobs: [],
        isLoading: true,
      }),
    };
  },
  mounted() {
    this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      try {
        const response = await axios.get(`${base_url}jobs/`);
        console.log(response);
        this.state.jobs = response.data;
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        this.state.isLoading = false;
      }
    },
  },
};
</script>
<template>
    <section class="bg-blue-50 px-6 py-10">
      <div class="container -xl lg:container m-auto">
        <h1 class="text-3xl font-bold text-green-500 text-center mb-6">Job Listings</h1>
  
        <!-- Loading State -->
        <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
          <PulseLoader/>
        </div>
  
        <!-- Job Listings -->
        <div v-else class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {{console.log(jobs)}}
          <JobListning
            v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
            :key="job.id"
            :job="job"
          />
        </div>
      </div>
    </section>
  
    <!-- View All Button -->
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >
        View All Jobs
      </RouterLink>
    </section>
  </template>
  