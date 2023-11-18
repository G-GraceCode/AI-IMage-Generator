import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true); //Enble us to the search option in our frontend

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
