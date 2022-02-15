import { MongoClient} from "mongodb";

const url = 'mongodb://localhost:27017';

const getAllcustomers = async () => {
    const client = new MongoClient(url);

    await client.connect()
    const db = client.db('Commerce')

    const customerCollection = db.collection('customers')

    const customers = await customerCollection.find({}).toArray()
    
    console.log(...customers)
    client.close()


}

const createCustomers = async (cust) => {
    const client = new MongoClient(url);

    await client.connect()
    const db = client.db('Commerce')

    const customerCollection = db.collection('customers')

    const customer = await customerCollection.insertOne(cust)
    
    console.log(customer)
    client.close()
}

 createCustomers({
     id: 3,
     name: "Roldophe Ferjuste",
     email: "roldophe@ferjuste.com"
 })

 getAllcustomers()


