
import { Box, FormLabel } from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        //justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}>
        <h1>Tela Principal</h1>

      </Box>
    </>
  )
}
