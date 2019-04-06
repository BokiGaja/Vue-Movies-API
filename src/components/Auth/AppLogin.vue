<template>
  <div>
    <form @submit.prevent="loginAndRedirect">
      <div>
        <input type="email" placeholder="email" v-model="credentials.email">
      </div>
      <div>
        <input type="password" placeholder="password" v-model="credentials.password">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "Login",
    data() {
      return {
        credentials: {
          email: '',
          password: ''
        },
        error: false,
        errorMessage: ''
      }
    },
    methods: {
      ...mapActions(['login']),
      async loginAndRedirect() {
        const loginError = await this.login(this.credentials);
        if (loginError) {
          this.error = true;
          this.errorMessage = loginError;
        } else {
          this.$router.push('/');
        }
      }
    },
  }
</script>