const {MongoClient} = require("mongodb")

const url =
  "mongodb+srv://namastedev:1vlobWJ7SFb42kBi@namastenode.df2lbva.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  //Insert data
  const data = {
    firstname: "Raghav",
    lastname: "Agrawal",
    city: "Ayodhya",
    phoneNumber: "777777",
  };
  // const insertResult = await collection.insertMany([data]);
  // console.log("Inserted documents =>", insertResult);

  //Read data 
  const findResult = await collection.find({}).toArray(); //{} means finding all the data and then coverting it to array otherwise it will give in a diff format 
  console.log("Found documents =>", findResult);

  const countResult = await collection.countDocuments({});
  console.log("Count of documents in the User collection =>", countResult)

  
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());