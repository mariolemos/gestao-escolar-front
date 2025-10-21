import { Box, Button, Input, Link, Typography } from "@mui/material";
import { DataTable } from "../dataTable/DataTable";
import { IconePesquisar, IconeVoltar, PlusIcon } from "@/icon";
import { useColegio } from "./hooks/useColegio";

export default function Colegio() {
    const {
        data: {
            rows,
            cols
        },
        action: {

        }
    } = useColegio()
    return (
        <Box >            
                <Input placeholder='Pesquisar Aluno' style={{ width: "373px", marginLeft: "85px", border: "solid indigo 2px", borderRadius: "1rex" }} />
                <Button variant="contained" style={{ width: "50px", marginRight: "240px", backgroundColor: "indigo" }}><IconePesquisar /></Button>
                <Button variant="contained" style={{ width: "50px", margin: "5px", backgroundColor: "indigo" }}><IconeVoltar /></Button>
                <Button variant="contained" style={{ backgroundColor: "indigo" }} >
                    <Link href={"/colegio/formColegio"}>
                        <PlusIcon style={{ color: "#fff", backgroundColor: "indigo" }} />
                    </Link></Button>
                < DataTable data={{ cols, rows }} />       
        </Box>
    )
}
