import {MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_MARKUS_SHOP} from "./secret.js";
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from "body-parser";
import {Product} from "./models/product.js";

const CONNECTION_STRING = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.x6xvn.mongodb.net/${MONGODB_MARKUS_SHOP}`;

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

// Express middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<img src='https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80' alt='shop image'>");
});

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

app.get("/products/:id", async (req, res) => {
  const {id} = req.params;
  const product = await Product.findById(id);
  res.send(product);
});

app.post("/products", async (req, res) => {
  // body: name, price, category
  const newProduct = new Product(req.body);
  console.log(req.body);
  try {
    await newProduct.save();
    console.log(newProduct);
    res.send({data: "success"});
  } catch (e) {
    res.send({data: "failed", info: e});
    console.log(e);
  }
});

app.put("/products/:id", async (req, res) => {
  // body: name, price, category
  console.log(req.body);
  const {id} = req.params;
  try {
    // options: validate schema, delete old document
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});
    console.log(updatedProduct);
    res.send({data: "success"});
  } catch (e) {
    res.send({data: "failed", info: e});
    console.log(e);
  }
});

app.listen(3000, () => {
  console.log(`Express listening`);
});
