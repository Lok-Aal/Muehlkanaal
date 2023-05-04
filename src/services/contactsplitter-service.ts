import { ref, type Ref } from 'vue'
import { Contact, type contact } from '../types/contact'

export const salutation: Ref<string> = ref('')
export const title: Ref<string> = ref('')
export const firstname: Ref<string> = ref('')
export const lastname: Ref<string> = ref('')
export const gender: Ref<'männlich' | 'weiblich' | 'divers' | ''> = ref('')

function splitStringIntoContact(input: string) {
  const nameParts = input.split(' ')

  let salutation = ''
  let gender: 'männlich' | 'weiblich' | 'divers' | '' = ''
  if (nameParts[0] === 'Herr') {
    salutation = 'Sehr geehrter Herr'
    gender = 'männlich'
  } else if (nameParts[0] === 'Frau') {
    salutation = 'Sehr geehrte Frau'
    gender = 'weiblich'
  } else {
    gender = 'divers'
  }

  let titleParts: string[] = []
  for (let i = 1; i < nameParts.length; i++) {
    const part = nameParts[i]
    if (part.endsWith('.')) {
      titleParts.push(part)
    } else {
      break
    }
  }
  const title = titleParts.join(' ')

  const name = nameParts[titleParts.length + 1]

  const lastname = nameParts[nameParts.length - 1]

  const output: contact = {
    salutation: salutation,
    title: title,
    firstname: name,
    lastname: lastname,
    gender: gender
  }

  return output
}
