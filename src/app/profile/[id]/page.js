"use client";

import Profile from "@/components/profile/Profile";
import Protected from "@/components/Protected";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // TODO: add 404 reroute
    const fetchUser = async () => {
      const response = await fetch(`/api/lookup?uid=${params.id}`, {
        method: "GET",
      });
      const data = await response.json();

      setUser(data.items);
    };

    fetchUser();
  }, [params.id]);

  return (
    <Protected>
      <div className="h-full flex justify-center items-center">
        {user ? (
          <Profile name={user.name} picture={user.picture} />
        ) : (
          "Loading..."
        )}
      </div>
    </Protected>
  );
};

export default Page;
