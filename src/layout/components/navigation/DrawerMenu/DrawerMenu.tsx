import { Avatar, Box, Divider, Drawer, Link, List, ListItemButton } from "@mui/material";


export const DrawerMenu = ({children}) => {
    return (
        <>
        <Drawer variant="permanent">
            <Box width="150px" height="100%" display="flex" flexDirection="column">
                <Box width="100%" height="150px" display="flex" alignItems="center" justifyContent="center" >
                    <Avatar sx={{ height: "110px", width: "110px" }}
                        src="https://diariobahia.com.br/wp-content/uploads/2024/05/IMG-20240520-WA0101-640x360.jpg" />
                    {/* src="https://www.educacao.sp.gov.br/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-27-at-12.22.03.jpeg" /> */}
                </Box>
                <Divider />
                <Box flex={1} >
                    {/* <List component="nav" >
                            <ListItemLink
                            to="/aluno"
                            icon={IconeBuscar}
                            label="Página Principal"
                            onClick={undefined}
                            />
                        </List> */}
                    <List component="nav" sx={{display:"flex", flexDirection:"column", alignItems:"center",}} >
                        <ListItemButton >
                            {/* <ListItemText primary={Responsável}>                                                                */}
                            <Link variant="h6" href={'/responsavel'}>Responsável</Link>
                        </ListItemButton>
                        <ListItemButton>
                            {/* <ListItemText primary={Responsável}>                                                                */}
                            <Link variant="h6" href={'/aluno'} >Aluno</Link>
                        </ListItemButton>
                        <ListItemButton>
                            {/* <ListItemText primary={Responsável}>                                                                */}
                            <Link variant="h6" href={'/colegio'}>Colégio</Link>
                        </ListItemButton>
                    </List>
                </Box>
            </Box>
        </Drawer>
        <Box height="100vh" marginLeft="150px" component="main">
              {children}          

        </Box>
        </>
        
    )
}

