import { Link } from '@mui/material'
import React, { useEffect, useState } from "react";
import { useApi } from "@/application/api/api";
import { IconeEditar, IconeExcluir } from '@/icon';
import { useApiResposnavel } from '@/application/api/apiResponsavel/useApiResponsavel';

export interface IResponsavel {
    id: number,
    nome: string,
    parentesco: String,
    editar?: React.ReactNode,
    excluir?: React.ReactNode,
}

export const useResponsavel = () => {

    const [rows, setRows] = useState<IResponsavel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filtrarNome, setFiltrarNome] = useState<string>();

    useEffect(() => {
        buscarResponsavel()
    }, [filtrarNome])

    const cols = [
        "Id",
        "Nome",
        "Parentesco",
        "Editar",
        "Excluir",
    ]

    const {
        listarResponsavel
    } = useApiResposnavel()

    const converteToResponsavel = (array: IResponsavel[]) => {
        const novoArray: IResponsavel[] = []
        array.map(responsavel => {
            let novoResponsavel: IResponsavel = {
                id: responsavel.id,
                nome: responsavel.nome,
                parentesco: responsavel.parentesco,
                editar: (
                    <Link href={`responsavel/formResponsavel?id=${responsavel.id}`}><IconeEditar /></Link>
                ),
                excluir: (
                    <Link href={`responsavel/formResponsavel?id=${responsavel.id}`}><IconeExcluir /></Link>
                )
            }
            novoArray.push(novoResponsavel)
        })
        if (filtrarNome) {
            console.log("TTTTTT" , novoArray)
            return novoArray.filter(novoArray => novoArray.nome.toLowerCase().includes(filtrarNome.toLowerCase()))            
        } else {
            console.log("çççççç" , filtrarNome)
            return novoArray            
        }

    }

    const buscarResponsavel = async () => {
        setIsLoading(true)

        const data = await listarResponsavel()
        if (data) {
            setRows(converteToResponsavel(data))
        }
        setIsLoading(false)
    }


    return {
        data: {
            cols,
            rows,
            isLoading
        },
        action: {
            setRows,
            setFiltrarNome,
        }
    }
}