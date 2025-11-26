import { useApi } from "@/application/api/api"
import { useApiAluno } from "@/application/api/apiAluno/useApiAluno"
import { useApiColegio } from "@/application/api/apiColegio/useApiColegio"
import { useApiResposnavel } from "@/application/api/apiResponsavel/useApiResponsavel"
import { IFormEndereco } from "@/components/endereco/form"
import { IColegio } from "@/layout/components/colegio/hooks/useColegio"
import { IResponsavel } from "@/layout/components/responsavel/hooks/useResponsavel"
import { use, useEffect, useState } from "react"

export interface IAluno {
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
        listarAluno,
        atualizarAluno,
        buscarAlunoPorId,
        salvarAluno
    } = useApiAluno()

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
    const [responsaveis, setResponsaveis] = useState<IResponsavel[]>([])
    const [colegios, setColegios] = useState<IColegio[]>([])

    const {
        listarResponsavel

    } = useApiResposnavel()

    const listarResponsaveis = async () => {

        const data = await listarResponsavel()

        setResponsaveis(data)
    }

    const {
        listarColegio
    } = useApiColegio()

    const listarColegios = async () => {
        const data = await listarColegio()

        setColegios(data)
    }

    const buscarAluno = async (id: number) => {
        const  data  = await buscarAlunoPorId(id)
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
            buscarAluno(Number.parseInt(id));
        }
        listarResponsaveis()
        listarColegios()
    }, [])

    useEffect(() => {
        setAluno(() => {
            return {
                ...aluno,
                endereco: endereco
            }
        })
    }, [endereco])

    const registrar = () => {
        if (aluno.id > 0) {
            atualizar(aluno.id);
        } else {
            salvar();
        }
    }

    const atualizar = async (id: number) => {

        const alunoUpdate = {
            ...aluno,
            responsavelId: 1,
            colegioId: 1
        }
        const  data  = await atualizarAluno(id, aluno)
        if (data) {
            setAluno(data)
        }

    }

    const salvar = async () => {
        const  data  = await salvarAluno(aluno)
        if (data) {
            setAluno(data)
        }
    }
    return {
        data: {
            turno,
            aluno,
            responsaveis,
            colegios
        },
        action: {
            registrar,
            setAluno,
            setEndereco

        }
    }
}