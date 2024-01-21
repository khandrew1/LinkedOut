import { NextResponse } from "next/server";
import { db } from "@/util/firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

export async function GET(req) {
  const res = NextResponse;

  const uid = req.nextUrl.searchParams.get("uid");

  try {
    const userDocRef = doc(db, "users", uid);
    const snapshot = await getDoc(userDocRef);

    const friendsSnapshot = await getDocs(collection(userDocRef, "friends"));
    const oppSnapshot = await getDocs(collection(userDocRef, "opps"));

    if (!snapshot.exists()) {
      return res.json({ message: "User not found" }, { status: 500 });
    }

    const friendUIDs = [];
    const oppUIDs = [];

    friendsSnapshot.forEach((doc) => {
      const data = doc.data();
      friendUIDs.push(data.uid);
    });

    oppSnapshot.forEach((doc) => {
      const data = doc.data();
      oppUIDs.push(data.uid);
    });

    const friends = [];
    const opps = [];

    console.log(friendUIDs.length);
    console.log(oppUIDs.length);

    if (friendUIDs.length !== 0) {
      const friendQuery = query(
        collection(db, "users"),
        where("__name__", "in", friendUIDs),
      );
      const friendQuerySnap = await getDocs(friendQuery);
      friendQuerySnap.forEach((doc) => {
        friends.push(doc.data());
      });
    }

    if (oppUIDs.length !== 0) {
      console.log("RUN!")
      const oppQuery = query(
        collection(db, "users"),
        where("__name__", "in", oppUIDs),
      );
      const oppQuerySnap = await getDocs(oppQuery);
      oppQuerySnap.forEach((doc) => {
        opps.push(doc.data());
      });
    }

    return res.json(
      {
        message: "OK",
        items: {
          friends: friends,
          opps: opps,
        },
      },
      { status: 200 },
    );
  } catch (e) {
    return res.json(
      { message: `Internal Server Error: ${e}` },
      { status: 500 },
    );
  }
}
