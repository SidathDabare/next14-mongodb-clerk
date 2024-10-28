import { clerkClient } from "@clerk/nextjs";

export async function GET(req: Request) {
  const response = await clerkClient.users.getUserList();

  console.log(response);
}
