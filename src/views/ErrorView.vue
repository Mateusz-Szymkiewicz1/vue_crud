<template>
  <router-link to="/"><i class="fa fa-arrow-left"></i></router-link>
  <h1>Oh... Page not found ;/<p>404</p></h1>
</template>
<script>
import { getTheme } from '@/composables/getTheme'
export default {
  name: 'ErrorView',
  setup () {
    getTheme()
  }
}
</script>
<style scoped>
  i{
    font-size: 32px;
    position: absolute;
    top: 25px;
    right: 30px;
    color: var(--primary-hover);
  }
  h1{
    text-align: center;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  p{
    font-size: 100px;
    margin: 10px;
    color: var(--primary-hover);
  }
</style>
