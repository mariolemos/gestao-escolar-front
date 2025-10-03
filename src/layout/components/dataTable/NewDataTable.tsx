"use client";

import * as React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';

interface DataTableProps {
  rows: GridRowsProp;
  columns: GridColDef[];
}


export default function DataTable( {rows,columns, ...rest} : DataTableProps) {    

    const paginationModel = { page: 0, pageSize: 10 };
    return (
        <Container>
            <Paper sx={{ width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 1 }}
                    {...rest}
                />
            </Paper>
        </Container>
    );
}