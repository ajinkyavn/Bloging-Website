import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import localStorage from "localStorage";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const uri = "mongodb+srv://narkhedeajinkya123:jinx@cluster0.l1bn7bj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var curruser=''
var option=''
const setUser=()=>{
  localStorage.setItem( 'loggeduser', curruser );
}
const getUser=()=>{
  const res = localStorage.getItem('loggeduser');
  return res;
}
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
  } 
});

app.post("/postblog", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db("test").collection("blogs");
    const { textarea, selectedOption } = req.body;
    console.log(selectedOption);
    const result = await collection.insertOne({ curruser, textarea, selectedOption });
    res.redirect("http://localhost:3000/home");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error posting blog");
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
      res.redirect("http://localhost:3000/home");
    } else {
      res.status(401).send("Invalid username or password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging in");
  } 
});

setUser()


const userStatus=()=>{
  curruser=getUser();
  setUser();
}
if (typeof window !== 'undefined') {
  window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
      sessionStorage.removeItem("reloading");
      userStatus();
    }
  }
}

function reloadP() {
  sessionStorage.setItem("reloading", "true");
  document.location.reload();
}

app.get("/home", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db("test").collection("blogs");
    const allBlogs = await collection.find().toArray();
    const myObject = {
      total:allBlogs,
      userid:curruser
    };
    console.log(myObject)
    res.send(myObject);
  } catch (error) {
    console.error(error);
  } 
});

app.get("/sport", async (req, res) => {
    try {
      await client.connect();
      const collection = client.db("test").collection("blogs");
      const allSports = await collection.find({ selectedOption:"Sports" }).toArray();
      const myObject = {
        total:allSports,
        userid:curruser
      };
      console.log(myObject)
      res.send(myObject);
    } catch (error) {
      console.error(error);
    } 
});
app.get("/education", async (req, res) => {
    try {
      await client.connect();
      const collection = client.db("test").collection("blogs");
      const allSports = await collection.find({ selectedOption:"Education" }).toArray();
      const myObject = {
        total:allSports,
        userid:curruser
      };
      console.log(myObject)
      res.send(myObject);
    } catch (error) {
      console.error(error);
    } 
});
app.get("/lifestyle", async (req, res) => {
    try {
      await client.connect();
      const collection = client.db("test").collection("blogs");
      const allSports = await collection.find({ selectedOption:"Lifestyle" }).toArray();
      const myObject = {
        total:allSports,
        userid:curruser
      };
      console.log(myObject)
      res.send(myObject);
    } catch (error) {
      console.error(error);
    } 
});
app.get("/business", async (req, res) => {
    try {
      await client.connect();
      const collection = client.db("test").collection("blogs");
      const allSports = await collection.find({ selectedOption:"Business" }).toArray();
      const myObject = {
        total:allSports,
        userid:curruser
      };
      console.log(myObject)
      res.send(myObject);
    } catch (error) {
      console.error(error);
    } 
});
app.get("/health", async (req, res) => {
    try {
      await client.connect();
      const collection = client.db("test").collection("blogs");
      const allSports = await collection.find({ selectedOption:"Health" }).toArray();
      const myObject = {
        total:allSports,
        userid:curruser
      };
      console.log(myObject)
      res.send(myObject);
    } catch (error) {
      console.error(error);
    } 
});
app.get("/entertainment", async (req, res) => {
    try {
      await client.connect();
      const collection = client.db("test").collection("blogs");
      const allSports = await collection.find({ selectedOption:"Entertainment" }).toArray();
      const myObject = {
        total:allSports,
        userid:curruser
      };
      console.log(myObject)
      res.send(myObject);
    } catch (error) {
      console.error(error);
    } 
});


app.get("/myblogs", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db("test").collection("blogs");
    const myBlogs = await collection.find({ curruser : curruser }).toArray();
    const myObject = {
      userBlogs: myBlogs, 
      userid:curruser 
    };
    console.log(myObject)
    res.send(myObject);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
});
app.get("/widget", async (req, res) => {
  try {
    res.send(curruser);
  } catch (error) {
    console.error(error);
  } 
});

app.listen(5000, () => {
  console.log("App running on port 5000");
});
