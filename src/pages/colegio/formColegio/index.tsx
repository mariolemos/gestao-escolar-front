import { useEffect, useState } from 'react'
import { Box, TextField } from '@mui/material'
import * as React from 'react';
import Button from '@mui/material/Button';
import { useFormColegio } from '@/layout/components/colegio/formColegio/hooks/useFormColegio';
import FormEndereco from '@/components/endereco/form';
import { FormContato } from '@/components/contato/form';



export default function FormColegio() {
    const {
        data: {
            colegio,
            contato,
            contatos
        },
        action: {
            registrar,
            setColegio,
            setEndereco,
            setContato,
            setContatos
        }
    } = useFormColegio()

    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }} >

                <Box sx={{ display: "flex" }}>
                    <TextField
                        onChange={(e) => setColegio((colegio) => {
                            return {
                                ...colegio, nome: e.target.value
                            }
                        })}
                        slotProps={{ inputLabel: { shrink: true } }}
                        size='small'
                        required={true}
                        label="Nome "
                        style={{ width: "75ch", margin: "10px" }}
                        defaultValue={colegio.nome}
                        type='string'
                    />
                    <TextField
                        onChange={(e) => setColegio((colegio) => {
                            return {
                                ...colegio, horario: e.target.value
                            }
                        })}
                        slotProps={{ inputLabel: { shrink: true } }}
                        size='small'
                        label="Horário"
                        style={{ width: "73ch", margin: "10px" }}
                        defaultValue={colegio.horario}
                        type='time'
                    />
                </Box>
                <Box sx={{ display: "flex" }}>
                    <FormEndereco endereco={colegio.endereco} setEndereco={setEndereco} />
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
                <FormContato contatos={colegio.contatos } setContatos={setContatos} />
                <Button variant="contained"
                    onClick={registrar}
                    style={{ width: "172ch", margin: "10px", height: "40px" }}
                >Salvar</Button>
            </Box>
        </>
    )
}