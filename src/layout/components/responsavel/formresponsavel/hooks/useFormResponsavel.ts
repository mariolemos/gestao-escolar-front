import { useApi  } from "@/application/api/api"
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
    } = useApi ()

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
        contatos: []
    }

    const [responsavel, setResponsavel] = useState<IResponsavel>(initResponsavel)
    const [contato, setContato] = useState<IFormContato>(initContato)
    const [endereco, setEndereco] = useState<IFormEndereco>(initEndereco)
    const [contatos, setContatos] = useState<IFormContato[]>([])

    const buscarResponsavelPorId = async (id: number) => {
        const {data} = await GETRequest<IResponsavel>(`/responsavel/${id}`)
        if (data) {
            setResponsavel(data)
            setEndereco(data.endereco)
        }

        console.log("=====", data)
    }
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const id = params.get("id")
        if (id) {
            buscarResponsavelPorId(Number.parseInt(id));
        }
    }, [])
     useEffect(() => {
            setResponsavel(() => {
                return {
                    ...responsavel,
                    endereco: endereco
                }
            })
        }, [endereco])
    
        useEffect(() => {
            setResponsavel(() => {
                return {
                    ...responsavel,
                    contatos: contatos
                }
            })
        }, [contatos])

    const registrar = () => {
        
        removePropriedadeExcluirContatos()

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
        const {data} = await PUTRequest<IResponsavel>(`/responsavel/${id}`, responsavelUpdate)
        if (data) {
            setResponsavel(data)
        }

    }

    const salvar = async () => {
        

        const {data} = await POSTRequest<IResponsavel>("/responsavel", responsavel)
        if (data) {
            setResponsavel(data)
        }
    }

    const removePropriedadeExcluirContatos = () => {

        const contatosPropriedadeExcluir = contatos.map(({ excluir, ...resto }) => resto);

        responsavel.contatos = contatosPropriedadeExcluir;

        console.log(responsavel.contatos)
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