import { createFileRoute } from "@tanstack/react-router";
// @ts-expect-error - migrated JSX module without types
import SiteApp from "@/site/App.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PJDex — Websites & Instagram Ads for Small Businesses" },
      {
        name: "description",
        content:
          "A visual walkthrough of a responsive small-business website concept with direct WhatsApp contact and Instagram ads.",
      },
      { property: "og:title", content: "PJDex — Websites & Instagram Ads for Small Businesses" },
      {
        property: "og:description",
        content: "Responsive small-business websites with direct WhatsApp contact and Instagram ads.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SiteApp,
});
