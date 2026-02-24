import { IconePesquisar, IconeVoltar, PlusIcon } from "@/icon";
import { Box, Button, Input, Link, Toolbar, Typography } from "@mui/material";
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
            setFiltrarNome
        }
    } = useResponsavel()
    return (        
            <Box width="100%" margin="0.5%" >
                <Typography variant="h4" color="#fff" sx={{bgcolor:"#227afdff", textAlign:"center"}}>Relação de Responsáveis</Typography>
                <Input placeholder='Pesquisar Responsável' style={{ width: "37%",  border: "solid indigo 2px", borderRadius: "1rex", marginRight: "49%" }} onChange={e => setFiltrarNome(e.target.value)} />                
                <Button variant="contained" sx={{ width: "5%", margin: "1%", backgroundColor: "indigo" }}><IconeVoltar /></Button>
                <Button variant="contained" sx={{ backgroundColor: "indigo" }} >
                    <Link href={"/responsavel/formResponsavel"}>
                        <PlusIcon style={{ color: "#fff", backgroundColor: "indigo" }} />
                    </Link></Button>
                <DataTable cols={cols} rows={rows} isloading={isLoading} />
            </Box>      
    )
}