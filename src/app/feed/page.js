import Posts from "@/components/feed/Posts";
import Protected from "@/components/Protected";

const Page = () => {
  return (
    <Protected>
      <Posts />
    </Protected>
  );
};

export default Page;
