<template>
  <q-page padding>
    <h4>Log in page</h4>
    <form class="login-form shadow-10 q-pa-md col q-gutter-sm" @submit="login">
      <p class="text-red-5 text-bold">{{ errorMessage }}</p>
      <q-input v-model="email" label="Email" />
      <q-input v-model="password" label="Password" />
      <q-btn type="submit" color="primary" label="Log in" />
    </form>
  </q-page>
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref(null);
const password = ref(null);
const router = useRouter();

const errorMessage = ref('');

const login = async (e: Event) => {
  e.preventDefault();
  try {
    const { data } = await api.post('/auth/login', {
      email: email.value,
      password: password.value,
    });
    // console.log(data.access_token);
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('userId', data.userId);
    router.push('/');
  } catch (err) {
    errorMessage.value = 'Wrong login or password';
    email.value = null;
    password.value = null;
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    console.log(err);
  }
};
</script>

<style scoped lang="scss">
.login-form {
  max-width: 300px;
  border-radius: 5px;
}
</style>
