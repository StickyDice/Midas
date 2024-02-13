import { z } from "zod";
import { phoneNumberRegExp } from "~/shared/lib/reg-exp";

export type SignUpParams = z.infer<typeof SignUpParamsParser.schema>;

export default class SignUpParamsParser {
  static get paramsValidator() {
    return {
      name: z.string().min(1),
      phoneNumber: z.string().regex(phoneNumberRegExp()),
      email: z.string().email().optional(),
    };
  }

  static get schema() {
    return z.object(this.paramsValidator);
  }
}
