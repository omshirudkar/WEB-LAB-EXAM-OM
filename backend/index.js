const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

var db = require("./database/db.js");
const Schema = mongoose.Schema;

db();

const deliverySchema = new Schema({
  orderid: Number,
  deliveryDate: Date,
  deliveryAddress: String,
  deliveryFee: Number,
});

const deliveryModel = mongoose.model("dels", deliverySchema);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/getDels", async function (req, res) {
  try {
    var result = await deliveryModel.find();
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});


app.post("/addDels", async (req, res) => {
  var instance = new deliveryModel(req.body);
  await instance.save();
  res.send("Delivery Added");
});

// app.delete("/deleteDels/:id", async (req, res) => {
//   var ans = await patientsModel.deleteOne({ pId: req.params.id });
//   res.send(req.params.id + " deleted");
// });

app.delete("/dels/:orderid", async (req, res) => {
  var ans = await deliveryModel.deleteOne({ orderid: req.params.orderid });
  res.send(req.params.orderid + " deleted");
});








app.listen(9001);
