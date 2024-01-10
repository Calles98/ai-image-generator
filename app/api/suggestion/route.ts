export async function GET(request: Request) {
  // Connect to our Microsoft Azure Function
  const response = await fetch(
    "https://ai-image-generator-app-rod.azurewebsites.net/api/getchatgptsuggestion",
    {
      cache: "no-store",
    }
  );

  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
  });
}
