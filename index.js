require('dotenv').config();
const cors = require('cors');
const express = require('express');
const {
  MongoClient,
  ObjectId,
} = require('mongodb');

const client = new MongoClient(process.env.DB_URI);

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT);

app.get('/books', (request, response) => {
  client.connect(async () => {
    const database = client.db(process.env.DB_NAME);
    const collection = database.collection(process.env.DB_COLLECTION_NAME);
    const result = await collection.find({}).toArray();
    client.close();

    response.json(result);
  });
});

app.post('/books', (request, response) => {
  client.connect(async () => {
    const database = client.db(process.env.DB_NAME);
    const collection = database.collection(process.env.DB_COLLECTION_NAME);
    const result = await collection.insertOne({
      title: request.body.title,
      pageCount: request.body.pageCount,
      price: request.body.price,
    });
    client.close();

    response.json(result);
  });
});

app.delete('/books', (request, response) => {
  client.connect(async () => {
    const database = client.db(process.env.DB_NAME);
    const collection = database.collection(process.env.DB_COLLECTION_NAME);

    const result = await collection.deleteOne({
      _id: ObjectId(request.body.id),
    });
    client.close();

    response.json(result);
  });
});
