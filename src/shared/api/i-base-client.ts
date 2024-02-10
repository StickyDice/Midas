import "dotenv/config";
import axios from "axios";
import { TaskEither, map, tryCatch } from "fp-ts/lib/TaskEither";
import { pipe } from "fp-ts/lib/function";

export default abstract class BaseClient<RESPONSE_TYPE> {
  private baseUrl: string;

  constructor(
    protected url: string,
    private data?: object,
    private params?: object,
    private method?: string,
  ) {
    this.method = method || "get";
    this.baseUrl = process.env.BASE_URL as string;
  }

  execute(): TaskEither<Error, RESPONSE_TYPE> {
    return pipe(
      this.url,
      this.requestHandler,
      map((response) => response.data),
    );
  }

  private requestHandler() {
    return tryCatch(
      () => {
        const response = axios<RESPONSE_TYPE>({
          method: this.method,
          baseURL: this.baseUrl,
          url: this.url,
          data: this.data,
          params: this.params,
        });
        return response;
      },
      (e) => (e instanceof Error ? e : new Error(String(e))),
    );
  }
}
