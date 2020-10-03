import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect () {
    await this.client.close()
  },

  getCollection (name: String): Collection {
    return this.client.db().collection(name)
  },
  map (collection: any): any {
    const { _id, ...collectionWithOutId } = collection
    return Object.assign({}, collectionWithOutId, { id: _id })
  }
}
