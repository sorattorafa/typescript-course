import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongoRepository } from './account'

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })
  test('Should return an account on success', async () => {
    const sut = new AccountMongoRepository()
    const newAccount = {
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password',
      _id: undefined
    }
    const account = await sut.add(newAccount)
    const { _id, ...accountWithOutId } = newAccount
    const testObject = Object.assign({}, accountWithOutId, { id: _id })
    expect(account).toStrictEqual(testObject)
  })
})
