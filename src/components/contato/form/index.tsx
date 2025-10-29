import { DataTable } from "@/layout/components/dataTable/DataTable"
import { Box, Button, TextField } from "@mui/material"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

interface IPropsContato {
    contatos: IFormContato[],
    setContatos: Dispatch<SetStateAction<IFormContato[]>>
}

export enum TipoContato {
    FIXO = 0,
    CELULAR = 1,
    EMAil = 2
}

export interface IFormContato {
    id?: number
    contato: string
    tipo: number

}

export const FormContato = ({
    contatos,
    setContatos

}: IPropsContato) => {

    const cols = ["Contato", "Tipo"]
    const [contato, setContato] = useState<IFormContato>({
        contato: "14526-11246",
        tipo: TipoContato.CELULAR
    })      

    const adicionar = () => {
        console.log("XXXx")
        contatos.push({
            contato: contato.contato,
            tipo: TipoContato.FIXO
        })
         setContatos(contatos)
    }   

    const remove = (contato: IFormContato) => {        
        const newcontatos = contatos.filter((c: IFormContato) =>
             (!c.id && c.contato != contato.contato && c.tipo != contato.tipo) || (c.id && c.id !== contato.id)
    )
        setContatos(newcontatos)
    }

    return (
        <>
            <Box sx={{ width: 1 }}>
                <TextField
                    onChange={(e) => setContato((contato) => {
                        return {
                            ...contato, contato: e.target.value
                        }
                    })}
                    slotProps={{ inputLabel: { shrink: true } }}
                    size='small'
                    required={true}
                    label="Contato "
                    style={{ width: "55ch", margin: "10px" }}
                    defaultValue={contato.contato}
                    type='string'
                />
                <Button
                    onClick={adicionar}
                >Adicionar
                </Button>
            </Box>

            <DataTable cols={cols} rows={contatos} />

        </>


    )
}