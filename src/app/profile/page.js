import Profile from "../../components/profile/Profile";
import Protected from "@/components/Protected";

const Page = () => {
  return (
    <Protected>
      <div className="h-full flex justify-center items-center">
        <Profile />
      </div>
    </Protected>
  );
};

export default Page;
