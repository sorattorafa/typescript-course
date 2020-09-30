import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongoRepository } from './account'

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })
  const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository()
  }

  test('Should return an account on success', async () => {
    const sut = makeSut()
    const newAccount = {
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password',
      _id: undefined
    }
    const account = await sut.add(newAccount)
    const testObject = MongoHelper.map(newAccount)
    expect(account).toStrictEqual(testObject)
  })
})
