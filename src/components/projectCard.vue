<script>
export default{
    name: 'projectCard',
    props:[ 'project-item' ]
}
</script>

<template>
    <h4>{{ projectItem.name }}</h4>
    <a href="{{ projectItem.git_link }}">GITHUB PAGE</a>
    <span v-if="projectItem.finished === 1">☑️</span>
    <span v-if="projectItem.finished === 0">❎</span>
</template>

<style lang="scss" scoped> 

</style>