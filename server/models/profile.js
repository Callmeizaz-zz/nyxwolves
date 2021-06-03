export default (sequelize, DataTypes) => {
  const Profile = sequelize.define("profile", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "The name can only contain letters and numbers",
        },
        len: {
          args: [3, 20],
          msg: "Name must be 3 characters or more",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      isNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Invalid Email",
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      isNull: true,
    },
    phone: {
      type: DataTypes.BIGINT,
      isNull: false,
    },
    country: {
      type: DataTypes.STRING,
      isNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      isNull: false,
    },
    city: {
      type: DataTypes.STRING,
      isNull: false,
    },
    company: {
      type: DataTypes.STRING,
      isNull: false,
    },
    school: {
      type: DataTypes.STRING,
      isNull: false,
    },
    hometown: {
      type: DataTypes.STRING,
      isNull: false,
    },
    language: {
      type: DataTypes.STRING,
      isNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      isNull: false,
    },
  });

  //   Relationship

  Profile.associate = (models) => {
    Profile.belongsTo(models.Student, {
      foreignKey: "studentId",
    });
  };

  return Profile;
};
