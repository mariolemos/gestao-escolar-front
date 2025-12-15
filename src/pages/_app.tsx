import { DrawerMenu } from "@/layout/components/navigation/DrawerMenu/DrawerMenu";
import { AlertProvider } from "@/layout/components/alert/AlertContext";
import MenuAppBar from "@/layout/components/navigation/MenuAppBar";
import "@/styles/globals.css";
import { Avatar, Box, Divider, Drawer, Link, List, ListItemButton } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <MenuAppBar /> */}
      <DrawerMenu>
        <AlertProvider>
          <Component {...pageProps} />
        </AlertProvider>
      </DrawerMenu>

    </>

  )
}
