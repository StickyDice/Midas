import { allSettled, fork } from "effector";
import { faker } from "@faker-js/faker";
import {
  resetStore,
  signUpStore,
  updateStoreEvent,
} from "~/features/sign-up/model/store/sign-up-store";

describe("signUpStore", () => {
  it("Should have empty object on init", () => {
    const scope = fork();
    expect(scope.getState(signUpStore)).toEqual({});
  });
  /* -------------------------------------------------------------------------- */
  it("Should normally update store on updateStoreEvent", async () => {
    const fakedSignUpData = {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
    };
    const scope = fork();
    await allSettled(updateStoreEvent, { params: fakedSignUpData, scope });

    expect(scope.getState(signUpStore)).toEqual(fakedSignUpData);
  });
  /* -------------------------------------------------------------------------- */
  it("Should normally clear store on resetStore", async () => {
    const fakedSignUpData = {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
    };

    const scope = fork({
      values: [[signUpStore, fakedSignUpData]],
    });
    await allSettled(resetStore, { scope });

    expect(scope.getState(signUpStore)).toEqual({});
  });
});
