<script>
import axios from 'axios';

export default {
    name: 'PageDetail',
    data(){
        return {
            project: null,
        }
    },
    methods: {
        getProjectDetails(){
            axios.get(`http://127.0.0.1:8000/api/posts/${ this.$route.params.id }`).then(response=>{
                this.project = response.data.results;
            })
        }
    },
    created(){
        this.getProjectDetails()
    }
}
</script>

<template>
    <div class="container mt-2" v-if="project != null">
        <div class="row">
            <!-- title -->
            <div class="col-12 text-center">
                <h1>{{ project.name }}</h1>
            </div>
            
            <!-- left column -->
            <div class="col-6 text-center">
                <h2 v-if="project.technologies.length > 0">Technologies</h2>
                <h2 v-else>Tecnologie utilizzate non specificate</h2>
                <ul v-if="project.technologies.length > 0">
                    <li v-for="technology in project.technologies">
                        {{ technology.name }}
                    </li>
                </ul>
            </div>

            <!-- right column -->
            <div class="col-6 text-center">
                <h2>Type of project: {{ project.type.name }}</h2>
            </div>

            <!-- description -->
             <div class="col-12 text-center fs-4">
                <p>{{ project.description }}</p>
             </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>