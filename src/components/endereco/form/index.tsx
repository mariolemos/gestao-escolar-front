import { Box, TextField } from "@mui/material"
import { useFormEndereco } from "./hooks/useFormEndereco"
import { Dispatch, SetStateAction, useState } from "react"

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
            <Box >
                Endereço
                <TextField
                    onChange={(e) => setEndereco((endereco) => {
                        return {
                            ...endereco, logradouro: e.target.value
                        }
                    })}
                    slotProps={{ inputLabel: { shrink: true } }}
                    size='small'
                    required={true}
                    label="Nome "
                    style={{ width: "65ch", margin: "10px" }}
                    defaultValue={endereco.logradouro}
                    type='string'
                />
                <TextField
                    onChange={(e) => setEndereco((endereco) => {
                        return {
                            ...endereco, logradouro: e.target.value
                        }
                    })}
                    slotProps={{ inputLabel: { shrink: true } }}
                    size='small'
                    required
                    label="Horário"
                    style={{ width: "65ch", margin: "10px" }}
                    defaultValue={endereco.complemento}
                />
                <TextField
                    onChange={(e) => setEndereco((endereco) => {
                        return {
                            ...endereco, logradouro: e.target.value
                        }
                    })}
                    slotProps={{ inputLabel: { shrink: true } }}
                    size='small'
                    required
                    label="Contatos"
                    style={{ width: "65ch", margin: "10px" }}
                    defaultValue={endereco.numero}
                />
                <TextField
                    onChange={(e) => setEndereco((endereco) => {
                        return {
                            ...endereco, logradouro: e.target.value
                        }
                    })}
                    slotProps={{ inputLabel: { shrink: true } }}
                    size='small'
                    required
                    label="Endereço"
                    style={{ width: "65ch", margin: "10px" }}
                    defaultValue={endereco.bairro}
                />
            </Box>
        </>


    )
}