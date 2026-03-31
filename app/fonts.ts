import localFont from "next/font/local";

export const MacPaw = localFont({
  src: [
    {
      path: "./fonts/macpaw/FixelDisplay-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/macpaw/FixelDisplay-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/macpaw/FixelDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/macpaw/FixelDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/macpaw/FixelDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/macpaw/FixelDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/macpaw/FixelDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/macpaw/FixelDisplay-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/macpaw/FixelDisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-family",
  display: "swap",
});
