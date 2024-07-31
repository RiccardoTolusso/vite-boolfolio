<script>
export default {
  name: 'App',
  data(){
    return {
      title: 'Progetti',
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
  .container{
    h1{
      color: red;
    }
  }
</style>
