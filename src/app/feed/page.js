import Posts from "@/components/feed/Posts";
import Protected from "@/components/Protected";

const Page = () => {
  return (
    <Protected>
      <div className="h-full flex flex-col items-center gap-3">
        <Posts />
      </div>
    </Protected>
  );
};

export default Page;
