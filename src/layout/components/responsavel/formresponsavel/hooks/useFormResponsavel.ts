import { api } from "@/application/api/api"
import { IFormContato } from "@/components/contato/form"
import { IFormEndereco } from "@/components/endereco/form"
import { useEffect, useState } from "react"

interface IResponsavel {
    id: number
    nome: string
    parentesco: string
    contatos: IFormContato[]
    endereco: IFormEndereco
}

export const useFormResponsavel = () => {

    const {
        GETRequest,
        POSTRequest,
        PUTRequest,
    } = api()

    const initEndereco = {
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cep: "",
        cidade: "",
        estado: "",
    }

    const initContato = {
        contato: "",
        tipo: 0
    }

    const initResponsavel = {

        id: 0,
        nome: "",
        parentesco: "",
        endereco: initEndereco,
        contatos: [initContato]
    }

    const [responsavel, setResponsavel] = useState<IResponsavel>(initResponsavel)
    const [contato, setContato] = useState<IFormContato>(initContato)
    const [endereco, setEndereco] = useState<IFormEndereco>(initEndereco)
    const [contatos, setContatos] = useState<IFormContato[]>([initContato])

    const buscarResponsavelPorId = async (id: number) => {
        const response = await GETRequest<IResponsavel>(`/responsavel/${id}`)
        if (response) {
            setResponsavel(response)
        }

        console.log("=====", response)
    }
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const id = params.get("id")
        if (id) {
            buscarResponsavelPorId(Number.parseInt(id));
        }
    }, [])

    const registrar = () => {
        if (responsavel.id > 0) {
            atualizar(responsavel.id);
        } else {

            salvar();
        }
    }

    const atualizar = async (id: number) => {

        const responsavelUpdate = {
            ...responsavel,
            responsavelId: 1,
            colegioId: 1
        }
        const response = await PUTRequest<IResponsavel>(`/responsavel/${id}`, responsavelUpdate)
        if (response) {
            setResponsavel(response)
        }

    }

    const salvar = async () => {
        const response = await POSTRequest<IResponsavel>("/responsavel", responsavel)
        if (response) {
            setResponsavel(response)
        }
    }
    return {
        data: {
            responsavel,
            contato,
            contatos,
            endereco

        },
        action: {
            registrar,
            setResponsavel,
            setContato,
            setContatos,
            setEndereco
        }
    }
}