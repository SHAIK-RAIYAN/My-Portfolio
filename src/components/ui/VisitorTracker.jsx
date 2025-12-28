import { useEffect } from "react";

const VisitorTracker = () => {
  useEffect(() => {
    // Check if  already logged session
    const hasLogged = sessionStorage.getItem("portfolio_visited");

    if (hasLogged) {
      return; // STOP HERE if refreshed the page
    }

    // session as "Logged"
    sessionStorage.setItem("portfolio_visited", "true");

    const trackVisitor = async () => {
      let visitorData = {
        ip: "Unknown (Blocked)",
        city: "Unknown",
        region: "Unknown",
        country: "Unknown",
        postal: "Unknown",
        lat: "Unknown",
        long: "Unknown",
        timezone: "Unknown",
        org: "Unknown",
      };

      try {
        const response = await fetch("https://ipapi.co/json/");
        if (response.ok) {
          const data = await response.json();
          visitorData = {
            ip: data.ip || "Unknown",
            city: data.city || "Unknown",
            region: data.region || "Unknown",
            country: data.country_name || "Unknown",
            postal: data.postal || "Unknown",
            lat: data.latitude || "Unknown",
            long: data.longitude || "Unknown",
            timezone: data.timezone || "Unknown",
            org: data.org || "ISP",
          };
        }
      } catch (error) {
        // Silent Fail
      }

      const payload = {
        content: "🚀 **New Portfolio Hit!** <@782185547732353074>",
        embeds: [
          {
            title: "Visitor Details",
            color: visitorData.ip === "Unknown (Blocked)" ? 15548997 : 5763719,
            fields: [
              {
                name: "📍 Location",
                value: `${visitorData.city}, ${visitorData.region}, ${visitorData.country}`,
                inline: false,
              },
              {
                name: "📮 Postal / Zip",
                value: visitorData.postal,
                inline: true,
              },
              {
                name: "🌍 Coordinates",
                value: `${visitorData.lat}, ${visitorData.long}`,
                inline: true,
              },
              {
                name: "🕒 Time Zone",
                value: visitorData.timezone,
                inline: true,
              },
              { name: "🖥️ IP Address", value: visitorData.ip, inline: true },
              { name: "🏢 Org/ISP", value: visitorData.org, inline: true },
              {
                name: "🔗 Source",
                value: document.referrer || "Direct / Typed URL",
                inline: false,
              },
              { name: "📱 Device", value: navigator.userAgent, inline: false },
            ],
            footer: {
              text: "Portfolio Logger • Vion Security",
            },
            timestamp: new Date().toISOString(),
          },
        ],
      };

      const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK;
      if (!webhookUrl) return;

      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (e) {
        // Silent Fail
      }
    };

    trackVisitor();
  }, []);

  return null;
};

export default VisitorTracker;
