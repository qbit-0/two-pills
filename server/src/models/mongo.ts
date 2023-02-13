import mongoose from "mongoose";

const connectMongoose = async () => {
  if (process.env.NODE_ENV === "local") {
    console.log("Connecting to local mongodb.");
    await mongoose.connect(process.env.LOCAL_MONGO_DB as string);
    console.log("Connected to local mongodb.");
  } else if (process.env.NODE_ENV === "production") {
    console.log("Connecting to production mongodb.");
    await mongoose.connect(process.env.PRODUCTION_MONGO_DB as string);
    console.log("Connected to production mongodb.");
  } else {
    throw new Error(`Invalid NODE_ENV, ${process.env.NODE_ENV}`);
  }
};

export default connectMongoose;
