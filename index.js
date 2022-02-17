import { MongoClient} from "mongodb";

const url = 'mongodb://localhost:27017';

// const getAllcustomers = async () => {
//    const client = new MongoClient(url);

//     await client.connect()
//      const db = client.db('Commerce')

//      const customerCollection = db.collection('customers')

//      const customers = await customerCollection.find({}).toArray()
    
//     console.log(...customers)
//     client.close()


//  }

// const createCustomers = async (cust) => {
//     const client = new MongoClient(url);

//     await client.connect()
//     const db = client.db('Commerce')

//     const customerCollection = db.collection('customers')

//     const customer = await customerCollection.insertOne(cust)
    
//     console.log(customer)
//     client.close()
// }

//  createCustomers({
//      id: 3,
//      name: "Roldophe Ferjuste",
//      email: "roldophe@ferjuste.com"
//  })

 //getAllcustomers()

//  const createMultipleCustomers = async (custMultiple) => {
//      const client = new MongoClient(url);

  
//     await client.connect()
//     const db = client.db('Commerce')

//     const customerCollection = db.collection('customers')

//     const customer = await customerCollection.insertMany(custMultiple)
    
//     console.log(customer)

//     client.close()

 
// }

//  createMultipleCustomers([
//      {id: 10, name: "Jean Philippe", email: "philippe@jean.com"},
  //   {id: 11, name: "Davidson Demezier", email: "davidson@demezier.com"}, 
//      {id: 12, name: "Yamiley Ferjuste", email: "yamiley@ferjuste.com"} 

//  ])

//  getAllcustomers()



// ContactPersons


const getAllContactPersons = async () => {
   const client = new MongoClient(url);

    await client.connect()
     const db = client.db('Commerce')

     const contactPersonCollection = db.collection('contactPersons')

     const contactPersons = await contactPersonCollection.find({}).toArray()
    
    console.log(...contactPersons)
    client.close()
 }

 const createMultipleContactPersons = async (multipleContact) => {
    const client = new MongoClient(url);

 
   await client.connect()
   const db = client.db('Commerce')

   const contactPersonCollection = db.collection('contactPersons')

   const contactPerson = await contactPersonCollection.insertMany(multipleContact)
   
   console.log(contactPerson)

   client.close()
}
createMultipleContactPersons([
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

