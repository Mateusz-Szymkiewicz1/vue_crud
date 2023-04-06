<template>
  <form class="login_form">
    <h1>Sign up</h1>
    <label>Username</label><br/>
    <input type="text" placeholder="&#xF007;"><br/>
    <label>E-mail</label><br/>
    <input type="email" placeholder="&#xF0e0;"><br/>
    <label>Password</label><br/>
    <input type="password" placeholder="&#xF084;"><br/>
    <label>Repeat password</label><br/>
    <input type="password"><br/>
    <label>I agree to Notepad's <a href="#">Terms of usage</a>&nbsp;</label><input type="checkbox"><br/>
    <router-link to="/">
      <button class="btn_secondary">Back</button>
    </router-link>
    <button class="btn_primary signUp" @click.prevent="signUp">Sign up</button>
  </form>
</template>
<script>
import { getTheme } from '@/composables/getTheme'
export default {
  name: 'LoginView',
  setup () {
    getTheme()
  }
}
</script>
<style>
  .signUp{
    width: 100px !important;
  }
  input[type=checkbox]{
    cursor: pointer;
    height: 20px;
    width: 20px;
    transform: translateY(4px);
  }
  a{
    color: #525acc;
  }
</style>
