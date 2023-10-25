"use client";
import { Saira } from "next/font/google";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global.js";
import theme from "../styles/theme";
import { Header } from "@/components/Header/index.jsx";

const inter = Saira({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
