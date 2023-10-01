import db from '$lib/db.js';


export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        const nom = data.get("nom");
        const message = data.get("message");

        await db.collection("messages").insertOne({
            name:nom,
            message,
        });
    }
};