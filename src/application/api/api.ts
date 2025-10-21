import BasicModal from '@/layout/components/modal/BasicModal';
interface IErroResponse {
    mensage: string
    mensagens: Array<string>
    status: number
}
export const api = () => {

    const responseData = (result: any) => {
        if (result.status && result.status > 300) {
            console.log(result)
            responseErro({
                mensage: result.mensage,
                mensagens: result.mensagens,
                status: result.status
            })
        } else {
            return result
        }
    }


    const responseErro = (erro: IErroResponse) => {
        // console.error(erro)
        // console.error(erro.mensagens)
        // if (erro.mensagens.length > 0) {
        //     let mensageList = ""
        //     erro.mensagens.forEach((msg: string) => {
        //         mensageList = `${mensageList} / ${msg}`
        //     });
        //     BasicModal({ mensage: mensageList })
        // } else {
        //     BasicModal({ mensage: erro?.mensage })
        // }
        BasicModal({ mensage: erro?.mensage })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const GETRequest = async <T>(path: string): Promise<T | null> => {
        try {
            const response = await fetch(`${baseUrl}${path}`, {
                method: "GET"
            })

            const result = await response.json()
            return responseData(result)
        } catch (erro: any | IErroResponse) {
            responseErro(erro)
        }
        return null
    }

    const POSTRequest = async <T>(path: string, data: T): Promise<T | null> => {
        try {
            const response = await fetch(`${baseUrl}${path}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const result = await response.json()
            return  responseData(result)
        } catch (erro: any | IErroResponse) {
            responseErro(erro)
        }
        return null
    }

    const PUTRequest = async <T>(path: string, data: T): Promise<T | null> => {
        try {
            const response = await fetch(`${baseUrl}${path}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
             return responseData(result)

        } catch (erro: any | IErroResponse) {
            responseErro(erro)
        }
        return null
    }


    return {
        GETRequest,
        POSTRequest,
        PUTRequest
    }
}