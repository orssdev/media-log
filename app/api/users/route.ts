import { connectDB } from "@/lib/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB();

    const users = await User.find();

    return NextResponse.json({ users });
}

export async function POST(req: Request) {
    await connectDB();

    const body = await req.json();

    const user = await User.create(body);

    return NextResponse.json({ user });
}