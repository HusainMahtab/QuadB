import mongoose from "mongoose";

const tickerModel= new mongoose.Schema({
  name: String,
  last: Number,
  buy: Number,
  sell: Number,
  volume: Number,
  base_unit: String
},{timestamps:true})

export const Ticker=mongoose.model("Ticker",tickerModel)