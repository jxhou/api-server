module.exports = (sequelize, type) => {
  const user = sequelize.define('user', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: type.STRING,
      lastName: type.STRING,
      email: {
        type: type.STRING,
        unique: true
      }
  });

  user.associate = (models) => {
    user.hasOne(models.password);
  }

  return user;
}