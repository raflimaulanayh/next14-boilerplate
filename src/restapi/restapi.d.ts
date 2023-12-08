declare namespace RestApi {
  interface Response<T> {
    code: number
    data: T
    message: string
    status: 'success' | 'error'
  }
}
