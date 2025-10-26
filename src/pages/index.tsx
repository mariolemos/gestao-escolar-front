
import { FormLabel } from "@mui/material";
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
      <h1 style={{bgcolor: "#ccc"}}>Tela Principal</h1>   
      <FormLabel sx={{bgcolor: "#ccc"}}> Caixa de Seleção </FormLabel>  
      
    </>
  )
}
