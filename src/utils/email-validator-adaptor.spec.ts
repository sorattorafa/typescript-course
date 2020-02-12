import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'
jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))
describe('EmailValidator Adapter', () => {
  test('Should Return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    // dont need to know the implementation of function, just mock a value
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    // we dont need to know what is a valid email,function mocking
    const isValid = sut.isValid('invalid_email@email.com')
    expect(isValid).toBe(false)
  })
  test('Should Return true if validator returns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('valid_email@email.com')
    expect(isValid).toBe(true)
  })
  test('Should Call validator with correct email', () => {
    const sut = new EmailValidatorAdapter()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    sut.isValid('any_email@email.com')
    expect(isEmailSpy).toBeCalledWith('any_email@email.com')
  })
})
