import { phoneNumberRegExp } from "~/shared/lib/reg-exp";

describe("phoneNumberRegExp", () => {
  it("Should normally test string", () => {
    const string = "+7 (999) 999-99-99";
    expect(phoneNumberRegExp().test(string)).toBeTruthy();
  });
});
