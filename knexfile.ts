import path from 'path'

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(
        __dirname,
        'src', 
        'api', 
        'database', 
        'database.sqlite'
      ),
    },
    migrations: {
      directory: path.resolve(
        __dirname,
        'src',
        'api',
        'database', 
        'migrations'
      ),
    },
    seeds: {
      directory: path.resolve(
        __dirname,
        'src',
        'api',
        'database',
        'seeds'
      ),
    },
    useNullAsDefault: true,
  },
}