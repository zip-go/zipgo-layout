export type StyledProps<T extends object = object> = {
  [K in keyof T as `$${string & K}`]: T[K];
};
