<template>
  <v-container>
    <v-layout>
      <div>Hello World!</div>
      <router-link :to="{ name: 'about' }">About</router-link>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
