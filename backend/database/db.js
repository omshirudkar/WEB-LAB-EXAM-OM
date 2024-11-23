const mongoose = require("mongoose");
const express = require("express");
async function dbconnect() {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/delivery")
    return connection;
}
module.exports = dbconnect;