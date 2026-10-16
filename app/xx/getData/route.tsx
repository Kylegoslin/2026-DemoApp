import { NextRequest, NextResponse } from "next/server";
import { createClient } from 'redis';


export async function GET() {

    const client = createClient({
    username: 'default',
    password: 'dM1lQnVHazwef93jb3Z0kfqGmwdXzddk',
    socket: {
        host: 'discovery-guide-marmalade-76401.db.redis.io',
        port: 19547
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('hello', 'Hello from Redis!');



const result = await client.get('hello');
console.log(result)  // >>> bar



  return NextResponse.json({
    message: "Hello from Next.js API..." + result,
  });
}




