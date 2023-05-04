import { ref, type Ref } from 'vue'
import { type Contact, type contact } from '../types/contact'
import { titles } from './data-service'

export function splitStringIntoContact(input: string) {
  const nameParts = input.split(' ')

  // Convert all parts of the name to lower case and remove dots for better comparison
  const namePartsClean: any = []
  nameParts.forEach((part) => {
    namePartsClean.push(part.replace('.', '').toLowerCase())
  })
  console.log(nameParts, namePartsClean)

  let isDiverse = false
  let salutation = ''
  let gender: 'männlich' | 'weiblich' | 'divers' | '' = ''
  let letter_salutation = ''

  if (nameParts[0] === 'Herr') {
    salutation = 'Herr'
    letter_salutation = 'Sehr geehrter Herr'
    gender = 'männlich'
  } else if (nameParts[0] === 'Frau') {
    salutation = 'Frau'
    letter_salutation = 'Sehr geehrte Frau'
    gender = 'weiblich'
  } else {
    gender = 'divers'
    isDiverse = true
  }

  // Iterate over titles to check where the name begins.
  // (Name begins as soon as a word doesn't match any titles known to the title-service.)
  // (If the gender is diverse, start at the 2nd entry instead of the first, to prevent instant termination)
  let lastTitleIndex: number = 0
  for (let i = isDiverse ? 0 : 1; i < nameParts.length; i++) {
    let titleFound = false
    titles.forEach((title) => {
      if (title.replace('.', '').toLowerCase() === namePartsClean[i]) {
        console.log('Title found', title)
        titleFound = true
      }
    })
    lastTitleIndex = i
    if (!titleFound) {
      console.log(`Title '${nameParts[i]}' was not found, last title index is ${i}`)
      break
    }
  }
  const title = mergeTitleFromArrayLastIndex(nameParts, isDiverse, lastTitleIndex)

  if (title && !isDiverse) {
    salutation = `${salutation} ${title}`
    letter_salutation = `${letter_salutation} ${title}`
  }

  const nameObject = splitNameFromArrayIndex(nameParts, lastTitleIndex)
  const firstname = nameObject.name
  const lastname = nameObject.lastname

  const output: contact = {
    salutation: salutation,
    title: title,
    firstname: firstname,
    lastname: lastname,
    gender: gender,
    letter_salutation: letter_salutation
  }

  return output
}

function splitNameFromArrayIndex(array: string[], index: number) {
  const slicedArray = array.slice(index)
  const name = slicedArray[0]
  const surname = slicedArray.slice(1).join(' ')
  return { name: name, lastname: surname }
}

function mergeTitleFromArrayLastIndex(array: string[], isDiverse: boolean, index: number) {
  const slicedArray = array.slice(isDiverse ? 0 : 1, index)
  const outputString = slicedArray.join(' ')
  return outputString
}
