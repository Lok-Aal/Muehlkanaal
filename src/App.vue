<script setup lang="ts">
import { Ref, ref } from 'vue'
import { salutation, title, firstname, lastname, gender } from '@/services/contactsplitter-service'

const input: Ref<string> = ref('')
const submitted: Ref<boolean> = ref(false)

function submit() {
  submitted.value = true
  console.log('submitted: ' + input.value)
}

function hide() {
  submitted.value = false
  console.log('hide')
}

function store() {
  submitted.value = false
  console.log('store')
}
</script>

<template>
  <h1 id="heading">Kontaktsplitter</h1>

  <div class="inputArea">
    <h2>Enter Input</h2>
    <input v-model="input" placeholder="Frau Prof. Dr. rer. nar. Melanie Mustermann" />
    <button @click="submit()">Eingabe</button>
  </div>

  <div class="submittedArea">
    <h2 v-if="submitted">
      Bearbeiten der Eingabe: <button @click="hide()" v-if="submitted">Schließen</button>
    </h2>
  </div>

  <div class="changingArea" v-if="submitted">
    <p>Anrede:</p>
    <input v-model="salutation" />

    <p>Titel:</p>
    <input v-model="title" />

    <p>Vorname:</p>
    <input v-model="firstname" />

    <p>Nachname:</p>
    <input v-model="lastname" />

    <p>Geschlecht:</p>
    <input v-model="gender" />

    <button @click="store()" v-if="submitted">Speichern</button>
  </div>
</template>

<style scoped>
.inputArea {
  width: 380px;
  margin-top: 50px;
}

.submittedArea {
  width: 380px;
  margin-top: 50px;
}

.changingArea {
  margin-top: 10px;
}

#heading {
  font-size: 40pt;
  font-weight: bolder;
}

input {
  width: 75%;
}

button {
  width: 20%;
  float: right;
}
</style>
