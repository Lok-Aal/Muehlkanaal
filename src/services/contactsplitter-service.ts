import { ref, type Ref } from 'vue'
import { type Contact, type contact } from '../types/contact'
import { titles } from './data-service'

export function splitStringIntoContact(input: string) {
  const nameParts = input.split(' ')
  let isDiverse = false
  let salutation = ''
  let gender: 'männlich' | 'weiblich' | 'divers' | '' = ''

  if (nameParts[0] === 'Herr') {
    gender = 'männlich'
  } else if (nameParts[0] === 'Frau') {
    gender = 'weiblich'
  } else {
    gender = 'divers'
    isDiverse = true
  }

  // Iterate over titles to check where the name begins.
  // (Name begins as soon as a word doesn't match any titles known to the title-service.)
  // (If the gender is diverse, start at the 2nd entry instead of the first, to prevent instant termination)
  for (let i = isDiverse ? 1 : 0; i < nameParts.length; i++) {
    titles.forEach
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
    gender: gender,
    letter_salutation: ''
  }

  return output
}
