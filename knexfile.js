// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./recipe-book.db3"
    }
  },
  migrations: {
    directory: "./migration"
  },
  seeds: {
    directory: "./seeds"
  },
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
    }
  }
};
