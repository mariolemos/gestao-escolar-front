import { api } from "@/application/api/api"
import { IFormEndereco } from "@/components/endereco/form"
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
    } = api()

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

    const buscarAlunoPorId = async (id: number) => {
        const response = await GETRequest<IAluno>(`/aluno/${id}`)
        if (response) {
            setAluno(response)
        }

        console.log("=====", response)
    }
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const id = params.get("id")
        if (id) {
            buscarAlunoPorId(Number.parseInt(id));
        }
    }, [])

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
        const response = await PUTRequest<IAluno>(`/aluno/${id}`, alunoUpdate)
        if (response) {
            setAluno(response)
        } 

    }

    const salvar = async () => {
        const response = await POSTRequest<IAluno>("/aluno", aluno)
        if (response) {
            setAluno(response)
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