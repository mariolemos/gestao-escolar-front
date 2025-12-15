export const utils = () => {
    const isValidation = (data: Object, required: string[]) => {
        let valido = true
        Object.entries(data).map(([campo, value]) => {
            if (required.includes(campo)) {
                valido = value.length != 0
            }
        })
        return valido

    }
    return {
        isValidation
    }
}