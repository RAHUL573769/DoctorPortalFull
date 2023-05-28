const { MongoClient, ServerApiVersion } = require("mongodb");

const express = require("express");
const cors = require("cors");
const app = express();
const port = 9000;
var bodyParser = require("body-parser");

require("dotenv").config();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ga4zxwv.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});
console.log(uri);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const appointmentOptionCollection = client
      .db("doctorsPortal2")
      .collection("appointmentOption2");

    const bookingCollection = client
      .db("doctorsPortal2")
      .collection("bookings");

    app.get("/appointmentOptions", async (req, res) => {
      const query = {};
      const date = req.query.date;
      console.log(date);
      const options = await appointmentOptionCollection.find(query).toArray();
      const bookingQuery = {
        selectedDate: date
      };
      const alreadyBooked = await bookingCollection
        .find(bookingQuery)
        .toArray();
      // console.log("58", alreadyBooked);

      // options.forEach((option) => {
      //   const optionBooked = alreadyBooked.map((book) =>
      //     console.log("61", book)
      //   );
      // });
      options.forEach((option) => {
        const optionBooked1 = alreadyBooked.filter(
          (book) => book.treatment === option.name
        );
        const bookedSlot = optionBooked1.map((book) => book.slot);
        console.log(date, option.name, bookedSlot);
      });
      res.send(options);
    });
    app.get("/bookings", async (req, res) => {
      const query = {};
      const options = await bookingCollection.find(query).toArray();
      res.send(options);
    });
    app.post("/bookings", async (req, res) => {
      const booking = req.body;

      const data = await bookingCollection.insertOne(booking);
      res.send(data);
    });

    // Send a ping to confirm a successful connection
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
