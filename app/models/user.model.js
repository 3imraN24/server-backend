module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    birth_date: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    country: {
      type: Sequelize.STRING,
      allowNull: true
    },
    city: {
      type: Sequelize.STRING,
      allowNull: true
    },
    school: {
      type: Sequelize.STRING,
      allowNull: true
    },
    university: {
      type: Sequelize.STRING,
      allowNull: true
    },
    class: {
      type: Sequelize.STRING,
      allowNull: true
    },
    time_zone: {
      type: Sequelize.STRING,
      allowNull: true
    },
    device_info: {
      type: Sequelize.STRING,
      allowNull: true
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  }, {
    timestamps: false // لأننا نستخدم created_at يدويًا
  });

  return User;
};
