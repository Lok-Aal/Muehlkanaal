import { ref, type Ref } from 'vue'
import { type Contact, type contact } from '../types/contact'
import { titles } from './data-service'

export function splitStringIntoContact(input: string) {
  let isDiverse = false
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
    isDiverse = true
  }

  titles.forEach((x) => {
    console.log(x)
  })

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
