module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": null,
    "database": "moviematch",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "moviematch",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "moviematch",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};
