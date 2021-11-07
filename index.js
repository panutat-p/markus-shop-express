import {MONGODB_USERNAME, MONGODB_PASSWORD} from "./secret.js";
import mongoose from 'mongoose';
import express from 'express';


const CONNECTION_STRING = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.x6xvn.mongodb.net/test`;

console.log(CONNECTION_STRING);

mongoose.connect(CONNECTION_STRING)
  .then(() => {
    console.log("connection open");
  })
  .catch((e) => {
    console.log("connection fail");
    console.log(e);
  });

const app = express();

app.get("/", (req, res) => {
  res.send("<img src='https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80' alt='shop image'>");
});

app.listen(3000, () => {
  console.log(`Express listening`);
});
