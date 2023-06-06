<template>
  <form class="login_form">
    <h1>Log in</h1>
    <label>Username</label><br/>
    <input type="text" placeholder="&#xF007;" name="username"><br/>
    <label>Password</label><br/>
    <input type="password" placeholder="&#xF084;" name="pass"><br/>
    <router-link to="/">
      <button class="btn_secondary">Back</button>
    </router-link>
    <button class="btn_primary" @click.prevent="login">Login</button>
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
  .login_form{
    background: var(--form);
    text-align: center;
    width: 500px;
    margin: auto;
    padding: 30px;
    padding-top: 60px;
    margin-top: 30px;
    margin-bottom: 40px;
  }
  .login_form input{
    outline: none;
    height: 30px;
    font-size: 18px;
    padding-left: 7px;
    margin-bottom: 25px;
    margin-top: 5px;
    background: var(--input);
    color: var(--foreground);
  }
  .login_form input::placeholder, .search::placeholder{
    font-family: FontAwesome;
  }
  .login_form button{
    margin-top: 20px;
  }
</style>
