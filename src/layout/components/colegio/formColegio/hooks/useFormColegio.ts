import { api } from "@/application/api/api"
import { IFormEndereco } from "@/components/endereco/form"
import { endianness } from "os"
import { useEffect, useState } from "react"



interface IColegio {
    id: number
    nome: string
    horario: string
    alunos: string
    contatos: string
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
    const initColegio = {
        id: 0,
        nome: "",
        horario: "",
        alunos: "",
        contatos: "",
        endereco: initEndereco
    }

    const [colegio, setColegio] = useState<IColegio>(initColegio)
    const [endereco, setEndereco] = useState<IFormEndereco>(initEndereco)

    const buscarColegioPorId = async (id: number) => {
        const response = await GETRequest<IColegio>(`/colegio/${id}`)
        if (response) {
            setColegio(response)
        }

        console.log("=====", response)
    }

       useEffect(() => {     
        setColegio(() => {
            return{
                ...colegio,
                endereco:endereco
            }
        })
    }, [endereco])

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const id = params.get("id")
        if (id) {
            buscarColegioPorId(Number.parseInt(id));
        }
    }, [])

    const registrar = () => {
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
        },
        action: {
            setColegio,
            registrar,
            setEndereco
        }
    }

}

