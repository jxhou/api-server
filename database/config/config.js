module.exports = {
  development: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialect: 'postgres'
  },
  test: {
      use_env_variable: 'TEST_DATABASE_URL',
  },
  production: {
      use_env_variable: 'DATABASE_URL',
  }
};
