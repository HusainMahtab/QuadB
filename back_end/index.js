
import express from "express"
import connectDB from "./db/connection.js";
import { Ticker } from "./models/ticker.model.js";
import axios from "axios";
import cors from 'cors'
const app=express()
const port=8000

// db connection 
connectDB()
app.use(cors({
  origin:"*"
}))

// fetch and store data 
app.get('/fetch-tickers', async (req, res) => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    console.log("response",response)
    const tickers = Object.values(response.data).slice(0, 10);

    await Ticker.deleteMany({}); // Clear the existing collection

    const tickerData = tickers.map(ticker => ({
      name: ticker.name,
      last: ticker.last,
      buy: ticker.buy,
      sell: ticker.sell,
      volume: ticker.volume,
      base_unit: ticker.base_unit
    }));
    await Ticker.insertMany(tickerData);  // Save data to MongoDB
    console.log("tikers data",tickerData)
    res.send('Data inserted successfully');
  } catch (error) {
    res.status(500).send('Error fetching or storing data');
  }
});

// Retrieve data from MongoDB
app.get('/tickers', async (req, res) => {
  try {
    const tickers = await Ticker.find();  
    res.json(tickers);
  } catch (error) {
    res.status(500).send('Error retrieving data');
  }
});

app.listen(port,()=>{
    console.log(`app is ready at PORT:${port}`)
})