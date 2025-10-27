import { Box, TextField } from "@mui/material"
import { useFormEndereco } from "./hooks/useFormEndereco"
import { Dispatch, SetStateAction, useState } from "react"
import { wrap } from "module"

export interface IFormEndereco {
    logradouro: string
    numero: string
    complemento: string
    bairro: string
    cep: string
    cidade: string
    estado: string
}

interface PropsFormEndereco {
    endereco: IFormEndereco,
    setEndereco: Dispatch<SetStateAction<IFormEndereco>>
}
export default function FormEndereco({
    endereco,
    setEndereco
}: PropsFormEndereco) {
    const {
        data: {

        },
        action: {
            
        }
    } = useFormEndereco()

    return (
        <>
            <Box sx={{width: 1}}>
                <TextField
                    onChange={(e) => setEndereco((endereco) => {
                        return {
                            ...endereco, logradouro: e.target.value
                        }
                    })}
                    slotProps={{ inputLabel: { shrink: true } }}
                    size='small'
                    required={true}
                    label="Logradouro "
                    style={{ width: "55ch", margin: "10px" }}
                    defaultValue={endereco.logradouro}
                    type='string'
                />
                <TextField
                    onChange={(e) => setEndereco((endereco) => {
                        return {
                            ...endereco, numero: e.target.value
                        }
                    })}
                    slotProps={{ inputLabel: { shrink: true } }}
                    size='small'
                    required
                    label="Númeroo"
                    style={{ width: "12ch", margin: "10px" }}
                    defaultValue={endereco.numero}
                />
                <TextField
                    onChange={(e) => setEndereco((endereco) => {
                        return {
                            ...endereco, complemento: e.target.value
                        }
                    })}
                    slotProps={{ inputLabel: { shrink: true } }}
                    size='small'
                    required
                    label="Conplemento"
                    style={{ width: "43ch", margin: "10px" }}
                    defaultValue={endereco.complemento}
                />
                <TextField
                    onChange={(e) => setEndereco((endereco) => {
                        return {
                            ...endereco, bairro: e.target.value
                        }
                    })}
                    slotProps={{ inputLabel: { shrink: true } }}
                    size='small'
                    required
                    label="Bairro"
                    style={{ width: "34ch", margin: "10px" }}
                    defaultValue={endereco.bairro}
                />
                <TextField
                    onChange={(e) => setEndereco((endereco) => {
                        return {
                            ...endereco, cep: e.target.value
                        }
                    })}
                    slotProps={{ inputLabel: { shrink: true } }}
                    size='small'
                    required
                    label="Cep"
                    style={{ width: "23ch", margin: "10px" }}
                    defaultValue={endereco.cep}
                />
                <TextField
                    onChange={(e) => setEndereco((endereco) => {
                        return {
                            ...endereco, cidade: e.target.value
                        }
                    })}
                    slotProps={{ inputLabel: { shrink: true } }}
                    size='small'
                    required
                    label="Cidade"
                    style={{ width: "65ch", margin: "10px" }}
                    defaultValue={endereco.cidade}
                />
                <TextField
                    onChange={(e) => setEndereco((endereco) => {
                        return {
                            ...endereco, estado: e.target.value
                        }
                    })}
                    slotProps={{ inputLabel: { shrink: true } }}
                    size='small'
                    required
                    label="Estado"
                    style={{ width: "58ch", margin: "10px" }}
                    defaultValue={endereco.estado}
                />
            </Box>
        </>
    )
}