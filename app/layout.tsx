import Header from "@/components/header/Header";
import MainContainer from "@/components/MainContainer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <MainContainer>
          {children}
        </MainContainer>
      </body>
    </html>
  );
}
