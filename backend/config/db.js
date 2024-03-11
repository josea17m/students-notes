/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import mongoose from "mongoose";

const conectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://josea1701m:17012003denuevoDIOSMIO@notes-collection.xact80b.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`Conectado a ${url}`);
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

export default conectDB;
