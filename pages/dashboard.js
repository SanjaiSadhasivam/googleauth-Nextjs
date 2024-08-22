// pages/dashboard.js
import { useSession, signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Dashboard;
