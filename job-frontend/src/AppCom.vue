<!-- <script setup>
import { ref, onMounted } from 'vue';

// Define reactive variables
const name = ref("Asad Khan");
const status = ref('Pending');
const items = ref(["Orange", "Blue", "Red", "Green"]);
const link = ref("https://www.google.com/");
const newColor = ref('')

// Function to toggle status
const changeStatusHandler = () => {
  if (status.value === 'Active') {
    status.value = "Pending";
  } else if (status.value === 'Pending') {
    status.value = "Inactive";
  } else {
    status.value = "Active";
  }
};

// Function to add new colors to the list
const addColors = () => {
  if (newColor.value.trim() !== '') {
    items.value.push(newColor.value);
    newColor.value = ''; // Reset the input field
  }
};

// Function to delete a color from the list
const deleteTaskHandler = (index) => {
  items.value.splice(index, 1);
};

// Fetch data when the component is mounted
onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json(); // Corrected here
    console.log(data);
    items.value = data.map((task) => task.title);
  } catch (error) {
    console.log("Error in fetching data!");
  }
});
</script>

<template>
  <h1>Vue Jobs</h1>
  <p v-if="status === 'Active'">User Is Active!</p>
  <p v-else-if="status === 'Pending'">User is Pending!</p>
  <p v-else>User Is Inactive!</p>

  <!-- Color form -->
  <form @submit.prevent="addColors">
    <label for="newColor">Type More Colors</label>
    <input type="text" id="newColor" name="newColor" v-model="newColor">
    <button type="submit">Add Color</button>
  </form>

  <h3>Colors</h3>
  <ul>
    <li v-for="(item, index) in items" :key="item">
      <span>{{ item }}</span>
      <button @click="deleteTaskHandler(index)">x</button>
    </li>
  </ul>
  
  <a :href="link" target="_blank">Go to link</a>

  <br>

  <!-- Button to change the status -->
  <button @click="changeStatusHandler">Change Status</button>
</template> -->
