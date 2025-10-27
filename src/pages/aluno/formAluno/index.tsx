import { SetStateAction, useEffect, useState } from 'react'

import { BottomNavigation, BottomNavigationAction, Box, FormControl, MenuItem, TextField } from '@mui/material'
import * as React from 'react';
import Button from '@mui/material/Button';
import { useFormAluno } from '../../../layout/components/aluno/formAluno/hooks/useFormAluno';
import FormEndereco, { IFormEndereco } from '@/components/endereco/form';
import colegio from '@/pages/colegio';


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


    function setEndereco(value: SetStateAction<IFormEndereco>): void {
        throw new Error('Function not implemented.');
    }

    return (
        <Box>
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
                sx={{ width: "74ch", margin: "10px" }}
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
                sx={{ width: "20ch", margin: "10px" }}
                defaultValue={aluno.cpf}
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
                sx={{ width: "20ch", margin: "10px" }}
                defaultValue={aluno.rg}
            />
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
                sx={{ width: "30ch", margin: "10px" }}
                defaultValue={aluno.dtNascimento}
            />
            <Box sx={{
                bgcolor: "#ccc",
                m: 0, textAlign: "center",
                height: "35px",
                borderRadius: ".5rex",                
                fontSize: "2.5ch",
                marginLeft: "10px",
                marginRight: "15px"
            }}>Endereço</Box>
            <FormEndereco  endereco={aluno.endereco} setEndereco={setEndereco} />
            {/* <TextField
                    onChange={(e) => setAluno((aluno) => {
                        return {
                            ...aluno, endereco: e.target.value
                    
                    })}
                    slotProps={{ inputLabel: { shrink: true } }}
                    size='small'
                    label="Endereço"
                    sx={{ width: "65ch", margin: "10px" }}
                    defaultValue={aluno.endereco}
                /> */}
            <TextField
                onChange={(e) => setAluno((aluno) => {
                    return {
                        ...aluno, nomePai: e.target.value
                    }
                })}
                slotProps={{ inputLabel: { shrink: true } }}
                size='small'
                label="Nome do Pai"
                sx={{ width: "49ch", margin: "10px" }}
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
                sx={{ width: "49ch", margin: "10px" }}
                defaultValue={aluno.nomeMae}
            />
            <TextField
                onChange={(e) => setAluno((aluno) => {
                    return {
                        ...aluno, responsavel: e.target.value
                    }
                })}
                slotProps={{ inputLabel: { shrink: true } }}
                size='small'
                sx={{ width: "48ch", margin: "10px" }}
                label="Responsável"
                defaultValue={aluno.responsavelId}
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
                sx={{ width: "35ch", margin: "10px" }}
                defaultValue={aluno.colegioId}
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
                sx={{ width: "20ch", margin: "10px" }}
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
                sx={{ width: "10ch", margin: "10px" }}
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
                sx={{ width: "10ch", margin: "10px" }}
                defaultValue={aluno.serie}
            />
            {/* <TextField
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
                /> */}
            <TextField
                onChange={(e) => setAluno((aluno) => {
                    return {
                        ...aluno, convenioMedico: e.target.value
                    }
                })}
                slotProps={{ inputLabel: { shrink: true } }}
                size='small'
                label="Convênio Médico"
                sx={{ width: "40ch", margin: "10px" }}
                defaultValue={aluno.convenioMedico}
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
                sx={{ width: "24ch", margin: "10px" }}
                defaultValue={aluno.status}
            />
            <Button variant="contained"
                onClick={registrar}
                sx={{ width: "172ch", margin: "10px", height: "40px" }}
            >Salvar</Button>
        </Box>
    )
}