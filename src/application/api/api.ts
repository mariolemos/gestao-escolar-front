export const api = () => {

    const GETRequest = async <T>(path: string) : Promise<T | null> => {
        try {

            const response = await fetch(path, {
                method: "GET"
            })

            const result = await response.json()
            return result
        } catch (erro) {
            console.error(erro)
        }      
        return null
    }
    return {
        GETRequest
    }
}