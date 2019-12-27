import axios, { AxiosResponse } from 'axios'

const authenticate = async (authURL: string, cst_id: string, custKey: string ) : Promise<any> => {
    
    const form : FormData = new FormData()

    form.append('cst_id', cst_id)
    form.append('custKey', custKey)

    const response : AxiosResponse = await axios.post(authURL, form)

    return response.data

}

export default authenticate