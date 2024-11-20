import MainHeader from "./components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "MAKEUP-SIS",
  description: "Professional and high-quality makeup.",
  creator: "yosef palas",
  keywords: ["company", "makeup"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "MAKEUP-SIS",
    description: "Professional and high-quality makeup.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
