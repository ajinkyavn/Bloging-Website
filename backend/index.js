import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const uri = "mongodb+srv://narkhedeajinkya123:jinx@cluster0.l1bn7bj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var curruser=''
app.post("/register", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db("test").collection("users");
    const { username, email, password } = req.body;
    console.log(username)
    console.log(email)
    console.log(password)
    const result = await collection.insertOne({ username,email,password });
    res.send(`User ${result.insertedId} registered successfully`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error registering user");
  } finally {
    await client.close();
  }
});

app.post("/postblog", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db("test").collection("blogs");
    const { textarea } = req.body;
    const result = await collection.insertOne({ curruser,textarea });
    res.redirect("http://localhost:3000/Home");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error posting blog");
  } finally {
    await client.close();
  }
});
app.post("/login", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db("test").collection("users");
    const { email , password } = req.body;
    const user = await collection.findOne({ email , password });
    if (user) {
      curruser=req.body.email
      res.redirect("http://localhost:3000/Home");
    } else {
      res.status(401).send("Invalid username or password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging in");
  } finally {
    await client.close();
  }
});


app.get("/home",async(req,res)=>{
    try {
      await client.connect();
      const collection = client.db('test').collection('blogs');
      const entries = await collection.find().toArray();
      res.send(entries);
    } catch (error) {
      console.error(error);
    } finally {
      await client.close();
    }
});
app.listen(5000, () => {
  console.log("App running on port 5000");
});
