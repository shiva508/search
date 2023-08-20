export class Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  constructor(address: Partial<Address> = {}) {
    this.street = address?.street || '';
    this.city = address?.city || '';
    this.state = address?.state || '';
    this.zip = address?.zip || '';
  }
}
