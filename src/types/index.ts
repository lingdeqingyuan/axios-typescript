export type Method =
  | 'GET'
  | 'get'
  | 'DELETE'
  | 'delete'
  | 'PUT'
  | 'put'
  | 'POST'
  | 'post'
  | 'PATCH'
  | 'patch'
  | 'OPTIONS'
  | 'options'
  | 'HEAD'
  | 'head'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
