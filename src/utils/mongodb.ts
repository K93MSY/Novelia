import {MongoClient} from 'mongodb';
const uri:string = process.env.​MONGODB_URI!;
const client = new MongoClient(uri);