import db from "$lib/db";

export async function load() {
    const users = await db.collection("users").find().toArray()
    console.log(users)
}