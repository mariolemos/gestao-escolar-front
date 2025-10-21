import { useEffect, useState } from 'react'

import { BottomNavigation, BottomNavigationAction, Box, FormControl, MenuItem, TextField } from '@mui/material'
import * as React from 'react';
import Button from '@mui/material/Button';
import { useFormAluno } from '../../../layout/components/aluno/formAluno/hooks/useFormAluno';


export default function FormAluno() {
    const {
        data: {            
            aluno,
            turno,
           
        },
        action: {
            registrar,
            setAluno,           
        }
    } = useFormAluno()


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
                            onChange={(e) => setAluno((aluno) => {
                                return {
                                    ...aluno, nome: e.target.value
                                }
                            })}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            required
                            label="Nome "
                            style={{ width: "65ch", margin: "10px" }}
                            defaultValue={aluno.nome}
                        />

                        <TextField
                            onChange={(e) => setAluno((aluno) => {
                                return {
                                    ...aluno, cpf: e.target.value
                                }
                            })}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            required
                            label="CPF"
                            style={{ width: "65ch", margin: "10px" }}
                            defaultValue={aluno.cpf}
                        />

                        <TextField
                            onChange={(e) => setAluno((aluno) => {
                                return {
                                    ...aluno, endereco: e.target.value
                                }
                            })}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            label="Endereço"
                            style={{ width: "65ch", margin: "10px" }}
                            defaultValue={aluno.endereco}
                        />

                        <TextField
                            onChange={(e) => setAluno((aluno) => {
                                    return {
                                        ...aluno, turno: e.target.value
                                    }
                                })}
                            slotProps={{
                                inputLabel: { shrink: true }, select: {
                                    native: true
                                }
                            }}
                            size='small'
                            select
                            label="Turno"
                            style={{ width: "65ch", margin: "10px" }}
                            defaultValue={aluno.turno}
                        >
                            {turno.map((option) => (
                                <option key={option.id} value={option.nome}>
                                    {option.nome}
                                </option>
                            ))}
                        </TextField>

                        <TextField
                            onChange={(e) => setAluno((aluno) => {
                                return {
                                    ...aluno, turma: e.target.value
                                }
                            })}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            label="Turma"
                            style={{ width: "65ch", margin: "10px" }}
                            defaultValue={aluno.turma}
                        />
                        <TextField
                            onChange={(e) => setAluno((aluno) => {
                                return {
                                    ...aluno, serie: e.target.value
                                }
                            })}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            label="Série"
                            style={{ width: "65ch", margin: "10px" }}
                            defaultValue={aluno.serie}
                        />
                        <TextField
                            onChange={(e) => setAluno((aluno) => {
                                return {
                                    ...aluno, nomePai: e.target.value
                                }
                            })}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            label="Nome do Pai"
                            style={{ width: "65ch", margin: "10px" }}
                            defaultValue={aluno.nomePai}
                        />
                        <TextField
                            onChange={(e) => setAluno((aluno) => {
                                return {
                                    ...aluno, nomeMae: e.target.value
                                }
                            })}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            label="Nome da Mãe"
                            style={{ width: "65ch", margin: "10px" }}
                            defaultValue={aluno.nomeMae}
                        />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        marginRight: "10px",
                        margin: "auto",
                    }} >
                        <TextField
                            // onChange={(e) => setDtNascimento((aluno) => {
                            //     return {
                            //         ...aluno, dtNascimento: e.target.value
                            //     }
                            // })}
                            slotProps={{ inputLabel: { shrink: true } }}
                            required
                            type='date'
                            size='small'
                            id="outlined-error-helper-text"
                            label="Data Nascimento"
                            style={{ width: "65ch", margin: "10px" }}
                            defaultValue={aluno.dtNascimento}
                        />
                        <TextField
                            onChange={(e) => setAluno((aluno) => {
                                return {
                                    ...aluno, rg: e.target.value
                                }
                            })}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            label="RG"
                            style={{ width: "65ch", margin: "10px" }}
                            defaultValue={aluno.rg}
                        />
                        <TextField
                            onChange={(e) => setAluno((aluno) => {
                                return {
                                    ...aluno, contato: e.target.value
                                }
                            })}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            label="Contato"
                            sx={{ width: "65ch" }}
                            style={{ width: "65ch", margin: "10px" }}
                            defaultValue={aluno.contato}
                        />
                        <TextField
                            onChange={(e) => setAluno((aluno) => {
                                return {
                                    ...aluno, convenioMedico: e.target.value
                                }
                            })}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            label="Convênio Médico"
                            style={{ width: "65ch", margin: "10px" }}
                            defaultValue={aluno.convenioMedico}
                        />
                        <TextField
                            onChange={(e) => setAluno((aluno) => {
                                return {
                                    ...aluno, colegio: e.target.value
                                }
                            })}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            required
                            label="Colégio"
                            style={{ width: "65ch", margin: "10px" }}
                            defaultValue={aluno.colegioId}
                        />
                        <TextField
                            onChange={(e) => setAluno((aluno) => {
                                return {
                                    ...aluno, responsavel: e.target.value
                                }
                            })}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            style={{ width: "65ch", margin: "10px" }}
                            label="Responsável"
                            defaultValue={aluno.responsavelId}
                        />
                        <TextField
                            onChange={(e) => setAluno((aluno) => {
                                return {
                                    ...aluno, status: e.target.value
                                }
                            })}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            label="Status"
                            style={{ width: "65ch", margin: "10px" }}
                            defaultValue={aluno.status}
                        />
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