"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ListItem = ({ name, picture }) => {
  return (
    <div className="flex border-b-2 border-gray-400 w-full gap-3 p-2">
      <Image
        src={picture}
        unoptimzed={true}
        height={16}
        width={14}
        alt={`${name}'s profile picture}`}
        className="rounded-full h-16 w-16"
      />
      <p className="flex items-center">{name}</p>
    </div>
  );
};

const List = ({
  setModal,
  uid,
  friendList,
  setFriendList,
  oppList,
  setOppList,
}) => {
  const [friends, setFriends] = useState([]);
  const [opps, setOpps] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await fetch(`/api/list?uid=P8BXaVFJatPcwsXehu05`, {
          method: "GET",
        });
        const data = await response.json();

        console.log(data);

        setFriends(data.items.friends);
        setOpps(data.items.opps);
      } catch (e) {
        console.log(e);
      }
    };

    fetchLists();
  }, []);

  const closeModal = () => {
    setFriendList(false);
    setOppList(false);
    setModal(false);
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-1/3 h-auto max-h-[60%] min-h-[60%] rounded-xl overflow-y-scroll bg-gray-300">
      <div className="flex flex-col rounded-xl h-full text-code-white p-4 gap-y-5">
        <div className="flex justify-between w-full">
          <button onClick={closeModal}>X</button>
          <div>{friendList && "Friend List"}</div>
          <div>{oppList && "Opp List"}</div>
        </div>
        <div className="flex flex-col h-full">
          {friendList && friends
            ? friends.map((friend, idx) => (
                <ListItem name={friend.name} picture={friend.image} key={idx} />
              ))
            : ""}
          {oppList && opps
            ? opps.map((opp, idx) => (
                <ListItem name={opp.name} picture={opp.image} key={idx} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default List;
