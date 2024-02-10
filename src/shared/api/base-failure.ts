/**
 * Base class for creating request failures
 */
export default class BaseFailure extends Error {
  constructor(message?: string) {
    super(message);
    this.name = BaseFailure.name;
  }
}
