<script>
import axios from 'axios';
import projectCard from './components/projectCard.vue';

export default {
  name: 'App',
  data(){
    return {
      title: 'Progetti',
      projects: []
    }
  },
  components:{
    projectCard
  },
  methods:{
    getProjects(){
      axios.get("http://127.0.0.1:8000/api/posts").then(response => {
        const data = response.data;
        if (data.status & data.result.data.length){
          this.projects = data.result.data;
        } else {
          console.log('chiamata fallita');
        }
      })
    }
  },
  created(){
    this.getProjects();
  }
}
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="project in projects">
        <projectCard :project-item="project"/>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .container{
    h1{
      color: red;
    }
  }
</style>
