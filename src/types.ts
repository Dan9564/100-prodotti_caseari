export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  isDop: boolean;
  isIgp: boolean;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum ContactType {
  PHONE_FR = 'phone_fr',
  PHONE_IT = 'phone_it',
  EMAIL = 'email',
  ADDRESS = 'address',
}
