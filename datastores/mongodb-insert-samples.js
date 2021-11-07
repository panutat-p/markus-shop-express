import { Product } from "../models/product.js";
import {
  MONGODB_USERNAME,
  MONGODB_PASSWORD,
  MONGODB_MARKUS_SHOP,
} from "../secret.js";
import mongoose from "mongoose";

const CONNECTION_STRING = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.x6xvn.mongodb.net/${MONGODB_MARKUS_SHOP}`;

console.log(CONNECTION_STRING);

mongoose
  .connect(CONNECTION_STRING)
  .then(() => {
    console.log("connection open");
  })
  .catch((e) => {
    console.log("connection fail");
    console.log(e);
  });

const sampleProducts = [
  {
    name: "Fairy Eggplant",
    price: 1.0,
    category: "vegetable",
  },
  {
    name: "Organic Goddess Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Organic Celery",
    price: 1.5,
    category: "vegetable",
  },
  {
    name: "Chocolate Whole Milk",
    price: 2.69,
    category: "dairy",
  },
];

Product.insertMany(sampleProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
