import { compile } from "path-to-regexp";
import type { ParseUrlParams } from "typed-url-params";

export const createPath =
  <T extends string>(url: T) =>
  (params: ParseUrlParams<T>) =>
    compile(url)(params);
