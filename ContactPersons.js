import { MongoClient} from "mongodb";

const url = 'mongodb://localhost:27017';

const getAllContactPersons = async () => {
   const client = new MongoClient(url);

    await client.connect()
     const db = client.db('Commerce')

     const contactPersonCollection = db.collection('contactPersons')

     const contactPersons = await contactPersonCollection.find({}).toArray()
    
    console.log(...contactPersons)
    client.close()
 }

 const createMultiplecontactPersons = async (multipleContact) => {
    const client = new MongoClient(url);

 
   await client.connect()
   const db = client.db('Commerce')

   const contactPersonCollection = db.collection('contactPersons')

   const contactPerson = await contactPersonCollection.insertMany(multipleContact)
   
   console.log(contactPerson)

   client.close()
}
createMultiplecontactPersons([
    {id: 1,
     name: "Erique Nicolas",
     phone: "561-123-2341",
     address: "Boaca Gardens",
     email: "erique@nicolas.com"},

    {id:2,
     name: "Claire Michele",
     phone: "561-306-1022",
     address: "Boca Gardens Trail",
     email: "moicmichou@dorlus.com"}
])

getAllContactPersons()

