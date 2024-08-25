<script>
export default{
    name: 'projectCard',
    props:[ 'project-item' ]
}
</script>

<template>
    <!-- card di progetto -->
    <div class="card">
    <div class="card-body">
        <h5 class="card-title">{{ projectItem.name }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{{ projectItem.type.name }}</h6>
        <p class="card-text">{{ projectItem.description }}</p>
        <h5 class="position-absolute top-0 end-0">
            <span class="badge text-bg-success" v-if="projectItem.finished">COMPLETATO</span>
            <span class="badge text-bg-warning" v-else>DA COMPLETARE</span>
        </h5>
        <router-link :to="{ name: 'project-details', params: { id: projectItem.id } }" class="btn btn-outline-primary">
        Vedi di più...  
        </router-link>
    </div>
    </div>
<!-- 
    
    <h4>{{ projectItem.name }}</h4>
    <a href="{{ projectItem.git_link }}">GITHUB PAGE</a>
    <span v-if="projectItem.finished === 1">☑️</span>
    <span v-if="projectItem.finished === 0">❎</span>
 -->
</template>

<style lang="scss" scoped> 

</style>