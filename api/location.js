export default async function handler(req, res) {
  const FORCE_MOCK = true;

  if (FORCE_MOCK) {
    return res.status(200).json({
      city: "(Mock)",
      timezone: "Asia/Kolkata",
      country_name: "India",
      org: "Dev Mode ISP",
    });
  }

  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    return res.status(200).json({
      city: "(Dev)",
      timezone: "Asia/Kolkata",
      country_name: "India",
      org: "Localhost ISP",
    });
  }

  try {
    let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    if (ip && ip.includes(",")) {
      ip = ip.split(",")[0];
    }

    // Fallback for localhost in Production
    if (!ip || ip === "::1" || ip === "127.0.0.1") {
      return res.status(200).json({
        city: "Earth",
        timezone: "UTC",
        country_name: "Universe",
        org: "Unknown",
      });
    }

    const response = await fetch(`https://ipapi.co/${ip}/json/`);

    if (!response.ok) {
      console.error(`IPAPI Failed: ${response.status} ${response.statusText}`);
      throw new Error("Failed to fetch location");
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Location API Error:", error);
    return res.status(500).json({ error: "Location fetch failed" });
  }
}
