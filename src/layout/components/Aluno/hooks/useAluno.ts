import aluno from "@/data/Aluno";
import { useEffect, useState } from "react";
import { api } from "@/application/api/api";
import { heIL } from "@mui/material/locale";
import { GridColDef } from "@mui/x-data-grid";

interface IAluno {
    id: number,
    nome: string,
    dtNascimento: string,
    cpf: string,
    rg: string,
    turno: string,
    // serie: string,
    // turma: string,
    // nomedaMae: string,
    // nomeDoPai: string,
    // convenioMedico: string,
    // ativo: boolean,
    // endereco: string,    
}

export const useAluno = () => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
    ];

    // const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // ];

    const [rows, setRows] = useState<IAluno[]>([]);
    const cols = [
        "Id",
        "Nome",
        "Truno",
        "Turma",
        "Série",
        "Ativo",
        "Editar",
        "Excluir",
    ]

    const {
        GETRequest
    } = api()

    const converteToAlno = (array:IAluno []) => {
        const novoArray: IAluno[] = []
        array.map(aluno => {
            novoArray.push({
                id: aluno.id,
                nome: aluno.nome,
                dtNascimento: aluno.dtNascimento,
                cpf: aluno.cpf,
                rg: aluno.rg,
                turno: aluno.turno,
            })
        })
        return novoArray
    }

    const buscarAlunos = async () => {
        const response = await GETRequest<IAluno[]>("http://localhost:8080/aluno")
        setRows(converteToAlno(response ?? []))
        console.log(response)
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

        }
    }
}