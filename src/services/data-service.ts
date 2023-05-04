import type { Contact } from "@/types/contact"
import { ref, type Ref } from "vue"

export const titles: Array<string> = [
  'Prof.',
  'Professor',
  'Dr.',
  'rer.',
  'nat.',
  'mult.',
  'h.c.',
  'mult.',
  'B.Sc.',
  'B.Eng.',
  'Dipl.',
  'Ing.',
  'Diplom'
]

export const contacts: Ref<Array<Contact>> = ref([])
