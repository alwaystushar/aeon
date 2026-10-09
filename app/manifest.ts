import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AEON Finvest Services LLP",
    short_name: "AEON Finvest",
    description: "Strategic funding solutions, corporate lending & debt advisory.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1ea",
    theme_color: "#071c35",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
