export enum StatusEnum {
  Success = 200,
  EmailIsBusy = 300,
  FormatError = 400
}

export interface ErrorType {
  message: string
}

export interface ErrorsType {
  fields: {
    email?: string,
    name?: string,
    password?: string
  }
  messages: Array<ErrorType>
}

export interface UserDataType {
  email: string
  name?: string
  password: string
}

export interface InputNamesType {
  id: number,
  field: string
}

export interface TodoType {
  userId: number,
  text: string
}