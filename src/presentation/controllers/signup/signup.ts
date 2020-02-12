import { MissingParamError, InvalidParamError } from '../errors'
import { badRequest, serverError, ok } from '../helpers/http-helper'
import { EmailValidator, Controller, HttpRequest, HttpResponse, AddAccount } from './signup-protocols'

// production class
export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly addAccount: AddAccount
  constructor (emailValidator: EmailValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidator
    this.addAccount = addAccount
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      // this for verify if any param are no provided
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      // here all params are provided
      const { name, email, password, passwordConfirmation } = httpRequest.body
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }

      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      // integration of signUpController and addAccount
      const account = await this.addAccount.add({
        name,
        email,
        password
      })
      return (ok(account))
      // here all data is valid, params and password = passwordConfirmation
    } catch (error) {
      // forcar o erro e mostralo
      console.log(error)
      return serverError()
    }
  }
}
