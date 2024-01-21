"use client";
import List from "@/components/profile/List";

const Page = () => {
  const fetchShit = async () => {
    try {
      const response = await fetch("/api/list?uid=P8BXaVFJatPcwsXehu05", {
        method: "GET",
      });
      const data = await response.json();

      console.log(data.items);
    } catch (e) {
      console.log(e);
    }
  };

  return <List />;
};

export default Page;
