import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartContextProvider } from "@/store/cart-context";
import { ThemeProvider } from "@/store/ThemeContext";
import Header from "@/components/header/header";
import { SessionProvider } from "next-auth/react";



export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return <SessionProvider session={session}><ThemeProvider><CartContextProvider ><Header /><Component {...pageProps} /></CartContextProvider></ThemeProvider></SessionProvider>;
}
