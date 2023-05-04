import { splitStringIntoContact } from '@/services/contactsplitter-service'
import type { Contact } from '@/types/contact'
import { describe, expect, test } from 'vitest'

/**
 * Tests für die Contact Splitter Funktion
 */
describe('Contact Splitter Tests', () => {
  /**
   * Test 1: Einfache Eingabe aus Anrede, Vorname und Nachname
   */
  test('returns correct salutation, first name, last name and gender for input without title', () => {
    const testString: string = 'Frau Sandra Berger'
    const expectedResult: Contact = {
      salutation: 'Frau',
      title: '',
      firstname: 'Sandra',
      lastname: 'Berger',
      gender: 'weiblich',
      letter_salutation: 'Sehr geehrte Frau'
    }
    const result: Contact = splitStringIntoContact(testString)
    expect(result).toEqual(expectedResult)
  })
  /**
   * Test 2: Einfache Eingabe mit Titel
   */
  test('returns correct salutation, title, first name, last name and gender for input with title', () => {
    const testString: string = 'Herr Dr. Sandro Gutmensch'
    const expectedResult: Contact = {
      salutation: 'Herr Dr.',
      title: 'Dr.',
      firstname: 'Sandro',
      lastname: 'Gutmensch',
      gender: 'männlich',
      letter_salutation: 'Sehr geehrter Herr'
    }
    const result: Contact = splitStringIntoContact(testString)
    expect(result).toEqual(expectedResult)
  })
  /**
   * Test 3: Eingabe mit Titel und Suffix
   */
  test('returns correct salutation, title, last name with suffix and gender for input with title and suffix', () => {
    const testString: string = 'Herr Professor Heinreich Freiherr vom Wald'
    const expectedResult: Contact = {
      salutation: 'Herr Professor',
      title: 'Professor',
      firstname: '',
      lastname: 'Heinreich Freiherr vom Wald',
      gender: 'männlich',
      letter_salutation: 'Sehr geehrter Herr Professor'
    }
    const result: Contact = splitStringIntoContact(testString)
    expect(result).toEqual(expectedResult)
  })
  /**
   * Test 4: Eingabe mit mehreren Titeln
   */
  test('returns correct salutation, title, first name, last name and gender for input with several titles', () => {
    const testString: string = 'Herr Dipl. Ing. Max Müller'
    const expectedResult: Contact = {
      salutation: 'Herr Dipl. Ing.',
      title: 'Dipl. Ing.',
      firstname: 'Max',
      lastname: 'Müller',
      gender: 'männlich',
      letter_salutation: 'Sehr geehrter Herr Dipl. Ing.'
    }
    const result: Contact = splitStringIntoContact(testString)
    expect(result).toEqual(expectedResult)
  })
  /**
   * Test 5: Eingabe mit mehreren Titeln und Präfix bei Nachnamen
   */
  test('returns correct salutation, title, first name, last name and gender for input with several titles and prefix', () => {
    const testString: string = 'Herr Dipl. Ing. Max von Müller'
    const expectedResult: Contact = {
      salutation: 'Herr Dipl. Ing.',
      title: 'Dipl. Ing.',
      firstname: 'Max',
      lastname: 'von Müller',
      gender: 'männlich',
      letter_salutation: 'Sehr geehrter Herr Dipl. Ing.'
    }
    const result: Contact = splitStringIntoContact(testString)
    expect(result).toEqual(expectedResult)
  })
  /**
   * Test 6: Eingabe mit sehr vielen Titeln
   */
  test('returns correct salutation, title, first name, last name and gender for input with a lot of titles', () => {
    const testString: string = 'Herr Dr. Ing. Dr. rer. nat. Dr. h.c. mult. Paul Steffens'
    const expectedResult: Contact = {
      salutation: 'Herr Dr. Ing. Dr. rer. nat. Dr. h.c. mult.',
      title: 'Dr. Ing. Dr. rer. nat. Dr. h.c. mult.',
      firstname: 'Paul',
      lastname: 'Steffens',
      gender: 'männlich',
      letter_salutation: 'Sehr geehrter Herr Dr. Ing. Dr. rer. nat. Dr. h.c. mult.'
    }
    const result: Contact = splitStringIntoContact(testString)
    expect(result).toEqual(expectedResult)
  })
  /**
   * Test 7: Eingabe mit Doppelname
   */
  test('returns correct salutation, first name, last name and gender for input with double last name', () => {
    const testString: string = 'Herr Max Steffens-Müller'
    const expectedResult: Contact = {
      salutation: 'Herr',
      title: '',
      firstname: 'Max',
      lastname: 'Steffens-Müller',
      gender: 'männlich',
      letter_salutation: 'Sehr geehrter Herr'
    }
    const result: Contact = splitStringIntoContact(testString)
    expect(result).toEqual(expectedResult)
  })
  /**
   * Test 8: Eingabe ohne Anrede
   */
  test('returns correct first name, last name and gender for input without salutation', () => {
    const testString: string = 'Max Müller'
    const expectedResult: Contact = {
      salutation: '',
      title: '',
      firstname: 'Max',
      lastname: 'Müller',
      gender: 'divers',
      letter_salutation: 'Sehr geehrt'
    }
    const result: Contact = splitStringIntoContact(testString)
    expect(result).toEqual(expectedResult)
  })
  /**
   * Test 8: Eingabe ohne Anrede
   */
  test('returns correct first name, last name and gender for input without salutation', () => {
    const testString: string = 'Max Müller'
    const expectedResult: Contact = {
      salutation: '',
      title: '',
      firstname: 'Max',
      lastname: 'Müller',
      gender: 'divers',
      letter_salutation: 'Sehr geehrt'
    }
    const result: Contact = splitStringIntoContact(testString)
    expect(result).toEqual(expectedResult)
  })
  /**
   * Test 9: Nur ein Wort als Eingabe
   */
  test('returns correct first name, last name and gender for input with just one word', () => {
    const testString: string = 'Müller'
    const expectedResult: Contact = {
      salutation: '',
      title: '',
      firstname: '',
      lastname: 'Müller',
      gender: 'divers',
      letter_salutation: 'Sehr geehrt'
    }
    const result: Contact = splitStringIntoContact(testString)
    expect(result).toEqual(expectedResult)
  })
})
