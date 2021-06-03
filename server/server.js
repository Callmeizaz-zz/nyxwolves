import express from "express";
import cors from "cors";
import models from "./models/index.js";
import student from "./routes/auth/studentAuth.js";
import faculty from "./routes/auth/facultyAuth.js";

// Port
const PORT = 8081;

// Middleware
const app = express();
app.use(cors("*"));
app.use(express.json());
// Routes
app.use("/student", student);
app.use("/faculty", faculty);
// DB

// Listen
models.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Up and runnig at ${PORT}  🚀🚀🚀🚀`);
  });
});
