import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, CircularProgress } from '@mui/material';
import { Load } from '../Load/Load';

interface IPropsDataTable {
    cols: string[]
    rows: any[]
    isloading?: boolean
}

export const DataTable = ({ cols, rows, isloading = false }: IPropsDataTable) => {
    return (
        <>
        <Box>

        
            {!isloading ? (
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead >
                            <TableRow >
                                {cols?.map((col: any) => (
                                    <TableCell >{col}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows?.map((row: any) => (
                                <TableRow
                                    key={row.ide}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {Object.values(row).map(value => {
                                        return <TableCell > {value}</TableCell>
                                    })

                                    }
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
               <Load />
            )}
            </Box>
        </>
    )
}