import { NextResponse } from "next/server";
import { db } from "@/util/firebase";
import { doc, getDocs, collection, addDoc } from "firebase/firestore";

export async function POST(req) {
  const res = NextResponse;

  const { userID, oppID, oppName } = await req.json();

  try {
    const newOpp = {
        uid: oppID
    }

    const newPost = {
      uid: userID,
      message: `${oppName} and I are no longer friends.`,
      date: new Date(),
    }

    const docRef = await addDoc(collection(db, "users", userID, "opps"), newOpp);
    const postDocRef = await addDoc(collection(db, "posts"), newPost);

    return res.json({ message: "OK", items: newOpp }, { status: 200 });
  } catch (e) {
    return res.json(
      { message: `Internal Server Error: ${e}` },
      { status: 500 },
    );
  }
}
