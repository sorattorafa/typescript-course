import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { badRequest } from '../../helpers/http-helper'
import { MissingParamError } from '../errors'
import { EmailValidator } from '../signup/signup-protocols'
export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator
  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const {
      body: {
        email,
        password
      }
    } = httpRequest
    if (!email) {
      return new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
    }
    if (!password) {
      return new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
    }
    this.emailValidator.isValid(email)
  }
}
