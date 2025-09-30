import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { useNaveBar } from './hooks/useNaveBar';
import Link from 'next/link';
import { HomeIcon, IconeSair, InconeAjustes, PlusIcon } from '@/icon';


export default function MenuAppBar() {
    const {
        data: {
            auth,
            anchorEl
        },
        action: {
            handleChange,
            handleMenu,
            handleClose,
            testando,
            rendenrizarAluno
        }
    } = useNaveBar()
    return (

        <Box sx={{ flexGrow: 1, mb: 3 }}>
            <AppBar position="static">
                <Toolbar>


                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
                        Gestão para Transprte Escolar
                    </Typography>

                    <div >
                        <Button variant="contained" style={{ margin: "10px" }}>
                            <Link href={"/aluno"}>Aluno</Link>
                        </Button>
                    </div>


                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
