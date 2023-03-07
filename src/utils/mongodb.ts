import mongoose, {ConnectOptions} from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()
/*
mongoose
  .connect(process.env.URLDBMONGO , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  } as ConnectOptions)
  .then(() => {
    console.log("Database Connected Successfuly.");
  })
  .catch(() => {
    console.log("Error Connectiong to the Database");
  });*/