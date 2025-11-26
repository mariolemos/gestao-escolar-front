import { SetStateAction, useEffect, useState } from 'react'

import { BottomNavigation, BottomNavigationAction, Box, FormControl, MenuItem, TextField, Toolbar, Typography } from '@mui/material'
import * as React from 'react';
import Button from '@mui/material/Button';
import { useFormAluno } from '../../../layout/components/aluno/formAluno/hooks/useFormAluno';
import FormEndereco, { IFormEndereco } from '@/components/endereco/form';

export default function FormAluno() {
    const {
        data: {
            aluno,
            turno,
            responsaveis,
            colegios 
            
                           

        },
        action: {
            registrar,
            setAluno,
            setEndereco            
        }
    } = useFormAluno()    

    return (
        <Box>
            <Typography variant="h4" component="div" sx={{ flexGrow: 2, textAlign: "center" }}>
                Cadastro Aluno
            </Typography>
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
                sx={{ width: "50ch", margin: "10px" }}
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
                type='date'
                size='small'
                id="outlined-error-helper-text"
                label="Data Nascimento"
                sx={{ width: "21ch", margin: "10px" }}
                defaultValue={aluno.dtNascimento}
            />
            <TextField
                onChange={(e) => setAluno((aluno) => {
                    return {
                        ...aluno, responsavelId: Number.parseInt(e.target.value)
                    }
                })}
                slotProps={{ inputLabel: { shrink: true }, select: {
                        native: true
                    } }}
                size='small'
                sx={{ width: "26ch", margin: "10px" }}
                label="Responsável"
                defaultValue={aluno.responsavelId}
                required={true}
                select                
            >
                {responsaveis.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.nome}
                    </option>
                ))}
            </TextField>

            <FormEndereco endereco={aluno.endereco} setEndereco={setEndereco} />

            <Box sx={{
                bgcolor: "#ccc",
                color: "#ccc",
                marginLeft: "10px",
                marginRight: "15px"
            }}>f</Box>

            <TextField
                onChange={(e) => setAluno((aluno) => {
                    return {
                        ...aluno, nomePai: e.target.value
                    }
                })}
                slotProps={{ inputLabel: { shrink: true } }}
                size='small'
                label="Nome do Pai"
                sx={{ width: "51ch", margin: "10px" }}
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
                sx={{ width: "51ch", margin: "10px" }}
                defaultValue={aluno.nomeMae}
            />

            <TextField
                onChange={(e) => setAluno((aluno) => {
                    return {
                        ...aluno, colegioId: Number.parseInt(e.target.value)
                    }
                })}
                slotProps={{ inputLabel: { shrink: true }, select: {
                        native: true
                    } }}
                size='small'
                label="Colégio"
                sx={{ width: "40ch", margin: "10px" }}
                defaultValue={aluno.colegioId}
                required={true}
                select
            >
                {colegios.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.nome}
                    </option>
                ))}
                </TextField>
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
                sx={{ width: "30ch", margin: "10px" }}
                defaultValue={aluno.turno}
                required={true}
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
            <TextField
                onChange={(e) => setAluno((aluno) => {
                    return {
                        ...aluno, convenioMedico: e.target.value
                    }
                })}
                slotProps={{ inputLabel: { shrink: true } }}
                size='small'
                label="Convênio Médico"
                sx={{ width: "49ch", margin: "10px" }}
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
                sx={{ width: "38ch", margin: "10px" }}
                defaultValue={aluno.status}
                required={true}
            />
            <Button variant="contained"
                onClick={registrar}
                sx={{ width: "170ch", height: "40px" }}
            >Salvar</Button>
        </Box>
    )
}