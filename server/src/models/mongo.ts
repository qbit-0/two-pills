import mongoose from "mongoose";

const connectMongoose = async () => {
  switch (process.env.NODE_ENV) {
    case "local":
      console.log("Connecting to local mongodb.");
      await mongoose.connect(process.env.LOCAL_MONGO_DB as string);
      console.log("Connected to local mongodb.");
      break;
    case "production":
      console.log("Connecting to production mongodb.");
      await mongoose.connect(process.env.PRODUCTION_MONGO_DB as string);
      console.log("Connected to production mongodb.");
      break;
    default:
      throw new Error(`Invalid NODE_ENV, ${process.env.NODE_ENV}`);
  }
};

export default connectMongoose;
