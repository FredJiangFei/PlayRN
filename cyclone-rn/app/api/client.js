import { create } from 'apisauce'

const apiClient = create({
    baseURL: 'http://localhost:9025/api'
})

export default apiClient