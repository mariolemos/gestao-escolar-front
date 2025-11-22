import { useApi } from "@/application/api/api"
import { IFormEndereco } from "@/components/endereco/form"
import { idID } from "@mui/material/locale"
import { useEffect, useState } from "react"

interface IAluno {
    id: number
    nome: string
    dtNascimento: Date
    cpf: string
    rg: string
    //endereco: string
    endereco: IFormEndereco
    contato: string
    turno: string
    turma: string
    serie: string
    nomeMae: string
    nomePai: string
    convenioMedico: string
    colegioId: number
    responsavelId: number
    status: string
}

export const useFormAluno = () => {

    const {
        GETRequest,
        POSTRequest,
        PUTRequest,
    } = useApi()

    const turno = [{
        id: 1,
        nome: "Matutino"
    },
    {
        id: 2,
        nome: "Vespertino"
    },
    {
        id: 3,
        nome: "Noturno"
    },
    {
        id: 4,
        nome: "Integral"
    },
       
    ]

    const initEndereco = {
        id: 0,
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cep: "",
        cidade: "",
        estado: "",
    }

    const initAluno = {
        
        id: 0,
        nome: "",
        dtNascimento: new Date(),
        cpf: "",
        rg: "",
        endereco: initEndereco,
        contato: "",
        turno: "",
        turma: "",
        serie: "",
        nomeMae: "",
        nomePai: "",
        convenioMedico: "",
        colegioId: 1,
        responsavelId: 1,
        status: ""
    }

    const [aluno, setAluno] = useState<IAluno>(initAluno)
    const [endereco, setEndereco] = useState<IFormEndereco>(initEndereco)   

    const buscarAlunoPorId = async (id: number) => {
        const { data } = await GETRequest<IAluno>(`/aluno/${id}`)
        if (data) {
            setAluno(data)
            setEndereco(data.endereco)
        }

        console.log("=====", data)
    }
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const id = params.get("id")
        if (id) {
            buscarAlunoPorId(Number.parseInt(id));
        }
    }, [])

    useEffect(() => {
        setAluno(() => {
            return {
                ...aluno,
                endereco: endereco
            }
        })
    }, [endereco])

    const registrar =  () => {
        if(aluno.id > 0) {
            atualizar(aluno.id);
        }else {

            salvar();
        }               
    }

    const atualizar =  async (id: number) => {

        const alunoUpdate = {
            ...aluno, 
            responsavelId: 1,
            colegioId: 1
        }
        const { data } = await PUTRequest<IAluno>(`/aluno/${id}`, alunoUpdate)
        if (data) {
            setAluno(data)
        } 

    }

    const salvar = async () => {
        const { data } = await POSTRequest<IAluno>("/aluno", aluno)
        if (data) {
            setAluno(data)
        }      
    }
    return {
        data: {           
            turno,
            aluno,            
        },
        action: {            
            registrar,
            setAluno,            
        }
    }
}