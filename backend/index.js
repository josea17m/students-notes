import express from "express";
import conectDB from "./config/db.js";
import cors from "cors";
import studentsRoutes from "./routes/studentsRoutes.js";
import studentsNotes from "./routes/studentsNotes.js";

const app = express();
app.use(express.json());
conectDB();

const config = {
  application: {
    cors: {
      server: [
        {
          origin: "*", //servidor que deseas que consuma o (*) en caso que sea acceso libre
          credentials: true,
        },
      ],
    },
  },
};

app.use(cors(config.application.cors.server));
app.use("/notes", studentsNotes);
app.use("/student", studentsRoutes);

app.listen(4000, () => {
  console.log("servidor corriendo");
});
