import { MongoHelper } from '../../helpers/mongo-helper'
import { AccountMongoRepository } from './account'

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })
  test('Should return an account on success', () => {
    const sut = new AccountMongoRepository()
    const account = sut.add({
      name: '',
      email: '',
      password: ''
    })
    expect(account).toBeTruthy()
  })
})
