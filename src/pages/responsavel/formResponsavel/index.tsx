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
            <Box width="100%" sx={{margin: "0.5%"
            }} >
                <Typography variant="h4" color="#fff" sx={{ bgcolor: "#227afdff", textAlign: "center" }}>Cadastro Responsáveis</Typography>
                <Box>
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
                        style={{ width: "47%", margin: "1%" }}
                        defaultValue={responsavel.nome}
                        type='string'
                    />
                    <TextField
                        onChange={(e) => setResponsavel((responsavel) => {
                            return {
                                ...responsavel, cpf: e.target.value
                            }
                        })}
                        slotProps={{ inputLabel: { shrink: true } }}
                        size='small'
                        required={true}
                        label="CPF"
                        style={{ width: "24%", margin: "1%" }}
                        defaultValue={responsavel.cpf}
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
                        label="Parentesco"
                        style={{ width: "21%", margin: "1%" }}
                        defaultValue={responsavel.parentesco}
                        type='string'
                    />
                </Box>
                <FormEndereco endereco={responsavel.endereco} setEndereco={setEndereco} />
                <FormContato contatos={responsavel.contatos} setContatos={setContatos} />
                <Button variant="contained"
                    onClick={registrar}
                    style={{ width: "172ch", margin: "1%", height: "1%" }}
                >Salvar</Button>
            </Box>
        </>
    )
}