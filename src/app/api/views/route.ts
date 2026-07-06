import { Redis } from "@upstash/redis";
import { NextRequest,NextResponse } from "next/server";

const redis = Redis.fromEnv()
const COOKIE_NAME = "visited";
const COOKIE_MAX_AGE = 60 * 60 * 24;

export async function GET(request: NextRequest) {
    const alreadyCounted = request.cookies.get(COOKIE_NAME);

    const count = alreadyCounted ? ((await redis.get<number>("portfolio:views")) ?? 0)
        : await redis.incr("portfolio:views")
    
    const response = NextResponse.json({ count })
    
    if (!alreadyCounted) {
        response.cookies.set(COOKIE_NAME, "1", {
            maxAge: COOKIE_MAX_AGE,
            httpOnly: true,
            sameSite:"lax"
        })
    }
    return response
}