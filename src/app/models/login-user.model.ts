export interface UserLoginModel {
  "username":string,
  "password":string
}
export interface RequestLogin {
  "token"?: string
  "non_field_errors"?: [string]
}
