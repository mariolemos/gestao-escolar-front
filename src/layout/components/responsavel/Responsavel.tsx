import { IconePesquisar, IconeVoltar, PlusIcon } from "@/icon";
import { Box, Button, Input, Link, Toolbar } from "@mui/material";
import { useState } from "react";
import { DataTable } from "../dataTable/DataTable";
import { useResponsavel } from "./hooks/useResponsavel";

export default function Responsavel() {

    //const [turnoCondicional, setTurnoCondicional] = useState('Todos');

    const {
        data: {
            rows,
            cols,
            isLoading
        },
        action: {

        }
    } = useResponsavel()
    return (

        <Toolbar>
            <Box >
                <Input placeholder='Pesquisar Aluno' style={{ width: "550px",  border: "solid indigo 2px", borderRadius: "1rex" }} />
                <Button variant="contained" sx={{ width: "50px", marginRight: "550px", backgroundColor: "indigo" }}><IconePesquisar /></Button>
                <Button variant="contained" sx={{ width: "50px", margin: "5px", backgroundColor: "indigo" }}><IconeVoltar /></Button>
                <Button variant="contained" sx={{ backgroundColor: "indigo" }} >
                    <Link href={"/responsavel/formResponsavel"}>
                        <PlusIcon style={{ color: "#fff", backgroundColor: "indigo" }} />
                    </Link></Button>
                <DataTable cols={cols} rows={rows} isloading={isLoading} />
            </Box>

        </Toolbar>

    )
}