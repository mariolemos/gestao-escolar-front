import { useApi } from "@/application/api/api"
import { useEffect, useState } from "react"
import { Link } from "@mui/material"
import { IconeEditar, IconeExcluir } from "@/icon";

interface IColegio {
    id: number,
    nome: string,
    horario: string,        
    editar?: React.ReactNode,
    excluir?: React.ReactNode,
}

export const useColegio = () => {
    const [rows, setRows] = useState<IColegio[]>([]);
    const cols = [
        "Id",
        "Nome",
        "Horário",               
        "Editar",
        "Excluir"
    ]

    const {
        GETRequest
    } = useApi()

    const converteToColegio = (array: IColegio[]) => {
        const novoArray: IColegio[] = []
        array.map(colegio => {
            let novoColegio: IColegio = {
                id: colegio.id,
                nome: colegio.nome,
                horario: colegio.horario,               
                editar: (<Link href={`colegio/formColegio?id=${colegio.id}`} > <IconeEditar /></Link >),
                excluir: (
                    <Link href={`aluno/formAluno?id=${colegio.id}`
                    }> <IconeExcluir /></Link >
                )
            }
            novoArray.push(novoColegio)
        })
        return novoArray
    }
    const buscarColegio = async () => {

        const {data} = await GETRequest<IColegio[]>("/colegio")
        setRows(converteToColegio(data ?? []))
        console.log("*****", data)
    }

    useEffect(() => {
        buscarColegio()
    }, [])

    return {
        data: {
            rows,
            cols,
        },
        action: {
            setRows,
        }
    }
}