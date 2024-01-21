import { NextResponse } from "next/server";
import { db } from "@/util/firebase";
import { doc, getDocs, collection, addDoc } from "firebase/firestore";

export async function POST(req) {
  const res = NextResponse;

  const { userID, friendID, friendName } = await req.json();

  try {
    const newFriend = {
        uid: friendID
    }

    const newPost = {
      uid: userID,
      message: `${friendName} and I are now friends!!`,
      date: new Date(),
    }

    const docRef = await addDoc(collection(db, "users", userID, "friends"), newFriend);
    const postDocRef = await addDoc(collection(db, "posts"), newPost);

    return res.json({ message: "OK", items: newFriend }, { status: 200 });
  } catch (e) {
    return res.json(
      { message: `Internal Server Error: ${e}` },
      { status: 500 },
    );
  }
}
