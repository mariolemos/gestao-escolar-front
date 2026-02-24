import { DrawerMenu } from "@/layout/components/navigation/DrawerMenu/DrawerMenu";
import { AlertProvider } from "@/layout/components/alert/AlertContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>      
      <DrawerMenu>
        <AlertProvider>
          <Component {...pageProps} />
        </AlertProvider>
      </DrawerMenu>
    </>
  )
}
