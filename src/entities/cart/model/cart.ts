export default class Cart {
  id: string;

  /* -------------------------------------------------------------------------- */
  userId: string;

  /* ------------------------------- Construtor ------------------------------- */
  constructor({ id, userId }: Cart) {
    this.id = id;
    this.userId = userId;
  }
}
