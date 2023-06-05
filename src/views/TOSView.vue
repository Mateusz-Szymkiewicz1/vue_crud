<template>
  <router-link to="/register"><i class="fa fa-arrow-left"></i></router-link>
  <h1>Our terms of service</h1>
  <h2>Lorem Ipsum</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus justo vitae sapien aliquam, quis elementum eros elementum. In ut mauris ac mauris posuere gravida sed at dolor. Aliquam pulvinar ante id augue ullamcorper, in convallis enim iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc convallis, lectus eu placerat posuere, risus lorem malesuada augue, id ultrices eros quam sit amet enim. In fermentum sapien vel lectus aliquam fermentum.<br/><br/>Vestibulum tristique, velit in gravida tempor, ligula mauris vestibulum nisi, quis auctor lorem purus eget leo. Sed interdum nibh eu risus fringilla, ac aliquam nisl pellentesque. Nullam volutpat tincidunt tellus ac sagittis. Curabitur ac felis laoreet, aliquet risus non, pellentesque nisl. Nulla non blandit magna. Curabitur elementum id ex vel ultrices. Maecenas pretium ipsum tortor. Maecenas eleifend posuere enim a vehicula.</p>
  <h2>Lorem Ipsum</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus justo vitae sapien aliquam, quis elementum eros elementum. In ut mauris ac mauris posuere gravida sed at dolor. Aliquam pulvinar ante id augue ullamcorper, in convallis enim iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc convallis, lectus eu placerat posuere, risus lorem malesuada augue, id ultrices eros quam sit amet enim. In fermentum sapien vel lectus aliquam fermentum. Vestibulum tristique, velit in gravida tempor, ligula mauris vestibulum nisi, quis auctor lorem purus eget leo. Sed interdum nibh eu risus fringilla, ac aliquam nisl pellentesque. Nullam volutpat tincidunt tellus ac sagittis. Curabitur ac felis laoreet, aliquet risus non, pellentesque nisl. Nulla non blandit magna. Curabitur elementum id ex vel ultrices. Maecenas pretium ipsum tortor. Maecenas eleifend posuere enim a vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc convallis, lectus eu placerat posuere, risus lorem malesuada augue, id ultrices eros quam sit amet enim.</p>
  <h2>Lorem Ipsum</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus justo vitae sapien aliquam, quis elementum eros elementum. In ut mauris ac mauris posuere gravida sed at dolor. Aliquam pulvinar ante id augue ullamcorper, in convallis enim iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc convallis, lectus eu placerat posuere, risus lorem malesuada augue, id ultrices eros quam sit amet enim. In fermentum sapien vel lectus aliquam fermentum.vehicula.</p>
  <h2>Lorem Ipsum</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus justo vitae sapien aliquam, quis elementum eros elementum. In ut mauris ac mauris posuere gravida sed at dolor. Aliquam pulvinar ante id augue ullamcorper, in convallis enim iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc convallis, lectus eu placerat posuere, risus lorem malesuada augue, id ultrices eros quam sit amet enim. In fermentum sapien vel lectus aliquam fermentum. Vestibulum tristique, velit in gravida tempor, ligula mauris vestibulum nisi, quis auctor lorem purus eget leo. Sed interdum nibh eu risus fringilla, ac aliquam nisl pellentesque. Nullam volutpat tincidunt tellus ac sagittis. Curabitur ac felis laoreet, aliquet risus non, pellentesque nisl. Nulla non blandit magna. Curabitur elementum id ex vel ultrices. Maecenas pretium ipsum tortor. Maecenas eleifend posuere enim a vehicula.</p>
</template>
<script>
import { getTheme } from '@/composables/getTheme'
export default {
  name: 'TOSView',
  setup () {
    getTheme()
  }
}
</script>
<style scoped>
  h2{
    color: var(--primary-hover);
  }
  p{
    color: var(--foreground);
    padding-right: 40px;
  }
  i{
    font-size: 32px;
    position: absolute;
    top: 25px;
    right: 30px;
    color: var(--primary-hover);
  }
</style>
