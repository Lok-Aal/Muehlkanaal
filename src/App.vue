<script setup lang="ts">

import { ref } from 'vue'

const text = ref('');

function submit(){
  console.log("submitted: " + text.value);
}

</script>

<template>

  <h1>Kontaktsplitter</h1>
  
  <p>Enter Text</p>
  <input v-model="text">
  <button @click="submit()">Submit</button>
  
</template>

<style scoped>
</style>
