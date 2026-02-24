import * as React from 'react'
import { DataTable } from '../dataTable/DataTable'
import { useAluno } from './hooks/useAluno'
import { Box, Button, Container, Input, Link, Toolbar, Typography } from '@mui/material'
import { IconePesquisar, IconeVoltar, PlusIcon } from '@/icon'
import { useState } from 'react'


export default function Aluno() {    

    const {
        data: {
            rows,
            cols
        },
        action: {
            setTurno,
            setFiltrarNome            
        }
    } = useAluno()

    return (
        <Box width="100%" margin="0.5%">
            <Typography variant="h4" color="#fff" sx={{ bgcolor: "#227afdff", textAlign: "center" }}>Relação de Alunos</Typography>
            <Button variant="contained" sx={{ width: "10%", marginRight: "1%", backgroundColor: "indigo", fontWeight: "bold" }} onClick={() => setTurno('Matutino')}>Matutino</Button>
            <Button variant="contained" sx={{ width: "10%", marginRight: "1%", backgroundColor: "indigo", fontWeight: "bold" }} onClick={() => setTurno('Vespertino')}>Vespertino</Button>
            <Button variant="contained" sx={{ width: "10%", marginRight: "1%", backgroundColor: "indigo", fontWeight: "bold" }} onClick={() => setTurno('Noturno')}>Noturno</Button>
            <Button variant="contained" sx={{ width: "10%", marginRight: "1%", backgroundColor: "indigo", fontWeight: "bold" }} onClick={() => setTurno(undefined)}>Todos</Button>
            <Input placeholder='Pesquisar Aluno' style={{ width: "34%", border: "solid indigo 2px", borderRadius: "1rex", marginRight: "9.5%", }} onChange={e => setFiltrarNome(e.target.value)}/>            
            <Button variant="contained" sx={{ width: "5%", margin: "0.3%", backgroundColor: "indigo" }}><IconeVoltar /></Button>
            <Button variant="contained" sx={{ backgroundColor: "indigo" }} >
                <Link href={"/aluno/formAluno"} >
                    <PlusIcon style={{ color: "#fff", backgroundColor: "indigo" }} />
                </Link></Button>
            <DataTable cols={cols} rows={rows} />
            
        </Box>
    )

}