<script setup lang="ts">
import { Ref, ref } from 'vue'
import type { Contact } from './types/contact'
import { splitStringIntoContact } from './services/contactsplitter-service'

/**
 * The user input.
 */
const input: Ref<string> = ref('')
/**
 * Stores the submitted state (if the input was submitted).
 */
const submitted: Ref<boolean> = ref(false)
/**
 * Stores the parsed contact that was retrieved from the splitter.
 */
const parsedContact: Ref<Contact> = ref(null)

/**
 * Submits the input and calls the splitter method.
 */
function submit() {
  splitStringIntoContact(input.value)
  submitted.value = true
  console.log('submitted: ' + input.value)
}

/**
 * Hides the detail view.
 */
function hide() {
  submitted.value = false
  console.log('hide')
}

/**
 * Stores the contact and the letter salutation in the database.
 * NOTE: Database is not implemented yet.
 */
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
    <input v-model="parsedContact.salutation" />

    <p>Titel:</p>
    <input v-model="parsedContact.title" />

    <p>Vorname:</p>
    <input v-model="parsedContact.firstname" />

    <p>Nachname:</p>
    <input v-model="parsedContact.lastname" />

    <p>Geschlecht:</p>
    <input v-model="parsedContact.gender" />

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
