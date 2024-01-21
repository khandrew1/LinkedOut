"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import List from "./List";

const Profile = ({ name, picture, uid }) => {
  const { data: session } = useSession();

  const own = uid === session.user.id;

  const [modal, setModal] = useState(false);
  const [friendList, setFriendList] = useState(false);
  const [oppList, setOppList] = useState(false);

  const openFriendList = () => {
    setModal(true);
    setFriendList(true);
  };

  const openOppList = () => {
    setModal(true);
    setOppList(true);
  };

  const addFriend = async (uid, friendID) => {
    await fetch("/api/add/friend", {
      method: "POST",
      body: JSON.stringify({
        userID: uid,
        friendID: friendID,
        friendName: name,
      }),
    }).catch((e) => console.log(e));
  };

  const addOpp = async (uid, oppID) => {
    await fetch("/api/add/foe", {
      method: "POST",
      body: JSON.stringify({ userID: uid, oppID: oppID, oppName: name }),
    }).catch((e) => console.log(e));
  };

  return (
    <div className="bg-gray-300 w-1/2 h-1/2 rounded-lg flex">
      {modal && (
        <List
          uid={session.user.id}
          setModal={setModal}
          friendList={friendList}
          setFriendList={setFriendList}
          oppList={oppList}
          setOppList={setOppList}
        />
      )}
      <div className="flex h-fit items-center">
        <Image
          src={picture}
          unoptimized={true}
          height={40}
          width={40}
          alt="Andrew Khadder's pfp"
          className="bg-gray-400 rounded-full w-40 h-40 flex items-center m-6"
        />
        <div className="flex flex-col gap-y-3">
          <p className="flex font-bold items-center text-3xl mr-8">{name}</p>
          <div className="flex auto justify-between w-full">
            <button
              onClick={
                own ? openFriendList : () => addFriend(session.user.id, uid)
              }
              className="bg-green-300 w-full rounded-full"
            >
              {own ? `Friends` : `Add`}
            </button>
            <button
              onClick={own ? openOppList : () => addOpp(session.user.id, uid)}
              className="bg-red-500 w-full rounded-full"
            >
              {own ? `OPP LIST` : `OPP`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
