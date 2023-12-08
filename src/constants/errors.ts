export const errors = {
  RequiredCredentials: 'identifier and password are required.',
  InvalidCredentials: 'Invalid identifier or password.',
  AccountNotFound: 'Account not found.',
  UserExist: 'User already exists.',
  AuthForbidden: 'Forbidden resource.',
  CredentialsSignin: 'Invalid email or password. Please check your credentials and try again.'
} as const
const __e = errors
export default __e
