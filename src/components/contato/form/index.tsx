import { IconeExcluir, PlusIcon } from "@/icon"
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
    excluir?: React.ReactNode
}

export const FormContato = ({
    contatos,
    setContatos

}: IPropsContato) => {

    const cols = ["Contato", "Tipo", "Excluir"]
    const [contato, setContato] = useState<IFormContato>({
        contato: "14526-11246",
        tipo: TipoContato.CELULAR
    })

    const adicionar = () => {
        console.log("XXXx")
        contatos.push({
            contato: contato.contato,
            tipo: TipoContato.FIXO,
            excluir: (<Button ><IconeExcluir /></Button>)
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
                <TextField
                    onChange={(e) => setContato((contato) => {
                        return {
                            ...contato, tipo: e.target.value
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
                    //defaultValue={contato.tipo}
                    defaultValue={TipoContato.FIXO}

                    type='string'
                >
                    <option  >
                        {TipoContato[0]}
                    </option>

                    <option  >
                        {TipoContato[1]}
                    </option>
                    <option  >
                        {TipoContato[2]}
                    </option>
                    {/* {
                        [TipoContato[0]].map((valor) => {
                            return <option>{valor}</option>                                                      
                        })
                    } */}

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