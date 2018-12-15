<template>
  <div class="page">

    <router-view/>
  </div>
</template>

<script>
  import 'minireset.css'
  import '@/assets/css/global.scss'
  export default {
    name: 'appContainer'
  }
</script>