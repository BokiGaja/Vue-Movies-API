<template>
  <div>
    <h1>Register page</h1>
    <form @submit.prevent="registerAndRedirect">
      <div>
        <input type="text" placeholder="User name" v-model="credentials.name">
      </div>
      <div>
        <input type="email" placeholder="email" v-model="credentials.email">
      </div>
      <div>
        <input type="password" placeholder="password" v-model="credentials.password">
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "Register",
    data() {
      return {
        credentials: {
          name: '',
          email: '',
          password: ''
        },
        error: false,
        errorMessage: ''
      }
    },
    methods: {
      ...mapActions(['register']),
      async registerAndRedirect() {
        const registerError = await this.register({...this.credentials});
        if (registerError) {
          this.error = true;
          this.errorMessage = registerError;
        } else {
          this.$router.push('/login');
        }
      }
    },
  }
</script>