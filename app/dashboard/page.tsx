
import { auth } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";


export default async function DashboardPage() {
  const { userId, isAuthenticated, redirectToSignIn } = await auth();

 const user = await currentUser();

  const name = user?.firstName ?? "Guest";


  if (!isAuthenticated) {
    return redirectToSignIn();
  }


  return (
    <div>
      <h1>Dashboard</h1>
      <p>Logged in as: {userId}</p>

      {user && <p>Welcome, {name}!</p>}
    </div>
  );
}
