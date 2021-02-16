import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

//app config
const app = express(); //create instance
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:KmVGUCnMFaX9E9EW@cluster0.ljbx9.mongodb.net/tinderdb?retryWrites=true&w=majority`;
//middlewares
app.use(express.json());
app.use(Cors());

//db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
//API Endppints
app.get("/", (req, res) => {
  res.status(200).send("Hello Clever Programmer");
});

//function create new document or to push the data in db
app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
// to pull the data in db
app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//Listeners
app.listen(port, () => console.log(`listening on localhost:  ${port}`));
