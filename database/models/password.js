module.exports = (sequelize, type) => {
  return sequelize.define('password', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      password: type.STRING,
  })
}