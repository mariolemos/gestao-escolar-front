import MenuAppBar from "@/layout/components/navigation/MenuAppBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
return (
    <>
      <MenuAppBar />
      <Component {...pageProps} />;
    </>

  )
}
