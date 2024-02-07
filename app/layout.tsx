import { Inter, Lusitana } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Car Zone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}