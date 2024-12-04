import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/view/HomePage.vue'; // Ensure the correct component is imported
import JobsView from '@/view/JobsView.vue';
import NotFound from '@/view/NotFound.vue';
import JobView from '@/view/JobView.vue';
import AddJob from '@/view/AddJob.vue';
import EditJob from '@/view/EditJob.vue';
import AddCourse from '@/view/AddCourse.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      path:'/job/:id',
      name:'job',
      component: JobView,

    },
    {
      path:'/add-job',
      name:'add-job',
      component: AddJob,

    },
    {
      path:'/edit-job/:id',
      name:'edit-job',
      component: EditJob,

    },
    {
      path: '/:catch(.*)',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '/add-course',
      name: 'add-course',
      component: AddCourse,
    },
  ],
});

export default router;
