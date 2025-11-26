
import { IAluno } from "@/layout/components/aluno/formAluno/hooks/useFormAluno"
import { useApi } from "../api"

export const useApiAluno = () => {

    const {
        GETRequest,
        PUTRequest,
        POSTRequest
    } = useApi()

    const listarAluno = async () => {
        const { data } = await GETRequest<IAluno[]>("/aluno")
        return data
    }

    const atualizarAluno = async (id: number, aluno: IAluno) => {
        const { data } = await PUTRequest<IAluno>(`/aluno/${id}`, aluno)
        return data
    }

    const salvarAluno = async (aluno: IAluno) => {
        const { data } = await POSTRequest<IAluno>("/aluno", aluno)
        return data
    }

    const buscarAlunoPorId = async (id: number) => {
        const { data } = await GETRequest<IAluno>(`/aluno/${id}`)
        return data
    }

    return {
        listarAluno,
        atualizarAluno,
        salvarAluno,
        buscarAlunoPorId
    }

}