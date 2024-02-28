import axios from "axios";
import { tryCatch } from "fp-ts/lib/TaskEither";

export enum CallMethod {
  GET = "get",
  POST = "post",
  UPDATE = "update",
  DELETE = "delete",
}

export type CallParamsType =
  | {
      url: string;
      method: CallMethod.GET | CallMethod.DELETE;
    }
  | {
      url: string;
      method: CallMethod.POST | CallMethod.UPDATE;
      data: object;
    };

export const baseCallServer = <RESPONSE_TYPE extends object>(
  params: CallParamsType,
) =>
  tryCatch(
    () =>
      axios.request<RESPONSE_TYPE>({
        method: params.method,
        url: params.url,
        data:
          params.method === CallMethod.POST ||
          params.method === CallMethod.UPDATE
            ? params.data
            : undefined,
      }),
    () => new Error("Server call error"),
  )();
