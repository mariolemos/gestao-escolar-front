import * as React from 'react'
import { DataTable } from '../dataTable/DataTable'
import { useAluno } from './hooks/useAluno'
import { Box, Button, Container, Input, Link, Toolbar } from '@mui/material'
import { IconePesquisar, IconeVoltar, PlusIcon } from '@/icon'
import { useState } from 'react'


export default function Aluno() {

    const [turnoCondicional, setTurnoCondicional] = useState('Matutino');

    const {
        data: {
            rows,
            cols
        },
        action: {
            setTurno,
            turno
        }
    } = useAluno()
    return (
        <Box >
            <Button variant="contained" sx={{ margin: "1px", backgroundColor: "indigo", fontWeight: "bold" }} onClick={() => setTurnoCondicional('Matutino')}>Matutino</Button>
            <Button variant="contained" sx={{ margin: "5px", backgroundColor: "indigo", fontWeight: "bold" }} onClick={() => setTurnoCondicional('Vespertino')}>Vespertino</Button>
            <Button variant="contained" sx={{ margin: "5px", backgroundColor: "indigo", fontWeight: "bold" }} onClick={() => setTurnoCondicional('Noturno')}>Noturno</Button>
            <Button variant="contained" sx={{ margin: "5px", backgroundColor: "indigo", fontWeight: "bold" }} onClick={() => setTurnoCondicional('Totdos')}>Todos</Button>
            <Input placeholder='Pesquisar Aluno' style={{ width: "373px", marginLeft: "85px", border: "solid indigo 2px", borderRadius: "1rex" }} />
            <Button variant="contained" sx={{ width: "50px", marginRight: "200px", backgroundColor: "indigo" }}><IconePesquisar /></Button>
            <Button variant="contained" sx={{ width: "50px", margin: "5px", backgroundColor: "indigo" }}><IconeVoltar /></Button>
            <Button variant="contained" sx={{ backgroundColor: "indigo" }} >
                <Link href={"/aluno/formAluno"} >
                    <PlusIcon style={{ color: "#fff", backgroundColor: "indigo" }} />
                </Link></Button>
                
            <DataTable cols={cols} rows={rows} />
        </Box>
    )
    // return {
    //     turnoCondicional
    // }
}