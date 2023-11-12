import { NextResponse } from "next/server";
import connect from "@/db";
import postData from "@/models/postData";


export const GET = async (_request) => {
    try {
        await connect();
        const posts = await postData.find();
        return new NextResponse(JSON.stringify(posts), {status:200});
    } catch (error) {
        return new NextResponse("error in fetching posts" + error, {status:500});
    }
}