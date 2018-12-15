<template>
  <div class="game page">
    <div class="gameBox"></div>
    <div class="swipeBox" id="swipeBox"></div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import '@/assets/css/app.scss'
  import swipe from '@/assets/swipe.ts'

  export default Vue.extend({
    name: 'home',
    mounted() {
      let el = document.getElementById('swipeBox');

      swipe(el, (dir: Number) => {
        // dir contains the integer direction of the swipe
        console.log(dir)
        if ( dir > 0 ) {
          el.innerHTML = '<span class="result">' + dir +'</span>'
        } else {
          el.innerHTML = '<span class="fail">Failed</span>'
        }
      })
    }

  });



</script>
