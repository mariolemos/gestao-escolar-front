import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import MenuAppBar from "@/layout/components/navigation/MenuAppBar";
import BasicModal from "@/layout/components/modal/BasicModal";
import { Alert } from "@mui/material";

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
    <div>      
          <BasicModal mensage={"Testando o modal"}></BasicModal> 
          <Alert/>   
    </div>
  );
}
