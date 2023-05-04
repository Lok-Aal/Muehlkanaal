export interface contact {
    salutation: string;
    title: string;
    firstname: string;
    lastname: string;
    gender: 'männlich' | 'weiblich' | 'divers' | '';
}

export type Contact = contact;