import { Box, FormControl, TextField } from "@mui/material"
import { useFormEndereco } from "./hooks/useFormEndereco"
import { useState } from "react"

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
    onChange: () => void
}

export default function FormEndereco({
    endereco,
    onChange
}: PropsFormEndereco) {

    //const [endereco, setEndereco] = useState<IFormEndereco>();

    const {
        data: {

        },
        action: {


        }
    } = useFormEndereco()


    return (
        <>
            <Box sx={{}}>
                <h1 style={{ textAlign: "center" }}>Endereço</h1>
                <Box>
                   <Box>
                    <TextField
                            onChange={onChange}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            required
                            label="Cep"
                            sx={{width: "10%", m: "0ch 1ch 1ch 1ch"}}
                            defaultValue={endereco.cep}

                        />                        
                        <TextField
                            onChange={onChange}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            required
                            label="Cidade"
                            sx={{width: "40%", marginRight: 1}}
                            defaultValue={endereco.cidade}                            
                        />
                        <TextField
                            onChange={onChange}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            required
                            label="Estado"
                            sx={{width: "46%" }}
                            defaultValue={endereco.estado}
                        />
                   </Box>                                            
                    
                        <TextField
                            onChange={onChange}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            required={true}
                            label="Logradouro "
                            sx={{ width: "40%",  m: "0ch 1ch 1ch 1ch" }}
                            defaultValue={endereco.logradouro}
                            type='string'
                        />
                        <TextField
                            onChange={onChange}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            required
                            label="Complemento"
                            sx={{ width: "20%", marginRight: 1}}
                            defaultValue={endereco.complemento}
                        />
                        <TextField
                            onChange={onChange}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            required
                            label="Número"
                            sx={{ width: "10%",marginRight: 1 }}
                            defaultValue={endereco.numero}
                        />
                        <TextField
                            onChange={onChange}
                            slotProps={{ inputLabel: { shrink: true } }}
                            size='small'
                            required
                            label="Bairro"
                            sx={{ width: "25%", marginRight: 1}}
                            defaultValue={endereco.bairro}
                        />
                   





                </Box>

            </Box>
        </>


    )
}