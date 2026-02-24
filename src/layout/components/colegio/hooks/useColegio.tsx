import { useApi } from "@/application/api/api"
import { useEffect, useState } from "react"
import { Link } from "@mui/material"
import { IconeEditar, IconeExcluir } from "@/icon";
import { useApiColegio } from "@/application/api/apiColegio/useApiColegio";

export interface IColegio {
    id: number,
    nome: string,
    horario: string,        
    editar?: React.ReactNode,
    excluir?: React.ReactNode,
}

export const useColegio = () => {
    const [rows, setRows] = useState<IColegio[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filtrarNome, setFiltrarNome] = useState<string>();

     useEffect(() => {
        buscarColegio()
    }, [filtrarNome])

    const cols = [
        "Id",
        "Nome",
        "Horário",               
        "Editar",
        "Excluir"
    ]

    const {
        listarColegio
    } = useApiColegio()

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
        if(filtrarNome) {
            return novoArray.filter(novoArray => novoArray.nome.toLowerCase().includes(filtrarNome.toLowerCase()))
        }else {
            return novoArray
        }
        
    }
    const buscarColegio = async () => {

        setIsLoading(true);
        
        const data = await listarColegio()
        if(data) {
            setRows(converteToColegio(data))
            
        }              
        setIsLoading(false);
    }   

    return {
        data: {
            rows,
            cols,
            isLoading
        },
        action: {
            setRows,
            setFiltrarNome,
        }
    }
}