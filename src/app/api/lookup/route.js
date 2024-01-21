import { NextResponse } from "next/server";
import { db } from "@/util/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function GET(req) {
  const res = NextResponse;

  const uid = req.nextUrl.searchParams.get("uid");

  try {
    const snapshot = await getDoc(doc(db, "users", uid));
    if (!snapshot.exists()) {
      return res.json({ message: "User not found" }, { status: 500 });
    }
    const { name, image } = snapshot.data();
    return res.json(
      {
        message: "OK",
        items: {
          name: name,
          picture: image,
          uid: uid,
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
