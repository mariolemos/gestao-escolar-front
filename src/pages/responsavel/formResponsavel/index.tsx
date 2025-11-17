import { Box, TextField, Toolbar, Typography } from '@mui/material'
import * as React from 'react';
import Button from '@mui/material/Button';
import FormEndereco from '@/components/endereco/form';
import { FormContato } from '@/components/contato/form';
import { useFormResponsavel } from '@/layout/components/responsavel/formresponsavel/hooks/useFormResponsavel';



export default function FormResponsavel() {
    const {
        data: {
            responsavel,
             contato,
             contatos
        },
        action: {
            registrar,
            setResponsavel,
            setEndereco,
            setContato,
            setContatos
        }
    } = useFormResponsavel()

    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }} >
                <Typography variant="h4" component="div" sx={{ flexGrow: 2, textAlign: "center" }}>
                    Cadastro Responsável
                </Typography>

                <Box sx={{ display: "flex" }}>
                    <TextField
                        onChange={(e) => setResponsavel((responsavel) => {
                            return {
                                ...responsavel, nome: e.target.value
                            }
                        })}
                        slotProps={{ inputLabel: { shrink: true } }}
                        size='small'
                        required={true}
                        label="Nome "
                        style={{ width: "75ch", margin: "10px" }}
                        defaultValue={responsavel.nome}
                        type='string'
                    />
                    <TextField
                        onChange={(e) => setResponsavel((responsavel) => {
                            return {
                                ...responsavel, parentesco: e.target.value
                            }
                        })}
                        slotProps={{ inputLabel: { shrink: true } }}
                        size='small'
                        required={true}
                        label="Patentesco"
                        style={{ width: "75ch", margin: "10px" }}
                        defaultValue={responsavel.parentesco}
                        type='string'
                    />

                </Box>
                <Box sx={{ display: "flex" }}>
                    <FormEndereco endereco={responsavel.endereco} setEndereco={setEndereco} />
                </Box>
                <Box sx={{
                    bgcolor: "#ccc",
                    textAlign: "center",
                    height: "35px",
                    borderRadius: ".5rex",
                    fontSize: "2.5ch",
                    marginLeft: "10px",
                    marginRight: "15px"
                }}>Contatos</Box>
                <FormContato contatos={responsavel.contatos} setContatos={setContatos} />
                <Button variant="contained"
                    onClick={registrar}
                    style={{ width: "172ch", margin: "10px", height: "40px" }}
                >Salvar</Button>
            </Box>
        </>
    )
}