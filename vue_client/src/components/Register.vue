/* eslint-disable no-console */
<template>
  <div>
    <h1>Register me</h1>
    <input v-model="email" type="email" name="name" placeholder="johnDoe@mail.com"/><br>
    <input v-model="password" type="password" name="password" placeholder="*******"/><br>
    <div class="error" v-html="error"/><br>
    <button @click="register" >Register my friend</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  // methods called by the buttons or actions
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        this.error = null;
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
  // service that verifies when specific binded object of data changes.
  // watch: {
  //   email(value) {
  //     //console.log('The email changed to', value);
  //   },
  // },
  // we can also specified handler of other events
  mounted() {
    // console.log('Component "Register" has been mounted');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.error{
  color:red;
}
</style>
