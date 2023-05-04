import { ref, type Ref } from 'vue'
import { type Contact, type contact } from '../types/contact'
import { titles } from './data-service'


// Main function to split an input string into a contact object
export function splitStringIntoContact(input: string) {
  // Variables for default values in empty contacts
  let firstname = ''
  let lastname = ''
  let title = ''
  let isDiverse = false
  let salutation = ''
  let gender: 'männlich' | 'weiblich' | 'divers' | '' = 'divers'
  let letter_salutation = ''

  // Split the name into parts, for further assignment
  const nameParts = input.split(' ')

  // Return input as lastname, if only one input is given
  if (nameParts.length === 1) {
    lastname = nameParts[0]

    // Create output object from type contact, to return
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

  // Convert all parts of the name to lower case and remove dots for better comparison
  const namePartsClean: any = []
  nameParts.forEach((part) => {
    namePartsClean.push(part.replace('.', '').toLowerCase())
  })

  // Check for the gender, which is the first entry in the nameParts Array. If it doesn't match the given German Herr/Frau salutations the gender will be set to "divers"
  if (nameParts[0] === 'Herr') {
    salutation = 'Herr'
    letter_salutation = 'Sehr geehrter Herr'
    gender = 'männlich'
  } else if (nameParts[0] === 'Frau') {
    salutation = 'Frau'
    letter_salutation = 'Sehr geehrte Frau'
    gender = 'weiblich'
  } else {
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

  // Set the title
  title = mergeTitleFromArrayLastIndex(nameParts, isDiverse, lastTitleIndex)


  // Extend the two salutations by adding the title.
  // The salutation remain empty if the gender is set to "divers"
  if (title && !isDiverse) {
    salutation = `${salutation} ${title}`
    letter_salutation = `${letter_salutation} ${title}`
  }

  // Split the remaining nameParts into the first- and lastname.
  // Set the variables
  const nameObject = splitNameFromArrayIndex(nameParts, lastTitleIndex)
  firstname = nameObject.name
  lastname = nameObject.lastname


  // Create the output object of type "contact", given the generated parameters
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

// Splits the nameParts after the given index (after nameParts that belong to the title) into a name and surname
// The name always is the first entry of the sliced string
// The surname is created by joining the remaining nameParts
function splitNameFromArrayIndex(array: string[], index: number) {
  const slicedArray = array.slice(index)
  const name = slicedArray[0]
  const surname = slicedArray.slice(1).join(' ')
  return { name: name, lastname: surname }
}


// Merges all entries in nameParts that belong to the title.
// If the isDiverse-flag is set, the slicing will begin from the 2nd entry, since the first is occupied for the gender specific salutation
function mergeTitleFromArrayLastIndex(array: string[], isDiverse: boolean, index: number) {
  const slicedArray = array.slice(isDiverse ? 0 : 1, index)
  const outputString = slicedArray.join(' ')
  return outputString
}
