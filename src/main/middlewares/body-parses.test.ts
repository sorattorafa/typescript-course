import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
  test('Should body parse as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })
    const obj = {
      name: 'Rafael'
    }
    await request(app)
      .post('/test_body_parser')
      .send(obj)
      .expect(obj)
  })
})
