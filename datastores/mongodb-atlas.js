import {MONGODB_USERNAME, MONGODB_PASSWORD} from "../secret.js";
import mongoose from 'mongoose';

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

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);  // Mongoose create "movies" from "Movie"

Movie.insertMany([
  { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
  { title: "Alien", year: 1979, score: 8.1, rating: "R" },
  { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
  { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
  { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" },
]).then((data) => {
  console.log("IT WORKED!");
  console.log(data);
});

