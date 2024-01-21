"use client";

import Posts from "@/components/feed/Posts";
import Protected from "@/components/Protected";
import Modal from "@/components/Modal";
import picture from "../../components/IMG_8502.jpg";
import { useState } from "react";

const Page = () => {
  const [modal, setModal] = useState(false);

  return (
    <Protected>
      <div className="h-full flex flex-col items-center gap-3">
      {modal && <Modal name="Andrew Khadder" pfp={picture} setModal={setModal} />}
        <button onClick={() => setModal(true)}>Post</button>
        <Posts />
      </div>
    </Protected>
  );
};

export default Page;
