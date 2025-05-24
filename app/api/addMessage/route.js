import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    let data = await request.json()
    try {
        const client = await clientPromise;
        const db = client.db("Messages");
        const Messages = await db.collection("Message").insertOne(data);
        return Response.json(Messages);
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
