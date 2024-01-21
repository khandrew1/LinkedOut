import { NextResponse } from "next/server";
import { db } from "@/util/firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

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
      friendUIDs.push(data);
    });

    oppSnapshot.forEach((doc) => {
      const data = doc.data();
      oppUIDs.push(data);
    });

    return res.json(
      {
        message: "OK",
        items: {
          friendUIDs: friendUIDs,
          oppUIDs: oppUIDs,
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
