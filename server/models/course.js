export default (sequelize, DataTypes) => {
  const Course = sequelize.define("course", {
    name: {
      type: DataTypes.STRING,
      isNull: false,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: "The name can only contain letters and numbers",
        },
        len: {
          args: [3, 20],
          msg: "Name must be 3 characters or more",
        },
      },
    },
    courseId: {
      type: DataTypes.STRING,
      unique: true,
      isNull: false,
    },
    dept: {
      type: DataTypes.STRING,
      unique: true,
      isNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      isNull: true,
    },
    room: {
      type: DataTypes.STRING,
      isNull: false,
    },
    waitlist: {
      type: DataTypes.STRING,
      isNull: false,
    },

    team: {
      type: DataTypes.STRING,
      isNull: false,
    },
  });
  //   Relationship

  Course.associate = (models) => {
    Course.hasMany(models.Course, {
      foreignKey: "facultyId",
    });
  };
  return Course;
};
