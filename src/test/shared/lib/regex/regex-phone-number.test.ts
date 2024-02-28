import { regexPhoneNumber } from "~/shared/lib/regex/regex-phone-number";

describe("regexPhoneNumber", () => {
  it("Should return true for correct phoneNumber", () => {
    const fakedCorrectPhoneNumber = "+7 (999) 999-99-99";

    expect(regexPhoneNumber().test(fakedCorrectPhoneNumber)).toBeTruthy();
  });
  /* -------------------------------------------------------------------------- */
  it.each([
    { incorrectPhoneNumber: "89999999999" },
    { incorrectPhoneNumber: "8 999 999 99 99" },
    { incorrectPhoneNumber: "8 (999) 999-9999" },
    { incorrectPhoneNumber: "8(999) 999-99-99" },
  ])(
    `Should return false for %incorrectPhoneNumber phoneNumber`,
    ({ incorrectPhoneNumber }) => {
      expect(regexPhoneNumber().test(incorrectPhoneNumber)).toBeFalsy();
    },
  );
});
