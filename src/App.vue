<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
const submitted = ref(false)

const anrede = ref('')
const titel = ref('')
const vorname = ref('')
const nachname = ref('')
const geschlecht = ref('')

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
    <input v-model="anrede" />

    <p>Titel:</p>
    <input v-model="titel" />

    <p>Vorname:</p>
    <input v-model="vorname" />

    <p>Nachname:</p>
    <input v-model="nachname" />

    <p>Geschlecht:</p>
    <input v-model="geschlecht" />

    <button @click="store()" v-if="submitted">Speichern</button>
  </div>
</template>

<style scoped>
.inputArea {
  width: 380px;
  margin-top: 40px;
}

.submittedArea {
  width: 380px;
  margin-top: 40px;
}

.changingArea {
  margin-top: 20px;
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
