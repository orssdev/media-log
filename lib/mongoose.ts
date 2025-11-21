import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose
        .connect(MONGODB_URI, { dbName: 'sample_mflix' })
        .then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;
    console.log('Here')
    return cached.conn;
}