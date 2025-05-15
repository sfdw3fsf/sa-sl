export type RegularResponse<T> = {
   data: T
   status?: string
}

export type DataOnlyResponse<T> = {
   data: T
}
