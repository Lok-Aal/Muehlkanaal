import { ref, type Ref } from "vue"

export const salutation: Ref<string> = ref('')
export const title: Ref<string> = ref('')
export const firstname: Ref<string> = ref('')
export const lastname: Ref<string> = ref('')
export const gender: Ref<'männlich' | 'weiblich' | 'divers' | ''> = ref('')