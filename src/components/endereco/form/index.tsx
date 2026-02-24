import { Box, TextField, Toolbar, Typography } from "@mui/material"
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
            <Box sx={{ width: "100%", margin:"0.5%" }}>
                <Typography sx={{ bgcolor: "#cccc", textAlign: "center", width: "99%" }}>Endereço</Typography>
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
                    style={{ width: "45%", margin: "1%" }}
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
                    label="Númeroo"
                    style={{ width: "19%" ,margin: "1%" }}
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
                    label="Complemento"
                    style={{ width: "30%", margin: "1%" }}
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
                    label="Bairro"
                    style={{ width: "30%", margin: "1%" }}
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
                    style={{ width: "18%", margin: "1%" }}
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
                    style={{ width: "37%", margin: "1%" }}
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
                    style={{ width: "7%", margin: "1%" }}
                    defaultValue={endereco.estado}
                />
            </Box>
        </>
    )
}