#! /usr/bin/env node

console.log(
    'This script populates your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
  );
  
  // Get arguments passed on command line
  const userArgs = process.argv.slice(2);
  
  const Message = require("./models/message")

  const messages = [];
  
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false); // Prepare for Mongoose 7
  
  const mongoDB = userArgs[0];
  
  main().catch((err) => console.log(err));
  
  async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createMessages();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }
  
  async function messageCreate(text, user, added) {
    const messageDetail = {
        text: text,
        user: user,
        added: added
    }
    const message = new Message(messageDetail);
    await message.save()
    messages.push(message)
    console.log(`Added message: ${text}`)
  }

  async function createMessages(){
    console.log("Added messages");
    await Promise.all([
        messageCreate("This is a great place to express ideas!", "Alan", "2023-06-12"),
        messageCreate("Is this where you add the message?","Luke", "2023-06-11"),
        messageCreate("How about it!", "Alan", "2023-06-13"),
        messageCreate("I would like to see the dark side of the moon!", "George", "2023-06-15"),
        messageCreate("Is should be dark at midnight everywhere, no?", "Joyce", "2023-06-12"),
        messageCreate("@Joyce Possibly not in Iceland during summer!", "Alan", "2023-06-12"),
        messageCreate("Why would I need to learn express?", "Nacho", "2023-07-12"),
        messageCreate("You might not need to!", "Alan", "2023-07-12"),
        messageCreate("They are coming for us!", "Alan", "2023-08-12"),
        messageCreate("I have an idea for how to improve this site", "Bruce", "2023-06-23"),
        messageCreate("All the ways this could be improved must be heard.", "Alan", "2023-06-24"),
        messageCreate("What are we going to do with all this technology?", "Joyce", "2023-06-25"),
        messageCreate("Probably just move onto another project in a few weeks!", "Alan", "2023-06-26"),
        messageCreate("@Alan I doubt it", "Nacho", "2023-06-27"),
        messageCreate("Should we start inviting more users?", "Joyce", "2023-09-12"),
        messageCreate("How about it!", "Alan", "2023-09-13"),
    ])
  }
