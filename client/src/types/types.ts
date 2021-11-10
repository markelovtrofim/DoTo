export enum StatusEnum {
  Success = 200,
  EmailIsBusy = 300,
  FormatError = 400
}

export interface ErrorType {
  message: string
}

export interface UserDataType {
  email: string
  name: string
  password: string
}