import * as React from 'react'
import { DataTable } from '../dataTable/DataTable'
import { useAluno } from './hooks/useAluno'
import { Button, Container } from '@mui/material'
import { PlusIcon } from '@/icon'

export default function Aluno() {

    const {
        data: {
            rows,
            cols
        }
    } = useAluno()
    return (
        <Container>
            <Button style={{backgroundColor: "blue", }}><PlusIcon style={{color: "#fff"}} /></Button>
            <DataTable data={{ cols, rows }} />
        </Container>



    )
}