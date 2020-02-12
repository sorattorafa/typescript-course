import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'
jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}
describe('EmailValidator Adapter', () => {
  test('Should Return false if validator returns false', () => {
    const sut = makeSut()
    // dont need to know the implementation of function, just mock a value
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    // we dont need to know what is a valid email,function mocking
    const isValid = sut.isValid('invalid_email@email.com')
    expect(isValid).toBe(false)
  })
  test('Should Return true if validator returns true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('valid_email@email.com')
    expect(isValid).toBe(true)
  })
  test('Should Call validator with correct email', () => {
    const sut = makeSut()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    sut.isValid('any_email@email.com')
    expect(isEmailSpy).toBeCalledWith('any_email@email.com')
  })
})
