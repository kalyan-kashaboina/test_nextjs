import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer/footer";
import Nav from "./components/Navbar/navbar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="Main">
      <Nav/>
      <div className="mainBody"> 
          {children}
        </div>
        <Footer/>
        </div>
      </body>
    </html>
  );
}
