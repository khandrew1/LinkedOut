import { NextResponse } from "next/server";
import { db } from "@/util/firebase";
import { doc, getDocs, collection } from "firebase/firestore";

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
