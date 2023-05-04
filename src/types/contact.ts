export interface contact {
    salutation: string;
    title: string;
    firstname: string;
    lastname: string;
    gender: 'männlich' | 'weiblich' | 'divers' | '';
    letter_salutation: string;
}

export type Contact = contact;