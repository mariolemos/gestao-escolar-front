import { useEffect, useState } from 'react'

import { BottomNavigation, BottomNavigationAction, Box, FormControl, MenuItem, TextField } from '@mui/material'
import * as React from 'react';
import Button from '@mui/material/Button';
import { useFormAluno } from '../../../layout/components/aluno/formAluno/hooks/useFormAluno';
import { useFormColegio } from '@/layout/components/colegio/formColegio/hooks/useFormaColegio';
import colegio from '..';
import FormEndereco from '@/components/endereco/form';


export default function FormColegio() {
    const {
        data: {            
           colegio
           
        },
        action: {
           registrar,
           setColegio
                      
        }
    } = useFormColegio()


    return (

        <div >
            <Box >
                <form style={{ display: "flex", borderRadius: "1rex", justifyContent: "center", marginTop: "20px" }}>
                    <legend style={{ textAlign: "center", fontSize: "larger" }}></legend>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        marginLeft: "10PX",
                        margin: "auto"
                    }} >
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
                        <FormEndereco endereco={colegio.endereco} onChange={function (): void {
                            throw new Error('Function not implemented.');
                        } } />
                        <Button variant="contained"
                            onClick={registrar}
                            style={{ width: "67ch", margin: "10px", height: "40px" }}
                        >Salvar</Button>

                    </div>
                </form>
            </Box>
        </div>
    )
}