import { isLeft, isRight } from "fp-ts/lib/Either";
import { CallMethod, baseCallServer } from "~/shared/api/base-call-server";

/* -------------------------------------------------------------------------- */
/*                                    MOCK                                    */
/* -------------------------------------------------------------------------- */
const { request } = vi.hoisted(() => ({
  request: vitest.fn(),
}));

/* -------------------------------------------------------------------------- */
/*                                   FAKING                                   */
/* -------------------------------------------------------------------------- */
type fakedResponseType = {
  id: string;
};
const fakedUrl = "https://fakedUrl.com";
/* -------------------------------------------------------------------------- */
/*                                   TESTING                                  */
/* -------------------------------------------------------------------------- */
describe("baseCallServer", () => {
  beforeEach(() => {
    vitest.resetAllMocks();
    vitest.mock("axios", () => ({
      default: {
        request,
      },
    }));
  });
  it("Should normally call request method from axios", () => {
    // * Arrange
    // ! Act
    baseCallServer<fakedResponseType>({
      url: fakedUrl,
      method: CallMethod.GET,
    });
    // baseCalled();
    // ? Assert
    expect(request).toHaveBeenCalled();
  });
  /* -------------------------------------------------------------------------- */
  it("Should return normally return right if no error occured", async () => {
    request.mockResolvedValue({
      id: "12345",
    });
    // ! Act
    const response = await baseCallServer<fakedResponseType>({
      url: fakedUrl,
      method: CallMethod.GET,
    });
    // const response = await baseCalled();
    // ? Assert
    expect(isRight(response)).toBeTruthy();
  });
  /* -------------------------------------------------------------------------- */
  it("Should return normally return left if error occured", async () => {
    request.mockRejectedValue(Error);
    // ! Act
    const response = await baseCallServer<fakedResponseType>({
      url: fakedUrl,
      method: CallMethod.GET,
    });
    // const response = await baseCalled();
    // ? Assert
    expect(isLeft(response)).toBeTruthy();
  });
});
