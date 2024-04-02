import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Volunteering_Project",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((error) => {
      console.log("Some Error Occured While Connecting To Database: ", error);
    });
};
