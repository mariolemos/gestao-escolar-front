import { IconeExcluir, PlusIcon } from "@/icon"
import { DataTable } from "@/layout/components/dataTable/DataTable"
import { Box, Button, TextField, Typography } from "@mui/material"
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
    excluir?: React.ReactNode
}

export const FormContato = ({
    contatos,
    setContatos

}: IPropsContato) => {

    const cols = ["Contato", "Tipo", "Excluir"]
    const [contato, setContato] = useState<IFormContato>({
        contato: "",
        tipo: TipoContato.CELULAR
    })

    const adicionar = () => {

        const novoContato = {
            contato: contato.contato,
            tipo: contato.tipo,
            excluir: (<Button onClick={() => remove({ ...contato, tipo: contato.tipo, contato: contato.contato })}><IconeExcluir /></Button>)
        };

        setContatos([...contatos, novoContato]);
        setContato({
            contato: "",
            tipo: contato.tipo
        });
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
                <Typography sx={{ bgcolor: "#cccc", textAlign: "center", width: 1 }}>Contatos</Typography>
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
                <TextField
                    onChange={(e) => setContato((contato) => {
                        return {
                            ...contato, tipo: parseInt(e.target.value)
                        }
                    })}
                    slotProps={{
                        inputLabel: { shrink: true }, select: {
                            native: true
                        }
                    }}
                    select
                    size='small'
                    required={true}
                    label="Tipo "
                    style={{ width: "55ch", margin: "10px" }}                    
                    defaultValue={TipoContato.FIXO}

                    type='string'
                >
                    <option  >
                        {TipoContato.FIXO}
                    </option>

                    <option  >
                        {TipoContato.CELULAR}
                    </option>
                    <option  >
                        {TipoContato.EMAil}
                    </option>

                </TextField>
                <Button sx={{
                    bgcolor: "indigo",
                    marginTop: "15px",
                }}
                    onClick={adicionar}
                    startIcon={<PlusIcon sx={{ color: "#fff" }} />}
                >
                </Button>
            </Box>

            <DataTable cols={cols} rows={contatos} />

        </>


    )
}