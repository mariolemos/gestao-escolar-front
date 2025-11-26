import { IResponsavel } from "@/layout/components/responsavel/hooks/useResponsavel"
import { useApi } from "../api"

export const useApiResposnavel = () => {
    const {
        GETRequest,
        POSTRequest,
        PUTRequest,
    } = useApi()


    const listarResponsavel = async () => {
        const { data } = await GETRequest<IResponsavel[]>("/responsavel")
        return data

    }

    const atualizarResponsavel = async (id: number, responsavel: IResponsavel) => {
        const { data } = await PUTRequest<IResponsavel>(`/responsavel/${id}`, responsavel)
        return data

    }

    const salvarResponsavel = async (responsavel: IResponsavel) => {
        const { data } = await POSTRequest<IResponsavel>("/responsavel", responsavel)
        return data
    }

    const buscarResponsavelPorId = async (id: number) => {
        const { data } = await GETRequest<IResponsavel>(`/responsavel/${id}`)
        return data        
    }

    return {
        listarResponsavel,
        atualizarResponsavel,
        salvarResponsavel,
        buscarResponsavelPorId
    }
}