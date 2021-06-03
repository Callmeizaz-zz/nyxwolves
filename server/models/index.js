import Sequelize from "sequelize";
import faculty from "./faculty.js";
import profile from "./profile.js";
import student from "./student.js";
import course from "./course.js";

const sequelize = new Sequelize("school", "postgres", "user", {
  dialect: "postgres",
  host: "localhost",
  define: {
    underscored: true,
  },
});
const models = {
  Student: student(sequelize, Sequelize.DataTypes),
  Profile: profile(sequelize, Sequelize.DataTypes),
  Faculty: faculty(sequelize, Sequelize.DataTypes),
  Course: course(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
