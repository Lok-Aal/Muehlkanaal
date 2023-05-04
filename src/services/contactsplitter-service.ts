import { ref, type Ref } from "vue"

export const salutation: Ref<string> = ref('')
export const title: Ref<string> = ref('')
export const firstname: Ref<string> = ref('')
export const lastname: Ref<string> = ref('')
export const gender: Ref<'männlich' | 'weiblich' | 'divers' | ''> = ref('')

function splitStringIntoContact(input: string) {
const nameParts = input.split(' ');

let anrede = '';
let geschlecht = '';
if (nameParts[0] === 'Herr') {
  anrede = 'Sehr geehrter Herr';
  geschlecht = 'männlich';
} else if (nameParts[0] === 'Frau') {
  anrede = 'Sehr geehrte Frau';
  geschlecht = 'weiblich';
}

// Schritt 2: Titel bestimmen
let titleParts: string[] = [];
for (let i = 1; i < nameParts.length; i++) {
  const part = nameParts[i];
  if (part.endsWith('.')) {
    titleParts.push(part);
  } else {
    break;
  }
}
const titel = titleParts.join(' ');

// Schritt 3: Vorname bestimmen
const vorname = nameParts[titleParts.length + 1];

// Schritt 4: Nachname bestimmen
const nachname = nameParts[nameParts.length - 1];

// Rückgabe als NameParts-Objekt
return { salutation, geschlecht, title, vorname, nachname };
}