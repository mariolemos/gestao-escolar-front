import aluno from "@/data/Aluno";
import { useEffect, useState } from "react";
import { api } from "@/application/api/api";
import { heIL } from "@mui/material/locale";

interface IAluno {
    id: number,
    nome: string,
    Idade: number,
    profissao: string,
    turno: string
}

export const useAluno = () => {

    const [rows, setRows] = useState<IAluno[]>([]);    
    const cols = [
            "Id",
            "Nome",
            "Idade",
            "Profissão",
            "Truno",
            "Icon",
            "Icon",
        ]

    const {
        GETRequest
    } = api()

    const buscarAlunos = async () => {
        return await GETRequest("http://localhost:8080/aluno")
    }

    useEffect( () => {

        const response = buscarAlunos()

        console.log(response)
            
        setRows(aluno)
    }, [])

    return {
        data: {
            cols,
            rows
        },
        action: {
            
        }
    }
}