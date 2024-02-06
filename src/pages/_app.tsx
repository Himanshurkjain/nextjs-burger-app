import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartContextProvider } from "@/store/cart-context";
import { ThemeProvider } from "@/store/ThemeContext";
import Header from "@/components/header/header";


export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider><CartContextProvider ><Header /><Component {...pageProps} /></CartContextProvider></ThemeProvider>;
}
