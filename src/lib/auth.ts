import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb"
import { mongodbAdapter } from "@better-auth/mongo-adapter";


const client = new MongoClient(process.env.MONOG_DB_CONNECTOR as string)

const db = client.db("wnaderlust")
export const auth = betterAuth({
  //...
  database : mongodbAdapter(db, {
    client
  }),
   emailAndPassword: { 
    enabled: true, 
  }, 
});