import bcrypt from "bcrypt";
export default (sequelize, DataTypes) => {
  const Faculty = sequelize.define(
    "faculty",
    {
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
      password: {
        type: DataTypes.STRING,
        isNull: false,
        validate: {
          len: {
            args: [5, 30],
            msg: "Password must be 5 characters or more",
          },
        },
      },
    },
    {
      hooks: {
        afterValidate: async function (user) {
          const hashedPassword = await bcrypt.hash(user.password, 12);
          user.password = hashedPassword;
        },
      },
    }
  );

  return Faculty;
};
