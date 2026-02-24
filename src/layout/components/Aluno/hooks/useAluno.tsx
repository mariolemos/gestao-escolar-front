import { Link } from '@mui/material'
import React, { useEffect, useState } from "react";
import { useApi } from "@/application/api/api";
import { IconeEditar, IconeExcluir } from '@/icon';
import { useApiAluno } from '@/application/api/apiAluno/useApiAluno';
import Aluno from '../Aluno';
import { log } from 'console';
import aluno from '@/pages/aluno';

interface IAluno {
    id: number,
    nome: string,
    turno: string,
    serie: string,
    turma: string,
    editar?: React.ReactNode,
    ativo: boolean,
    excluir?: React.ReactNode,
}

export const useAluno = () => {
    const [turno, setTurno] = useState<string | undefined>();
    const [filtrarNome, setFiltrarNome] = useState<string>();
    const [rows, setRows] = useState<IAluno[]>([]);
    const cols = [
        "Id",
        "Nome",
        "Truno",
        "Turma",
        "Série",
        "Status",
        "Editar",
        "Excluir",
    ]

    const {
        listarAluno
    } = useApiAluno()

    useEffect(() => {
        setFiltrarNome("")
        buscarAlunos()
    }, [turno])

    useEffect(() => {
        setTurno(undefined)
        buscarAlunos()
    }, [filtrarNome])


    const converteToAlno = (array: IAluno[]) => {
        const novoArray: IAluno[] = []
        array.map(aluno => {
            let novoAluno: IAluno = {
                id: aluno.id,
                nome: aluno.nome,
                turno: aluno.turno,
                turma: aluno.turma,
                serie: aluno.serie,
                ativo: aluno.ativo,
                editar: (
                    <Link href={`aluno/formAluno?id=${aluno.id}`}><IconeEditar /></Link>
                ),
                excluir: (
                    <Link href={`aluno/formAluno?id=${aluno.id}`}><IconeExcluir /></Link>
                )
            }
            novoArray.push(novoAluno)
        })

        return filtrarAlunos(novoArray)
    }

    const filtrarAlunos = (novoArray: IAluno[]) => {

        if (turno) {
            return novoArray.filter(novoArray => novoArray.turno === turno)
        }
        if (filtrarNome) {
           return novoArray.filter(novoArray => novoArray.nome.toLowerCase().includes(filtrarNome.toLowerCase() || ""))
        }
        return novoArray
    }

    const buscarAlunos = async () => {
        const data = await listarAluno()
        setRows(converteToAlno(data ?? []))        
    }



    return {
        data: {
            cols,
            rows
        },
        action: {
            turno,
            setTurno,
            setFiltrarNome
        }
    }
}