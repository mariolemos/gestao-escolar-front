import { api } from "@/application/api/api"
import { useEffect, useState } from "react"



interface IColegio   {
    id: number
    nome: string
    horario: string
    alunos: string
    contatos: string
    endereco: string
}

export const useFormColegio = () => {
    const {
        GETRequest,
        POSTRequest,
        PUTRequest
    } = api()  

     const initColegio = {
        id: 0,
        nome: "",
        horario: "",
        alunos: "",
        contatos: "",
        endereco: ""
    }
    
    const [colegio, setColegio] = useState<IColegio>(initColegio)
    
    const buscarColegioPorId = async (id: number) => {
        const response = await GETRequest<IColegio>(`/colegio/${id}`)
        if (response) {
            setColegio(response)
        }

        console.log("=====", response)
    }

    useEffect(() => {
            const params = new URLSearchParams(window.location.search)
            const id = params.get("id")
            if (id) {
                buscarColegioPorId(Number.parseInt(id));
            }
        }, [])

        const registrar =  () => {
        if(colegio.id > 0) {
            atualizar(colegio.id);
        }else {

            salvar();
        }               
    }
    const atualizar =  async (id: number) => {

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
            registrar
        }
    }

}

