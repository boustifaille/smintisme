import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';
import argon from 'argon2';
import crypto from "crypto";

export const actions = {
    default : async ({cookies, request}) => {
        const data = await request.formData();

        const [username, email, password] = ["username", "email", "password"].map(el => data.get(el));

        if (!username || !email || !password) return;

        const user = await db.collection("users").findOne({email:email});

        if (user) return; // this user has already an account

        const password_hash = await argon.hash(password.toString())

        await db.collection("users").insertOne({
            username,
            email,
            password : password_hash,
            authToken : crypto.randomUUID(),
        });

        throw redirect(302, '/login');
    }
};