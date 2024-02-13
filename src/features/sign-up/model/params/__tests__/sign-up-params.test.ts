import { faker } from "@faker-js/faker";
import SignUpParamsParser from "~/features/sign-up/model/params/sign-up-params";
import { fakedPhoneNumber } from "~/shared/__tests__/factory";

const validationParams = SignUpParamsParser.paramsValidator;
describe("SignUpParams", () => {
  describe("name", () => {
    describe("Happy path", () => {
      it("Should return true on passing string to name validator", () => {
        const fakedName = faker.person.fullName();
        const isValid = validationParams.name.parse(fakedName);
        expect(isValid).toBeTruthy();
      });
    });
    /* -------------------------------------------------------------------------- */
    it.each([
      { value: "", name: "empty string" },
      { value: faker.number.int(), name: "number" },
      { value: false, name: "boolean" },
      { value: {}, name: "object" },
      { value: [], name: "array" },
      { value: faker.number.int(), name: "number" },
    ])(`Should return false when $name was provided`, ({ value }) => {
      const isValid = validationParams.name.safeParse(value);

      expect(isValid.success).toEqual(false);
    });
  });
  /* -------------------------------------------------------------------------- */
  describe("email", () => {
    describe("Happy path", () => {
      it.each([
        { value: faker.internet.email(), name: "email string" },
        { value: undefined, name: "undefined" },
      ])(`Should normally return true if $name was provided`, ({ value }) => {
        const isValid = validationParams.email.safeParse(value);

        expect(isValid.success).toBeTruthy();
      });
    });
    /* -------------------------------------------------------------------------- */
    describe("edge cases", () => {
      it.each([
        { name: "random non empty string", value: faker.string.uuid() },
        { name: "boolean", value: false },
        { name: "number", value: faker.number.int() },
        { name: "object", value: {} },
        { name: "array", value: [] },
      ])(`Should return false if $name was passed`, ({ value }) => {
        const isValid = validationParams.email.safeParse(value);

        expect(isValid.success).toEqual(false);
      });
    });
  });
  /* -------------------------------------------------------------------------- */
  describe("phoneNumber", () => {
    describe("Happy path", () => {
      it("Should normally return true if valid params was passed", () => {
        const isValid =
          validationParams.phoneNumber.safeParse(fakedPhoneNumber);
        expect(isValid.success).toBeTruthy();
      });
    });
    /* -------------------------------------------------------------------------- */
    describe("edge cases", () => {
      it.each([
        { name: "random non empty string", value: faker.string.uuid() },
        { name: "boolean", value: false },
        { name: "number", value: faker.number.int() },
        { name: "object", value: {} },
        { name: "array", value: [] },
      ])(`Should return false if $name was passed`, ({ value }) => {
        const isValid = validationParams.email.safeParse(value);

        expect(isValid.success).toEqual(false);
      });
    });
  });
  /* -------------------------------------------------------------------------- */
  describe("schema", () => {
    const { schema } = SignUpParamsParser;
    it.each([
      {
        value: {
          name: faker.person.fullName(),
          phoneNumber: fakedPhoneNumber,
          email: faker.internet.email(),
        },
      },
      {
        value: {
          name: faker.person.fullName(),
          phoneNumber: fakedPhoneNumber,
        },
      },
    ])(`Should return true if valid params provided to schema`, ({ value }) => {
      const isValid = schema.safeParse(value);
      expect(isValid.success).toEqual(true);
    });
  });
});
