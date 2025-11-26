import { IconeExcluir } from '../../../icon/index';
import { useApi } from "../api"
import { DataArraySharp } from '@mui/icons-material';
import { IColegio } from '@/layout/components/colegio/formColegio/hooks/useFormColegio';

export const useApiColegio = () => {
    const {
        GETRequest,
        PUTRequest,
        POSTRequest,
    } = useApi()

    const listarColegio = async () => {
        const { data } = await GETRequest<IColegio[]>("/colegio")
        return data
    }

    const atualizarColegio = async (id: number, colegio: IColegio) => {
        const { data } = await PUTRequest<IColegio>(`/colegio/${id}`, colegio)
        return data
    }

    const salvarColegio = async (colegio: IColegio) => {
        const { data } = await POSTRequest<IColegio>("/colegio", colegio)
        return data
    }

    const buscarColegioPorId = async (id: number) => {
        const { data } = await GETRequest<IColegio>(`/colegio/${id}`)
        return data
    }

    return {
        listarColegio,
        atualizarColegio,
        salvarColegio,
        buscarColegioPorId
    }
} 