import { compile } from "path-to-regexp";
import type { ParseUrlParams } from "typed-url-params";

export const createPath =
  <T extends string>(url: T, prefix?: string) =>
  (params: ParseUrlParams<T>) =>
    prefix ? prefix + compile(url)(params) : compile(url)(params);
