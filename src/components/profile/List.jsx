"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ListItem = ({ name, picture }) => {
  return (
    <div className="flex border-b-2 border-gray-400 w-full gap-3 p-2">
      <div className="h-16 w-16 bg-red-300 rounded-full" />
      <p className="flex items-center">{name}</p>
    </div>
  );
};

const List = ({ setModal, uid }) => {
  const [friends, setFriends] = useState([]);
  const [opps, setOpps] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await fetch(`/api/list?uid=P8BXaVFJatPcwsXehu05`, {
          method: "GET",
        });
        const data = await response.json();

        setFriends(data.friends);
        setOpps(data.opps);

        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchLists();
  }, [uid]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-1/3 h-auto max-h-[60%] min-h-[60%] rounded-xl overflow-y-scroll bg-gray-300">
      <div className="flex flex-col rounded-xl h-full text-code-white p-4 gap-y-5">
        <div className="flex justify-between w-full">
          <button onClick={() => setModal(false)}>X</button>
          <div>Friend List</div>
        </div>
        <div className="flex flex-col h-full">
          <ListItem name="Andrew Khadder" />
          <ListItem name="Andrew Khadder" />
          <ListItem name="Andrew Khadder" />
          <ListItem name="Andrew Khadder" />
          <ListItem name="Andrew Khadder" />
          <ListItem name="Andrew Khadder" />
          <ListItem name="Andrew Khadder" />
        </div>
      </div>
    </div>
  );
};

export default List;
