<script>
import axios from 'axios';
import projectCard from '../components/projectCard.vue';

export default {
  name: 'App',
  data(){
    return {
      title: 'Progetti',
      data: null,
      page: 1,
    }
  },
  components:{
    projectCard
  },
  methods:{
    getProjects(){
      axios.get(`http://127.0.0.1:8000/api/posts?page=${this.page}`).then(response => {
        const data = response.data;
        console.log(data)
        if (data.status & data.result.data.length){
          this.data = data.result;
        } else {
          console.log('chiamata fallita');
        }
      })
    },
    previousPage(){
      this.page = this.page - 1;
      this.getProjects();
    },
    nextPage(){
      this.page = this.page + 1;
      this.getProjects();
    }
  },
  created(){
    this.getProjects();
  }
}
</script>

<template>
  <div class="container pt-4" v-if="this.data != null">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center mb-3 text-primary">Progetti</h1>
      </div>
    </div>
    <div class="row row-cols-3 g-4 mb-3">
      <div class="col" v-for="project in data.data">
        <projectCard :project-item="project"/>
      </div>
    </div>
    <div class="d-flex justify-content-center">
        <nav>
          <ul class="pagination">
            <li class="page-item">
              <!-- pagina precedente -->
              <button :class="{disabled: this.data.prev_page_url == null}"  v-on:click="previousPage()" class="page-link" >Precedente</button>
            </li>
            <li class="page-item"><a class="page-link" href="#">{{ page }}</a></li>
            <li class="page-item">
              <!-- pagina successiva -->
              <button :class="{disabled: this.data.next_page_url == null}" v-on:click="nextPage()" class="page-link" >Successiva</button>
            </li>
          </ul>
        </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container{
    h1{
      color: red;
    }
  }
</style>
