import { Link } from '@mui/material'
import React, { useEffect, useState } from "react";
import { api } from "@/application/api/api";
import { IconeEditar, IconeExcluir } from '@/icon';

interface IAluno {
    id: number,
    nome: string,
    turno: string,
    serie: string,
    turma: string,
    editar?: React.ReactNode,
    //nomedaMae?: string,
    //nomeDoPai?: string,
    //convenioMedico?: string,
    ativo: boolean,
    excluir?: React.ReactNode,
    // endereco?: string,    
}

export const useAluno = () => {
    const [turno, setTurno] = useState('Todos');
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
        GETRequest
    } = api()

    const converteToAlno = (array: IAluno[], Condicional: string) => {
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
        if(Condicional !== turno) {
            return novoArray
            console.log(Condicional)
        }else {
            return novoArray.filter(novoArray => novoArray.turno === Condicional)
            console.log(Condicional)
        }
        
    }

    const buscarAlunos = async () => {

        const response = await GETRequest<IAluno[]>("http://localhost:8080/aluno")
        setRows(converteToAlno(response ?? [], "Vespertino"))
        console.log("RRRRRR" , turno)
        console.log("*****", response)
    }

    useEffect(() => {
        buscarAlunos()
    }, [])

    return {
        data: {
            cols,
            rows
        },
        action: {
            turno,
            setTurno,            
        }
    }
}