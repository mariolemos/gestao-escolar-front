import { api } from "@/application/api/api"
import { IFormContato } from "@/components/contato/form"
import { IFormEndereco } from "@/components/endereco/form"
import { endianness } from "os"
import { useEffect, useState } from "react"



interface IColegio {
    id: number
    nome: string
    horario: string
    contatos: IFormContato[]
    endereco: IFormEndereco
}


export const useFormColegio = () => {
    const {
        GETRequest,
        POSTRequest,
        PUTRequest
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
    const initColegio = {
        id: 0,
        nome: "",
        horario: "",
        contatos: [initContato],
        endereco: initEndereco
    }
    const [colegio, setColegio] = useState<IColegio>(initColegio)
    const [endereco, setEndereco] = useState<IFormEndereco>(initEndereco)
    const [contato, setContato] = useState<IFormContato>(initContato)
    const [contatos, setContatos] = useState<IFormContato[]>([initContato])

    const buscarColegioPorId = async (id: number) => {
        const response = await GETRequest<IColegio>(`/colegio/${id}`)
        if (response) {
            setColegio(response)
        }

        console.log("=====", response)
    }

    useEffect(() => {
        setColegio(() => {
            return {
                ...colegio,
                endereco: endereco
            }
        })
    }, [endereco])

    useEffect(() => {
        setColegio(() => {
            return {
                ...colegio,
                contatos: contatos
            }
        })
    }, [contatos])

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const id = params.get("id")
        if (id) {
            buscarColegioPorId(Number.parseInt(id));
        }
    }, [])

    const registrar = () => {
        console.log(colegio)
        if (colegio.id > 0) {
            atualizar(colegio.id);
        } else {

            salvar();
        }
    }
    const atualizar = async (id: number) => {

        const colegioUpdate = {
            ...colegio,
        }
        const response = await PUTRequest<IColegio>(`/colegio/${id}`, colegioUpdate)
        if (response) {
            setColegio(response)
        }

    }
    const salvar = async () => {
        const response = await POSTRequest<IColegio>("/colegio", colegio)
        if (response) {
            setColegio(response)
        }
    }

    return {

        data: {
            colegio,
            contato,
            contatos
        },
        action: {
            setColegio,
            registrar,
            setEndereco,
            setContato,
            setContatos
        }
    }

}

