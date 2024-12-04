<script>
export default {
  name: "AddCourse",
  data() {
    return {
      activeTab: "basicDetails", // Default active tab
    };
  },
  methods: {
    switchTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>

<template>
  <div class="m-4 border p-6 h-full border-gray-300">
    <!-- Tab Navigation -->
    <div class="border-b border-gray-100 dark:border-gray-700" >
      <ul class="flex flex-wrap gap-6 text-sm font- text-center text-gray-500 dark:text-gray-400">
        <li class="me-2">
          <button
            @click="switchTab('basicDetails')"
            :class="['inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg', activeTab === 'basicDetails' ? 'text-blue-600 border-blue-600' : 'border-transparent ']"
            disabled
            >
            Basic Details
          </button>
        </li>
        <li class="me-2">
          <button
            @click="switchTab('aboutPathway')"
            :class="['inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg', activeTab === 'aboutPathway' ? 'text-blue-600 border-blue-600' : 'border-transparent ']"
          disabled
            >
            About the Pathway
          </button>
        </li>
        <li class="me-2">
          <button
            @click="switchTab('steps')"
            :class="['inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg', activeTab === 'steps' ? 'text-blue-600 border-blue-600' : 'border-transparent ']"
          disabled
            >
            Steps
          </button>
        </li>
      </ul>
    </div>

    <!-- Tab Content -->
    <div class="p-4">
      <!-- Basic Details Form -->
      <div v-if="activeTab === 'basicDetails'">
        <form @submit.prevent="submitBasicDetails">
          <label class="block mb-2">Course Name</label>
          <input type="text" class="w-full p-2 border rounded mb-4" placeholder="Enter course name" />
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        </form>
      </div>

      <!-- About the Pathway Form -->
      <div v-if="activeTab === 'aboutPathway'">
        <form @submit.prevent="submitAboutPathway">
          <label class="block mb-2">Description</label>
          <textarea class="w-full p-2 border rounded mb-4" placeholder="Enter description"></textarea>
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        </form>
      </div>

      <!-- Steps Form -->
      <div v-if="activeTab === 'steps'">
        <form @submit.prevent="submitSteps">
          <label class="block mb-2">Step Name</label>
          <input type="text" class="w-full p-2 border rounded mb-4" placeholder="Enter step name" />
          <label class="block mb-2">Step Description</label>
          <textarea class="w-full p-2 border rounded mb-4" placeholder="Enter step description"></textarea>
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

