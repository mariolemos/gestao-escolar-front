import * as React from 'react'
import { DataTable } from '../dataTable/DataTable'
import { useAluno } from './hooks/useAluno'
import { Button, Container } from '@mui/material'
import { PlusIcon } from '@/icon'
import NewDataTable from '../dataTable/NewDataTable'

export default function Aluno() {

    const {
        data: {
            rows,
            cols
        }
    } = useAluno()
    return (
        <Container>
            <Button style={{backgroundColor: "green", width: "250px",  marginRight: "100px" }}><PlusIcon style={{color: "#fff"}} /></Button>
            
            <NewDataTable rows={rows??[]} columns={cols??[]} />
            {/* <DataTable data={{ cols, rows }} /> */}
            
        </Container>



    )
}