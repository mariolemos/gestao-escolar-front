import { AlertProvider } from "@/layout/components/alert/AlertContext";
import MenuAppBar from "@/layout/components/navigation/MenuAppBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MenuAppBar />
      <AlertProvider>
        <Component {...pageProps} />
      </AlertProvider>
    </>

  )
}
