import { setCookie, getCookie, deleteCookie, hasCookie, CookieValueTypes } from 'cookies-next';
import { OptionsType } from 'cookies-next/lib/types';

export interface Cookies<T extends CookieValueTypes> {
  get(def: T, options?: OptionsType): T;
  set(data: T, options?: OptionsType): void;
  delete(options?: OptionsType): void;
  has(options?: OptionsType): boolean;
}

// Helper method for cookies-next. Make it more type safe to use.
export const useCookie = <T extends CookieValueTypes>(key: string): Cookies<T> => ({
  get: (def: T, options?: OptionsType) => {
    const res = getCookie(key, options);
    return (res || def) as T; // We can ensure the cookie type here.
  },
  set: (data: T, options?: OptionsType) => setCookie(key, data, options),
  delete: (options?: OptionsType) => deleteCookie(key, options),
  has: (options?: OptionsType) => hasCookie(key, options),
});
