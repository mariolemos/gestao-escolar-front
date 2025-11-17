import { Link } from '@mui/material'
import React, { useEffect, useState } from "react";
import { api } from "@/application/api/api";
import { IconeEditar, IconeExcluir } from '@/icon';

interface IResponsavel {
    id: number,
    nome: string,
    parentesco: String,
    editar?: React.ReactNode,
    excluir?: React.ReactNode, 
}

export const useResponsavel = () => {

    const [rows, setRows] = useState<IResponsavel[]>([]);
    const cols = [
        "Id",
        "Nome",
        "Parentesco",
        "Editar",
        "Excluir",
    ]

    const {
        GETRequest
    } = api()

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
        return novoArray
    }

    const buscarResponsavel = async () => {

        const response = await GETRequest<IResponsavel[]>("/responsavel")
        setRows(converteToResponsavel(response ?? []))
        console.log("*****bbb", response)
    }

    useEffect(() => {
        buscarResponsavel()
    }, [])

    return {
        data: {
            cols,
            rows
        },
        action: {
            setRows
        }
    }
}