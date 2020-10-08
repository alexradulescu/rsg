type isRequiredKey<T> = T extends Required<T> ? true : false

type Optional<T> = T | undefined

type checkRequired<T, B> = isRequiredKey<T> extends true ? Optional<B> : Required<B>

export type TypeName<T> = T extends string
  ? checkRequired<T, string>
  : T extends number
  ? checkRequired<T, number>
  : T extends boolean
  ? checkRequired<T, boolean>
  : T extends Record<string, unknown>
  ? checkRequired<T, Record<string, unknown>>
  : Record<string, unknown>
