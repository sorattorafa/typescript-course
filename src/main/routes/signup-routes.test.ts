import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    const obj = {
      name: 'Rafael Rampim Soratto',
      email: 'rampimsoratto@gmail.com',
      password: '123',
      passwordConfirmation: '123'
    }
    await request(app)
      .post('/api/signup')
      .send(obj)
      .expect(200)
  })
})
