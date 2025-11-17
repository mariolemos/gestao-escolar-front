import { IconePesquisar, IconeVoltar, PlusIcon } from "@/icon";
import { Box, Button, Input, Link } from "@mui/material";
import { useState } from "react";
import { DataTable } from "../dataTable/DataTable";
import { useResponsavel } from "./hooks/useResponsavel";

export default function Responsavel() {

    //const [turnoCondicional, setTurnoCondicional] = useState('Todos');

    const {
        data: {
            rows,
            cols
        },
        action: {
            
        }
    } = useResponsavel()
    return (
        <Box >
            <Input placeholder='Pesquisar Aluno' style={{ width: "373px", marginLeft: "85px", border: "solid indigo 2px", borderRadius: "1rex" }} />
            <Button variant="contained" sx={{ width: "50px", marginRight: "240px", backgroundColor: "indigo" }}><IconePesquisar /></Button>
            <Button variant="contained" sx={{ width: "50px", margin: "5px", backgroundColor: "indigo" }}><IconeVoltar /></Button>
            <Button variant="contained" sx={{ backgroundColor: "indigo" }} >
                <Link href={"/responsavel/formResponsavel"}>
                    <PlusIcon style={{ color: "#fff", backgroundColor: "indigo" }} />
                </Link></Button>
            <DataTable cols={cols} rows={rows} />
        </Box>
    )
}