<template>
  <form class="login_form">
    <h1>Sign up</h1>
    <label>Username</label><br/>
    <input type="text" placeholder="&#xF007;" name="username"><br/>
    <label>E-mail</label><br/>
    <input type="email" placeholder="&#xF0e0;" name="email"><br/>
    <label>Password</label><br/>
    <input type="password" placeholder="&#xF084;" name="pass1"><br/>
    <label>Repeat password</label><br/>
    <input type="password" name="pass2"><br/>
    <label>I agree to Notepad's <router-link to="/tos">Terms of service</router-link>&nbsp;</label><input type="checkbox" name="tos"><br/>
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
