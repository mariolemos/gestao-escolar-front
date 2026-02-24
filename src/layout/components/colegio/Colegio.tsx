import { Box, Button, Input, Link, Toolbar, Typography } from "@mui/material";
import { DataTable } from "../dataTable/DataTable";
import { IconePesquisar, IconeVoltar, PlusIcon } from "@/icon";
import { useColegio } from "./hooks/useColegio";

export default function Colegio() {
    const {
        data: {
            rows,
            cols,
            isLoading
        },
        action: {
            setFiltrarNome,
        }
    } = useColegio()
    return (
        <Box width= "100%" margin={0.5}>
            <Typography variant="h4" color="#fff" sx={{ bgcolor: "#227afdff", textAlign: "center" }}>Relação de Colégios</Typography>
            <Input placeholder='Pesquisar Colégio' sx={{ width: "50%", border: "solid indigo 2px", borderRadius: "1rex", marginRight: "36%" }} onChange={e => setFiltrarNome(e.target.value)} />            
            <Button variant="contained" style={{ width: "5%", margin: "1%", backgroundColor: "indigo", marginRight: "1%" }}><IconeVoltar /></Button>
            <Button variant="contained" style={{ width: "5%", backgroundColor: "indigo" }} >
                <Link href={"/colegio/formColegio"}>
                    <PlusIcon style={{ color: "#fff", backgroundColor: "indigo" }} />
                </Link>
            </Button>
            < DataTable cols={cols} rows={rows} isloading={isLoading} />
        </Box>
    )
}
