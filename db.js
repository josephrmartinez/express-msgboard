
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  // Function to connect to the database
  async function connect() {
    try {
      await client.connect();
      console.log('Connected to MongoDB');
      // Additional database initialization or setup can be done here
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
    }
  }
  
  // Export the client and connect function
  module.exports = { client, connect };



// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     console.log("Connected correctly to server");

//          const db = client.db(dbName);

//          // Use the collection "people"

//          const col = db.collection("people");

//          // Construct a document                                                                                                                                                              

//          let personDocument = {

//              "name": { "first": "Alan", "last": "Turing" },

//              "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 

//              "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  

//              "contribs": [ "Turing machine", "Turing test", "Turingery" ],

//              "views": 1250000

//          }

//          // Insert a single document, wait for promise so we can read it back

//          const p = await col.insertOne(personDocument);

//          // Find one document

//          const myDoc = await col.findOne();

//          // Print to the console

//          console.log(myDoc);

//         } catch (err) {

//          console.log(err.stack);
//      }
//      finally {
//         await client.close();
//     }
// }