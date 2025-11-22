import { useApi } from "@/application/api/api"
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
    } = useApi()

    const initEndereco = {
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cep: "",
        cidade: "",
        estado: "",
    }

    // const initContato = {
    //     contato: "",
    //     tipo: 0
    // }
    const initColegio = {
        id: 0,
        nome: "",
        horario: "",
        contatos: [],
        endereco: initEndereco
    }
    const [colegio, setColegio] = useState<IColegio>(initColegio)
    const [endereco, setEndereco] = useState<IFormEndereco>(initEndereco)
    const [contato, setContato] = useState<IFormContato>()
    const [contatos, setContatos] = useState<IFormContato[]>([])

    const buscarColegioPorId = async (id: number) => {
        const { data } = await GETRequest<IColegio>(`/colegio/${id}`)
        if (data) {
            setColegio(data)
            setEndereco(data.endereco)
        }

        console.log("=====", data)
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
        const { data } = await PUTRequest<IColegio>(`/colegio/${id}`, colegioUpdate)
        if (data) {
            setColegio(data)
        }

    }
    const salvar = async () => {

        removePropriedadeExcluirContatos()

        const { data } = await POSTRequest<IColegio>("/colegio", colegio)
        if (data) {
            setColegio(data)
        }
    }

    const removePropriedadeExcluirContatos = () => {

        const contatosPropriedadeExcluir = contatos.map(({ excluir, ...resto }) => resto);

        colegio.contatos = contatosPropriedadeExcluir;

        console.log(colegio.contatos)
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

