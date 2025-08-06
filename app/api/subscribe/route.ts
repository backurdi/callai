export async function POST(request: Request) {
  const { email, firstName, lastName } = await request.json();

  try {
    const response = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${process.env.LIST_ID}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: `${process.env.EMAILOCTOPUS_KEY}`,
          email_address: email,
          ...(firstName || lastName
            ? {
                fields: {
                  ...(firstName ? { FirstName: firstName } : {}),
                  ...(lastName ? { LastName: lastName } : {}),
                },
              }
            : {}),
        }),
      }
    );

    if (response.status === 200) {
      return new Response("Email sendt!", {
        status: 200,
      });
    } else {
      return new Response("Der opstod en fejl", {
        status: response.status,
        statusText: response.statusText,
      });
    }
  } catch (error) {
    return new Response("Der opstod en fejl", { status: 500 });
  }
}
