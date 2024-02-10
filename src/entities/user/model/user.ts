export default class User {
  id: string;

  /* -------------------------------------------------------------------------- */
  name: string;

  /* -------------------------------------------------------------------------- */
  phoneNumber: string;

  /* -------------------------------------------------------------------------- */
  email?: string;

  /* ------------------------------- Constructor ------------------------------ */
  constructor({ id, name, phoneNumber, email }: User) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
