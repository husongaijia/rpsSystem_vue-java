import * as axios from 'axios';

export const post = async(url, postData) => {
    const baseUrl = 'http://localhost:8080/api'
    const returnVal = await axios.post(`${baseUrl}/${url}`, postData)
    return returnVal.data
}