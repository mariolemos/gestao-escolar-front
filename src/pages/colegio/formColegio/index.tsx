import { useEffect, useState } from 'react'

import { BottomNavigation, BottomNavigationAction, Box, FormControl, MenuItem, TextField } from '@mui/material'
import * as React from 'react';
import Button from '@mui/material/Button';
import { useFormAluno } from '../../../layout/components/aluno/formAluno/hooks/useFormAluno';
import { useFormColegio } from '@/layout/components/colegio/formColegio/hooks/useFormColegio';
import FormEndereco from '@/components/endereco/form';


export default function FormColegio() {
    const {
        data: {
            colegio

        },
        action: {
            registrar,
            setColegio,
            setEndereco
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
                        style={{ width: "65ch", margin: "10px" }}
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
                        required
                        label="Horário"
                        style={{ width: "65ch", margin: "10px" }}
                        defaultValue={colegio.horario}
                    />

                </Box>
                <Box sx={{ display: "flex" }}>
                    <FormEndereco endereco={colegio.endereco} setEndereco={setEndereco} />
                </Box>

                <TextField
                    onChange={(e) => setColegio((colegio) => {
                        return {
                            ...colegio, contatos: e.target.value
                        }
                    })}
                    slotProps={{ inputLabel: { shrink: true } }}
                    size='small'
                    required
                    label="Contatos"
                    style={{ width: "65ch", margin: "10px" }}
                    defaultValue={colegio.contatos}
                />
                <Button variant="contained"
                    onClick={registrar}
                    style={{ width: "67ch", margin: "10px", height: "40px" }}
                >Salvar</Button>
            </Box>
        </>
    )
}