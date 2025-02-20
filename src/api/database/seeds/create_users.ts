import { Knex } from "knex";

export async function seed(knex: Knex) {
    await knex("users").insert([
        { name: "Guilhan", email: "teste@gmail.com", age: 24 }
    ])
}