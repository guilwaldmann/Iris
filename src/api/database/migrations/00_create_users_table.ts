import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id").primary();
        table.text("name").notNullable();
        table.text("email").notNullable();
        table.integer("age").notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("users")
}