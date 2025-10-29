import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useNaveBar } from './hooks/useNaveBar';
import Link from 'next/link';
import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Stack } from '@mui/material';
import { HomeIcon, IconePrincipal } from '@/icon';
import { blue } from '@mui/material/colors';

export default function MenuAppBar() {
    const {
        data: {
            
        },
        action: {
            handleChange,
            handleMenu,
            //handleClose,
            testando,
            rendenrizarAluno
        }
    } = useNaveBar()

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {

        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);
    return (

        <AppBar position="static"        
        >
            <Toolbar>                
                    <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <IconePrincipal />
                    </Button>

                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
                        Gestão Profissional para Transporte Escolar
                    </Typography>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                                }}
                            >
                                <Paper sx={{m: 6, bgcolor: 'aquamarine' }}>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            autoFocusItem={open}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={handleClose}><Link href={"/aluno"} >Aluno</Link></MenuItem>
                                            <MenuItem onClick={handleClose}><Link href={"/colegio"} >Colegio</Link></MenuItem>
                                            <MenuItem onClick={handleClose}><Link href={"/mensalidade"} >Mensalidades</Link></MenuItem>
                                            <MenuItem onClick={handleClose}><Link href={"/ajustes"} >Mensalidades</Link></MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>               
            </Toolbar>
        </AppBar>

        // <Box sx={{ flexGrow: 1, mb: 0.1 }}>
        // <AppBar position="static">
        //     <Toolbar >
        //         {auth && (
        //             <div>
        //                 <IconButton
        //                     size="large"
        //                     aria-label="account of current user"
        //                     aria-controls="menu-appbar"
        //                     aria-haspopup="true"
        //                     onClick={handleMenu}
        //                     color="success"
        //                 >  ggggg
        //                 </IconButton>
        //             </div>
        //         )}
        //         <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
        //             Gestão para Transprte Escolar
        //         </Typography>
        //         <div >
        //             <Button variant="contained" style={{ margin: "10px" }}>
        //                 <Link href={"/aluno"}>Aluno</Link>
        //             </Button>
        //             <Button variant="contained" style={{ margin: "10px" }}>
        //                 <Link href={"/colegio"}>Colegio</Link>
        //             </Button>
        //         </div>
        //     </Toolbar>
        // </AppBar>
        // </Box>
    );
}
