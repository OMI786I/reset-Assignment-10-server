const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// middleware

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ymyoldm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log(process.env.DB_USER);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    //for country vietnam
    const vietnamCollection = client
      .db("reset-Assignment-10")
      .collection("Vietnam");

    //for reading from mongodb(Vietnam)

    app.get("/vietnam", async (req, res) => {
      const cursor = vietnamCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // finding data from mongodb(vietnam)

    app.get("/vietnam/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await vietnamCollection.findOne(query);
      res.send(result);
    });

    //for country malaysia
    const malaysiaCollection = client
      .db("reset-Assignment-10")
      .collection("Malaysia");
    //for reading from mongodb(Malaysia)

    app.get("/malaysia", async (req, res) => {
      const cursor = malaysiaCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // finding data from mongodb(malaysia)

    app.get("/malaysia/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await malaysiaCollection.findOne(query);
      res.send(result);
    });

    //for country combodia
    const combodiaCollection = client
      .db("reset-Assignment-10")
      .collection("Combodia");

    //for reading from mongodb(Combodia)

    app.get("/combodia", async (req, res) => {
      const cursor = combodiaCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // finding data from mongodb(Combodia)

    app.get("/combodia/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await combodiaCollection.findOne(query);
      res.send(result);
    });

    //for country Indonesia
    const indonesiaCollection = client
      .db("reset-Assignment-10")
      .collection("Indonesia");

    //for reading from mongodb(Indonesia)

    app.get("/indonesia", async (req, res) => {
      const cursor = indonesiaCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // finding data from mongodb(Indonesia)

    app.get("/indonesia/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await indonesiaCollection.findOne(query);
      res.send(result);
    });

    //for country Thailand
    const thailandCollection = client
      .db("reset-Assignment-10")
      .collection("Thailand");

    //for reading from mongodb(Thailand)

    app.get("/thailand", async (req, res) => {
      const cursor = thailandCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // finding data from mongodb(Thailand)

    app.get("/thailand/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await thailandCollection.findOne(query);
      res.send(result);
    });

    //for country Bangladesh
    const bangladeshCollection = client
      .db("reset-Assignment-10")
      .collection("Bangladesh");

    //for reading from mongodb(Bangladesh)

    app.get("/bangladesh", async (req, res) => {
      const cursor = bangladeshCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // finding data from mongodb(Bangladesh)

    app.get("/bangladesh/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bangladeshCollection.findOne(query);
      res.send(result);
    });

    //for added spot
    const countryCollection = client
      .db("reset-Assignment-10")
      .collection("country");

    //for reading from mongodb(added spot)

    app.get("/countrySection", async (req, res) => {
      const cursor = countryCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    //for added spot
    const spotCollection = client
      .db("reset-Assignment-10")
      .collection("addedSection");
    //sending on server
    app.post("/addedSection", async (req, res) => {
      const newData = req.body;
      console.log(newData);
      const result = await spotCollection.insertOne(newData);
      res.send(result);
    });

    //for reading from mongodb(added spot)

    app.get("/addedSection", async (req, res) => {
      const cursor = spotCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // finding data from mongodb(added spot)

    app.get("/addedSection/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await spotCollection.findOne(query);
      res.send(result);
    });

    //for delete(added section)

    app.delete("/addedSection/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await spotCollection.deleteOne(query);
      res.send(result);
    });

    //updating data of mongodb data(added section)

    app.put("/addedSection/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedSpot = req.body;

      const spot = {
        $set: {
          spotName: updatedSpot.spotName,
          photo: updatedSpot.photo,
          countryName: updatedSpot.countryName,
          location: updatedSpot.location,
          description: updatedSpot.description,
          cost: updatedSpot.cost,
          season: updatedSpot.season,
          time: updatedSpot.time,
          visitor: updatedSpot.visitor,
        },
      };

      const result = await spotCollection.updateOne(filter, spot, options);
      res.send(result);
      console.log(result);
    });

    const dataCollection = client
      .db("reset-Assignment-10")
      .collection("tourist-spot-section");

    //for reading from mongodb

    app.get("/tourist-spot-section", async (req, res) => {
      const cursor = dataCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // finding data from mongodb

    app.get("/tourist-spot-section/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await dataCollection.findOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send(" server is running");
});

app.listen(port, () => {
  console.log(` server is running on port: ${port}`);
});
