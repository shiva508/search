import { Address } from './address';

export class Person {
  id: number | null;
  name: string;
  phone: string;
  address: Address;
  constructor(person: Partial<Person> = {}) {
    this.id = person?.id || null;
    this.name = person?.name || '';
    this.phone = person?.phone || '';
    this.address = person?.address || new Address();
  }
}
