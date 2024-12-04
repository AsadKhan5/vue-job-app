<script>
export default {
data(){
  return {
    name: "Asad Khan",
    status: 'Pending',
    items: ["Orange", "Blue", "Red", "Green"],
    link:"https://www.google.com/"
  };
},
methods:{
  changeStatusHandler(){
if(this.status === 'Active'){
  this.status = "Pending"
}else if(this.status === 'Pending'){
  this.status = "Inactive"
}
else{
  this.status = "Active"
}
  }
}
}
</script>

<template>
  <h1>vue jobs </h1>
  <p v-if="status === 'Active'">User Is Active !</p>
  <p v-else-if="status === 'Pending'">Use is Pending !</p>
  <p v-else>User Is Inactive !</p>
  <h3>Colors</h3>
  <ul>
    <li v-for="item in items" :key='item'>{{ item }}</li>
    <a :href="link">Go to link</a>
  </ul>
  <br>
<!-- <button v-on:click="changeStatusHandler">Change Status</button> -->
<button @click="changeStatusHandler">Change Status</button>

</template>