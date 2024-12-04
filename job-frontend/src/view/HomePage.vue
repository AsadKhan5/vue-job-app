<script>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListinings from '@/components/JobListinings.vue';

export default {
  name: "HomePage",
  components: {
    Hero,
    HomeCards,
    JobListinings,
  },
};
</script>

<template>
  <section class="home-page">
    <Hero />
    <HomeCards />
    <JobListinings :limit="4" :showButton="true" />
  </section>
</template>
