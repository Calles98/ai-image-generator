import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json(); // res now contains the body
  const prompt = res.prompt;

  const response = await fetch(
    "https://ai-image-generator-app-rod.azurewebsites.net/api/generateimage",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    }
  );

  const textData = await response.text();

  return NextResponse.json(textData);
}
