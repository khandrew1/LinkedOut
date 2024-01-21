import { NextResponse } from "next/server";
import { db } from "@/util/firebase";
import { doc, getDocs, collection, addDoc } from "firebase/firestore";

export async function GET(req) {
  const res = NextResponse;

  const output = [];
  try {
    const snapshot = await getDocs(collection(db, "posts"));
    snapshot.forEach((doc) => {
      const data = doc.data();
      output.push(data);
    });
    return res.json({ message: "OK", items: output }, { code: 200 });
  } catch (e) {
    return res.json({ message: `Internal Server Error: ${e}` }, { code: 500 });
  }
}

export async function POST(req) {
  const res = NextResponse;

  const { message, uid, date } = await req.json();

  try {
    const newPost = {
      message: message,
      uid: uid,
      date: date,
    };

    const docRef = await addDoc(collection(db, "posts"), newPost);

    return res.json({ message: "OK", items: newPost }, { status: 200 });
  } catch (e) {
    return res.json(
      { message: `Internal Server Error: ${e}` },
      { status: 500 },
    );
  }
}
