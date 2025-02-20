import knex from "knex";
import path from "path";

export const dbConnection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(import.meta.url, 'database.sqlite'),
    },
    useNullAsDefault: true,
});