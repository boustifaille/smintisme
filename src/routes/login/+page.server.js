import db from "$lib/db";
import argon2 from "argon2";
import crypto from "crypto";
import { NODE_ENV } from "$env/static/private";
import { redirect } from "@sveltejs/kit";

export async function load() {
    // const users = await db.collection("users").find().toArray()
}


export const actions = {
    default : async ({ cookies, request }) => {
        const data = await request.formData();

        const email = data.get("email");
        const password = data.get("password");

        const user = await db.collection("users").findOne({email:email});

        if (!email || !password || !user) return;
        
        if (!argon2.verify(user.password, password.toString())) return;

        const token = crypto.randomUUID();
        await db.collection('users').updateOne({email : email}, {$set: {authToken : token}}); // update the auth token of the user

        cookies.set("session", token, {
            path : "/",
            httpOnly : true,
            sameSite : true,
            secure : NODE_ENV === "production",
            maxAge : 60 * 60 * 24 * 30,
        });
        

        throw redirect(302, "/");

    }
};