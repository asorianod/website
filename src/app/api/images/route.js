export async function GET() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        expression: "public_id:asorianod*",
        max_results: 50,
      }),
    }
  );

  const data = await res.json();

  const images = (data.resources || []).map((img) => ({
    id: img.asset_id, // 👈 importante cambio
    url: img.secure_url.replace("/upload/", "/upload/f_auto,q_auto,w_500/"),
    full: img.secure_url.replace("/upload/", "/upload/f_auto,q_auto,w_1600/"),
  }));

  return Response.json(images);
}
